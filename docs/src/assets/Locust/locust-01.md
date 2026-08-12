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
To answer those questions, there are a couple of great performance-testing tools out there. One of them is [Locust](https://locust.io/)
The cool thing about locust is that you write your tests in plain python, so you can:
 - track your changes in git
 - test whatever you can code
 - don't have to use your mouse so much

Read [here](https://docs.locust.io/en/stable/what-is-locust.html#background) why locust was created in the first place

## Installation
 as simple as `pip install locust` or `pip3 install locust`

 (The rest of the blog I will assume you are using Python3)

## create your first test

create a file called `locustfile.py` with the content

```
from locust import HttpUser, TaskSet, task, between

class UserBehaviour(TaskSet):
    @task
    def getFrontPage(self):
        self.client.get("/")

class User(HttpUser):
    tasks = [UserBehaviour]
    wait_time = between(1, 10)
```

The class `User` represents users of your app. The class `UserBehaviour` is a collection of the actions these users do.
Every user will repeat the tasks, waiting between 1s and 10s between each task. The exact wait time is chosen randomly by `wait_time = between(1, 10)`.
Inside the `UserBehaviour` class you define tasks; currently we have only one task, to send a `GET` request.

## run the tests

so let's start the beast:
`/home/<your user>/.local/bin/locust --host=http://<host-to-test>`
or
`locust --host=http://<host-to-test>`
if you have installed locust system-wide

Make sure there is some HTTP server running under the given host

Now open http://localhost:8089/ in your browser
You will see a **Start new load test** form with several options:

- **Number of users (peak concurrency)**: The maximum number of users you want to simulate at the same time.
- **Ramp up (users started/second)**: The rate at which Locust starts new users.
- **Host**: The URL of the application you are testing. If it's already populated, you are good to go!
- **Run time**: This lets you set a specific duration for the test so it stops automatically.
- **Profile**: An optional load-test profile if you have configured profiles for your test.

![Start new Locust swarm](/src/assets/Locust/images/locust-01-images/StartNewLocust.png)

Choose e.g., 20 users to simulate, 2 users/s for ramp up and 2m for run time. Then start the load test.

On the main screen, you will now see some statistics about the number of requests, and how long they took. On the "Charts" tab, you will find the same data over time in a nice graph. "Failures" and "Exceptions" should be empty, because all the requests should have succeeded. The "Current Ratio" tab shows the current distribution of requests across tasks. Under "Download Data", you get the data as nice CSV files while the "Logs" tabs shows Locust's runtime logs.

## what's next?

That all was nice and easy, but not very realistic. Does not matter if you want to test a web frontend or an API, just sending `GET` requests to `/` does not simulate what your users or clients will do. But we want to test what we fly and fly what we test. So in the next parts of this series, we will extend the script to test an API in a more realistic way.
