---
title: Advanced Docker Container Debugging - A comprehensive guide
authorName: Prajwol Amatya
authorAvatar: https://1.gravatar.com/avatar/de64e53c0e2cb393dd0d14ffdd53058ee9c607b35e366dd392425bd1b95a034c?size=256
authorLink: https://github.com/prajwolamatya
createdAt: April 29, 2025
tags: debugging, docker
banner: https://blog.jankaritech.com/src/assets/Debugging/images/Debugging.png
---

Docker has revolutionized modern software development by enabling lightweight, portable, and scalable containerized applications. However, as deployments grow in complexity, so do the challenges in debugging and optimizing containers. In this blog, we'll explore powerful debugging techniques using a sample project with Node.js, Nginx, and Redis. You can get the sample project [here](https://github.com/prajwolamatya/debug-docker).

Our setup consists of:
- A Node.js application (port 3000)
- Nginx as a reverse proxy (port 80)
- Redis for caching (port 6379)

## 1. Container Inspection
### Viewing Running Containers
First, let's check our running containers:

```bash
docker-compose ps
```

**Expected Output:**
```console
Name                       Command                         State    Ports
debug-docker_nginx_1       /docker-entrypoint.sh ngin ...  Up       0.0.0.0:80->80/tcp
debug-docker_nodejs-app_1  docker-entrypoint.sh node ...   Up       0.0.0.0:3000->3000/tcp
debug-docker_redis_1       docker-entrypoint.sh redis ...  Up       0.0.0.0:6379->6379/tcp
```

- **State:** Shows if container is running/stopped
- **Ports:** Reveals port mappings (host:container)

### Inspecting Container Details
For deeper inspection of a specific container:

```bash
docker inspect debug-docker_nodejs-app_1
```

This returns a JSON with all container details including:
- Network settings
- Mounts
- Environment variables
- IP addresses

**Pro Tip:** Filter specific information:

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' debug-docker_nodejs-app_1
```

## 2. Log Analysis
### Viewing Container Logs

```bash
docker-compose logs
```

**Example Output (when accessing the service):**

```console
debug-docker_nodejs-app_1  | Node.js server running on port 3000
```

This confirms your Node.js application launched successfully

### Generating Request Logs
Make a test request to generate logs:

```bash
curl -v http://localhost:3000
```

After the request, check logs again to see:

```console
debug-docker_nodejs-app_1  | Node.js server running on port 3000
debug-docker_nodejs-app_1  | GET / 200 7.001 ms - 19
```

To view only GET requests from the last 5 minutes
```bash
docker logs --since 5m debug-docker_nodejs-app_1 | grep "GET"
```

**Expected Output:**

```console
GET / 200 7.001 ms - 19
```

## 3. Network Troubleshooting
### Checking Container Connectivity

Test if Nginx can reach Node.js:

```bash
docker exec debug-docker_nginx_1 ping nodejs-app
```

**Expected Output:**
```console
PING nodejs-app (172.19.0.3): 56 data bytes
64 bytes from 172.19.0.3: seq=0 ttl=64 time=0.060 ms
```
- **Success:** <1ms response confirms network connectivity
- **Failure:** Would show "unknown host" or timeout

### Examining Post Accessibility
Check if Node.js is listening on port 3000 inside its container:

```bash
docker exec debug-docker_nodejs-app_1 netstat -tuln
```

**Expected Output:**
```console
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 :::3000                 :::*                    LISTEN
```

- Shows Node.js listening on port 3000
- No output means service isn't running properly

## 4. Interactive Debugging
### Executing into Containers

For Node.js application debugging:
```bash
docker exec -it debug-docker_nodejs-app_1 sh
```
Now you can:
1. Check running processes: `ps aux`
```bash
ps aux
```

**Output:**

```console
PID   USER     TIME  COMMAND
    1 root      0:00 {MainThread} node app.js
   28 root      0:00 sh
   45 root      0:00 ps aux
```
- Shows all running processes in the container
- `PID1`: Your Node.js application (node app.js)
- `PID28`: The shell session you just started
- `PID 45`: The `ps aux` command itself
- Confirms your application is running as the main process

2. Examine environment variables: `printenv`
```bash
printenv
```

**Output:**
```console
NODE_VERSION=23.11.0
HOSTNAME=ada88201c429
YARN_VERSION=1.22.22
SHLVL=1
HOME=/root
TERM=xterm
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
PWD=/app
```
- Displays all environment variables to your Node.js app

3. Test Redis connectivity: `redis-cli -h redis ping`
```bash
redis-cli -h redis ping
```

**Output:**
```console
PONG
```

- Tests connectivity to your Redis container
- `PONG` response confirms network connectivity

### Debugging Nginx Configuration
```bash
docker exec -it debug-docker_nginx_1 nginx -t
```

**Expected Output:**
```console
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

## 5. Health Checks and Readiness Probes
Let's enhance our `docker-compose.yml` with health checks:

```yaml
services:
  nodejs-app:
    # ... existing config ...
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    # ... existing config ...
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 5s
      retries: 3
```

Now check the container health:
```bash
docker ps --format "table {{.Names}}\t{{.Status}}"
```

**Expected Output:**
```console
NAMES                     STATUS
debug-docker_nginx_1      Up 5 minutes
debug-docker_nodejs-app_1 Up 5 minutes (healthy)
debug-docker_redis_1      Up 5 minutes (healthy)
```

## 6. Temporary Debug Containers
Sometimes you need additional tools. Create a temporary debug container in the same network:
```bash
docker run -it --rm --network debug-docker_default alpine sh
```

Now from this container you can:
1. Test DNS resolution:
```bash
nslookup nodejs-app
```

**Expected Output:**
```console
Server:		127.0.0.11
Address:	127.0.0.11:53

Non-authoritative answer:
Name:	nodejs-app
Address: 172.19.0.3
```

- Confirms Docker's internal DNS is working
- Shows the service name resolves to the correct container IP (172.19.03)

2. Check connectivity:
```bash
wget -qO- http://nodejs-app:3000
```

**Expected Output:**
```console
Hello from Node.js!
```

- Shows successful TCP connection to port 3000
- Returns the actual HTTP response from your Node.js app

## 7. Docker System Diagnostics
When facing resource issues:
```bash
docker system df
```

**Example Output:**
```console
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          17        3         2.374GB   2.295GB (96%)
Containers      3         3         2B        0B (0%)
Local Volumes   2         1         88B       88B (100%)
Build Cache     108       0         37.82MB   37.82MB
```

Check detailed resource usage:
```bash
docker stats
```

**Example Output:**
```console
CONTAINER ID   NAME                        CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O     PIDS
5111f46d640b   debug-docker_nginx_1        0.00%     9.633MiB / 31.06GiB   0.03%     41.9kB / 126B     0B / 4.1kB    13
e701e4d02bb0   debug-docker_nodejs-app_1   0.00%     13.31MiB / 31.06GiB   0.04%     45.3kB / 3.49kB   0B / 0B       7
3e0399cc7510   debug-docker_redis_1        0.93%     4.691MiB / 31.06GiB   0.01%     42.3kB / 126B     1.43MB / 0B   6
```

## Conclusion
Effective Docker debugging requires a systematic approach. By mastering these techniques, you'll be able to diagnose and resolve even the most complex Docker issues in production environments.
