---
title: How to use selenium in docker?
authorName: Hari Bhandari
authorAvatar: https://avatars.githubusercontent.com/u/34328907?v=4
authorLink: https://github.com/HariBhandari07
createdAt: April 23, 2020
tags: docker, selenium, automation
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
---

## What is docker?
![not_working](https://user-images.githubusercontent.com/34328907/78120341-7b56f900-7429-11ea-9b3f-1a5e17b813da.png)

Can you recall how many times you face an issue where code runs in another developer's machine but doesn't work on yours? Docker
at a very basic level resolves this issue of an application working on one platform and not working on some other platform.

Docker is a tool which is used to automate the deployment of applications in lightweight containers so that applications can
work efficiently in different environments. It does this by virtualizing the operating system of the computer on which it is
installed and running. A docker container is basically a software package that consists of all the dependencies required to run an
application.


## Why docker?
Let’s say you have three different nodejs applications that you plan to host on a single server.

Each of these applications makes use of a different version of nodejs and mongodb, as well as the associated libraries and dependencies, which differ from one application to another.

Now, we cannot host all three applications on the same machine as different versions of nodejs and other dependencies are required.

We can solve this problem either by having three different machines, or a single machine, which is powerful enough to host and run three virtual machines on it.

But both solutions are quite cumbersome. In this case, docker is an efficient and cost-effective solution to this problem. With docker, we are able to run all the three apps in a separate container with its own dependencies and libraries, all within a single machine. Containers are completely isolated environments that can have their own processes, services, and network interfaces just like virtual machines except they all share the same OS kernel.

![Screenshot from 2020-04-01 15-48-54](https://user-images.githubusercontent.com/34328907/78125190-6336a800-7430-11ea-91f6-644ca63d9e54.png)

## Docker Installation
Follow the installation instructions given in https://docs.docker.com/install/ to install docker according to your operating system. But, I suggest you use Linux, preferably Ubuntu for this blog/tutorial as later we will use a docker network command that works only on Linux.

And follow docker post-install instructions given usually at the end of the "installation instructions" page to create a docker group.

## Selenium

Usually, for running tests using selenium we download `selenium standalone server JAR` file and `chrome driver` and start selenium server with a command which usually looks like:

`java -jar selenium-server-standalone-<selenium version>.jar -port <port-no>`

Now, let's suppose we want to run tests with different browsers or various browser versions. Here, we have to install all the browsers and the versions we want to test on our development environment. We also need to find the corresponding selenium and the webdriver version for it. Ever tried to install multiple versions of the same browser on your machine?

In this case too, docker comes to the rescue.

Selenium provides Docker images out of the box to test with one or several browsers. The images spawn a Selenium server and a browser underneath. It can work with different browsers.

Now to run selenium using docker we just need to run [selenium/standalone-chrome](https://hub.docker.com/r/selenium/standalone-chrome) or [selenium/standalone-firefox](https://hub.docker.com/r/selenium/standalone-firefox) as:

`docker run -d -v /dev/shm:/dev/shm selenium/standalone-chrome-debug`

Here
- `-d` runs the container in the background (detached)
- `-v /dev/shm:/dev/shm` adds a volume mount to use the host’s shared memory. There is no requirement for a volume mount but it is recommended.

Once you run the command, Docker will download the selenium image and run the container straight away (port: `4444`).

## Networking using the host network
When the docker container is running it has its own `localhost` which is relative to its container and it has no awareness of `localhost` running on the host OS. Because of this, we cannot access the selenium container at `localhost:4444`. Also, the selenium container won't be able to access the apps running on `localhost` of the host OS.

How do we solve this problem?

The answer is simple - we use docker option `--network="host"` in `docker run` command. If we use the `host` network mode for a container, that container’s network stack is not isolated from the docker host, and the container does not get its own IP-address allocated. Now, the selenium container will be available on port 4444 on the `localhost`.

Now, the `docker run` command should basically look like:

`docker run -d --network="host" -v /dev/shm:/dev/shm selenium/standalone-chrome-debug`

                        OR

`docker run -d --network host -v /dev/shm:/dev/shm selenium/standalone-chrome-debug`

The host networking driver only works on Linux hosts, and is not supported on Docker Desktop for Mac, Docker Desktop for Windows, or Docker EE for Windows Server.

## Run test from the docker host, using selenium within a docker container
Requirements:
1. chrome
2. nodejs and yarn
3. linux (to use `--network="host"` in `docker run` command)

Clone this basic todo app: https://github.com/HariBhandari07/todo-with-tests
This is a single page todo app with basic acceptance tests

1. Install the necessary dependencies using the following command inside the project directory:

`yarn install`

2. Start the development server at `localhost:3000` using command:

`yarn start`

3. Run selenium in docker with

`docker run -d --network="host" --name selenium -v /dev/shm:/dev/shm selenium/standalone-chrome-debug`

4. Run the acceptance tests using command:

`yarn acceptance-tests tests/acceptance/features/login.feature`

The full script to run the acceptance tests is specified in `scripts` object of `package.json` file inside the project's root directory.

The above commands run our test at `localhost:3000`.

After you run the above command, you can see the tests running on the selenium docker container by using VNC.

If you are on Ubuntu:

- open `Remmina` (Remmina is a Remote Desktop Client and comes installed with Ubuntu)

- choose `VNC` and enter `localhost` on the address bar

- enter `secret` as the password

![reminna](https://user-images.githubusercontent.com/34328907/79425650-ba687b00-7fe1-11ea-8b76-9d1100cc05c7.png)

Now, you should see the test running on VNC

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/34328907/79431517-47afcd80-7fea-11ea-8b83-0b7d729eb1e6.gif)
