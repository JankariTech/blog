---
title: Starlark-Powered Pipelines in Woodpecker CI
authorName: Prashant Gurung
authorAvatar: https://avatars.githubusercontent.com/u/53248463?v=4
authorLink: https://github.com/prashant-gurung899
createdAt: July 3, 2025
tags: CI/CD
banner: https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/cover.png
---

## Background
Continuous Integration (CI) tools are vital for automating the testing and deployment of modern software. One such open-source tool is Woodpecker CI, a lightweight CI/CD system. Woodpecker CI is an open-source continuous integration and delivery platform that helps developers automate building, testing, and deploying their code. It is a community-driven fork and successor of the popular Drone CI project, sharing many design principles and compatibility with Drone pipelines. Traditionally, Woodpecker pipelines are written in YAML. But with the rise of programmable pipelines, we now have the flexibility to define our CI configuration using Starlark — a Python-like configuration language.

In this blog, I’ll walk you through setting up Woodpecker CI with Traefik as a reverse proxy and integrating it with WCCS (Woodpecker CI Config Service) to convert Starlark configurations into YAML files, enabling us to write pipelines in .woodpecker.star files. Here's a high-level view of what we'll cover:

- Spinning up a Woodpecker server with Traefik

- Authenticating with GitHub

- Enabling a repository

- Connecting WCCS with the Woodpecker server

By the end, you’ll be able to write CI pipelines in Starlark and dynamically convert them to YAML during runtime.

## Prepare Woodpecker secrets via .env
```console
#Your woodpecker host
WOODPECKER_HOST=https://<your-ci-server>


# GitHub OAuth Secrets
WOODPECKER_GITHUB_CLIENT=XXXXXXXXXXXXXXXX
WOODPECKER_GITHUB_SECRET=XXXXXXXXXXXXXXXXXXXXXXXX


# Shared secret used by server<->agent - you can generate it using openSSL
WOODPECKER_AGENT_SECRET=<generated-secret>


# Let’s Encrypt contact email (Traefik will use this)
ACME_EMAIL=admin@example.com
```

## Traefik Configuration
Traefik plays a crucial role in this architecture by handling all the networking complexities - SSL termination, routing, and load balancing

```yml
version: "3.9"

services:
  traefik:
    image: traefik:v3.1
    container_name: traefik
    command:
      - "--log.level=DEBUG"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.letsencrypt.acme.email=${ACME_EMAIL}"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
    networks:
      - woodpecker-net
```

This configuration:

- Sets up Traefik to listen on ports 80 and 443
- Configures Let's Encrypt for automatic SSL certificate management
- Enables Docker provider to automatically detect new services
- Mounts necessary volumes for certificate storage and Docker socket access

## Setting Up Woodpecker Server and Agent
Now that we have Traefik running, let's set up the Woodpecker server and agent services. Here's the essential setup:

```yml
  woodpecker-server:
    image: woodpeckerci/woodpecker-server:v3
    environment:
      - WOODPECKER_LOG_LEVEL=debug
      - WOODPECKER_OPEN=false
      - WOODPECKER_HOST=${WOODPECKER_HOST}
      - WOODPECKER_GITHUB=true
      - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}
      - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}
      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}
      - WOODPECKER_ADMIN=prashant-gurung899
      # The following variable is where we set our Woodpecker CI Config Service (Starlark Conversion Service) later
      - WOODPECKER_CONFIG_SERVICE_ENDPOINT=http://<your-config-service-server>
    volumes:
      - woodpecker-server-data:/var/lib/woodpecker/
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.woodpecker-secure.rule=Host(`your-ci-server`)"
      - "traefik.http.routers.woodpecker-secure.entrypoints=websecure"
      - "traefik.http.routers.woodpecker-secure.tls.certresolver=letsencrypt"
      - "traefik.http.routers.woodpecker-secure.tls=true"
      - "traefik.http.services.woodpecker-secure.loadbalancer.server.port=8000"
      # HTTP router + redirect to HTTPS
      - "traefik.http.routers.woodpecker-http.rule=Host(`your-ci-server`)"
      - "traefik.http.routers.woodpecker-http.entrypoints=web"
      - "traefik.http.routers.woodpecker-http.middlewares=redirect-to-https"
      # Redirect middleware
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"
    networks:
      - woodpecker-net

  woodpecker-agent:
    image: woodpeckerci/woodpecker-agent:v3
    command: agent
    restart: always
    depends_on:
      - woodpecker-server
    volumes:
      - woodpecker-agent-config:/etc/woodpecker
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - WOODPECKER_LOG_LEVEL=debug
      - WOODPECKER_SERVER=woodpecker-server:9000
      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}
    networks:
      - woodpecker-net
```

## Authenticating with GitHub

To connect GitHub with Woodpecker:

1. Register a new OAuth application in your GitHub developer settings.

2. Set the callback URL to `https://<your-ci-server>/authorize`

3. Copy the generated Client ID and Secret.

4. Use these values in the `WOODPECKER_GITHUB_CLIENT` and `WOODPECKER_GITHUB_SECRET` env vars.

After that, you can log into the Woodpecker web UI using your GitHub account.

![GitHub Login](https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/github.png)

## Enabling a Repository
From the Woodpecker UI:

- Click on Add Repository.

![Add Repo](https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/add.png)

- Enable it.

![Enable Repo](https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/enable.png)

Woodpecker will automatically add the necessary webhooks to the repo.


After enabling your desired repository, there's one more thing that you need to do i.e. to set pipeline config path.

- From the settings of your Woodpecker Server, go to repositories and click on the enabled repo's settings icon as shown below:

![Settings](https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/settings.png)

- Then, add `.woodpecker.star` as pipeline config path and save it:

![Pipeline Config](https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/path.png)

## Generating the Public Key
Every request sent by Woodpecker is signed using a http-signature by a private key (ed25519) generated on the first start of the Woodpecker server. You can get the public key for the verification of the http-signature from:
```console
http(s)://your-ci-server/api/signature/public-key
```
Store that public key into `keys/public.pem` in the same directory level as your docker compose, it will be needed for signature verification.

## Setting Up WCCS-Woodpecker CI Config Service (Starlark Conversion Service)
The Woodpecker Config Conversion Service (WCCS) is a lightweight web service created and maintained by [Opencloud-eu](https://opencloud.eu/en). It enables Woodpecker CI to convert pipeline definitions written in Starlark into standard YAML on the fly by receiving a signed POST request from Woodpecker.
You can easily deploy WCCS using their official Docker image available on Docker Hub: [opencloudeu/wccs](https://hub.docker.com/r/opencloudeu/wccs).
```yml
  wccs:
    image: opencloudeu/wccs:latest
    container_name: wccs
    command: server
    environment:
      - WCCS_LOG_LEVEL=debug
      - WCCS_SERVER_PUBLIC_KEY=/keys/public.pem
    volumes:
      - /opt/woodpecker/keys:/keys
      - /etc/ssl/certs:/etc/ssl/certs:ro
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.wccs.rule=Host(`your-wccs-server`)"
      - "traefik.http.routers.wccs.entrypoints=websecure"
      - "traefik.http.routers.wccs.tls.certresolver=letsencrypt"
      - "traefik.http.services.wccs.loadbalancer.server.port=8080"
    networks:
      - woodpecker-net

volumes:
  woodpecker-server-data:
  woodpecker-agent-config:

networks:
  woodpecker-net:
    driver: bridge
```

## Connecting WCCS with Woodpecker
To allow Woodpecker to fetch pipeline configs from WCCS, we added this to the server env:
```console
WOODPECKER_CONFIG_SERVICE_ENDPOINT=http://wccs:8080/ciconfig
```
Woodpecker now sends a signed JSON payload to WCCS whenever a build is triggered. WCCS verifies the signature using the public key and responds with a YAML pipeline based on your .woodpecker.star file.

## Add a Simple Starlark Pipeline
Here's a simple `.woodpecker.star` example that you can add in your project's root and you're all set:
```console
def main(ctx):
    return [{
        "name": "hello",
        "steps": [
            {
                "name": "greeting",
                "image": "alpine",
                "commands": [
                    "echo Hello from CI",
                ],
                "when": {
                    "event": ["push", "pull_request"],
                    "branch": ["master"],
                },
            }
        ]
    }]
```

## Triggering Your First CI Run
Now that you have your `.woodpecker.star` file ready, commit and push it to your GitHub repository and then, open a Pull Request from your branch <your-branch-name> to master.
Once the PR is created, Woodpecker will automatically send the build request to WCCS, fetch the pipeline config, and start your first CI run. You can head over to the Woodpecker UI to watch the build logs in real time.

![Converted Yaml](https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/converted.png)

![CI build](https://raw.githubusercontent.com/JankariTech/blog/woodpecker-ci-starlark/src/assets/woodpeckerCI/images/CI.png)


## Conclusion
This setup provides a robust, secure, and flexible CI/CD pipeline using Woodpecker CI, enhanced with WCCS for configuration management and protected by Traefik. The integration of these components creates a powerful system that can handle complex pipeline configurations while maintaining security and ease of use.

Now, we can write pipelines in Starlark and let WCCS handle the conversion on the fly. This approach brings flexibility, structure, and the power of logic-based configurations to our CI pipelines.
