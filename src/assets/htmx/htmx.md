---
title: Introduction to htmx
authorName: Niraj Acharya
authorAvatar: https://avatars.githubusercontent.com/u/122071597?v=4
authorLink: https://github.com/nirajacharya2
createdAt: May 2, 2024
tags: html, go, htmx
banner: https://raw.githubusercontent.com/bigskysoftware/htmx/master/www/static/img/htmx_logo.1.png
---

htmx is a UI library written in JavaScript that extends the features of HTML. It can be extended to make AJAX requests, do CSS transitions, connect to WebSockets and handle Server Sent Events inside an HTML document with just some declarative HTML attributes.

htmx was created by Carson Gross in 2013 because he found HTML to be limited for what he was trying to achieve. htmx tries to solve the following limitations of HTML:

- only `<a>` and `<form>` tags are able to make HTTP requests
- only `click` and `submit` events trigger them
- only `GET` and `POST` methods are available
- and when using `<a>` and `<form>` the whole screen gets replaced

In this blog, we will learn how htmx enhances HTML and overcomes the limitations mentioned above.

**Note:**

I will be using go for the code examples given in this blog post.
If you are not familiar with go you can learn the basics from [here](https://blog.jankaritech.com/#/blog/Journey%20With%20Go%20-%20A%20Blog%20Series/Go%20Basics%20-%20The%20Starting%20Point).

Throughout this blog I will be providing small snippets of my code instead of the actual implementation and I will not go into how to create a webserver to serve the endpoints. For that you might want to read [this blog](https://blog.jankaritech.com/#/blog/Serving%20your%20cat%20video%20using%20the%20Internet%20-%20A%20basic%20understanding%20of%20HTTP%20and%20socket%20programming%20(in%20Java)).


## Using htmx

We can simply use htmx by adding a script tag in the header of our HTML.

```html
<head>
  <script src="https://unpkg.com/htmx.org@1.9.5"></script>
</head>
```

htmx claims to be small (~14k min.gz’d), dependency-free, extendable, IE11 compatible and 67% less code when compared with react.

Now let's see how to make a simple AJAX request in htmx.

## Making AJAX request (GET)

So, let's begin by creating a few endpoints for this example.

```go
func getRoot(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "./static/index.HTML")
}

func hi(w http.ResponseWriter, r *http.Request) {
    io.WriteString(w, "<div>hi</div>")
}
func main() {
    http.HandleFunc("GET /", getRoot)
    http.HandleFunc("GET /hello", hi)
    http.ListenAndServe(":3333", nil)
}
```

In the above code example, we made two endpoints: `/` to serve the HTML file and `/hello` will return an HTML element. htmx gets the body of the response and renders it on the page, therefore the response of our function should be HTML code.

Now we will see how to use the `hello` endpoint in HTML:

```html
<div hx-post="/hello">hello</div>
```
![demo](/src/assets/htmx/hi.gif)

As seen above, the endpoint is working. The content of the `div` is replaced by the response.
Because we did not define any specific event to trigger the AJAX request, it will be triggered by clicking the `hello` text.

We can explicitly define it like this:

```html
<div hx-get="/hello" hx-trigger="click">hello</div>
```

htmx has other predefined events like this:

- `hx-trigger="mouseenter"` is triggered every time that the mouse enters the element
- `hx-trigger="mouseenter once"` is triggered when the mouse enters the element for the first time and won't trigger after that
- `hx-trigger="click[ctrlKey]"` is triggered when the element is clicked while holding the `Ctrl` key
- `hx-trigger="every 2s"` is triggered every two seconds

You can find more on this subject in the htmx [docs](https://htmx.org/docs/#triggers).

Currently, our example above replaces the element that makes the AJAX request, but we can specify which element is going to get replaced using the `hx-target` attribute:

```html
<div id="replace" class="replace">replace me</div>
<div hx-get="/hello" hx-trigger="click" hx-target="#replace">click me to replace the element above</div>
```

We can also use a class name like `.replace` or give elements like `body` as the target.

In the following example we have two `foo` elements:

```html
<foo id="1" class="replace">replace me 1</foo>
<foo id="2" class="replace">replace me 2</foo>
<bar hx-post="/hello" hx-trigger="click" hx-target="foo">replace foo element</bar>
```

The first of the `foo` elements will be taken as the target. So in this example the first `foo` element with `id=1` will be replaced by the response.


## Making a todo app
Now we have learned the basics, let's write a todo app.

First start with making a submit form for adding a todo task.

For that, we will only need an input box and a button in our HTML code:

```html
<div id="app" class="container">
  <div id="todo-list"></div>
  <form
    id="myForm"
    hx-post="/save"
    hx-trigger="submit"
    hx-target="#todo-list"
  >
    <input type="text" name="task" required />
    <input type="submit" value="save" />
  </form>
</div>
```

Now let's have a look at what is needed on the server side:

```go
func save(w http.ResponseWriter, r *http.Request) {
    r.ParseForm()
    insert(r.FormValue("task")) // save to database
    taskList := "<div>" + r.FormValue("task") + " </div>"
    io.WriteString(w, taskList)
}

func main() {
    ...
    http.HandleFunc("/save", save)
    ...
}
```
![demo](/src/assets/htmx/save.gif)


In the HTML above, the form will send a post request to the `/save` endpoint and htmx will replace the content in the div with the id `todo-list`. The response will replace everything in the target element i.e., the element with id `todo-list` will be replaced and looks like this:

```html
<div id="todo-list">
  <div>item 1</div>
</div>
```

After adding another todo item to the list, the HTML document looks like this:

```html
<div id="todo-list">
  <div>item 2</div>
</div>
```

That is not quite what we want. We want to append the new todo item after the last todo item. So we use the attribute `hx-swap` to let htmx know where we want the response to render. The `beforeend` value will append the HTML response before the end of the targeted element.

After the swap the code will look like this:

```html
<div id="app" class="container">
  <div id="todo-list"></div>
  <form
    id="myForm"
    hx-post="/save"
    hx-trigger="submit"
    hx-target="#todo-list"
    hx-swap="beforeend"
  >
    broadcast<input type="text" name="task" required />
    <input type="submit" value="save" />
  </form>
</div>
```

Adding the first item (item 1):

```html
<div id="todo-list">
  <div>item 1</div>
</div>
```

After adding the second item (item 2):

```html
<div id="todo-list">
  <div>item 1</div>
  <div>item 2</div>
</div>
```
![demo](/src/assets/htmx/savemultiple.gif)

Adding multiple todo items is working now, but on page load (e.g. if we refresh the page) the list of tasks is not being loaded.
To make that work, we need to make a `GET` request.

```html
<div id="todo-list" hx-get="/taskList" hx-trigger="load"></div>
```

In the above HTML, I have added `hx-get` with value '/tasklist' and `hx-trigger` with value 'load'. The 'load' value specifies when the request is sent. In this case it's when the HTML file is loaded.

```go
func listTask(w http.ResponseWriter, r *http.Request) {
    tastList := getTODO() // gets data from the database and returns HTML
    io.WriteString(w, tastList)
}
func main() {
    ...
    http.HandleFunc("/save", listTask)
    ...
}
```
![demo](/src/assets/htmx/getalltask.gif)

Now the list is shown even when the page is refreshed.

For edit let's try something different: instead of doing all our operations in a single page, we will be navigating to another page to do the edit.

First, let's make clicking on the todo item go to a different page that will contain a form for updating the todo item list.
For that, we need to get an anchor tag instead of a div with the todo text inside a div.


On the server side, I will get the task and return the proper form for updating that task.

```go
func main() {
    ...
    http.HandleFunc("/task/", individualTask)
    ...
}
```

Example response from server:

```htmx
  <div hx-boost="true">
      <a href="/task/1">clean room</a>
  </div>
```

Here the `hx-boost` attribute will replace the body element and add the previous page to the history entry.
That means the back button on browsers will work perfectly.

![demo](/src/assets/htmx/editpage.gif)

For the actual editing, it will be similar to the other examples.

```html
<div>
  <div>clean room</div>
  <form id="myForm2" hx-put="/edit" hx-target="#app">
    <input type="text" name="task" required="" />
    <input type="hidden" name="old" value="1" />
    <input type="submit" value="edit" />
  </form>
</div>
```

Now let's perform deletion on the list.

First, we have to make a delete button.

For that, I will update the list template and add a delete form:

```html
<div hx-boost="true" class="new-element">
  <a href="/task/1">clean room</a>
  <form
    hx-trigger="click"
    hx-delete="/delete"
    hx-target="closest .new-element"
    hx-swap="outerHTML swap:1s"
  >
    <input type="hidden" name="task" value="1" />
    delete
  </form>
</div>
```

Most of the snippets in the delete form are similar to the other examples. But in the `hx-swap="outerHTML swap:1s"` attribute, I added an extra value. This value will delay the swapping of the element by 1 second because I want to do a CSS animation during that time.

While htmx is doing the swapping of the element, it also adds the `htmx-swapping` class to the element.

Now I can add any CSS effect I want to the `htmx-swapping` class.

```CSS
.htmx-swapping {
  opacity: 0;
  transition: opacity 1s ease-out;
}
```

![demo](/src/assets/htmx/delete.gif)

## WebSockets

Currently, if we add a todo task to our list, it won't be shown in another tab or browser opening the same page. This can be achieved using WebSockets. Fortunately htmx supports WebSockets.

```html
<div id="ws" hx-ws="connect:/ws" hx-trigger="task"></div>
```

The `hx-ws` attribute takes the WebSockets endpoint and makes a connection to it.

After adding this line to the code, I just have to create a WebSocket that listens for input by the user and broadcasts it to all clients.

```go
import(
    ...
    "golang.org/x/net/websocket"
    "sync"
    ...
)

func main(){
    ...
    server := NewServer()
    http.Handle("/ws", WebSockets.Handler(server.WebSocketsHandler)) // handles the saving and broadcasting of data
    ...
}
```

Update the form:

```html
<form
  id="ws-form"
  hx-ws="send:submit"
  hx-target="#todo-list"
  hx-swap="beforeend"
>
  <input type="text" name="task" required />
  <input type="submit" value="save ws" />
</form>
```

In the `hx-ws` attribute of the form we are telling htmx to send the values to the WebSockets endpoint on the submit event.

```go
func (s *Server) WebSocketsHandler(ws *WebSockets.Conn) {
    broadcast() // broadcast the response
}
func main(){
    ...
    http.Handle("/ws", WebSockets.Handler(server.WebSocketsHandler))
    ...
}
```
Now we can see our list getting updated everywhere.

![demo](/src/assets/htmx/ws.gif)

These were some basics of htmx to get started with. Now you can build on it and make something more interesting by yourself.

And if you want to learn more about htmx, have a look at the docs [here](https://htmx.org/docs/)
