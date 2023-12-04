---
title: Containerize a Web Application using docker compose
authorName: Sagar Gurung
authorAvatar: https://avatars.githubusercontent.com/u/46086950?v=4
authorLink: https://github.com/SagarGi
createdAt: Nov 27, 2023
tags: docker-compose, docker, containerization, yaml, services
banner: https://blog.jankaritech.com/src/assets/DockerCompose/images/docker-cmopose-background.png
---

In this blog we will basically be containerizing a web application consisting of `MySQL`, `phpmyadmin`, `frontend` and `backend` as services using docker compose.
Also, we briefly get into how all those services are running and how multiple services make up an application running in multiple containers.
> Note: This article does not provide concepts of docker. To know concepts of docker [visit here.](https://blog.jankaritech.com/#/blog/How%20to%20use%20selenium%20in%20docker%3F)

## Brief About Docker Compose
In short, docker compose helps to define and run docker applications in multiple containers. With docker compose we can define a `yml` file where we can define our services, networks, and the volumes required for our application to get it running. Basically, configuring, defining and managing all the necessary things required for our application becomes easy with docker compose.

And in this blog, we will also be defining and configuring simple services for our application through a compose file and run it using docker compose.

## What is the application about (to be run with docker compose)?
The application we will be running with docker compose has 3 main services:
  1. `frontend` service
  2. `backend` service
  3. `mysql` service (database service)

Also, we will be running the 4th service `phpmyadmin` which is used for managing and administering MySQL with a GUI.
This is a very simple application for demo, where in the `mysql` database there are lists of user information and through the `frontend` service we will request to the `backend` service to get all those users and then list them in our application UI. Like this, all those application services are dependent and collaborating with each other. We will be configuring these through docker compose.

## Prerequisites
Before we start, lets make sure following things get installed into your system.
  1. install [docker](https://docs.docker.com/engine/install/debian/#install-using-the-repository)
  2. install [docker compose](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
  > Note: I will be doing the whole setup with Ubuntu 22.04 LTS. Things might differ if you have a different operating system.

## Getting Started

Since we have enough information about the application and the prerequisites are fulfilled. We can now jump to the section for defining and configuring our application with docker compose.

### Initiate file structure
  1. create a directory `dockercompose`
  2. create a docker compose yml file `dockercompose/compose.yml` inside it.
  3. Also create an empty `testdump.sql` file (I will mention the use of it later)

  It should look something like this.
  ```
  📦dockercompose
      ┗ 📜compose.yml
      ┗ 📜testdump.sql
   ```

### Defining and configuring services

Now inside the `compose.yml` let's define and configure the services for our application.

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

      Here, defining services in docker compose we use the keyword `services`. We have defined our service `database` configured with `image:mysql` and the `environment` variables required for it.
      We can see it has a `volumes` keyword used here. We can mount local data to the docker container using the `volumes` keyword. In this context, we have mapped `testdump.sql` which is in our
      local root directory which runs as an entrypoint when the container starts. It means when the `database` service is started in a container, the `testdump.sql` is the first thing which is run inside the container.
      The entrypoint script will create 4 users in the database. Add some sql commands inside of `testdump.sql`:

      ```sql
        CREATE TABLE users(userid INT PRIMARY KEY AUTO_INCREMENT, fullname VARCHAR(60), email VARCHAR(60));
        INSERT INTO users (fullname, email) VALUES ('Sagar Gurung', 'sagar@example.com');
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

      Similarly, we define and configure our backend as above with the necessary `image:sagar4321/demo-server` (this image is built and pushed to docker hub which I created), `environment` and `port 3001` (port where the server listens)
      Here, we have another keyword `depends_on` which has the value `database` service. It sets the order in which services must start and stop. For the above case, the `database` service starts before the `backend` service starts.

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

     Use a similar style of definition and configuration for the `frontend` service with `image: sagar4321/demo-web` (which I built and pushed to docker hub), `environment` and `port 8080` (where the `frontend` service listen).
     But here the `frontend` service depends on the `backend` service since it needs to be started before the `frontend` service.

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
     Also, the same thing applies to defining and configuring the `phpmyadmin` service. It also depends on the `database` service, and listens to `port:8081`

Now the overall `compose.yml` file after combining all the services together looks something like this:

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
Now all it takes is the following command to run the whole group of services in multiple containers and get our application running.
From the directory `dockercompose` in the terminal just run the command:
```console
docker compose -f compose.yml up
```

The command starts up all the services running together. Just wait a while so that all those services get up and running, then we can
see our application running in the browser. You can see different logs provided by different services in the console.

After a while we can access our `frontend` in our localhost which is running in port `8080`. Accessing the `frontend` service shows the list of users
that we created in the database. The `frontend` service makes a request to the `backend` service. The `backend` service gets data from the `database` and
the data is returned to the `frontend` service which is rendered in the User Interface. This is how multiple services running in different containers can collaborate
with each other through configuration using docker compose. There are lots of thing we can do through docker compose but this is just the basics of it.

The application page you get should be something like this in the browser http://localhost:8080:

![Application In Browser](/src/assets/DockerCompose/images/front-end.png)

And that's all, I hope this blog was a useful for you on how we can run multiple services in multiple docker containers of an application using one docker compose file.
