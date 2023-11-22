---
title: Containerize a Web Application using docker compose
authorName: Sagar Gurung
authorAvatar: https://avatars.githubusercontent.com/u/46086950?v=4
authorLink: https://github.com/SagarGi
createdAt: Aug 31, 2023
tags: docker-compose, docker, containerization, yaml, services
banner: https://blog.jankaritech.com/src/assets/DockerCompose/images/docker-cmopose-background.png
---

In this blog we will basically be containerizing a web application consisting of `MySQL`, `phpmyadmin`, `frontend` and `backend` as service using docker compose.
Also, briefly get into how all those services are running and how multiple services make up an application running in multiple containers
> Note: This article does not provide concepts of docker. To know concepts of docker [visit here.](https://blog.jankaritech.com/#/blog/How%20to%20use%20selenium%20in%20docker%3F)

## Brief About Docker Compose
In very short a docker compose helps to define and run docker applications in multiple containers. With docker compose we can define a `yml` file where we can define our services, networks, volumes required for our application to get it running. Basically configuring, defining and managing all the necessary things required for our application becomes easy with docker cmopose.

And in this blog we will also be defining and configuring simple services for our application through a compose file and run it using docker compse.

## What is the application about (to be run with docker compose)?
The application we will be running with docker compose has mainly 3 services:
  1. `frontend` service
  2. `backend` service
  3. `mysql service` (database service)

Also, we will be running the 4th service `phpmyadmin` which is used for managing and administering the MySQL through GUI.
This is a very simple application for demo, where in `mysql` database there are lists of user information and through the `frontend` service we will request to `backend` service to get all those users and to be listed in our application UI. Like this all those application services are dependent and collaborating to each other. We will be configuring the exact same thing through docker compose.

## Prerequisites
Before we start, lets make sure following things get installed into your system.
  1. install [docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
  2. install [docker compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)
  > Note: I will be doing the whole setup with Ubuntu 22.04 LTS. Things might differ if you have different operating system.

## Getting Started

Since we have enough information about the application And, also I assumed that the prerequisites are fulfilled. we can now jump to the section for defining and configuring our application with docker compose.

### Initiate file structure
  1. create a directory `dockercompose`
  2. create a docker compose yml file `dockercompose/compose.yml` inside it.
  3. Also create an empty `testdump.sql` file (will mention the use of it later)

  It should look something like this.
  ```
  📦dockercompose
      ┗ 📜compose.yml
      ┗ 📜testdump.sql
   ```

### Defining and configuring services

Now inside the `compose.yml` lets define and configure the services for our application.

  1. database service (mysql)

      ```yml
     version: "3.8"

     services:
        database:
          image: mysql
          environment:
            MYSQL_ROOT_PASSWORD: root
            MYSQL_DATABASE: demodb
          volumes:
            - ./testdump.sql:/docker-entrypoint-initdb.d/testdump.sql
          restart: always
     ```

      Here, defining services in docker compose we use keyword `services`. We have defined our service `database` configured with `image:mysql` and `environment` variables required for it.
      We can see it has a volumes keyword used here. Simply through volume we can mount our local data to the docker container. In this context we have mapped `testdump.sql` which is in our
      local root directory and ran as an entrypoint when the container starts. It means when `database` service is started in a container the `testdump.sql` is the first thing which run inside the container.
      And entrypoint script basically creates 4 users in the database. So we need to add some sql command inside of `testdump.sql` as:
      Like this we defined and configured database service for our application.

      ```sql
        CREATE TABLE users(userid INT PRIMARY KEY AUTO_INCREMENT, fullname VARCHAR(60), email VARCHAR(60));
        INSERT INTO users (fullname, email) VALUES ('Alice Smith', 'alice@example.com');
        INSERT INTO users (fullname, email) VALUES ('Bob Johnson', 'bob@example.com');
        INSERT INTO users (fullname, email) VALUES ('Eva White', 'eva@example.com');
        INSERT INTO users (fullname, email) VALUES ('Michael Brown', 'michael@example.com');
        ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';
        flush privileges;
     ```
  2. backend service

      ```yml
        backend:
          image: sagar4321/demo-server
          environment:
            PORT: 3001
            DBHOST: database
            DBPORT: 3306
            DBUSER: root
            DBNAME: demodb
            DBPASSWORD: root
          restart: always
          ports:
            - "3001:3001"
          depends_on:
            - database
      ```

      Similarly, we define and configure our backend as above with necessary `image:sagar4321/demo-server` (this image is built and pushed to docker hub which I created), `environment` and `port 3001` (port where the server listen)
      Here, we have another keyword `depends_on` which has value `database` service, that means that `backend` service is only ran after `database` successfully run.

  3. frontend service

      ```yml
          frontend:
            image: sagar4321/demo-web
            environment:
              SERVER_URL: http://0.0.0.0:3001
            ports:
              - 8080:8080
            depends_on:
              - backend
      ```

      Same definition and configuration for the `frontend` service with `image: sagar4321/demo-web` (which I built and pushed to docker hub), `environment` and `port 8080` (where the `frontend` service listen).
      But here the `frontend` service depends on `backend` service since it needs to be started before the `frontend` service.

  4. phpmyadmin service

      ```yml
        phpmyadmin:
          image: phpmyadmin/phpmyadmin
          restart: always
          environment:
            PMA_HOST: database
            PMA_PORT: 3306
          ports:
            - "8081:80"
          depends_on:
            - database
      ```
     Also, same thing applies defining and configuring `phpmyadmin` services. It also depends on `database` services. And listen to `port:8081`

Now the overall `compose.yml` file after combining all the services together looks something like this as one:

```yml
version: "3.8"

services:
  database:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: demodb
    volumes:
      - ./testdump.sql:/docker-entrypoint-initdb.d/testdump.sql
    restart: always

  server:
    image: sagar4321/demo-server
    environment:
      PORT: 3001
      DBHOST: database
      DBPORT: 3306
      DBUSER: root
      DBNAME: demodb
      DBPASSWORD: root
    restart: always
    ports:
      - "3001:3001"
    depends_on:
      - database

  web:
    image: sagar4321/demo-web
    environment:
      SERVER_URL: http://0.0.0.0:3001
    ports:
      - 8080:8080
    depends_on:
      - server

  phpmyadmin:
    depends_on:
      - database
    image: phpmyadmin/phpmyadmin
    restart: always
    environment:
      PMA_HOST: database
      PMA_PORT: 3306
    ports:
      - "8081:80"

```

Yes, we have finally completed setting up our required services for our application through the compose file `compose.yml`
Now all it takes is the below single command to run the whole services in multiple containers and get up our application running.
From the directory `dockercompose` in the terminal just run the command as:
```console
docker-compose -f compose.yml up
```

The command get up all the services running together, just wait a while so that all those services get up running, then we can
see our application running in the browser. You can see different logs of provided by different services in the console

After a while we can access our `frontend` in our localhost which is running in port `8080`. Accessing the `frontend` services shows the list of users
that we created in the database. Simply the `frontend` service makes request to `backend` service, while `backend` service gets data from the `database` and
the data is returned to the `frontend` service which is rendered in the User Interface. This is how multiple services running in different container can collaborate
to each other through configuration using docker compose. There are lots of thing we can do through docker compose but this is just the basic of it.

The application page you should get should be something like this in the browser https://localhost:8000:

![Application In Browser](/src/assets/DockerCompose/images/front-end.png)

And that all, I hope this blog was a bit useful for you on how we can run multiple services in multiple docker containers of an application as one using the docker compose.
