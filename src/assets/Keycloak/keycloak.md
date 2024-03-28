---
title: Introduction to Keycloak
authorName: Amrita Shrestha
authorAvatar: https://avatars.githubusercontent.com/u/54478846?s=100&v=4
authorLink: https://github.com/amrita-shrestha
createdAt: March 26, 2024
tags: Keycloak
banner: https://blog.jankaritech.com/src/assets/keycloak/images/keycloak.png
---

## Keycloak
[Keycloak](https://github.com/keycloak/keycloak) is an open-source project for Red Hat SSO. It provides an `Identity and Access Management` solutions designed to secure application services.
Additionally, it enables users to authenticate through various identity providers and use fine-grained permissions for regulating access to Software as a Service (SaaS) applications.
Keycloak alternatives are Auth0, Zluri, Microsoft Azure Active Directory, Okta or WSO2 Identity Server.

It facilitates the creation of a user database with customizable roles and groups, offering functionalities such as user management, registration, and password policy enforcement.
This makes it a comprehensive Identity and Access Management (IAM) solution for contemporary applications. Keycloak's API enables the integration of all these features into your application
without the need for additional coding.

## Keycloak Features
![Keycloak features](/src/assets/Keycloak/images/keycloak-features.png)

1. `Identity Broker:`
   Identity Broker acts as a middleman, linking various service providers with different identity providers. It establishes trust with external identity providers to utilize their identities for accessing internal services offered by service providers.
   Imagine a textile company, which has two Keycloak setups: one for customer and another for internal employees. If you want your employees to access external services without creating new accounts on customer Keycloak, you can use the customer Keycloak
   as the mediator and the customer Keycloak as the source in this scenario.

2. `User Federation:`
   Keycloak provides the ability to integrate with existing LDAP or Active Directory servers. It also supports implementation of your own provider such as a relational database.

3. `Standard Protocols:`
   Keycloak is based on three standard protocols i.e., OpenID Connect, OAuth2.0, and SAML.

4. `Password Policies:`
   Keycloak contain different password policies i.e., HashAlgorithm, Hashing Iterations, Digits, Lowercase Characters, Regular Expression and so on.

5. `Single-Sign On:`
   Keycloak facilitates a seamless login experience where users only need to sign in once to access multiple applications, eliminating the need for repeated logins.
   This not only streamlines user experience but also simplifies identity management for administrators.

6. `Social Login:`
   Keycloak has built-in support for Google, GitHub, and Facebook which help us to use social identity providers.

## Keycloak Drawbacks
Despite its extensive features, Keycloak does have certain limitations. One of these is the need for a more varied implementation approach.
Additionally, the following are some of the drawbacks associated with Keycloak:
1. `Complex Server Deployment:` The manual process involved in deploying Keycloak on a server can be complicated, potentially affecting overall productivity.
2. `Lack of Comprehensive Support Documentation:` Despite its robust functionalities, Keycloak could benefit from more efficient and extensive support documentation. This would make it easier for users to find suitable solutions to their problems.

## SetUp Keycloak using docker
1. Keycloak using docker image
```bash
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:24.0.2 start-dev
```

2. Keycloak with postgres database using docker-compose
   ![Setup Keycloak using docker compose](src/assets/keycloak/images/start-keycloak-with-docker-compose.png)

## Why You Should Know Keycloak
1. Open source
2. Supports three different authentication protocols which give you the possibility to cover many applications with different security demands with a single tool.
3. Provides web-based GUI which makes any configurations changes easier.
4. Huge community support

## When It May Not Be the Best Choice
1. Enterprises seeking robust guarantees or support may find Keycloak lacking in this regard. As an open-source project, there are no assurances provided by its producer regarding its functionality or roadmap.
   Support is community-driven, typically through platforms like Stack Overflow, with no guaranteed response times.
2. If your application consists of a single application with just one client in the Keycloak realm, you won't benefit from Single Sign-On (SSO) capabilities.
3. For applications solely reliant on a pure user database, Keycloak could be overkill. A database with specific tables may offer a simpler alternative, especially if you already have one set up.
