---
title: Starlark-Powered Pipelines in Woodpecker CI
authorName: Prashant Gurung
authorAvatar: https://avatars.githubusercontent.com/u/53248463?v=4
authorLink: https://github.com/prashant-gurung899
createdAt: September 11, 2025
tags: CI/CD, Woodpecker, starlark, docker-compose, Traefik, WCCS
banner: https://blog.jankaritech.com/src/assets/woodpeckerCI/images/cover.png
---

## Background
Continuous Integration tools are essential to build and test modern software automatically and regularly. Woodpecker CI is one such open-source tool, a lightweight CI/CD system. [Woodpecker CI](https://woodpecker-ci.org/) is an open-source continuous integration and delivery system that help developers in automating deployment, builds, and testing of code. It's an open-source fork and alternative to the popular Drone CI project with numerous design similarities and Drone pipeline compatibility. Traditionally, Woodpecker pipelines are YAML, but now that programmable pipelines are in vogue, we can finally have the liberty of defining our CI configuration through Starlark — a Python-ish config language.

In this article, I will walk you through setting up Woodpecker CI with Traefik as a reverse proxy and [WCCS](https://github.com/opencloud-eu/woodpecker-ci-config-service/) (Woodpecker CI Config Service) to convert Starlark configurations into YAML files so that we can write pipelines in `.star` files. Here is a high-level overview of what we are going through:

- Spinning up a Woodpecker server with Traefik

- Authenticating with GitHub

- Enabling a repository

- Connecting WCCS with the Woodpecker server

By the end, you’ll be able to write CI pipelines in Starlark and dynamically convert them to YAML during runtime.

## Setting Up Woodpecker Server and Agent
Let's start by setting up the Woodpecker server and agent services in the `docker-compose.yml` file as show below:

```yml
services:
  woodpecker-server:
    image: woodpeckerci/woodpecker-server:v3
    environment:
      - WOODPECKER_LOG_LEVEL=debug
      - WOODPECKER_OPEN=false
      - WOODPECKER_HOST=http://<your-ci-server>
      - WOODPECKER_GITHUB=true
      - WOODPECKER_GITHUB_CLIENT=xxxxxxx   # GitHub OAuth client ID
      - WOODPECKER_GITHUB_SECRET=xxxxxxx   # GitHub OAuth secret
      - WOODPECKER_AGENT_SECRET=xxxxxxx    # shared secret between server and agents
      - WOODPECKER_ADMIN=your-github-username
      # The following variable is where we set our Woodpecker CI Config Service (Starlark Conversion Service) later
      - WOODPECKER_CONFIG_SERVICE_ENDPOINT=http://<your-config-service-server>
    volumes:
      - woodpecker-server-data:/var/lib/woodpecker/
    networks:
      - woodpecker-net

  woodpecker-agent:
    image: woodpeckerci/woodpecker-agent:v3
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

volumes:
  woodpecker-server-data:
  woodpecker-agent-config:

networks:
  woodpecker-net:
    driver: bridge
```

## Traefik Configuration for HTTPS
So far our woodpecker server runs on HTTP, so to serve it on HTTPS we are going to configure Traefik.
Traefik plays a crucial role in this architecture by handling all the networking complexities - SSL termination, routing, and load balancing.
Add the following Traefik service right above the `woodpecker-server` service in the same `docker-compose.yml` file:

```yml
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
      - "--certificatesresolvers.letsencrypt.acme.email=example@example.com" #letsEncrypt contact email
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
    networks:
      - woodpecker-net

  woodpecker-server:
    image: woodpeckerci/woodpecker-server:v3
    ...
    ...
    ...
  woodpecker-agent:
    image: woodpeckerci/woodpecker-agent:v3
    ...
    ...
    ...
```

This configuration:

- Sets up Traefik to listen on ports 80 and 443
- Configures automatic SSL certificate management via [letsEncrypt](https://letsencrypt.org/)
- Enables Docker provider to automatically detect new services
- Mounts necessary volumes for certificate storage and Docker socket access

Now that we have Traefik configured, update the Woodpecker server service by adding following labels:

```yml
  woodpecker-server:
    ...
    ...
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
```

## Authenticating with GitHub

Woodpecker cannot do anything by itself, it needs a forge (the service where the repositories are hosted). Woodpecker supports [various forges](https://woodpecker-ci.org/docs/administration/configuration/forges/overview), for this blog we will focus on GitHub.

To connect GitHub with Woodpecker:

1. Register a new OAuth application in your GitHub developer [settings](https://github.com/settings/applications/new).

2. In your GitHub OAuth App, set the authorization callback URL to `https://<your-ci-server>/authorize`

![Callback URL](/src/assets/woodpeckerCI/images/oauth.png)

3. Copy the generated Client ID and Secret.

4. Use these values in the `WOODPECKER_GITHUB_CLIENT` and `WOODPECKER_GITHUB_SECRET` env vars.

After that, you can log into the Woodpecker web UI using your GitHub account.

![GitHub Login](/src/assets/woodpeckerCI/images/github.png)

## Enabling a Repository
Before enabling a repo in the Woodpecker CI server, make sure to have a GitHub repository ready. You can use an existing repo of your own or create a new empty one. We will be making a pull request to the repo to trigger CI later.

From the Woodpecker UI:

- Click on Add Repository.

![Add Repo](/src/assets/woodpeckerCI/images/add.png)

- Enable it. For this blog, I am using an existing repo called `Drum-KIT` which has already been enabled (as you can see in the last row of the image below).

![Enable Repo](/src/assets/woodpeckerCI/images/enable.png)

Woodpecker will automatically add the necessary webhooks to the repo.

## Triggering Your First CI Run 
While we are trying to integrate a starlark conversion service, woodpecker CI supports the default `.yml` pipelines.
So. now we can trigger our first CI using a traditional YAML configuration as show below.
Create a new branch <your-branch-name> and add the following configuration in the root of your enabled github repo with name `.woodpecker.yml`.


```yaml
steps:
  - name: hello
    image: alpine
    commands:
      - echo "Hello from CI"
      - echo "--------------------"
      - echo "This is my first CI BUILD"
      - echo "--------------------"
    when:
      event: pull_request
      branch: master  # configure it as your repo's base branch.(in my case, it's `master`)
```

Now that you have your `.woodpecker.yaml` file ready, you can commit and push it to your enabled GitHub repository and then, open a Pull Request from your branch <your-branch-name> to `master/main` according to you repo. GitHub's default branch is set to `main`.
Once the PR is created, Woodpecker will automatically fetch the pipeline configuration, and start your first CI run. You can then head over to the Woodpecker UI to watch the build logs in real time.

![Yaml Pipleine](/src/assets/woodpeckerCI/images/yaml.png)

Now that we have already set up the woodpecker server and triggered pipelines using the traditional `.yaml` configuration, let's now integrate WCCS to unlock flexibility and define our pipelines in Starlark.

## Setting Up WCCS-Woodpecker CI Config Service (Starlark Conversion Service)
The Woodpecker Config Conversion Service (WCCS) is a lightweight web service created and maintained by [Opencloud-eu](https://opencloud.eu/en). It enables Woodpecker CI to convert pipeline definitions written in Starlark into standard YAML on the fly by receiving a signed POST request from Woodpecker.
You can easily deploy WCCS using their official Docker image available on Docker Hub: [opencloudeu/wccs](https://hub.docker.com/r/opencloudeu/wccs).
Update your `docker-compose.yml` to include the WCCS service:
```yml
...

  wccs:
    image: opencloudeu/wccs:latest
    container_name: wccs
    command: server
    environment:
      - WCCS_LOG_LEVEL=debug
      - WCCS_SERVER_PUBLIC_KEY=/keys/public.pem # path to public key(generated in the section below)
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

...

volumes:
  woodpecker-server-data:
  woodpecker-agent-config:

networks:
  woodpecker-net:
    driver: bridge
```

## Generating the Public Key
Before running any pipeline, woodpecker server sends a POST request to an external config service (in our case WCCS) with all current config file and build information of the current repository. The external service takes the information and sends back the pipeline configurations. In our case, this is how a starlark file is being converted into yaml configurations.

And before WCCS can accept and process those requests, it needs to verify that the requests are trusted and coming from the woodpecker server.

Every request sent by Woodpecker is signed using a http-signature by a private key (ed25519) generated on the first start of the Woodpecker server. You can get the public key for the verification of the http-signature from:
```console
https://<your-ci-server>/api/signature/public-key
```
Store that public key into `keys/public.pem` in the same directory level as your docker compose. The `public.pem` file is then mounted to the WCCS container as shown in the snippet above and used in env variable `WCCS_SERVER_PUBLIC_KEY`

## Connecting WCCS with Woodpecker
To allow Woodpecker to fetch pipeline configs from WCCS, we added this to the server env:
```console
WOODPECKER_CONFIG_SERVICE_ENDPOINT=http://wccs:8080/ciconfig
```
Woodpecker now sends a signed JSON payload to WCCS whenever a build is triggered. WCCS verifies the signature using the public key and responds with a YAML pipeline based on your `.woodpecker.star` file.

After conneting WCCS with the woodpecker server, there's one more thing that you need to do i.e. to set pipeline config path, because by default Woodpecker will take `.woodpecker.yaml` as it's pipeline configuration.

- From the settings of your Woodpecker server, go to `Repositories` and click on the enabled repo's settings icon as shown below:

![Settings](/src/assets/woodpeckerCI/images/settings.png)

- Then, add `.woodpecker.star` as pipeline config path and save it:

![Pipeline Config](/src/assets/woodpeckerCI/images/path.png)

## Add a Simple Starlark Pipeline
Here's a simple starlark pipeline configuration example that you can add in your project.
Create a new branch by checking out from your `master/main` branch.
Add the following configration in the `.woodpecker.star` file in your repo's root
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
                    "branch": ["master"], # configure it as your repo's base branch.(in my case, it's `master`)
                },
            }
        ]
    }]
```

## Triggering CI with starlark-powered pipeline
Now that you have your `.woodpecker.star` file ready, commit and push it to your GitHub repository and then, open a new Pull Request from your branch <your-branch-name> to master/main.
Once the PR is created, Woodpecker will automatically send a build request to WCCS, fetch the pipeline configuration, and start your first CI run. You can then head over to the Woodpecker UI to watch the build logs in real time.

![Converted Yaml](/src/assets/woodpeckerCI/images/converted.png)

![CI build](/src/assets/woodpeckerCI/images/CI.png)


## Conclusion
This setup provides a robust, secure, and flexible CI/CD pipeline using Woodpecker CI, enhanced with WCCS for configuration management and protected by Traefik. The integration of these components creates a powerful system that can handle complex pipeline configurations while maintaining security and ease of use.

Now, we can write pipelines in Starlark and let WCCS handle the conversion on the fly. This approach brings flexibility, structure, and the power of logic-based configurations to our CI pipelines.
