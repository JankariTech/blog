---
title: Integrating oCIS With Keycloak
authorName: Amrita Shrestha
authorAvatar: https://avatars.githubusercontent.com/u/54478846?s=100&v=4
authorLink: https://github.com/amrita-shrestha
createdAt: May 31, 2024
tags: ownCloud, oCIS, oCIS-with-Keycloak, Keycloak
banner: https://blog.jankaritech.com/src/assets/Keycloak/images/oCIS-Keycloak/oCIS-with-Keycloak.png
---

[In the previous blog](/src/assets/Keycloak/Keycloak.md), we explored the general functionality of Keycloak.
In this blog, I demonstrate how we can integrate [oCIS](https://owncloud.dev/ocis/)(file-sync and share platform) with Keycloak using the Keycloak WebUI.
Anyone interested in getting hands-on experience with Keycloak can read this blog.

## Run Services
Make sure you've installed [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/).

Before setting up oCIS with Keycloak, it's essential to deploy both oCIS and Keycloak services. I'll describe how to achieve it with **docker compose**.
oCIS and Keycloak runs behind **Traefik** as reverse proxy. **Traefik** generates self-signed certificates for oCIS and Keycloak.

You have to create a **csp.yaml** file with the following contents:
```yaml
directives:
  child-src:
    - '''self'''
  connect-src:
    - '''self'''
    # In contrary to bash and docker the default is given after the | character
    - 'https://${KEYCLOAK_DOMAIN|host.docker.internal:8443}'
  default-src:
    - '''none'''
  font-src:
    - '''self'''
  frame-ancestors:
    - '''none'''
  frame-src:
    - '''self'''
    - 'https://embed.diagrams.net/'
  img-src:
    - '''self'''
    - 'data:'
    - 'blob:'
  manifest-src:
    - '''self'''
  media-src:
    - '''self'''
  object-src:
    - '''self'''
    - 'blob:'
  script-src:
    - '''self'''
    - '''unsafe-inline'''
  style-src:
    - '''self'''
    - '''unsafe-inline'''
```

You can either download the docker code from [GitHub](https://github.com/amrita-shrestha/keycloak-ocis/blob/master/compose.yaml) or utilize the code provided below:
> Note: **PROXY_CSP_CONFIG_FILE_LOCATION** should contain the exact location of a **csp.yaml** file

```
services:
  traefik:
    image: traefik:2.11.0
    command:
      [
        "--log.level=ERROR",
        "--api.insecure=true",
        "--api.dashboard=true",
        "--pilot.dashboard=false",
        "--providers.docker=true",
        "--entrypoints.ocis.address=:9200",
        "--entrypoints.keycloak.address=:8443",
        "--providers.docker.exposedbydefault=false",
        "--entrypoints.websecure.http.tls.options=default",
      ]
    ports:
      - 8080:8080
      - 9200:9200
      - 8443:8443
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
    labels:
      traefik.enable: true
      traefik.http.routers.traefik.rule: HostRegexp(`{any:.+}`)
    restart: always

  ocis:
    image: owncloud/ocis:latest # ocis version = v5.0.5
    entrypoint:
      - /bin/sh
    command: ["-c", "ocis init || true; ocis server"]
    environment:
      # Keycloak IDP configuration
      PROXY_AUTOPROVISION_ACCOUNTS: true
      PROXY_ROLE_ASSIGNMENT_DRIVER: oidc
      OCIS_OIDC_ISSUER: https://host.docker.internal:8443/realms/oCIS # ocis is keycloak realm name
      PROXY_OIDC_REWRITE_WELLKNOWN: true
      WEB_OIDC_CLIENT_ID: web
      # general config
      OCIS_URL: https://host.docker.internal:9200
      OCIS_LOG_LEVEL: error
      OCIS_INSECURE: true
      OCIS_ADMIN_USER_ID: ""
      OCIS_EXCLUDE_RUN_SERVICES: idp
      GRAPH_ASSIGN_DEFAULT_USER_ROLE: false
      GRAPH_USERNAME_MATCH: none
      # PROXY
      PROXY_TLS: false
      PROXY_USER_OIDC_CLAIM: preferred_username
      PROXY_USER_CS3_CLAIM: username
      PROXY_CSP_CONFIG_FILE_LOCATION: /etc/ocis/csp.yaml
      KEYCLOAK_DOMAIN: ${KEYCLOAK_DOMAIN:-host.docker.internal:8443}
    volumes:
      - ./csp.yaml:/etc/ocis/csp.yaml
    extra_hosts:
      - host.docker.internal:host-gateway
    labels:
      traefik.enable: true
      traefik.http.routers.ocis.tls: true
      traefik.http.routers.ocis.rule: PathPrefix(`/`)
      traefik.http.routers.ocis.entrypoints: ocis
      traefik.http.services.ocis.loadbalancer.server.port: 9200

  postgres:
    image: postgres:alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: keycloak

  keycloak:
    image: quay.io/keycloak/keycloak:24.0.1
    command: ["start-dev", "--proxy=edge"]
    environment:
      KC_DB: postgres
      KC_DB_URL: "jdbc:postgresql://postgres:5432/keycloak"
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: keycloak
      KC_FEATURES: impersonation
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
    extra_hosts:
      - host.docker.internal:host-gateway
    labels:
      traefik.enable: true
      traefik.http.routers.keycloak.tls: true
      traefik.http.routers.keycloak.rule: PathPrefix(`/`)
      traefik.http.routers.keycloak.entrypoints: keycloak
      traefik.http.services.keycloak.loadbalancer.server.port: 8080
    depends_on:
      - postgres

volumes:
  postgres_data:
```

Save the above code in **compose.yaml** file locally and run docker command **docker compose up** in a terminal.

Docker compose serves three services:
- oCIS on `https://host.docker.internal:9200`
- Keycloak on `https://host.docker.internal:8443`
- Traefik dashboard on `http://host.docker.internal:8080/`

### Manual Steps For Setting Up oCIS With Keycloak
1. Go to oCIS url: `https://host.docker.internal:9200/`
> Note: The oCIS WebUI will not be accessible until Keycloak and oCIS are fully integrated.
  The discovery endpoint is unavailable, which is why the web interface is inaccessible.

![oCIS](/src/assets/Keycloak/images/oCIS-Keycloak/oCIS-Keycloak-UI-setup-1.png)

2. Go to Keycloak url: `https://host.docker.internal:8443/`

![Keycloak](/src/assets/Keycloak/images/oCIS-Keycloak/oCIS-Keycloak-UI-setup-2.png)

3. Create new realm:

![create realm](/src/assets/Keycloak/images/oCIS-Keycloak/create-realm-1.png)

- Realm name: `oCIS`
![create realm with name `oCIS`](/src/assets/Keycloak/images/oCIS-Keycloak/create-realm-2.png)
> Note: the realm name should be the name provided in the oCIS environment variable: `OCIS_OIDC_ISSUER: https://host.docker.internal:8443/realms/oCIS`

4. Add a new client:

![client registration](/src/assets/Keycloak/images/oCIS-Keycloak/client-registration-1.png)

- Client ID: `web`

![add client](/src/assets/Keycloak/images/oCIS-Keycloak/client-registration-2.png)

- Root URL: `https://host.docker.internal:9200`

![add root url](/src/assets/Keycloak/images/oCIS-Keycloak/client-registration-3.png)

5. Add realm roles:

- Role name: `ocisAdmin`

![add realm role](/src/assets/Keycloak/images/oCIS-Keycloak/create-realm-role.png)

> Note: oCIS has defined roles name that has been documented under [Automatic Quota Assignments](https://owncloud.dev/services/proxy/#automatic-role-assignments). So, we can't create the role with a random name.

6. Create a new user:

- With `username: admin` and other information:

![create user](/src/assets/Keycloak/images/oCIS-Keycloak/create-user-1.png)
![add user information](/src/assets/Keycloak/images/oCIS-Keycloak/create-user-2.png)

- Create password

![create password](/src/assets/Keycloak/images/oCIS-Keycloak/create-user-3.png)
![setup password for user](/src/assets/Keycloak/images/oCIS-Keycloak/create-user-4.png)

- Role Mapping: Assign `ocisAdmin` role

![assign role](/src/assets/Keycloak/images/oCIS-Keycloak/assign-role-to-user-1.png)

![assign role to user](/src/assets/Keycloak/images/oCIS-Keycloak/asign-role-to-user-2.png)

7. Update `roles` Client scope: `Client Scopes` -> `roles`

- `Mappers` -> `realm roles` -> `Token Claim Name=roles`
![update-roles](/src/assets/Keycloak/images/oCIS-Keycloak/update-roles.png)
> Note: oCIS default role_claim is 'roles'

8. Go to url `https://host.docker.internal:9200/`, reload if already opened
![login to oCIS with Keycloak](/src/assets/Keycloak/images/oCIS-Keycloak/oCIS-Keycloak-login.png)
Enter `username: admin` and `password: admin` to log into oCIS

### Setting Up oCIS With Keycloak Using JSON Files
Keycloak provides an [Importing and Exporting Realms](https://www.keycloak.org/server/importExport) feature. If we have JSON configuration files, then we can avoid manually setting services in Keycloak.
oCIS provides documentation to set up [oCIS with Keycloak](https://owncloud.dev/ocis/deployment/ocis_keycloak/) which uses JSON configuration.
If you want to automate Keycloak integration with oCIS services, then you can use json files.

In this blog post, we've talked about putting Keycloak and oCIS together. We've shown how to set them up using **Docker Compose**, making sure they work smoothly with **Traefik**.
We've also given step-by-step instructions on setting up oCIS with Keycloak manually, like making realms, adding clients and roles, and creating users.
For those who like using JSON files, Keycloak lets you do that to set things up more easily.
