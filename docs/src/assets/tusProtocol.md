---
title: Resumable file upload with TUS protocol
authorName: Swoichha Adhikari
authorAvatar: https://harunmudak.com/wp-content/uploads/2020/12/girl-cartoon-characters-3-724x1024.jpg
authorLink: https://github.com/swoichha
createdAt: Feb 10, 2022
tags: tus, upload, resumable
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
---

```
"Work half done is still some work done"
```

We all have faced problems while uploading a file. Whether it is an error with a file exceeding the maximum upload size or failing to write a file to disk.

Here, in this blog, we are going to talk about partial upload failing. We all have been to that place where we have uploaded a huge file and have been waiting for minutes if not hours to finish the uploading process. Finally, the moment comes when our upload is about to be completed but then some error occurs, and our upload fails.

Now, you have to go through all the trouble to re-upload it, which is irritating as well as time-consuming.

There might be various factors for such failure. Such as a weak internet connection, your browser might crash, etc.
So, what can we do? Should we re-upload the whole file? But then again, the re-uploading process will take the same amount of time and effort that it required earlier. If only there was a way that we could continue from where the last failure occurred.

Well, we are in luck because the answer is simple, "TUS upload".

## What is TUS?

TUS stands for Transloadit Upload Server.

"TUS is a protocol for resumable uploads built on HTTP. It offers simple, cheap, and reusable stacks for clients and servers. It supports any programming language, any platform, and any network."

## Why TUS?

So, the question may arise; why do we need TUS? The thing about TUS is that it allows us to continue uploading our file from where we left off even after it has failed previously.

For example, We are trying to upload a file of 100 GB and due to some interruption, we were able to upload only 60 GB of the data. Normally, we would re-upload the file, which means we will be uploading the 60 GB of the same data that was already uploaded in a prior upload. But, using TUS, we won't need to upload that 60 GB. We will be uploading only the remaining 40 GB of data.

## Pros

- It is built upon HTTP and supports any programming language, any platform, and any network.
- The main advantage of using TUS is that you can start uploading files from the point where you left off last time.
- It is open source. So, anyone can use and contribute to it.
- It allows the user the ability to pause and resume the upload anytime they want (even after multiple days).
- It can handle increasing numbers of connections and uploads.

To see a demo of how it works, you can visit the [Resumable File Upload Demo](https://tus.io/demo.html) and for real-life implementation of TUS resumable upload protocol have a look at [this](https://tus.io/implementations.html).

This brings us to the end of this blog. In the next blog, we will look into specifications for the TUS protocol and its HTTP methods.
