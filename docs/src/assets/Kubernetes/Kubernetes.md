---
title: Kubernetes - A Beginner's Guide to Container Orchestration
authorName: Ashim Shrestha
authorAvatar: https://avatars.githubusercontent.com/u/97830124?v=4
authorLink: https://github.com/Ashim-Stha
createdAt: February 13, 2026
tags: Kubernetes, DevOps, Containers
banner: https://blog.jankaritech.com/src/assets/Kubernetes/images/kubernetes-logo.webp
---

## Introduction

It is very difficult to manage containerized applications at a large scale. When a container crashes, you need another container to spin up automatically. When there is high traffic, you need more containers to handle it. When you want to release a new version of an application, you want a way to update the running application without any downtime.

**We can use Kubernetes to solve all of the above problems automatically.**

## What is Kubernetes?

Kubernetes, also known as **K8s**, is an open source container orchestration engine for automating the deployment, scaling, and management of containerized applications. The open source project is hosted by the Cloud Native Computing Foundation ([CNCF](https://www.cncf.io/)). It helps developers and operators to manage containerized applications effortlessly.

**Think of Kubernetes as an automated operations team for your containers.**

## Why Kubernetes?

Containers provide a great way for packaging applications, but in production, you need the features mentioned below:

- **Self-Healing**: It automatically starts another container if any container crashes.
- **Automatic Scaling**: It increases/decreases the number of containers based on traffic.
- **Rolling Updates**: It updates containers without stopping your service or with zero downtime.
- **Load Balancing**: It distributes traffic across healthy containers.
- **Storage Management**: It provides persistent data that can survive even after container restarts.
- **Infrastructure Abstraction**: It manages which container runs on which server.

You can use Kubernetes to get all the above-mentioned features automatically, allowing you to focus on developing your application instead of spending time and effort managing infrastructure.

## Quick Overview of Key Concepts

Before diving into the architecture, let's understand the basic building blocks of Kubernetes:

- **Cluster**: A group of connected machines where Kubernetes runs your applications.
- **Node**: A machine (physical or virtual) in the cluster that runs your applications.
- **Pod**: The smallest unit in Kubernetes. Usually a single container, but can contain multiple containers.
- **Deployment**: Manages multiple pods and ensures they're always running and healthy.

Don't worry if these concepts seem unclear right now. We'll discuss each one in detail in the next sections.

## Kubernetes Architecture

![Kubernetes Architecture](/src/assets/Kubernetes/images/kubernetes-cluster-architecture.svg)

A Kubernetes cluster has two components:

### Control Plane (Master Node)

The Master Node is responsible for managing the cluster and making decisions about it.

**Key Components:**

- **kube-apiserver**: It acts as the API gateway, allowing communication with the cluster.
- **etcd**: It is the database where all of the cluster configuration and state are stored.
- **kube-scheduler**: It is responsible for deciding which node should run which pod.
- **kube-controller-manager**: It runs controllers for watching the cluster state and making corrections whenever needed.

### Worker Nodes

Worker Nodes run your containerized applications.

**Key Components:**

- **Kubelet**: It ensures that desired containers are running and healthy.
- **Container Runtime**: It pulls container images and runs containers (Docker, containerd, etc.).
- **kube-proxy**: It is responsible for managing networking and handling the routing of services.

## Core Kubernetes Concepts

### Cluster

A **Cluster** is a group of machines (nodes) that are connected together to run containerized applications.

**View cluster information:**
```bash
kubectl cluster-info              # Get cluster details
kubectl get nodes                 # List all nodes
kubectl get nodes -o wide         # Get detailed node info
kubectl describe node <node-name> # Full node details
kubectl top nodes                 # View node resource usage
```

### Node

A **Node** is a physical or virtual machine that provides computing resources like CPU, memory, and storage for running pods.

**View nodes:**
```bash
kubectl get nodes
kubectl describe node <node-name>
```

### Pod

A **Pod** is the smallest deployable unit in Kubernetes. It usually contains one container, but it can contain tightly coupled containers.

**Key characteristics:**
- Containers in a pod share the same network namespace (same IP address)
- Containers in a pod can share storage volumes
- Pods are ephemeral (temporary), so when they are deleted, they're gone
- Pods are usually managed by Deployment

**YAML to create a Pod:**
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 80
```

### Namespace

A **Namespace** is a virtual cluster that helps to divide resources within a single cluster. It can separate environments like development, testing, and production.

**YAML to create a Namespace:**
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production
```

**Work with namespaces:**
```bash
kubectl create namespace my-app
kubectl apply -f deployment.yaml --namespace=my-app
kubectl apply -f deployment.yaml -n my-app  # shorthand
```

### Labels and Selectors

**Labels** are key-value pairs that are attached to Kubernetes objects that help organize and identify them. **Selectors** use these labels to locate and manage groups of related objects.

Controllers use labels to know which pods to manage. Services use labels to know which pods to route traffic to.

**YAML to apply labels and selectors:**
```yaml
# Applying labels
metadata:
  labels:
    app: nginx
    tier: frontend
    environment: production

# Selecting by label
selector:
  matchLabels:
    app: nginx
```

**Label commands:**
```bash
kubectl get pods -l app=nginx          # Get pods with label app=nginx
kubectl get pods --show-labels         # Show all labels
```

### Deployment

A **Deployment** manages a set of identical pods and ensures that the desired number of replicas are always running. It provides rolling updates, rollbacks, and automatic scaling.

**Key features:**
- It maintains the desired number of pod replicas
- It automatically replaces failed pods
- It enables rolling updates (update pods gradually without downtime)
- It supports rollback to the previous versions

**YAML to create a Deployment:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  namespace: production
spec:
  replicas: 3                    # Always maintain 3 replicas
  selector:
    matchLabels:
      app: nginx
  
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

**Deployment commands:**
```bash
kubectl apply -f deployment.yaml           # Create deployment
kubectl get deployments                    # List deployments
kubectl get deployments -n production      # In a specific namespace
kubectl describe deployment nginx-deployment

kubectl scale deployment nginx-deployment --replicas=5    # Scale to 5 replicas
kubectl set image deployment/nginx-deployment nginx=nginx:1.22  # Update image

kubectl rollout status deployment/nginx-deployment        # Check rollout progress
kubectl rollout undo deployment/nginx-deployment          # Rollback to previous
kubectl rollout history deployment/nginx-deployment       # View update history
```

### Service

A **Service** provides a stable endpoint for accessing a group of pods. Since pods are ephemeral (get created and destroyed), services provide a consistent way to reach your application.

**Services give you:**
- Stable IP address and DNS name
- Load balancing across pods
- Internal or external access

**YAML to create a ClusterIP Service:**

**ClusterIP** (default) - Only accessible within the cluster:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: ClusterIP
  selector:
    app: nginx            # Route to pods with label app: nginx
  ports:
    - port: 80            # Service port (internal)
      targetPort: 80      # Pod port (where traffic goes)
```

**YAML to create a NodePort Service:**

**NodePort** - Accessible from outside the cluster:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-nodeport
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30007     # External port (range: 30000-32767)
```

**Service commands:**
```bash
kubectl get services
kubectl get svc
kubectl describe service nginx-service
```

### ConfigMap

A **ConfigMap** stores non-sensitive configuration data as key-value pairs. It decouples configuration from container images, allowing you to change configuration without rebuilding images.

**YAML to create a ConfigMap:**
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: production
data:
  APP_ENV: "production"
  LOG_LEVEL: "info"
  DATABASE_HOST: "db.example.com"
  CACHE_TTL: "3600"
```

**ConfigMap commands:**
```bash
kubectl get configmaps
kubectl describe configmap app-config
```

### Secret

A **Secret** stores sensitive information like passwords, API keys, and tokens. It's similar to ConfigMap, but it is intended for confidential data.

**Note:** Secrets are base64-encoded by default (not encrypted). For production, enable encryption for secrets.

**YAML to create a Secret:**
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
  namespace: production
type: Opaque
data:
  username: dXNlcm5hbWU=     # base64-encoded "username"
  password: cGFzc3dvcmQxMjM= # base64-encoded "password123"
```

**Base64 encoding:**
```bash
echo -n "mypassword" | base64
# Output: bXlwYXNzd29yZA==

echo "bXlwYXNzd29yZA==" | base64 -d
# Output: mypassword
```

**Secret commands:**
```bash
kubectl get secrets
kubectl describe secret db-credentials
```

### Volume

Pods and containers are ephemeral. When a container restarts, all data gets lost. **Volumes** provide persistent storage that survives even when container restarts.

**YAML to create emptyDir storage:**
**emptyDir** - It is a temporary storage shared between containers in a pod:
```yaml
volumes:
  - name: temp-storage
    emptyDir: {}
```

**YAML to create a PersistentVolumeClaim:**

**PersistentVolumeClaim (PVC)** - For permanent storage:
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-pvc
  namespace: production
spec:
  accessModes:
    - ReadWriteOnce        # Only one pod can write at a time
  resources:
    requests:
      storage: 10Gi        # Request 10 GB storage
```

Use volume in pod:
```yaml
containers:
  - name: app
    volumeMounts:
      - name: data
        mountPath: /var/data    # Where data appears in container

volumes:
  - name: data
    persistentVolumeClaim:
      claimName: data-pvc
```

### Ingress

An **Ingress** exposes services to external clients outside the cluster. It provides HTTP/HTTPS routing based on hostnames and paths.

**Key characteristics:**
- It routes external traffic to services (not directly to pods)
- It can route based on hostname (example.com, api.example.com)
- It can route based on path (/api, /web, /images)
- It requires an Ingress Controller to be deployed in the cluster

**YAML to create an Ingress:**
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
  namespace: production
spec:
  ingressClassName: nginx
  rules:
    - host: example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: webapp-service
                port:
                  number: 80
```

**Ingress commands:**
```bash
kubectl get ingress
kubectl describe ingress <ingress-name>
```

---

## Hands-On Demo: Deploy Your First Application

### Prerequisites

This guide assumes basic familiarity with:
- **Containers and Docker**: Understanding of what containers are and how Docker images work
- **Command line**: Comfortable using bash or terminal commands
- **YAML syntax**: Basic understanding of YAML file format

### Local Setup: Getting Kubernetes Running

To follow along with the demo, you'll need:

#### 1. Install kubectl

kubectl is the command-line tool to interact with Kubernetes clusters.

**Installation:** Follow [official kubectl installation guide](https://kubernetes.io/docs/tasks/tools/)

**Verify:**
```bash
kubectl version --client
```

#### 2. Install Minikube

Minikube runs a single-node Kubernetes cluster on your local machine, which is good for learning and development.

**Installation:** Follow [Minikube Getting Started guide](https://minikube.sigs.k8s.io/docs/start/)

**Start your local cluster:**
```bash
minikube start

# Verify it's running
kubectl cluster-info
```

**Stop the cluster:**
```bash
minikube stop
```

### Deploy Your Application

Let's create a complete application with configuration and persistence.

### Step 1: Create a Namespace

```bash
kubectl create namespace demo
```

Verify:
```bash
kubectl get namespaces
```

### Step 2: Create ConfigMap

```bash
cat > app-config.yaml <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: demo
data:
  APP_NAME: "My Demo App"
  APP_VERSION: "1.0.0"
  LOG_LEVEL: "info"
EOF

kubectl apply -f app-config.yaml
```

Verify:
```bash
kubectl get configmap -n demo
kubectl describe configmap app-config -n demo
```

### Step 3: Create Secret

```bash
cat > app-secret.yaml <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
  namespace: demo
type: Opaque
data:
  db-password: cGFzc3dvcmQxMjM=    # base64-encoded "password123"
EOF

kubectl apply -f app-secret.yaml
```

Verify:
```bash
kubectl get secrets -n demo
kubectl describe secret app-secret -n demo
```

### Step 4: Create PersistentVolumeClaim

```bash
cat > storage.yaml <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-storage
  namespace: demo
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
EOF

kubectl apply -f storage.yaml
```

Verify:
```bash
kubectl get pvc -n demo
kubectl describe pvc app-storage -n demo
```

### Step 5: Create Deployment

```bash
cat > deployment.yaml <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo-app
  namespace: demo
spec:
  replicas: 3
  selector:
    matchLabels:
      app: demo-app
  
  template:
    metadata:
      labels:
        app: demo-app
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
          
          env:
            - name: APP_NAME
              valueFrom:
                configMapKeyRef:
                  name: app-config
                  key: APP_NAME
            
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: app-secret
                  key: db-password
          
          volumeMounts:
            - name: app-storage
              mountPath: /data
      
      volumes:
        - name: app-storage
          persistentVolumeClaim:
            claimName: app-storage
EOF

kubectl apply -f deployment.yaml
```

Verify the deployment:
```bash
# Check deployment
kubectl get deployment -n demo

# Check replica sets
kubectl get replicaset -n demo

# Check pods
kubectl get pods -n demo

# Get detailed info
kubectl describe deployment demo-app -n demo
```

### Step 6: Create Service

```bash
cat > service.yaml <<EOF
apiVersion: v1
kind: Service
metadata:
  name: demo-app-service
  namespace: demo
spec:
  type: ClusterIP
  selector:
    app: demo-app
  ports:
    - port: 80
      targetPort: 80
EOF

kubectl apply -f service.yaml
```

Verify:
```bash
kubectl get service -n demo
kubectl describe service demo-app-service -n demo
```

### Step 7: Access Your Application

**Option A: Port Forward (Recommended for local testing)**
```bash
kubectl port-forward svc/demo-app-service 8080:80 -n demo
```

Open your browser and visit: `http://localhost:8080`

You should see the nginx welcome page!

**Option B: NodePort (Alternative access method)**

Modify `service.yaml` to use NodePort:
```bash
cat > service.yaml <<EOF
apiVersion: v1
kind: Service
metadata:
  name: demo-app-service
  namespace: demo
spec:
  type: NodePort
  selector:
    app: demo-app
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30007
EOF

kubectl apply -f service.yaml
```

Then access via:
```bash
minikube ip  # Get your minikube IP
# Visit http://<minikube-ip>:30007
```

### Step 8: Interact with Your Deployment

**Scale up to 5 replicas:**
```bash
kubectl scale deployment demo-app --replicas=5 -n demo

# Watch new pods being created
kubectl get pods -n demo --watch
```

**View logs from a pod:**
```bash
kubectl logs <pod-name> -n demo

# Follow logs in real-time
kubectl logs -f <pod-name> -n demo
```

**Execute command inside a pod:**
```bash
kubectl exec -it <pod-name> -n demo -- bash
# Now you're inside the container
ls /data    # View mounted volume
echo "test" > /data/test.txt
exit
```

**Delete a pod and watch Deployment recreate it:**
```bash
kubectl delete pod <pod-name> -n demo

# Watch the new pod created automatically
kubectl get pods -n demo --watch
```

**Update the deployment image:**
```bash
kubectl set image deployment/demo-app nginx=nginx:1.22 -n demo

# Check rollout status
kubectl rollout status deployment/demo-app -n demo
```

### Step 9: Clean Up

```bash
# Delete everything in the namespace
kubectl delete namespace demo

# Verify
kubectl get namespaces
```

---

## Essential kubectl Commands

Here are the most important commands for working with Kubernetes:

```bash
# Cluster Information
kubectl cluster-info
kubectl get nodes
kubectl describe node <node-name>
kubectl get events                             # View cluster events
kubectl get events -n <namespace>              # Events in namespace

# Contexts (manage multiple clusters)
kubectl config get-contexts                    # List all contexts
kubectl config current-context                 # Show current context
kubectl config use-context <context-name>     # Switch context

# Resources (Deployments, Pods, Services, etc.)
kubectl get <resource-type>                    # List resources
kubectl get <resource-type> -n <namespace>    # In specific namespace
kubectl get <resource-type> -A                 # All namespaces
kubectl describe <resource-type> <n>        # Detailed info

# Deployments
kubectl get deployments
kubectl describe deployment <n>
kubectl scale deployment <n> --replicas=<n>
kubectl set image deployment/<n> <container>=<image>
kubectl rollout status deployment/<n>
kubectl rollout history deployment/<n>
kubectl rollout undo deployment/<n>

# Pods
kubectl get pods
kubectl get pods -n <namespace>
kubectl describe pod <n>
kubectl logs <pod-name>
kubectl logs -f <pod-name>                     # Follow logs
kubectl exec -it <pod-name> -- bash            # Execute command

# Services and Ingress
kubectl get services
kubectl get svc
kubectl describe service <n>
kubectl get ingress
kubectl describe ingress <n>

# ConfigMaps and Secrets
kubectl get configmaps
kubectl get secrets
kubectl describe configmap <n>
kubectl describe secret <n>

# Create and Delete
kubectl apply -f file.yaml                     # Create or update
kubectl delete -f file.yaml                    # Delete
kubectl delete <resource-type> <n>

# Port Forwarding
kubectl port-forward pod/<pod-name> <local-port>:<pod-port>
kubectl port-forward svc/<service-name> <local>:<remote>
```

---

## Best Practices

1. **Always use Deployments** - Don't use bare pods. Deployments manage scaling and updates.
2. **Use Namespaces** - Organize applications and separate environments.
3. **Label your resources** - Makes organization and management easier.
4. **Use ConfigMap for configuration** - Don't hardcode config in images.
5. **Store secrets securely** - Never commit passwords to git.
6. **Check pod logs** - First step in debugging issues.
7. **Use meaningful names** - For deployments, services, and pods.
8. **Organize with version control** - Store YAML files in git.
9. **Test locally first** - Use minikube before deploying to cloud.
10. **Start simple** - Master basics before exploring advanced features.
