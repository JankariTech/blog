---
title: Introduction to Keycloak
authorName: Amrita Shrestha
authorAvatar: https://avatars.githubusercontent.com/u/54478846?s=100&v=4
authorLink: https://github.com/amrita-shrestha
createdAt: May 14, 2024
tags: Keycloak, Identity Access Management
banner: https://blog.jankaritech.com/src/assets/Keycloak/images/Keycloak/Keycloak.png
---

[Keycloak](https://github.com/keycloak/keycloak) is an open-source project created by RedHat for Single Sign-On. It provides an `Identity and Access Management` (IAM) solution designed to secure application services.
Additionally, it enables users to authenticate through various identity providers and use fine-grained permissions for regulating access to Software as a Service (SaaS) applications.

It facilitates the creation of a user database with customizable roles and groups, offering functionalities such as user management, registration, and password policy enforcement.
This makes it a comprehensive Identity and Access Management solution for contemporary applications. Keycloak API enables the integration of all these features into your application
without the need for additional coding.

## Keycloak Features
![Keycloak features](/src/assets/Keycloak/images/Keycloak/Keycloak-features.png)

1. Identity Broker:
   Identity Broker acts as a middleman, linking various service providers with different identity providers. It establishes trust with external identity providers to utilize their identities for accessing internal services offered by service providers.
   Imagine a company, which has two Keycloak setups: one for customers and another for internal employees. If you want your employees to access external services without creating new accounts on the customer Keycloak, you can use the customer Keycloak
   as `Broker` and the internal Keycloak as `Provider` in this scenario.

2. User Federation:
   Keycloak provides the ability to integrate with existing LDAP or Active Directory servers. It also supports implementation of your own provider such as a relational database.

3. Standard Protocols:
   Keycloak is based on three standard protocols i.e., OpenID Connect, OAuth2.0, and SAML.

4. Password Policies:
   Keycloak contains different password policies i.e., HashAlgorithm, Hashing Iterations, Digits, Lowercase Characters, Regular Expression and so on.

5. Single Sign-On:
   Keycloak facilitates a seamless login experience where users only need to sign in once to access multiple applications, eliminating the need for repeated logins.
   This not only streamlines the user experience but also simplifies identity management for administrators.

6. Social Login:
   Keycloak has built-in support to login via Google, GitHub, and Facebook, which helps us to use social identity providers.

## Keycloak Drawbacks
Despite its extensive features, Keycloak does have certain limitations. One of these is the need for a more varied implementation approach.
Additionally, the following are some of the drawbacks associated with Keycloak:
1. Complex Server Deployment:
   The manual process involved in deploying Keycloak on a server can be complicated, potentially affecting overall productivity.

2. Lack of Comprehensive Support Documentation:
   Despite its robust functionalities, Keycloak could benefit from more efficient and extensive support documentation. This would make it easier for users to find suitable solutions to their problems.

## Keycloak Installation
### By Docker
Make sure [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) has been installed in your system.

1. Keycloak using docker image
Run the following docker command to serve the Keycloak image. Keycloak will be available on `http://localhost:8080.
```bash
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:24.0.2 start-dev
 ```

2. Keycloak with postgres database using docker-compose
```
services:
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
    command: ["start-dev"]
    environment:
      KC_DB: postgres
      KC_DB_URL: "jdbc:postgresql://postgres:5432/keycloak"
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: keycloak
      KC_FEATURES: impersonation
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
    ports:
      - 8001:8080 # map keycloak port 8080 to 8001
    depends_on:
      - postgres

volumes:
  postgres_data:
```

Save the above code in `compose.yaml` file and run `docker compose up` in a terminal.

Docker compose serves Keycloak on `http://localhost:8001`.

### By distribution file
There is another way to set up Keycloak using the keycloak distribution file.
1. Download the Keycloak distribution
    ```
    export KC_VERSION=24.0.4
    curl -LO  https://github.com/keycloak/keycloak/releases/download/"${KC_VERSION}"/keycloak-"${KC_VERSION}".zip
    ```

2. Unzip the Keycloak distribution package
    ```
    unzip keycloak-${KC_VERSION}.zip
    ```

3. Install openjdk
    ```
    sudo apt install openjdk-17-jdk
    ```

4. Navigate to the Keycloak directory
    ```
    cd keycloak-${KC_VERSION}
   ```

5. When we start the server for the first time, we have to set the admin user and the admin password:
    ```
   KEYCLOAK_ADMIN=admin KEYCLOAK_ADMIN_PASSWORD=admin ./bin/kc.sh start-dev
   ```
    > Note: if port 8080 is already used then you can map the Keycloak port using the Keycloak environment variable 'KC_HTTP_PORT=8001'

6. When we start again, it is not necessary to set these variables again. You can start the server with:
    ```
   ./bin/kc.sh start-dev
   ```
   > Note: start-dev runs the Keycloak application in DEV-mode. Do not use this for production.

By default, the Keycloak server is on port 8080 for http and 8084 for https. They are only served from the localhost loopback address 127.0.0.1:
Keycloak serves on `http://localhost:<port>`.

## Why Keycloak Matters?
1. Keycloak is open source.
2. Keycloak supports three different authentication protocols which gives you the possibility to cover many applications with different security demands with a single tool.
3. Keycloak provides a web-based GUI which makes any configurations changes easy.
4. Keycloak has huge [community support](https://www.keycloak.org/community).

## When It May Not Be the Best Choice?
1. Enterprises seeking robust guarantees or support may find Keycloak lacking in this regard. As an open-source project, there are no assurances provided by its producer regarding its functionality or roadmap.
   Support is community-driven, typically through platforms like Stack Overflow, with no guaranteed response times.
2. If your application consists of a single application with just one client in the Keycloak realm, you won't benefit from Single Sign-On (SSO) capabilities.
3. For applications solely reliant on a pure user database, Keycloak could be overkill. A database with specific tables may offer a simpler alternative, especially if you already have one set up.

In conclusion, when considering Identity Access Management solutions, Keycloak stands out as a robust option. However, it's essential to explore alternatives such as Auth0, Zluri, Microsoft Azure Active Directory, Okta, or WSO2 Identity Server to ensure you find the best fit for your specific needs and preferences.
