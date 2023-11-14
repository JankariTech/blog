---
title: Serving your cat video using the Internet - A basic understanding of HTTP and socket programming (in Java)
authorName: Saksham Gurung
authorAvatar: https://avatars.githubusercontent.com/u/41365307?v=4
authorLink: https://github.com/sakshamgurung
createdAt: Dec 6, 2021
tags: socket, java, http, video
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
---

This blog explains the basic understanding of HTTP, client-server model, network layers, and some socket programming in Java.

## Roles on the Internet
Developers and designers can select different arrangements and architecture for their computers to develop an internet service. In this article, we are talking about the most commonly used `client-server` model. There are mainly two roles in this model:
- client: A client computer initiates a request for the resources and the information from the server computer.
- server: A server computer processes the client request and responds with appropriate information.

<figure align="center">
    <img alt="client server model" width="383.7" height="357.7" src="/src/assets/UnderstandingHttpAndSocket/images/clientServerModel.png" />
    <figcaption>Fig.1: Client-Server model</figcaption>
</figure>

## A common language
To conduct communication between a client and a server, a common language is necessary. We can develop and use any language we desire to make these computers communicate with each other. But to make it usable, compatible, and widely accessible, we need a standardized language (aka protocol). This is where the HTTP protocol comes in.

- HTTP protocol defines the structure for request and response messages. It is like sending a parcel to your friend with an address structured as street name, city name, state name, zip code, and country code.
- HTTP defines operations that can be performed on a given resource. These are called HTTP request methods. They are also referred to as HTTP verbs. Some examples are:
    - The GET method requests a representation/state of the specified resource/data. It should only retrieve data.
    - The POST method submits an entity to the specified resource, often causing a change in the server.
- HTTP protocol also defines different sets of status codes to indicate different states that may occur during communication like successful responses (200-299), client error responses (400-499), server error responses (500-599), etc.
- HTTP requests and responses share a similar structure and are composed of:
    - A single start-line describing the requests/response to be implemented, or its status of whether successful or a failure.
    - An optional set of HTTP headers specifying the request/response or describing the body included in the message.
    - A blank line indicating all meta-information for the request has been sent.
    - An optional body containing data associated with the request (like the content of an HTML form) or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

<figure align="center">
    <img alt="HTTP message structure" width="1035" height="369.75" src="/src/assets/UnderstandingHttpAndSocket/images/httpMsgStructure.png" />
    <figcaption>Fig.2: Structure of HTTP message</figcaption>
</figure>

## Soft layers
The software model of the Internet can be defined by two types of layered models: **OSI model** (for reference only) and **Internet Protocol Suite** (practically implemented and used by the Internet). Without going into much depth, the main points are:
- Every computer (client or server), and network device that supports the Internet implements the IP suite model.
- These models are structured as layers, so we say the model has a layered structure
- Each layer has its responsibility and hides its implementation (inner working) from other layers
- Each layer provides an interface to the layers immediately above or below itself

> Note:
In the IP suite model, the *Application* layer combines all three layers from the OSI model i.e. *Application* + *Presentation* + *Session*
In the IP suite model, the *Link* layer combines the lower two layers from the OSI model i.e. *Physical* + *Datalink*
The lowermost layer from each model connects with physical network devices like routers, switches, etc.

<figure align="center">
    <img alt="network layered model" width="744" height="393" src="/src/assets/UnderstandingHttpAndSocket/images/networkLayeredModel.png" />
    <figcaption>Fig.3: Layered Model of a network</figcaption>
</figure>


HTTP comes under the *Application* layer which is accessible to the user process. HTTP protocol uses the services provided by the *Transport* layer (TCP or UDP) to establish and conduct communication with other computers on the Internet. But to glue these two layers together, the operating system provides an interface called the socket API. Programming that utilizes the socket API is called socket programming.

A socket is like the two ends of a water pipe that handles the flow of water. But the only difference is that the information flows in both directions in a socket. A socket can be identified by a socket address which combines protocol type, IP address, and port number. The Socket API makes it easy to use different protocols and develop communication in a network. The following figure shows a general flow of communication using the socket API. We will understand more about these socket functions later in our coding part.

> Note:
This figure shows the socket functions implemented in the C language. In this article, we will be using socket functions from Java.

<figure align="center">
    <img alt="TCP socket workflow" width="623.25" height="697.5" src="/src/assets/UnderstandingHttpAndSocket/images/tcpSocket.png" />
    <figcaption>Fig.4: Flow of communication between client-server socket using TCP (in C)</figcaption>
</figure>

## Coding
### Basic files and project structure
> Note:
> Please first install `java JDK` for this project, set up your environment variables, and check everything is working well.

1. Main project folder will contain a `public` and a `resources` folder. In the `public` folder, we will store all our `.html` pages, and in the `resources` folder, we will store our resources like images, videos, etc.
2. Our main server program `WebServer.java` will be in the project's root directory.

```html
    <!-- ./public/index.html -->
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Cat Paws</title>
    </head>
    <body>
        <div>
            <h1  style="text-align: center;">Cat Paws</h1>
            <a  style="display: flex; justify-content: center;" href="cats">Serve me some cat videos</a>
        </div>
    </body>
    </html>
```
```html
    <!-- ./public/cats.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Cat Paws</title>
    </head>
    <body>
        <h1 style="text-align: center;">Cat-videos</h1>
        <div style="display: flex; justify-content: center;">
            <video width="640" height="480" controls>
                <!-- 'watch' will be replaced later by the server -->
                <source src="watch/cat-test-video" type="video/mp4">
            </video>
        </div>
    </body>
    </html>
```
- If you are coding along with this article please store any video inside the `./resources` folder and name it `cat-test-video.mp4`
- The project structure should look something like this.

<figure align="center">
    <img alt="Project structure" src="/src/assets/UnderstandingHttpAndSocket/images/projectStructure.png" />
    <figcaption>Fig.5: Project Structure</figcaption>
</figure>

### Creating a socket and listening for new connections
```java
// Inside WebServer.java file
// Some necessary imports
import java.net.*;
import java.io.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
```

```java
// Inside WebServer.java file
public class WebServer {
    public static void main (String args[]) throws IOException NoSuchAlgorithmException {
        int serverPort = 9090;
        // allocating resources for server's socket and assigning a port number
        ServerSocket listenSocket = new ServerSocket(serverPort);
        try{
            System.out.println("Server program started...");
            while(true) {
                // listening to the assigned port number and accepting
                // new client connection
                System.out.println("\nListening for new connection...");
                Socket clientSocket = listenSocket.accept();
                System.out.println("\nA client is connected.....");

                // Initializing 'Connection' class with
                // client's socket address
                Connection c = new Connection(clientSocket);
            }
        } catch(IOException e) {
            System.out.println("Listen error:" + e.getMessage());
        } finally{
            listenSocket.close();
        }
    }
}
```
The above code does the following things:
1. Creates a socket and assigns a port number to listen (aka server's socket address).
2. The server's system listens to the assigned port for any new connection request from the client-side
3. If the connection is successful and accepted by the server, it returns the client's socket address
4. Initializes the `Connection` class with the client's socket info to process the client's HTTP request and send back an HTTP response


### Creating a `Connection` class
```java
// Inside WebServer.java file
// Thread class is extended to use multi-threading facility
class Connection extends Thread {
    DataInputStream in;
    DataOutputStream out;
    Socket clientSocket;

    public Connection (Socket clientSocket) {
        try {
            this.clientSocket = clientSocket;
            // accessing input stream from the given socket
            this.in = new DataInputStream( this.clientSocket.getInputStream());
            // accessing output stream from the given socket
            this.out = new DataOutputStream( this.clientSocket.getOutputStream());
            // starts a new thread
            this.start();
        } catch(IOException e) {
            System.out.println("Connection: "+e.getMessage());
        }
    }

    // continue...
```
The above code does the following things:
1. Accesses the input stream from the link that bridges the server and the client socket. This stream is used to read the client's HTTP request.
2. Accesses the output stream from the link that bridges the server and the client socket. This stream is used to send an HTTP response from the server computer.


### Processing client's HTTP request and sending HTTP response from server
```java
    // continue Connection class...

    // overiding run method from Thread class
    public void run(){
        // Initializing a Scanner class to read stream input from the
        // socket connection between server and client
        Scanner scan = new Scanner(this.in, "UTF-8");
        try{
            // separating the HTTP request header from rest of the HTTP message
            // "\\r\\n\\r\\n" below refers to the 'empty line' from fig.1
            String requestHeader = scan.useDelimiter("\\r\\n\\r\\n").next();

            System.out.println("*********Header Data***********");
            System.out.println("*******************************");
            System.out.println(requestHeader);
            System.out.println("*******************************\n\n");

            // decomposing request header to understand client request message
            String[] headerLines = requestHeader.split("\r\n");
            String[] startLine = headerLines[0].split(" ");

            String method = startLine[0];  // GET method
            String path = startLine[1];    // index.html
            String version = startLine[2]; // HTTP version

            // handling GET request from the client
            if (method.equals("GET")) {
                // calling helper method to search and get the path that
                // leads to the resource client is looking for
                Path filePath = getFilePath(path);

                System.out.println("file path: " + filePath);
                // checking if resource path exists
                if (Files.exists(filePath)) {
                    // file exist
                    // calling helper method to guess the file extension
                    // type like .html, .mp4, etc
                    String contentType = guessContentType(filePath);

                    System.out.println("file exist");
                    System.out.println("content type:" + contentType);

                    // calling helper method and setting standard HTTP
                    // status code, response type, and response content
                    sendResponse("200 OK", contentType, "", Files.readAllBytes(filePath));

                } else {
                    // file not found
                    System.out.println("File not found");

                    byte[] notFoundContent = "<h1> File not found :( </h1>".getBytes("UTF-8");

                    sendResponse("404 Not Found", "text/html", "", notFoundContent);
                }
                out.flush();
                break;
            }
        } catch(Exception e) {
            System.out.println("EOF:"+e);
        } finally {
            scan.close();
            try {
                clientSocket.close();
            }catch (IOException e){
                /*close failed*/
            }
        }
    }
    // continue...
```


### Some helper methods
```java
    // continue Connection class...

    // helper method: getting the path to access the requested resource/information hosted by the server (aka routing)
    private static Path getFilePath(String path) {
        Matcher match = Pattern.compile("/watch/").matcher(path);
        if(match.find()){
            // replacing "watch" with "resources" because we have our videos inside that directory
            path = path.replaceAll("/watch/", "./");
            path = path + ".mp4";
            return Paths.get(path);
        }

        if ("/".equals(path)) {
            path = "index.html";
        }else if("/cats".equals(path)){
            path = "cats.html";
        }

        return Paths.get("./public/", path);
    }

    // helper method: guessing the resource extension eg: .html, .mp4 etc
    private static String guessContentType(Path filePath) throws IOException {
        return Files.probeContentType(filePath);
    }

    // helper method: creating response message for the client's request
    private void sendResponse(String status, String contentType, String additional_header, byte[] content) throws IOException {
        byte[] response = (
            "HTTP/1.1 " + status + "\r\n"
            + "Content-Type: " + contentType + "\r\n"
            + additional_header
            + "\r\n").getBytes("UTF-8");
        out.write(response, 0, response.length);
        out.write(content, 0, content.length);
        out.write("\r\n\r\n".getBytes("UTF-8"));
    }
}
```

### Compiling the `WebServer.java` file
- Open a command line in the project directory and compile the java file with the command `javac WebServer.java`. Two class files `WebServer.class` and `Connection.class` will be created.
- Then run the server with the command `java WebServer`
- Open the browser, which will be our client, and you can open the `inspect` windows and then the `network` tab in the browser to see the network activity
- Type `localhost:9090` in the address bar to send a request to our server. Then our `index.html` page will be loaded
- Now click the blue link `Serve me some cat videos` to request the server for a video
- In the `network` tab, we can notice that, after clicking the link, our client sends two requests to the server: one for the `cats.html` page and one for the video file.

### Conclusion
What we have learned in this article is just a speck of technology used on the Internet. We should be thankful for all those brilliant minds and engineering that make the Internet possible. Most importantly, stay curious, and learn.
