---
title: keycloak Server
authorName: Amrita Shrestha
authorAvatar: https://avatars.githubusercontent.com/u/54478846?s=100&v=4
authorLink: https://github.com/amrita-shrestha
createdAt: March 26, 2024
tags: owncloud infinte scale, ocis, ocis-with-keycloak
banner: https://blog.jankaritech.com/src/assets/keycloak/images/keycloak-with-ocis.png
---

[In previous blog](src/assets/keycloak/keycloak.md), we explored the topic of Keycloak. In this current post, our focus shifts to discussing the setup of OCIS with Keycloak.


## Keycloak with ocis

### Run services
Before setting up `ocis with keycloak`, it's essential to deploy `keycloak and ocis`. This blog details the deployment of `ocis and keycloak` via `docker compose`.
Using `Traefik`, `ocis and keycloak` has been served using certificates.
You can either download the code from [GitHub](https://github.com/amrita-shrestha/keycloak-ocis/blob/master/compose.yaml) or utilize the code provided below:

```dockerfile
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
    image: owncloud/ocis:latest
    entrypoint:
      - /bin/sh
    command: ["-c", "ocis init || true; ocis server"]
    environment:
      # Keycloak IDP configuration
      PROXY_AUTOPROVISION_ACCOUNTS: true
      PROXY_ROLE_ASSIGNMENT_DRIVER: oidc
      OCIS_OIDC_ISSUER: https://host.docker.internal:8443/realms/ocis # ocis is keycloak realm name
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


### Manual configuration for ocis on keycloak
1. Go to ocis url: `https://host.docker.internal:9200/`
![ocis](src/assets/keycloak/images/ocis-keycloak-UI-setup-1.png)

2. Go to keycloak url: `https://host.docker.internal:8443/`
![keycloak](src/assets/keycloak/images/ocis-keycloak-UI-setup-2.png)

3. Create new realm: `ocis`
![create realm](src/assets/keycloak/images/create-realm.png)
![create realm with name `ocis`](src/assets/keycloak/images/create-realm-2.png)

4. Add a new client:
![client registration](src/assets/keycloak/images/client-registration.png)

- Client ID: `web`
![add client](src/assets/keycloak/images/client-registration-2.png)

- Root URL: `https://host.docker.internal:9200`
![add root url](src/assets/keycloak/images/client-registration-3.png)

5. Add realm roles:

- Role name: `ocisAdmin`
![add realm role](src/assets/keycloak/images/create-realm-role.png)

6. Create a new user:

- Username: `admin` and other info
![create user](src/assets/keycloak/images/create-user-1.png)
![add user information](src/assets/keycloak/images/create-user-2.png)

- Create password
![create password](src/assets/keycloak/images/create-user-3.png)
![setup password for user](src/assets/keycloak/images/create-user-4.png)

- Role Mapping: Assign `ocisAdmin` role
![assign role](src/assets/keycloak/images/assign-role-to-user.png)
![assign role to user](src/assets/keycloak/images/asign-role-to-user-2.png)

7. Update `roles` Client scope: `Client Scopes` -> `roles`
- `Mappers` -> `realm roles` -> `Token Claim Name=roles`
![update-roles](src/assets/keycloak/images/update-roles.png)

8. Go to url `https://host.docker.internal:9200/` reload if already opened
![login ocis with keycloak](src/assets/keycloak/images/ocis-keycloak-login.png)
