---
title: Kubernetes Helm for Beginners
authorName: Prajwol Amatya
authorAvatar:
authorLink:
createdAt: Oct 15, 2026
tags: kubernetes, k8s, helm
banner:
---

**Follow-up to:** [Kubernetes – A Beginner’s Guide to Container Orchestration](https://blog.jankaritech.com/#/blog/Kubernetes%20-%20A%20Beginner's%20Guide%20to%20Container%20Orchestration)


### Introduction

In the previous post you learned how to deploy an application on Kubernetes using plain YAML files. You created a Namespace, ConfigMap, Secret, PersistentVolumeClaim, Deployment, and Service — all by hand.

That approach is excellent for learning the fundamentals.
However, as soon as you start working with real applications, you quickly run into these problems:

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

By the end you will be able to stop copy-pasting YAML and start managing applications the way most teams do in production.

---

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

---

### Core Concepts Explained

| Concept        | What it means                                                                 | Real-world analogy                  |
|----------------|-------------------------------------------------------------------------------|-------------------------------------|
| **Chart**      | A folder that contains all the Kubernetes YAML templates + default values    | A software package (`.deb` / `.rpm`) |
| **Release**    | A running instance of a Chart in a cluster                                   | An installed application            |
| **Values**     | Configuration that controls how the templates are rendered                   | Settings / preferences              |
| **Template**   | A Kubernetes YAML file that contains placeholders (`{{ .Values.xxx }}`)      | A form with blank fields            |
| **Repository** | A place where Charts are stored and shared                                   | App Store / Docker Hub              |

---

### Prerequisites

You should already have:
- Basic understanding of Deployments, Services, ConfigMaps, Secrets, and PVCs from the previous post
- `kubectl` installed

Make sure your local Kubernetes cluster is running:

```bash
# Start Minikube (required if it is not already running)
minikube start

# Verify that the cluster is ready
kubectl cluster-info
kubectl get nodes
```

---

### 1. Install Helm

```bash
# macOS
brew install helm

# Linux
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Verify installation
helm version
```

You should see something like `version.BuildInfo{Version:"v3.x.x", ...}`.

---

### 2. Our Demo Application

Instead of a plain nginx container, we will deploy a slightly more realistic application that:

- Serves a simple web page
- Displays configuration values coming from a ConfigMap
- Uses a Secret for a sensitive value
- Writes data to a persistent volume

We will still use the official `nginx` image for simplicity, but we will customize it heavily so you can clearly see ConfigMaps, Secrets, and volumes in action.

The final application will show a page like:

```
Hello from My Demo App (v1.0.0)
Environment: development
Log Level: info
```

---

### 3. Create the Helm Chart

```bash
# Create a new chart
helm create demo-app
cd demo-app
```

Helm generates a starter structure. Newer versions of Helm may also create extra files that we don’t need for this beginner example. Let’s clean them up:

```bash
# Remove files we don’t need
rm templates/hpa.yaml
rm templates/ingress.yaml
rm templates/serviceaccount.yaml
rm templates/NOTES.txt
rm templates/httproute.yaml
rm -rf templates/tests
```

Your chart should now look like this:

```
demo-app/
├── Chart.yaml
├── values.yaml
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── _helpers.tpl
└── charts/
```

---

### 4. Understanding Chart.yaml

Open `Chart.yaml`. This file contains metadata about your chart:

```yaml
apiVersion: v2
name: demo-app
description: A Helm chart for Kubernetes
type: application
version: 0.1.0          # Version of the chart itself
appVersion: "1.0.0"     # Version of the application inside the chart
```

- `version` → changes when you modify the chart
- `appVersion` → usually matches the version of the software you are packaging

---

### 5. Create the Templates

Below you will find every template file we need, along with a clear explanation of **what it does** and **how it contributes** to running the application.

#### `templates/configmap.yaml`

**What this file does:**
Creates a ConfigMap that stores non-sensitive configuration and also a custom HTML page.

**How it helps the app:**
- Provides the application name, version, environment, and log level as environment variables.
- Mounts a custom `index.html` into the nginx container so the browser shows a meaningful page instead of the default nginx welcome page.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ include "demo-app.fullname" . }}-config
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
data:
  APP_NAME: {{ .Values.app.name | quote }}
  APP_VERSION: {{ .Values.app.version | quote }}
  LOG_LEVEL: {{ .Values.app.logLevel | quote }}
  ENVIRONMENT: {{ .Values.app.environment | quote }}

  # Custom index page that shows the configuration
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
        <p>This page is served by a Helm-packaged application.</p>
      </div>
    </body>
    </html>
```

#### `templates/secret.yaml`

**What this file does:**
Creates a Kubernetes Secret that stores sensitive data (in this case a database password).

**How it helps the app:**
The password is injected into the container as an environment variable. This keeps sensitive values out of the container image and out of plain ConfigMaps.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: {{ include "demo-app.fullname" . }}-secret
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
type: Opaque
data:
  # Helm will base64-encode this value for us
  db-password: {{ .Values.secret.dbPassword | b64enc | quote }}
```

#### `templates/pvc.yaml`

**What this file does:**
Creates a PersistentVolumeClaim (PVC) that requests storage from the cluster.

**How it helps the app:**
Even though our simple nginx demo does not write a lot of data, the PVC demonstrates how you give an application persistent storage that survives pod restarts.

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

#### `templates/deployment.yaml`

**What this file does:**
Defines the Deployment that actually runs the application pods.

**How it helps the app:**
- Creates the desired number of nginx pods
- Injects configuration from the ConfigMap and Secret
- Mounts the custom HTML page and the persistent volume
- Sets resource requests and limits

This is the most important file — without it, nothing would run.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "demo-app.fullname" . }}
  labels:
    {{- include "demo-app.labels" . | nindent 4 }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      {{- include "demo-app.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      labels:
        {{- include "demo-app.selectorLabels" . | nindent 8 }}
    spec:
      containers:
        - name: nginx
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: 80
          env:
            - name: APP_NAME
              valueFrom:
                configMapKeyRef:
                  name: {{ include "demo-app.fullname" . }}-config
                  key: APP_NAME
            - name: DB_PASSWORD
              valueFrom:
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
            name: {{ include "demo-app.fullname" . }}-config
            items:
              - key: index.html
                path: index.html
        - name: data
          persistentVolumeClaim:
            claimName: {{ include "demo-app.fullname" . }}-pvc
```

#### `templates/service.yaml`

**What this file does:**
Creates a Service that gives the pods a stable network endpoint.

**How it helps the app:**
Pods can be created and destroyed at any time. The Service provides a consistent IP and DNS name so other components (or you via port-forward) can always reach the application.

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

---

### 6. Configure `values.yaml`

This is the heart of your chart. Users will mainly edit this file instead of touching the templates.

```yaml
# Override the name that will be used for all resources
fullnameOverride: "demo-app"

# Number of pod replicas
replicaCount: 2

image:
  repository: nginx
  tag: "1.25"
  pullPolicy: IfNotPresent

# Application specific configuration
app:
  name: "My Demo App"
  version: "1.0.0"
  environment: "development"
  logLevel: "info"

service:
  type: ClusterIP
  port: 80

# Persistent storage
persistence:
  size: 1Gi
  accessMode: ReadWriteOnce

# Sensitive values (in real projects, avoid committing real secrets)
secret:
  dbPassword: "supersecretpassword"

# Resource requests and limits
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 200m
    memory: 256Mi
```

---

### 7. Install the Application

```bash
# Create a dedicated namespace (good practice)
kubectl create namespace demo

# Install the chart.
# The "." means "use the current directory as the chart".
# "my-demo" is the name of the Release.
helm install demo-app . -n demo
```

**What this command does:**
Helm reads all the templates, replaces the placeholders with values from `values.yaml`, and creates all the Kubernetes resources (Deployment, Service, ConfigMap, Secret, PVC) in one go.

Verify that everything was created:

```bash
# List Helm releases in the demo namespace
helm list -n demo

# See all the Kubernetes resources that were created
kubectl get all,cm,secret,pvc -n demo
```

You should see:
- 2 nginx pods running
- A Service
- A ConfigMap containing the HTML page and configuration
- A Secret
- A PersistentVolumeClaim

---

### 8. Access the Application

```bash
# Forward local port 8080 to the Service port 80
kubectl port-forward svc/demo-app 8080:80 -n demo
```

Open your browser at [http://localhost:8080](http://localhost:8080).
You should see the custom page showing the application name, version, environment, and log level.

---

### 9. Upgrade and Rollback

Let’s change some values and upgrade the release:

```bash
# Increase the number of replicas and change the environment
helm upgrade demo-app . -n demo \
  --set replicaCount=4 \
  --set app.environment=staging
```

**What this command does:**
Helm recalculates the manifests with the new values and performs a rolling update of the Deployment.

You can also edit `values.yaml` manually and then run:

```bash
helm upgrade demo-app . -n demo
```

View the history of the release and roll back if needed:

```bash
# See all revisions of this release
helm history demo-app -n demo

# Roll back to revision 1
helm rollback demo-app 1 -n demo
```

---

### 10. Useful Helm Commands

```bash
# List all releases in all namespaces
helm list -A

# See the exact values that were used for a release
helm get values demo-app -n demo

# See the final Kubernetes manifests that Helm rendered
# (very useful when debugging)
helm get manifest demo-app -n demo

# Dry-run – shows what would be created without actually applying it
helm install demo-app . -n demo --dry-run --debug

# Uninstall the release (deletes all resources created by the chart)
helm uninstall demo-app -n demo

# Package the chart so you can share it or store it in a repository
helm package .
```

---

### Best Practices for Beginners

1. **Keep all configurable values in `values.yaml`** — never hard-code environment-specific values inside templates.
2. **Use `helm template` or `--dry-run`** while developing so you can see the final YAML before applying it.
3. **Version your charts** properly in `Chart.yaml`.
4. **Never commit real production secrets** into Git. Use `--set`, environment variables, or secret management tools later.
5. **Start simple** — avoid complex templating logic until you really need it.
6. **One chart per application** is a good rule when you are starting.

---

### What You Have Learned

You now know how to:
- Package a complete Kubernetes application as a Helm chart
- Make the application configurable through `values.yaml`
- Install, upgrade, and roll back releases with simple commands
- Use ConfigMaps, Secrets, and PersistentVolumes inside a Helm chart
- Understand what each YAML file contributes to the running application

This is the foundation that most real-world Kubernetes teams use every day.

---

### Next Steps

After this post, good topics to explore are:

- Using public charts from Bitnami or official repositories
- Creating different values files for dev / staging / production
- Adding an Ingress and Horizontal Pod Autoscaler
- Moving toward GitOps with Argo CD or Flux while still using Helm

---

