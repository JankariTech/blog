---
title: Setup Your System
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Nov 27, 2019
tags: qa, performance, python, automation
banner:
seriesTitle: Performance Testing with Locust
episode: 3
---

In the [last part of this series](https://dev.to/jankaritech/performance-testing-with-locust-02-multiple-tasks-4ckn) we created multiple tasks to be able to simulate more realistically uploading and downloading files.

Now we want to go the next step and use multiple ownCloud users.

I will use the term "ownCloud user" for users that are set-up in the ownCloud system, have a username and password and can be used to login into the system. When I'm using the term "locust user" I'm talking about simulated users that hammer the server with requests. So far we used only one ownCloud user "admin" and multiple locust users. All locust users used that one ownCloud user to access the ownCloud server.

In this part of the series we want to have one ownCloud user for every locust user, so every `TaskSet` will be connecting with an own ownCloud user to the ownCloud server.

## setup and teardown
This situation is pretty common in any kind of automated testing, before starting the tests often you have to set your system up and bring it into a "testable" state, or simply into the state you want to test.
Basically all test frameworks will have some kind of `setup` and `teardown` methods or hooks. [Same applies to locust, you even can have a separate `setup` and `teardown` method in your Locust class and your TaskSet class.](https://docs.locust.io/en/stable/writing-a-locustfile.html#setups-and-teardowns)

consider this simple locust script

 ````
from locust import HttpLocust, TaskSet, task, constant

class UserBehaviour(TaskSet):
    def setup(self):
        print ("setup of TaskSet")

    def teardown(self):
        print ("teardown of TaskSet")

    @task(2)
    def one_task(self):
        print ("running one task")

    @task(1)
    def an_other_task(self):
        print ("running another task")

class User(HttpLocust):
    def setup(self):
        print ("setup of Locust class")

    def teardown(self):
        print ("teardown of Locust class")

    task_set = UserBehaviour
    wait_time = constant(1)
 ````

We have two tasks and a `setup` and a `teardown`, one in the `User` class and one in the `UserBehavior` class

Now lets see what happens.

1. Starting locust from the CLI:

   ```
    [2019-11-29 08:55:19,213] artur-OptiPlex-3050/INFO/locust.main: Starting web monitor at *:8089
    [2019-11-29 08:55:19,213] artur-OptiPlex-3050/INFO/locust.main: Starting Locust 0.13.2
   ```

2. Starting the test from the webUI with 2 users

   ```
    [2019-11-29 08:55:22,932] artur-OptiPlex-3050/INFO/locust.runners: Hatching and swarming 2 clients at the rate 1 clients/s...
    [2019-11-29 08:55:22,932] artur-OptiPlex-3050/INFO/stdout: setup of Locust class
    [2019-11-29 08:55:22,932] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout: setup of TaskSet
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:23,933] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:23,933] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:23,934] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:23,934] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/locust.runners: All locusts hatched: User: 2
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:24,935] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout:

    ...

    [2019-11-29 08:55:31,939] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout:
   ```

3. Stopping the tests on the webUI

4. pressing `Ctrl+C` on the CLI

    ```
    ^C[2019-11-29 08:55:57,191] artur-OptiPlex-3050/ERROR/stderr: KeyboardInterrupt
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/ERROR/stderr: 2019-11-29T03:10:57Z
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/ERROR/stderr:
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/locust.main: Shutting down (exit code 0), bye.
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/locust.main: Cleaning up runner...
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/locust.main: Running teardowns...
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout: teardown of TaskSet
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout: teardown of Locust class
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout:
    ```

Did you expect that? `teardown` only runs after locust is completely stopped, not when the test is stopped.
Makes sense, but does not help us with our issue, we want to create users before running the actual test and delete them afterwards. We might start and stop the test, without stopping locust and we can increase the locust users during the test and in that case we want to create more ownCloud users on the fly.

Luckily we have also `on_start` and `on_stop` methods

## create users with on_start

`on_start` is called when the locust user starts to run the TaskSet

Starting from the last script let's add an `on_start` method to create users
```
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

So what is new here?

The `on_start` method first constructs a ownCloud username out of "locust" & a number. The `userNo` variable has to be defined globally, so that it survives when locust initialize the next instance of the `User` class. Remember: the `Locust` class (`HttpLocust` inherits from `Locust`) represents one simulated user that accesses your application.

Next a `POST` request is send with the username as userid and password. That requests needs to be authenticated as the admin-user. ([Check the ownCloud docu if you are interested to learn more about those requests.](https://doc.owncloud.com/server/10.0/admin_manual/configuration/user/user_provisioning_api.html))

At last there is the `davEndpoint`, now it needs the specific username, so that information has been moved into the specific `GET` and `PUT` method.

If you run that script now with locust and start a test with, lets say 3 users, you should see something like that:
![users created in locust](/src/assets/Locust/images/locust-03-images/createUsersLocust.png)

The first line tells us that 3 `POST` requests have been sent to `/ocs/v2.php/cloud/users`, that looks promising.
And in the `PUT` ans `GET` requests, the usernames "locust0" till "locust2" are mentioned, very good!

Now lets look into the users list of ownCloud. For that login with "admin" / "admin" to http://localhost:8080/ and in the top right corner click on "admin" and then on "Users".

![owncloud users list](/src/assets/Locust/images/locust-03-images/owncloudListUsers.png)

Those three users were created and used. If you want to double check use them to login to ownCloud, you should see the uploaded file.

## delete users with on_stop
The only thing left is to clean up after us. Obviously we can simply kill the docker container, delete it and start it fresh with no users, but wouldn't it be nice to delete the users after stopping the test?

Let's use `on_stop` to clean up! It is run when the TaskSet is stopped.

Just add a simple small method to the `UserBehaviour` class:

```
def on_stop(self):
    self.client.delete(
        "/ocs/v2.php/cloud/users/" + self.userName,
        auth=(self.adminUserName, self.adminUserName)
    )
```

Remember to delete the users from ownCloud before rerunning the script (or just do `docker kill owncloud; docker rm owncloud` and start it again)

Now when you start the test and stop it again, you will see `DELETE` requests in the list, one per hatched locust user.
But what's that? The `DELETE` requests fail with `HTTPError('401 Client Error: Unauthorized for url: http://localhost:8080/ocs/v2.php/cloud/users/locust0',)`

Digging deeper (e.g. with WireShark) shows that the requests not only had the correct Authorization header sent, but also some cookies.
```
DELETE /ocs/v2.php/cloud/users/locust0 HTTP/1.1
Host: localhost:8080
User-Agent: python-requests/2.22.0
Accept-Encoding: gzip, deflate
Accept: */*
Connection: keep-alive
Cookie: cookie_test=test; oc1j5vb7hdm0=q2mv4lb5f2b37ti3etn8s1e0f1; oc_sessionPassphrase=y2u2sfTFfk8xx4cyIQZbycNvit4q0ZcKr4nHiiA7vSrGN%2BOZI30Ruvf3B5NyZrAxwtDNGz1wI7F6Yb2gjGsn%2FCnZ8Xpw3U8qRur1NrNcpJv%2Bm9egvmUiflwp3j7Rd3IG
Content-Length: 0
Authorization: Basic YWRtaW46YWRtaW4=
```

locust got those cookies from the first `GET` request we have sent as the specific ownCloud user, and it has kept them for all future requests. Generally that is a good thing, but ownCloud now ignores the Authorization header and uses the cookies to authenticate. So we effectively authenticate as the specific ownCloud user e.g. `locust0` and that user has no privilege to delete itself.

I could not find a way to clear the session, so we need a new one.
For that change the `on_stop` function to:

```
def on_stop(self):
    from locust.clients import HttpSession
    self.admin_client = HttpSession(base_url=self.client.base_url)
    self.admin_client.delete(
        "/ocs/v2.php/cloud/users/" + self.userName,
        auth=(self.adminUserName, self.adminUserName)
    )
```

Here we import the locust `HttpSession` class and use it to create a new session, with no cookies in our way.

And here we go, when starting and stopping the tests we have successful `DELETE` requests. One per hatched locust user.

![successfull user deletion](/src/assets/Locust/images/locust-03-images/deleteSuccess.png)

## what's next?
We have now some basic tests, now it's time to look closer into the metrics and try to understand the meaning of all the numbers locust throws at us.
