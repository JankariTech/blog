---
title: htmx
authorName: Niraj Acharya
authorAvatar: https://avatars.githubusercontent.com/u/122071597?v=4
authorLink: https://github.com/nirajacharya2
createdAt: Sep 29, 2023
tags: js, html, go, htmx
banner: https://raw.githubusercontent.com/bigskysoftware/htmx/master/www/static/img/htmx_logo.1.png
---

Htmx is ui library written in JavaScript that extends the features of html. It can be extended to make AJAX requests, do CSS transitions, connect to WebSockets and handle Server Sent Events inside a html document with just some delacritive html attributes.

Htmx was created by Carson Gross in 2013 because he found html to be limited for what he was trying to achieve. Those limitations of html htmx tries to solve are:

- only `<a>` and `<form>` tags are able to make HTTP requests
- only `click` & `submit` events trigger them
- only `GET` & `POST` methods are available
- and when using `<a>` and `<form>` the whole screens gets replaced

In this blog, we will learn how htmx enhances html and overcomes the limitations mentioned above.

## Install htmx

We can simply install htmx by adding a script tag in our html.

```html
<head>
  <script src="https://unpkg.com/htmx.org@1.9.5"></script>
</head>
```

Htmx claims to be small (~14k min.gz’d), dependency-free, extendable, IE11 compatible & 67% less code when compared with react

Now let's see how to make a simple ajax request in htmx

## making AJAX request (GET)

First, let's make an endpoint to get data from

```go
func getRoot(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "./static/index.html")
}

func hi(w http.ResponseWriter, r *http.Request) {
    io.WriteString(w, "<div>hi</div>")
}
func main() {

    http.HandleFunc("/", getRoot)
    http.HandleFunc("/hello", hi)
    http.ListenAndServe(":3333", nil)
}
```

In the above code example, we made 2 endpoints. `/` to serve the html file and `/hello` will return a html element. all htmx does is get the body of the response and render it on the page so we have to return html in the response.

Now to use the `hello` endpoint in html

```html
<div hx-post="/hello">hello</div>
```

[video](https://i.imgur.com/BidNTh3.gif)

As seen above the endpoint is working and the response is shown properly in the hello example.
Here clicking the hello text will send a request that is because we did not define any event that will trigger the ajax request.

We can explicitly define it like
```html
<div hx-post="/hello" hx-trigger="click">hello</div>
```

Htmx has other predefined events like

- `hx-trigger="mouseenter"` triggers when the mouse enters the element
- `hx-trigger="mouseenter once"` triggers when the mouse enters the element and won't trigger after that
- `hx-trigger="click[ctrlKey]"` triggers when the element is clicked while holding the `Ctrl` key
- `hx-trigger="every 2s"` triggers every two seconds

You can find more on the htmx docs.

Currently, it replaces the element that makes the ajax request similar to the trigger event we have a `hx-target` attribute
That specifies which element is going to get replaced

```html
<div id="relpace" class="replace"></div>
<div hx-post="/hello" hx-trigger="click" hx-target="#relpace">hello</div>
```

We can also use class like `.replace` or give elements like `body` as target

For example:
If we have two elements `foo`

```html
<foo id="1" class="replace"></foo>
<foo id="2" class="replace"></foo>
<bar hx-post="/hello" hx-trigger="click" hx-target="foo">hello</bar>
```

It swaps the first of the `foo` element with `id=1`


## making a todo app
Since we learned a bit of basic let's write a todo app.

First start with making a submit form for adding a todo task

For that, we will only need an input box and a button

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
    <input type="text" name="task" required />
    <input type="submit" value="save" />
  </form>
</div>
```

Now on the server

```go
func save(w http.ResponseWriter, r *http.Request) {
    r.ParseForm()
    storeTODO(r.FormValue("task")) // save to database
    tastList := "<div>" + r.FormValue("task") + " </div>"
    io.WriteString(w, tastList)
}

func main() {
    ...
    http.HandleFunc("/save", save)
    ...
}
```

[video](https://i.imgur.com/wmTHPYD.gif)


In the above html, the form will send a post request to `/save` endpoint and htmx will replace the content in the div with the id `todo-list` but the whole content will be replaced.

```html
<div id="todo-list">
  <div>item 1</div>
</div>
```

After adding another

```html
<div id="todo-list">
  <div>item 2</div>
</div>
```

Instead, we want to only append the new todo item after the last todo item. so we use the attribute `hx-swap` to let htmx know where we want the response to render. the `beforeend` value will append the html response before the end of the targeted element

After the swap attribute

(adding item 1)

```html
<div id="todo-list">
  <div>item 1</div>
</div>
```

After adding another item (item 2)

```html
<div id="todo-list">
  <div>item 1</div>
  <div>item 2</div>
</div>
```




But if we refresh the page we won't get the list of tasks we saved so we need to get the list
For that, we need to make a get request

```html
<div id="todo-list" hx-get="/taskList" hx-trigger="load"></div>
```

Here we need to get the list when someone opens/loads the page so we give the trigger value of `load`. which will trigger when the page is load

```go
func listTask(w http.ResponseWriter, r *http.Request) {
    tastList := getTODO() // gets data from database and returns html
    io.WriteString(w, tastList)
}
func main() {
    ...
    http.HandleFunc("/save", listTask)
    ...
}
```
[video](https://i.imgur.com/yMVvdP3.gif)

Now the list is shown even when the page is refreshed.

For edit let's try some thing different.

First let's make clicking on the todo item go to a different page.
For that, we need to get an anchor tag instead of a div with the todo text inside a div

**example response from server**

```htmx
  <div hx-boost="true">
      <a href="/task/asdasda">asdasda</a>
  </div>
```

Here the `hx-boost` attribute will replace the body element and add the previous page to the history entry which will allow you to go back if needed instead of giving the illusion of changing changing page by replacing the body.

[video](https://imgur.com/bktyFpm)

For the actual editing, it will be similar to other examples.

```html
<div>
  <div>asdasda</div>
  <form id="myForm2" hx-put="/edit" hx-target="#app">
    <input type="text" name="task" required="" />
    <input type="hidden" name="old" value="asdasda" />
    <input type="submit" value="edit" />
  </form>
</div>
```

Now let's perform deletion on the list.

First, we have to make a delete button.

For that, I'm gonna update the list template and add a delete form

```html
<div hx-boost="true" class="new-element">
  <a href="/task/dasdas">dasdas</a>
  <form
    hx-trigger="click"
    hx-delete="/delete"
    hx-target="closest .new-element"
    hx-swap="outerHTML swap:1s"
  >
    <input type="hidden" name="task" value="dasdas" />
    delete
  </form>
</div>
```

Most of the snippets in the delete form are similar to other examples. but in the `hx-swap="outerHTML swap:1s"` attribute i added an extra value . All that value does is delay the swapping of the element by 1 second because i want to do a css animation during that time.

```css
.htmx-swapping {
  opacity: 0;
  transition: opacity 1s ease-out;
}
```

While htmx is doing the swapping of the element htmx adds `htmx-swapping` class to the element that is being swapped. now the above css will give the swapped element a fading effect.

[video](https://i.imgur.com/khdzEgM.gif)

## WebSockets

Currently, if we add a todo task to our list it won't be shown to another tab/browser opening the same page which can be achieved using websockets fortunately htmx supports websockets.
Let's first make a connection to a websocket.

```html
<div id="ws" hx-ws="connect:/ws" hx-trigger="task"></div>
```

The `hx-ws` attribute takes the websocket endpoint and makes a connection to it.

```go
import(
    ...
    "golang.org/x/net/websocket"
    "sync"
    ...
)

type Server struct {
    conns map[*websocket.Conn]bool
    mutex sync.Mutex
}

func NewServer() *Server {
    return &Server{
        conns: make(map[*websocket.Conn]bool),
        mutex: sync.Mutex{},
    }
}
func main(){
    ...
    server := NewServer()
    http.Handle("/ws", nil)
    ...
}
```

Update the form

```html
<form
  id="myForm1"
  hx-ws="send:submit"
  hx-target="#todo-list"
  hx-swap="beforeend"
>
  <input type="text" name="task" required />
  <input type="submit" value="save ws" />
</form>
```

In the `hx-ws` attribute of form we are telling htmx to send value to the websocket endpoint on the submit event

```go
func (s *Server) websocketHandler(ws *websocket.Conn) {
    broadcast() // broadcast the response
}
func main(){
    ...
    http.Handle("/ws", websocket.Handler(server.websocketHandler))
    ...
}
```
Now we can see our list getting updated everywhere

[video](https://i.imgur.com/n4RKOUQ.gif)

These were some basics of htmx to get started with . Now you can build on it and make something more interesting by yourself.

You can find the code [here](https://github.com/nirajacharya2/htmx)

And if you want to learn more about htmx docs is [here](https://htmx.org/docs/)

