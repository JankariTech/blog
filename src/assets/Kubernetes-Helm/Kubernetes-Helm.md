---
title: Helm Hands-On - A Practical Guide to Packaging Kubernetes Apps
authorName: Prajwol Amatya
authorAvatar: https://1.gravatar.com/avatar/de64e53c0e2cb393dd0d14ffdd53058ee9c607b35e366dd392425bd1b95a034c?size=256
authorLink: https://github.com/prajwolamatya
createdAt: Oct 16, 2026
tags: kubernetes, k8s, helm
banner: https://blog.jankaritech.com/src/assets/Kubernetes-Helm/images/Kubernetes-Helm-banner.png
---

**Follow-up to:** [Kubernetes – A Beginner’s Guide to Container Orchestration](https://blog.jankaritech.com/#/blog/Kubernetes%20-%20A%20Beginner's%20Guide%20to%20Container%20Orchestration)

### Introduction

When you start working with Kubernetes, writing YAML files for Deployments, Services, ConfigMaps, and other resources is a good way to learn how applications are deployed. However, as your application grows or you need to deploy it across multiple environments, managing all these files manually becomes increasingly difficult. You will run into problems like:

- You have many YAML files that look almost the same across environments
- Changing a simple value (image tag, number of replicas, database password, etc.) forces you to edit multiple files
- There is no clean way to version an entire application or roll back to a previous working state
- Sharing the same application with teammates becomes messy

**Helm** was created to solve exactly these problems.

Helm is the package manager for Kubernetes. It allows you to package all the Kubernetes resources that make up an application into a single reusable unit called a **Chart**. You can then install, upgrade, configure, and roll back that application with simple commands.

In this post we will:
- Understand the core ideas behind Helm
- Turn a realistic demo application into a Helm chart
- Learn how to configure, install, upgrade, and roll back releases
- See practical commands and best practices

### What is Helm?

Helm packages Kubernetes manifests (Deployments, Services, ConfigMaps, Secrets, etc.) into a **Chart**.

When you install a Chart, Helm creates a **Release** — a running instance of that Chart in your cluster.
You can have multiple Releases of the same Chart (for example one for development and one for production) with different configuration.

**Main benefits of Helm:**

- **One command** installs an entire application
- **Centralized configuration** through a `values.yaml` file
- **Easy upgrades and rollbacks**
- **Reusability** — the same Chart can be used across environments and teams
- **Versioning** — every change to the Chart can be versioned

Think of Helm as `apt`, `yum`, or `brew`, but for Kubernetes applications.


### Core Concepts Explained

| Concept        | What it means                                                             | Real-world analogy                   |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------ |
| **Chart**      | A folder that contains all the Kubernetes YAML templates + default values | A software package (`.deb` / `.rpm`) |
| **Release**    | A running instance of a Chart in a cluster                                | An installed application             |
| **Values**     | Configuration that controls how the templates are rendered                | Settings / preferences               |
| **Template**   | A Kubernetes YAML file that contains placeholders (`{{ .Values.xxx }}`)   | A form with blank fields             |
| **Repository** | A place where Charts are stored and shared                                | App Store / Docker Hub               |


### Prerequisites

```bash
# Start Minikube
minikube start

# Enable the addons we need for Ingress and HPA
minikube addons enable ingress
minikube addons enable metrics-server

# Verify the addons are running
kubectl get pods -n ingress-nginx
kubectl get pods -n kube-system | grep metrics-server
```

Also install Helm if you haven’t already:

```bash
# Linux
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# macOS
brew install helm

helm version
```

### 1. Create the Chart

```bash
helm create demo-app
cd demo-app
```

Your chart structure should look like this:

```
demo-app/
├── Chart.yaml
├── values.yaml
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── serviceaccount.yaml
│   ├── ingress.yaml
│   ├── hpa.yaml
│   ├── httproute.yaml
│   ├── NOTES.txt
│   ├── _helpers.tpl
│   └── tests/
│       └── test-connection.yaml
└── charts/
```

### 2. Configure `values.yaml`

This is the heart of your chart. Users will mainly edit this file instead of touching the templates. Replace the entire content of `values.yaml` with the following:

```yaml
# Default values for demo-app
# This file controls almost everything in the chart.

replicaCount: 2

image:
  repository: nginx
  tag: "1.25"
  pullPolicy: IfNotPresent

imagePullSecrets: []
nameOverride: ""
fullnameOverride: "demo-app"   # Forces clean resource names

serviceAccount:
  # Specifies whether a service account should be created
  create: true
  # Annotations to add to the service account
  annotations: {}
  # The name of the service account to use.
  # If not set and create is true, a name is generated using the fullname template
  name: ""

podAnnotations: {}
podLabels: {}

podSecurityContext: {}
securityContext: {}

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  className: "nginx"
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
  hosts:
    - host: demo.local
      paths:
        - path: /
          pathType: Prefix
  tls: []

# Horizontal Pod Autoscaler
autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  # CPU utilization is measured as a percentage of each pod's CPU request.
  targetCPUUtilizationPercentage: 50

# Gateway API HTTPRoute
httpRoute:
  enabled: false

resources:
  requests:
    # HPA utilization targets need CPU requests to calculate utilization.
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 200m
    memory: 256Mi

# Application specific configuration
app:
  name: "My Demo App"
  version: "1.0.0"
  environment: "development"
  logLevel: "info"

persistence:
  size: 1Gi
  accessMode: ReadWriteOnce

secret:
  dbPassword: "supersecretpassword"

nodeSelector: {}
tolerations: []
affinity: {}
```

### 3. Understanding Every Template File

#### 3.1 `templates/serviceaccount.yaml`

**What this file does:**
Creates a Kubernetes ServiceAccount that the application pods will use.

**Why it is useful:**
Even simple applications benefit from having their own identity. When your application needs special permissions, you can grant them to this ServiceAccount using Role-Based Access Control.

```yaml
{{- if .Values.serviceAccount.create -}}
apiVersion: v1
kind: ServiceAccount
metadata:
  name: {{ include "demo-app.serviceAccountName" . }}
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
  {{- with .Values.serviceAccount.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
automountServiceAccountToken: {{ .Values.serviceAccount.automount }}
{{- end }}
```

#### 3.2 `templates/configmap.yaml`

Create a file `configmap.yaml` inside templates directory.

**What this file does:**
Stores non-sensitive configuration and a custom HTML page that nginx will serve.

**What is happening:**
- Application settings (`APP_NAME`, `APP_VERSION`, etc.) are stored as ConfigMap keys.
- A complete `index.html` is also stored so the browser shows a meaningful page instead of the default nginx page.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ include "demo-app.fullname" . }}-config
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
data:
  # These keys can be consumed by containers that reference them as environment variables.
  APP_NAME: {{ .Values.app.name | quote }}
  APP_VERSION: {{ .Values.app.version | quote }}
  LOG_LEVEL: {{ .Values.app.logLevel | quote }}
  ENVIRONMENT: {{ .Values.app.environment | quote }}

  # The Deployment mounts this rendered page into nginx's document root.
  index.html: |
    <!DOCTYPE html>
    <html>
    <head>
      <title>{{ .Values.app.name }}</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 700px; margin: 50px auto; padding: 20px; }
        h1 { color: #326ce5; }
        .info { background: #f5f5f5; padding: 15px; border-radius: 8px; }
      </style>
    </head>
    <body>
      <h1>Hello from {{ .Values.app.name }}</h1>
      <div class="info">
        <p><strong>Version:</strong> {{ .Values.app.version }}</p>
        <p><strong>Environment:</strong> {{ .Values.app.environment }}</p>
        <p><strong>Log Level:</strong> {{ .Values.app.logLevel }}</p>
        <p>This page is served by a complete Helm chart (Ingress + HPA + HTTPRoute).</p>
      </div>
    </body>
    </html>
```

#### 3.3 `templates/secret.yaml`

Create a file `secret.yaml` inside templates directory.

**What this file does:**
Stores sensitive data (in this case a database password).

**What is happening:**
The password from `values.yaml` is base64-encoded by Helm (`b64enc`) and stored in a Kubernetes Secret. The Deployment will later inject this value as an environment variable.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: {{ include "demo-app.fullname" . }}-secret
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
type: Opaque
data:
  db-password: {{ .Values.secret.dbPassword | b64enc | quote }}
```

#### 3.4 `templates/pvc.yaml`

Create a file `pvc.yaml` inside templates directory.

**What this file does:**
Requests persistent storage from the cluster.

**What is happening:**
A PersistentVolumeClaim is created. Kubernetes binds it to a compatible PersistentVolume, often provisioned dynamically by the cluster's default StorageClass. Without a matching volume or StorageClass, the claim remains Pending. The Deployment mounts this volume at `/data`.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: {{ include "demo-app.fullname" . }}-pvc
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
spec:
  accessModes:
    - {{ .Values.persistence.accessMode }}
  resources:
    requests:
      storage: {{ .Values.persistence.size }}
```

#### 3.5 `templates/deployment.yaml`

**What this file does:**
This is the most important file. It defines the pods that actually run your application.

**What is happening:**
- Creates the desired number of replicas (or lets HPA control it).
- Uses the ServiceAccount we created.
- Injects values from the ConfigMap and Secret as environment variables.
- Mounts the custom HTML page and the persistent volume.
- Sets CPU and memory requests/limits (required for HPA to work).

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "demo-app.fullname" . }}
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
spec:
  # Let the HPA manage replicas when autoscaling is enabled.
  {{- if not .Values.autoscaling.enabled }}
  replicas: {{ .Values.replicaCount }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "demo-app.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      {{- with .Values.podAnnotations }}
      annotations:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      labels:
        {{- include "demo-app.selectorLabels" . | nindent 8 }}
        {{- with .Values.podLabels }}
        {{- toYaml . | nindent 8 }}
        {{- end }}
    spec:
      {{- with .Values.imagePullSecrets }}
      imagePullSecrets:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      serviceAccountName: {{ include "demo-app.serviceAccountName" . }}
      securityContext:
        {{- toYaml .Values.podSecurityContext | nindent 8 }}
      containers:
        - name: nginx
          securityContext:
            {{- toYaml .Values.securityContext | nindent 12 }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
          env:
            - name: APP_NAME
              valueFrom:
                configMapKeyRef:
                  name: {{ include "demo-app.fullname" . }}-config
                  key: APP_NAME
            - name: DB_PASSWORD
              valueFrom:
                # Reference the Secret instead of embedding its value in the pod spec.
                secretKeyRef:
                  name: {{ include "demo-app.fullname" . }}-secret
                  key: db-password
          volumeMounts:
            - name: html
              mountPath: /usr/share/nginx/html
            - name: data
              mountPath: /data
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
      volumes:
        - name: html
          configMap:
            # Mount only the generated page into nginx's document root.
            name: {{ include "demo-app.fullname" . }}-config
            items:
              - key: index.html
                path: index.html
        - name: data
          persistentVolumeClaim:
            # Reuse the claim created by templates/pvc.yaml.
            claimName: {{ include "demo-app.fullname" . }}-pvc
      {{- with .Values.nodeSelector }}
      nodeSelector:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.affinity }}
      affinity:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.tolerations }}
      tolerations:
        {{- toYaml . | nindent 8 }}
      {{- end }}
```

#### 3.6 `templates/service.yaml`

**What this file does:**
Creates a stable network endpoint for the pods.

**What is happening:**
A ClusterIP Service is created. Ingress and HTTPRoute will send traffic to this Service. The selector matches the labels used by the Deployment.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: {{ include "demo-app.fullname" . }}
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: http
      protocol: TCP
      name: http
  selector:
    {{- include "demo-app.selectorLabels" . | nindent 4 }}
```

#### 3.7 `templates/ingress.yaml`

**What this file does:**
Exposes the application outside the cluster using the classic Ingress resource.

**What is happening:**
- Only created when `ingress.enabled` is `true`.
- Uses the nginx Ingress controller (the one we enabled with Minikube).
- Routes traffic from `demo.local` to our Service.

```yaml
{{- if .Values.ingress.enabled -}}
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: {{ include "demo-app.fullname" . }}
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  # The Ingress controller interprets these annotations.
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- with .Values.ingress.className }}
  ingressClassName: {{ . }}
  {{- end }}
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress.hosts }}
    # Match requests for this host and route them to the chart's Service.
    - host: {{ .host | quote }}
      http:
        paths:
          {{- range .paths }}
          - path: {{ .path }}
            {{- with .pathType }}
            pathType: {{ . }}
            {{- end }}
            backend:
              service:
                name: {{ include "demo-app.fullname" $ }}
                port:
                  number: {{ $.Values.service.port }}
          {{- end }}
    {{- end }}
{{- end }}
```

#### 3.8 `templates/hpa.yaml`

**What this file does:**
Automatically scales the number of pods up and down based on CPU usage.

**What is happening:**
- Only created when `autoscaling.enabled` is `true`.
- Watches the CPU utilization of the pods.
- Scales between `minReplicas` and `maxReplicas`.

```yaml
{{- if .Values.autoscaling.enabled }}
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: {{ include "demo-app.fullname" . }}
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: {{ include "demo-app.fullname" . }}
  minReplicas: {{ .Values.autoscaling.minReplicas }}
  maxReplicas: {{ .Values.autoscaling.maxReplicas }}
  metrics:
    {{- if .Values.autoscaling.targetCPUUtilizationPercentage }}
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          # Percentage of the CPU request specified on each pod.
          averageUtilization: {{ .Values.autoscaling.targetCPUUtilizationPercentage }}
    {{- end }}
    {{- if .Values.autoscaling.targetMemoryUtilizationPercentage }}
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: {{ .Values.autoscaling.targetMemoryUtilizationPercentage }}
    {{- end }}
{{- end }}
```

#### 3.9 `templates/NOTES.txt`

**What this file does:**
Prints helpful information in the terminal after you run `helm install` or `helm upgrade`.

You can customize it. A simple useful version is:

```text
========================================================
  Thank you for installing {{ .Chart.Name }}!

  Your release is named: {{ .Release.Name }}
  Namespace:             {{ .Release.Namespace }}

  Application URL:
  {{- if .Values.ingress.enabled }}
    http://{{ (index .Values.ingress.hosts 0).host }}
  {{- else }}
    kubectl port-forward svc/{{ include "demo-app.fullname" . }} 8080:80 -n {{ .Release.Namespace }}
    Then open http://localhost:8080
  {{- end }}

  To see all resources created by this release:
    kubectl get all,cm,secret,pvc,ingress,hpa -n {{ .Release.Namespace }}
========================================================
```

### 4. Install the Chart

```bash
# Create a namespace
kubectl create namespace demo

# Install the chart
helm install demo-app . -n demo
```

Verify that everything was created:

```bash
kubectl get all,cm,secret,pvc,ingress,hpa -n demo
```

You should see:
- Deployment + ReplicaSet + Pods
- Service
- ConfigMap + Secret + PVC
- ServiceAccount
- Ingress
- HorizontalPodAutoscaler

### 5. Access the Application via Ingress

Add an entry to your `/etc/hosts` file so that `demo.local` points to Minikube:

```bash
echo "$(minikube ip) demo.local" | sudo tee -a /etc/hosts
```

Now open your browser:

```
http://demo.local
```

You should see the custom page served by the application.

(Alternatively you can use port-forward):

```bash
kubectl port-forward svc/demo-app 8080:80 -n demo
```

### 6. Test Autoscaling (HPA)

Generate some CPU load so the Horizontal Pod Autoscaler can react:

```bash
# Start a temporary load-generator pod
kubectl run -i --tty load-generator --rm --image=busybox --restart=Never -n demo -- /bin/sh
```

Inside the pod run:

```bash
while true; do wget -q -O- http://demo-app; done
```

In another terminal watch the HPA and the pods:

```bash
kubectl get hpa -n demo --watch
kubectl get pods -n demo --watch
```

When CPU usage rises, you will see the number of replicas increase.

### 7. Upgrade and Rollback

#### Example 1: Change environment + adjust HPA

```bash
# Change the environment and set a new minimum number of replicas
helm upgrade demo-app . -n demo \
  --set app.environment=staging \
  --set autoscaling.minReplicas=4 \
  --set autoscaling.maxReplicas=10
```

#### Example 2: Temporarily disable HPA and set a fixed number of replicas

```bash
helm upgrade demo-app . -n demo \
  --set autoscaling.enabled=false \
  --set replicaCount=4 \
  --set app.environment=staging
```

#### Example 3: Edit values.yaml and upgrade

You can also change any values directly in values.yaml and then run:

```bash
helm upgrade demo-app . -n demo
```

**What the helm upgrade command does:**
Helm recalculates all the manifests with the new values and performs a rolling update of the Deployment (and updates the HPA, Ingress, ConfigMap, etc.).

#### View history and rollback

```bash
# See all revisions of this release
helm history demo-app -n demo

# Roll back to revision 1
helm rollback demo-app 1 -n demo
```

After a rollback, Helm restores the exact configuration (values + templates) that was used in that previous revision.

### 8. Useful Helm Commands

```bash
# List releases
helm list -n demo

# See all values currently used by the release
helm get values demo-app -n demo --all

# See the final rendered Kubernetes manifests
helm get manifest demo-app -n demo

# Upgrade after changing values.yaml
helm upgrade demo-app . -n demo

# View release history
helm history demo-app -n demo

# Rollback to a previous revision
helm rollback demo-app 1 -n demo

# Run the built-in test
helm test demo-app -n demo

# Uninstall the release
helm uninstall demo-app -n demo
```

### Best Practices

1. Keep all configurable values in `values.yaml`.
2. Use `fullnameOverride` when you want clean resource names.
3. Always set resource requests when you enable HPA.
4. Never commit real production secrets to Git.
5. Use `helm template` or `--dry-run` while developing.
