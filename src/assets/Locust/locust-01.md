---
title: Locust - 01 - Get Started
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Oct 30, 2019
tags: testing, performance, python, infrastructure
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
seriesTitle: Performance Testing with Locust
episode: 1
---

You have created your shiny-new webapp and deployed it, great! But how many customers can you serve with your infrastructure? How many users can your backend handle?
To answer those questions there are a couple of great performance-testing tools out there. One of them is [Locust](https://locust.io/)
The cool thing about locust is that you write your tests in plain python, so you can:
 - track your changes in git
 - test whatever you can code
 - don't have to use your mouse so much

Read [here](https://docs.locust.io/en/stable/what-is-locust.html#background) why locust was created in the first place

## Installation
 as simple as `pip install locustio` or `pip3 install locustio`

 (The rest of the blog I will assume you are using Python3)

## create your first test

create a file called `locustfile.py` with the content

```
from locust import HttpLocust, TaskSet, task, between

class UserBehaviour(TaskSet):
    @task
    def getFrontPage(self):
        self.client.get("/")

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = between(1, 10)
```

The class `User` represents users of your app. The class `UserBehaviour` is a collection of the actions these users do.
Every user will rerun the tasks every 1s till 10s `wait_time = between(1, 10)` The exact time between the requests will be chosen randomly.
Inside of the `UserBehaviour` class you define tasks, currently we have only one task, to send a `GET` request.

## run the tests

so lets start the beast:
`/home/<your user>/.local/bin/locust --host=http://<host-to-test>`
or
`locust --host=http://<host-to-test>`
if you have installed locust system-wide

Just make sure there is some HTTP server running under the given host

Now open http://localhost:8089/ in your browser
You will see two input fields, one to set the amount of users you want to simulate and one to tell locust how fast you want to ramp up the users

![Start new Locust swarm](/src/assets/Locust/images/locust-01-images/StartNewLocustSwarm.png)

Choose e.g. 20 users to simulate and 2 users/s as hatch rate and click "Start Swarming"

In the main screen you will now see some statistics about the amount of requests, and how long they took. In the "Charts" tab you will find the same data over time in a nice graph. "Failures" and "Exceptions" should be empty, because all of the requests should have succeeded. And last under "Download Data", you get the data as nice CSV files.

## what's next?

That all was nice and easy, but not very realistic. Does not matter if you want to test a web frontend or an API, just sending `GET` requests to `/` does not simulate what your users or clients will do. But we want to test what we fly and fly what we test. So in the next parts of this series we will extend the script to test an API in a more realistic way.
