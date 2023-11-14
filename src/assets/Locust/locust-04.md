---
title: Locust - 04 - Interpret the Result
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Jan 14, 2020
tags: qa, performance, python, testing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
seriesTitle: Performance Testing with Locust
episode: 4
---

In the last post of this series, we set up locust and made some basic performance tests to test the ownCloud WebDAV-API. This time we will try to make some sense of the locust output.

Here is the locust file we are using:
```py
from locust import HttpLocust, TaskSet, task, constant
import uuid

userNo = 0

class UserBehaviour(TaskSet):
    adminUserName = 'admin'
    davEndpoint = "/remote.php/dav/files/"
    fileName = ''
    userName = ''

    def on_start(self):
        #create user
        global userNo
        self.userName = "locust" + str(userNo)
        userNo = userNo + 1
        self.client.post(
            "/ocs/v2.php/cloud/users",
            {"userid": self.userName, "password": self.userName},
            auth=(self.adminUserName, self.adminUserName)
        )

    def on_stop(self):
        from locust.clients import HttpSession
        self.admin_client = HttpSession(base_url=self.client.base_url)
        self.admin_client.delete(
            "/ocs/v2.php/cloud/users/" + self.userName,
            auth=(self.adminUserName, self.adminUserName)
        )

    @task(3)
    def downloadFile(self):
        self.client.get(
            self.davEndpoint  + self.userName + "/ownCloud%20Manual.pdf",
            auth=(self.userName, self.userName)
        )

    @task(1)
    def uploadFile(self):
        if self.fileName == '':
            self.fileName = "/locust-perfomance-test-file" + str(uuid.uuid4()) + ".txt"
        self.client.put(
            self.davEndpoint + self.userName + self.fileName,
            "my data",
            auth=(self.userName, self.userName)
        )

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = constant(1)
```

To start ownCloud, we have used docker: `docker run -p 8080:8080 --name owncloud owncloud/server`

and then started locust with: `locust --host=http://localhost:8080`

## Test the right thing

When I now run both ownCloud and locust on my workstation (i5-7500 CPU @ 3.40GHz; 8GB RAM) and hatch 100 locust users, I get this graph:

![locust output when running app and locust on same computer](/src/assets/Locust/images/locust-04-images/locust-running-on-same-computer.png)

But now have a look at the CPU usage (on Linux the easiest way to see it is to use the `top` command)
![CPU usage when running app and locust on same computer](/src/assets/Locust/images/locust-04-images/top-locust-uses-resources.png)

WOW, 61.7% CPU is used by locust itself. I'm not really testing the performance of ownCloud (or not alone). Besides locust gnome, X and Firefox are eating up a significant amount of resources, so the results will never be accurate. Better get some dedicated hardware to run ownCloud on.

I have here an old Lenovo X201 Laptop (i5 M 540 CPU @ 2.53GHz; 4GB RAM). Not really fast, but should be OK for this example. I will run ownCloud on that Laptop and locust on my workstation. That way, hatching 100 users still eats up the same amount of resources on the workstation, but because its fast enough that should not be the limiting factor. We really don't want the test-runner computer to limit our performance tests. If you don't have a computer that is fast enough to fully load your SUT (System Under Test), you can run [locus distributed](https://docs.locust.io/en/stable/running-locust-distributed.html) and that way utilize multiple computers to fully load your SUT.

## Interpret the results

Let's start the tests and increase the number of users.
I started the test with 20 users and 1 user/s hatch rate, then increased the users to 50 with 2 users/s hatch rate and finally to 100 users with 4 users/s hatch rate.

In the response-time graph, the green line shows the median response time and the yellow one the 95th percentile (95% of the requests finish before that time).

To calculate the *current* response time, a sliding window of (approximately) the last 10 seconds is used, see: [get_current_response_time_percentile function](https://github.com/locustio/locust/blob/6ba31c83acae6d26297a23de0eaaef34b3838330/locust/stats.py#L504).

As you can see, the median response time goes up as we add more users. And there is a "bump" in the 95th percentile line every time new users are created. So it looks like user creation is "expensive". (The "bump" is also visible in the median-line, but not that obvious).
![response time vs users](/src/assets/Locust/images/locust-04-images/increasing-users-increased-response-time.png)

Rerunning the tests shows a similar result.

BTW: Because there is always other stuff happening on the server, it is always good to run performance tests multiple times and see if you get similar results.

So from that information, how many users can our system handle? Maybe the better question is how long do you want your user to wait? In our test scenario, the user sends one request every second, either a download or an upload request. The download request appears 3 times more often than the upload (see "Weight of a task" in the [multiple tasks](https://dev.to/jankaritech/performance-testing-with-locust-02-multiple-tasks-4ckn) part).
If our server tries to serve 20 such users, 95% of the time it will be able to respond within 400-450ms or less (not taking the user-creation into account, in normal life we would not create new users all the time). When trying to serve 50 concurrent users, 95% of the time it will be able to respond within 1600-1800ms or less. And half of the time (median response time) users will have to wait for around 1000ms or more for a response. For 100 users that obviously looks even worse, the 95th percentile is around 6000ms and the median response time is around 3200ms.

Would it be acceptable for your application to let the user wait for 3sec or more for half of the requests? If not, you need to optimize the software or buy more hardware.

To see more details and maybe make more analysis, download the CSV data and open in a spreadsheet app.
These files have one line per request-type & URL, because we have the username in the URL, there will be a lot of lines.

In the request statistics CSV file we have the median/average/min/max response time for all uploads user0 has done, and all uploads user1 has done and so on. We can e.g. calculate the average response time of all uploads with the formula `=AVERAGEIF(A2:A301;"PUT";F2:F301)` (tested with [LibreOffice](https://www.libreoffice.org)). Column A holds the method name, column F is the average response time, and in my table there are 301 lines.

Be aware that this list will now hold ALL the results, from the time when we had 20 users, 50 users and 100 users, so if we want to know the average response time of uploads with a particular amount of users, we would have to rerun the test with a fixed amount of users and not change it in between.

## Optimization

When we started the ownCloud docker container, it created a database, and for that it used the SQlite database, that is good for quick testing and evaluation, but it's soooo slow. Have a look at the [documentation](https://doc.owncloud.com/server/10.3/admin_manual/installation/system_requirements.html#server), ownCloud says SQLite is not for production and recommends to use MySQL or MariaDB.
The simplest way to start ownCloud with MariaDB is to use [docker-compose](https://docs.docker.com/compose/) as described [here](https://doc.owncloud.com/server/admin_manual/installation/docker/). In addition, you also receive a Redis server to do some caching.

Running that proposed setup on my system shows that it improves the response time a lot when running with 20 users, the 95th percentile goes down to 220-250ms (vs 400-450 before), there is also some improvement when running with 50 users, but when running with 100 users, it actually gets worse (median 5200-6000ms and 95th percentile is often over 7000ms).

More tests showed that with 15 concurrent users, there is still 20-30% CPU time left most of the time, but with 20+ users the CPU is basically flat out.
Another interesting finding is that in the area around 15 users the CPU is still not fully utilized, but the hard-drive works already pretty hard (see `iotop`). My guess is that when running with <= 15 users a faster hard-drive, e.g. a SSD would improve the performance, but with more than 20 users an SSD would be a waste of money, because even if the data would arrive faster at the CPU, it struggles to do its calculation.

## Cross-check

Let's see if we can prove our assumption that ~15 users should be the max for our system. I'm simulating 30 users, but with a hatch-rate of 0.025 users/sec (I want to give the system enough time to create the user and to refresh the sliding window for the chart after user-creation).

Looking at the graph I see that up to ~10 users the median time does not change much (160-180ms), looking at the output of `top` at the same time I see that there is still a lot of CPU time unused and even with 14-15 users, the median time goes down to 190ms. After that pretty flat area in the graph, it goes up pretty steeply; the CPU is totally flat out.

Also have a look at the "Total Requests per Second" graph. Up to 15 users it steadily climbs up, but then there are valleys and hills, but the system struggles to serve more requests/s.

![slowly increasing the number of users](/src/assets/Locust/images/locust-04-images/slowly-increasing-num-of-users.png)

## Conclusion

1. The system scales well up to 15 users, meaning the single user would not experience any performance issues up to 15 concurrent users. Also, the user would not experience any faster system if she is the only user on the system.
2. Up to 15 users, the system can be optimized by using a better DB, caching, faster HDD and memory
3. Above 15 users, the CPU is the bottleneck and working on the suggestions in point 2, would not help.
