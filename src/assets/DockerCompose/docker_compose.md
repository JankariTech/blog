---
title: Containerize a Web Application using docker compose
authorName: Sagar Gurung
authorAvatar: https://avatars.githubusercontent.com/u/46086950?v=4
authorLink: https://github.com/SagarGi
createdAt: Aug 31, 2023
tags: docker-compose, docker, containerization, yaml
banner: https://raw.githubusercontent.com/DevExpress/testcafe-gh-page-assets/master/src/images/testcafe-ogp-icon.png
---

In this blog we will basically be containerizing a web application consisting of `MySQL`, `phpmyadmin`, `frontend` and `backend` as service using docker compose.
> Note: This article does not provide concepts of docker. To know concepts of docker [visit here.](https://blog.jankaritech.com/#/blog/How%20to%20use%20selenium%20in%20docker%3F)

Setting up an application can be a bit hefty if application is dependent to various services when setting up locally. But we can easily configure and containerize the whole application and its services in a single docker compose file and make the whole application running not only in your machine but in whole development environment.
In this blog we will make a basic `docker-compose.yml` for a simple demo web application to make it run through the `yaml` file in your machine. So lets get right into it.

## Prerequisites
For better understanding how we write a docker compose yaml file, it is better to understand how you set up the application locally in your machine. I urge to set the demo web application into your system. For that the following things needs to be installed.
- [Node.js](https://nodejs.org/en) version 16 or above. (needed for local setup - optional)
- MYSQL (needed for local setup - optional)
- [Docker](https://docs.docker.com/engine/install/)
- And [docker compose](https://docs.docker.com/compose/install/)

> Note: For this blog the whole setup is done in ubuntu 22.04 LTS

## Setting up wep application locally (Optional)
I assume all the requirements above is installed in your machine. So, lets set up the demo web application locally.
I have a web application which has frontend `demo-web` and backend `demo-server` in `github` publicly available. It is a very basic web application built in `vue-js` that uses `mysql` as database. With this basic application we can register the user and view the registered user in the web.
Let's get right into setting it up.
1. To set up `front-end`, visit [demo-web](https://github.com/SagarGi/demo-web) and follow the `read-me` section to set up manually in your machine.
2. To set up `back-end`, visit [demo-server](https://github.com/SagarGi/demo-server) and follow the `read-me` section to set up manually in your machine.

> Note: Please follow the `read-me` set the application locally since it will be easier to write docker compose yaml file.

If you were able to set up the whole application locally then kudos, it will make very easy to write docker compose file. Now, we will be creating a docker compose file through which we will be setting up and running the whole application.


## Building image locally
While writing compose file we will be using the docker image of our `front-end` and `back-end` and also `mysql` so that all of them can run in the container so that with the help of `docker compose` tool those services running in different container can be start and managed as a single unit.
For that lets create docker image for `front-end` and `mysql`. But for `mysql` we will be building it while running the container itself.
### Create docker images
1. Inside the root directory of the `demo-web` run the following command
```bash
docker build -t font-end .
```
2. Inside the root directory of the `demo-server` run the following command
```bash
docker build -t back-end .
```
3. Check if the built images are locally available with the following command
```bash
docker images
```
The output should be as:
```console
REPOSITORY                          TAG            IMAGE ID       CREATED              SIZE
back-end                            latest         993a0f768a01   13 seconds ago       1.11GB
font-end                            latest         2f97413050fe   About a minute ago   1.22GB
```

Now that we have the docker images of `fron-end` and `back-end` locally we are set to create a compose file.

## Creating docker compose file and running web application-
- Inside the root directory of the `demo-server` create a file name as `docker-compose.yml`
  - Inside the created `docker-compose.yml` file lets define our required services i.e `front-end`, `back-end` and `mysql`
    1. Defining `mysql` service
        ```yaml
        version: "3.8"

        services:
          db:
            build: ./Database
            ports:
              - "3306:3306"
            environment:
              - MYSQL_ROOT_PASSWORD=pass
              - MYSQL_DATABASE=demodb
            restart: always
        ```
        Here we have defined `db` service which is `mysql` required for our web application as database. In the above service `db` is the name of service, the build configuration option builds the image of mysql inside of directory `./Database` which basically consists of docker file and other configuration to set up the mysql running inside of a container.
    2. Defining `fontend` service
        ```yaml
              frontend:
                image: front-end #the image we built locally
                ports:
                  - "8080:8080"
                environment:
                  - SERVER_URL=http://0.0.0.0:3001
                depends_on:
                  - backend
        ```
    3. Defining `backend` service
        ```yaml
              backend:
                image: back-end #the image we built locally
                ports:
                  - "8080:8080"
                environment:
                  - PORT=3001
                  - DBHOST=db
                  - DBPORT=3306
                  - DBUSER=root
                  - DBNAME=demodb
                  - DBPASSWORD=pass
                depends_on:
                  - db
        ```
    Here in step `b and c` we have defined both `frontend` and `backend` services with different `environment` required to run it. The services use the local `image` that was built earlier `front-end` and `backend`. Also, both have `ports` option to be accessed to your host from the container.
    Also `depends` option is used in both, for `frontend` service to run `backend` needs to run before it and also same applies for `backend` service which depends on `mysql` service.
    <br></br>
    Now the complete `docker-compose.yml` looks something like this.
    ```yaml


    ```
