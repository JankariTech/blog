---
title: Understanding REST APIs - A Comprehensive Guide with Practical Example
authorName: Prajwol Amatya
authorAvatar: https://1.gravatar.com/avatar/de64e53c0e2cb393dd0d14ffdd53058ee9c607b35e366dd392425bd1b95a034c?size=256
authorLink: https://github.com/prajwolamatya
createdAt: April 16, 2024
tags: rest, api, rest api, python, flask
banner: https://blog.jankaritech.com/src/assets/RestApi/images/rest-api-banner.png
---

Within the field of web development, APIs (Application Programming Interface) are essential for facilitating communication across various software components. Because of its simplicity, scalability, and statelessness, REST (Representational State Transfer) APIs stand out among the other types of APIs. In this blog, we will dive into basics of building a REST API.

## What is a REST API?
REST is a framework that outlines a collection of guidelines for building web services. A REST API offers a straightforward and adaptable method to interact with web services without the need for any processing. REST is often favored for its lower bandwidth usage, simplicity, and flexibility, making it better suited for internet applications. REST is utilized to retrieve or transmit data from a web service with all interactions through a REST API occurring via HTTP requests.

### Key Principles of REST
The four key principles of REST API design, derived from the broader principles of REST architecture, are:

**1. Stateless**: Every client request to the server must include all necessary information for comprehension and processing. The server should not retain any data about the client's latest HTTP request.

**2. Client-Server Architecture**: The client handles the user interface and experience, while the server manages request processing and resource management.

**3. Cacheable**: Clients can cache responses from the server, enhancing performance by reducing the server load and minimizing client-server interactions.

**4. Uniform Interface**: The API has a consistent interface, which simplifies the architecture and enhances visibility of interactions.

## REST API Architecture
REST APIs utilize a client-server architecture, communicating over HTTP. The client sends requests to the server, which processes them and sends back responses. Communication is stateless, requiring each client request to contain all necessary information for processing.

![REST API Archiecture](/src/assets/RestApi/images/rest_api.png)

### Components of REST API Architecture
- **Resources**: In REST, resources are identified by URIs, representing anything that can be named and addressed, such as documents, images, temporal services, collections of other resources, non-virtual objects, and more.

- **HTTP Methods**: REST APIs utilize standard HTTP methods for operations on resources. Common methods include GET (to retrieve a resource), POST (to create a new resource), PUT (to update a resource), and DELETE (to remove a resource).

- **Representations**: Resources are represented in a format easily understood by both client and server, commonly JSON (JavaScript Object Notation) or XML (eXtensible Markup Language).

## Understanding Endpoints in REST API
Endpoints are the points of interaction between the client and the server in a RESTful API. Each endpoint is associated with a specific URI where an API can be accessed, and it defines a specific URI at which the resource can be accessed or manipulated. Endpoints are crucial for REST APIs as they provide a structured and standardized way for clients to interact with the API's resources.

### Characteristics of Endpoints
**- URI Structure:** Endpoints are defined by their URI structure, which typically includes the base URI of the API and the path to the resource.
**- HTTP Methods:** Each endpoint is associated with one or more HTTP methods (GET, POST, PUT, DELETE, etc.), which define the type of operation that can be performed on the resource.
**- Resource Representation:** The data returned by an endpoint is typically in a structured format, such as JSON or XML, which represents the resource or resources associated with the endpoint.

## Implementing a REST API
Now, let's start to build a REST API. Before we start, make sure you have Python installed on your system. You can download Python from [python.org](https://www.python.org/downloads). We will also need Flask, which you can install using pip:
```bash
pip install Flask
```

We will build a REST API for managing a list of tasks. Each task will have a title and a status indicating whether it's completed or not.

1. Create a new Python file: `app.py`

2. Import Flask and initialize the app:
```python
from flask import Flask, jsonify, request

app = Flask(__name__)
```

3. Define the data structure for our tasks. For simplicity, we'll use a list of dictionaries:
```python
tasks = [
    {"id": 1, "title": "Buy groceries", "completed": False},
    {"id": 2, "title": "Clean the house", "completed": True}
]
```

### GET Requests
A GET request is used to retrieve data from a server. We can get all the avaliable data or a specific data using a GET request.
- To retrieve all tasks:
```python
@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify({"tasks": tasks}), 200
```
- The `@app.route` decorator provided by Flask binds a URL pattern to the function that follows it. In this case, the URL pattern in `/tasks`.
- `methods=["GET]` specifies that this route should respond to the HTTP GET requests. This means that when a client sends a GET request to the `/tasks` URL, Flask will call the associated function.
- `get_tasks()` function will return a JSON response containing all tasks.
- `jsonify({"tasks": tasks})` is a Flask function that converts the Python dictionary `{"tasks": tasks}` into a JSON response.

- To retrieve a specific task:
```python
@app.route("/tasks/<int:task_id>", methods=["GET"])
def get_task(task_id):
    task = next((item for item in tasks if item["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404
    return jsonify({"task": task}), 200
```
- `@app.route` binds a URL pattern `/tasks/<int:task_id>` to the function that follows it.
- `<int:task_id>` is a variable part of the URL that will be captured and passed to the function as an argument.
- `methods=["GET"]` specifies that this route should respond to the HTTP GET requests. This means that when a client sends a GET request to the `tasks/<int:task_id>` URL, Flask will call the associated function.
- `get_task()` function will take `task_id` as argument that is extracted from `/tasks/<int:task_id>` URL. The function will then search for a task with that ID in the `tasks` list. If a task is found, it will return the task in JSON format. If no task is found, it will return a `404` status code with an error message.
- `return jsonify({"task": task})` returns a JSON response containing the task. 

### POST Request
A POST request is used to send data to a server to create a new resource. To create a new task, implement a route that handles POST requests:
```python
@app.route("/tasks", methods=["POST"])
def create_task():
    new_task = request.get_json()
    tasks.append(new_task)
    return jsonify({"task": new_task}), 201
```
- `@app.route` binds a URL pattern `/tasks` to the function that follows it.
- `methods=["POST"]` specifies that this route should respond to the HTTP POST requests. This means when a client sends a POST request to the `/tasks` URL, Flask will call the associated function.
- `request.get_json()` is a Flask function that parses the incoming request data as JSON. This function is used to extract the JSON payload sent by the client in the POST request.
- `create_task()` function will parse the JSON payload, add the new task to the `tasks` list, and return a JSON response containing the newly created task. The status code `201` indicates that the task was successfully created.
- `tasks.append(new_task)` appends the new_task dictionary to the tasks list.
- `jsonify({"task": new_task})` is a Flask function that converts the new_task dictionary into a JSON response. This response includes the newly created task.

### PUT Request
A PUT request is used to update an existing resource on a server. To update a task, implement a route that handles PUT requests:
```python
@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    task = next((item for item in tasks if item["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404
    task.update(request.get_json())
    return jsonify({"task": task}), 201
```
- `@app.route` binds a URL pattern `/tasks/<int:task_id>` to the function that follows it.
- `<int:task_id>` is a variable part of the URL that will be captured and passed to the function as an argument.
- `methods=["PUT"]` specifies that this route should respond to the HTTP PUT requests. This means that when a client sends a PUT request to the `/tasks/<int:task_id>` URL, Flask will call the associated function.
- `update_task()` function will take `task_id` as argument that is extracted from `/tasks/<int:task_id>` URL. The function will then search for a task with that ID in the tasks list. If a task is found, it will update the task with the new data provided in the request and return the updated task in JSON format. If no task is found, it will return a 404 status code with an error message.
- `task.update(request.get_json())` updates the task with the JSON data sent by the client in the PUT request. The `request.get_json()` function parses the incoming request data as JSON, and the `update()` method merges this data into the `task` dictionary.
- `return jsonify({"task": task})` returns a JSON response containing the updated task.

### DELETE Request
A DELETE request is used to remove a resource from a server. To delete a task, implement a route that handles DELETE requests:
```python
@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_tasks(task_id):
    task = next((item for item in tasks if item["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404
    tasks.remove(task)
    return jsonify({"result": "Task deleted"}), 200
```
- `@app.route` binds a URL pattern `/tasks/<int:task_id>` to the function that follows it.
- `<int:task_id>` is a variable part of the URL that will be captured and passed to the function as an argument.
- `methods=["DELETE"]` specifies that this route should respond to the HTTP DELETE requests. This means that when a client sends a DELETE request to the `/tasks/<int:task_id>` URL, Flask will call the associated function.
- `delete_task()` function will take `task_id` as argument that is extracted from `/tasks/<int:task_id>` URL. The function will then search for a task with that ID in the `tasks` list. If a task is found, it will remove the task from the list and return a JSON response indicating that the task was deleted. If no task is found, it will return a `404` status code with an error message.
- `tasks.remove(task)` removes the task from the `tasks` list.
- `return jsonify({"result": "Task deleted"})` returns a JSON response indicating that the task was successfully deleted.

### Running the Application
To run your application, add the following line:
```python
if __name__ == "__main__":
    app.run(debug=True)
```

Then open your terminal and run the following command form your project directory:
```bash
python3 app.py
```
Your REST API is now up and running on `http://127.0.0.1:5000`

## Testing Your API
You can test your API using tools like Postman or cURL.

### List All Tasks
You can use the following cURL command to list all the avaliable tasks:
```bash
curl http://127.0.0.1:5000/tasks
```
Expected Result:
```json
{
  "tasks": [
    {
      "completed": false,
      "id": 1,
      "title": "Buy groceries"
    },
    {
      "completed": true,
      "id": 2,
      "title": "Clean the house"
    }
  ]
}
```

### List a Specific Task
To retrieve a specific task by its ID, you can use the following cURL command, replacing `<task_id>` with the id of the task you want to retrieve:
```bash
curl http://127.0.0.1:5000/tasks/<task_id>
```
Example:
```bash
curl http://127.0.0.1:5000/tasks/1
```
The `curl` command sends an HTTP GET request to `http://127.0.0.1:5000/tasks/1`, retrieving the task with ID `1` from a local server.

Expected Result:
```json
{
  "task": {
    "completed": false,
    "id": 1,
    "title": "Buy groceries"
  }
}
```

### Create a New Task
To create a new task, you can use following cURL command, replacing `<task_data>` with the JSON data for the new task:
```bash
curl -X POST -H "Content-Type: application/json" -d '<json_data>' http://127.0.0.1:5000/tasks
```
Example:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":3,"task":"Finish the report","completed":false}' http://127.0.0.1:5000/tasks
```
The `curl` command sends an HTTP POST request with JSON data to `http://127.0.0.1:5000/tasks`, creating a new task.

Expected Result:
```json
{
  "task": {
    "completed": false,
    "id": 3,
    "task": "Finish the report"
  }
}
```

### Update a Task
To update an existing task, use the following cURL command, replacing `<task_id>` with the id of the task, and `<updated_data>` with the JSON data you want to update:
```bash
curl -X PUT -H "Content-Type: application/json" -d '<updated_data>' http://127.0.0.1:5000/tasks/<task_id>
```
Example:
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"completed":true}' http://127.0.0.1:5000/tasks/3
```
The `curl` command sends an HTTP PUT request with JSON data to `http://127.0.0.1:5000/tasks/3`, updating the task with ID `3` to mark it as completed.

Expected Result:
```json
{
  "task": {
    "completed": true,
    "id": 3,
    "task": "Finish the report"
  }
}
```

### Delete a Task
To delete a task, use the following cURL command, replacing `<task_id>` with the id of the task you want to delete:
```bash
curl -X DELETE http://127.0.0.1:5000/tasks/<task_id>
```
Example:
```bash
curl -X DELETE http://127.0.0.1:5000/tasks/3
```
The `curl` command sends an HTTP DELETE request to `http://127.0.0.1:5000/tasks/3`, deleting the task with ID `3`.

Expected Result:
```json
{
  "result": "Task deleted"
}
```

Let's try to retrieve a task that doesn't exist in the list of tasks. For instance, we just deleted a task with id = 3. Now, let's try to retrieve the task with id = 3 and see the result.
```bash
curl http://127.0.0.1:5000/tasks/3
```
Expected result:
```json
{
  "error": "Task not found"
}
```
We see that the JSON response returns the error `Task not found`, which indicates that the task doesn't exist in the list of tasks.

## Common Causes of API Request Failures
Now, let's explore scenarios where API requests might fail. API requests can fail due to various reasons, including sending invalid requests. This could happen if an incorrect endpoint is used, the JSON data is invalid, or if the request is made with an unsupported HTTP method. Let's examine some instances where API requests might fail.

**1. Invalid Endpoint**:
With the REST API that we built, we have the following valid API endpoints:
- `GET /tasks`: Retrieves a list of all available tasks
- `GET /tasks/<int:task_id>`: Retrieves a specific task by its ID
- `POST /tasks`: Creates a new task
- `PUT /tasks/<int:task_id>`: Updates a specific task by its ID
- `DELETE /tasks/<int:task_id>`: Deletes a specific task by its ID

If we send an API request to any endpoint that is not listed above, the request will fail with a `404` status code. For instance, let's try to get all the tasks with following cURL command:
```bash
curl http://127.0.0.1:5000/task
```
Here, we have used `task` instead of `tasks` in our endpoint, which makes our endpoint invalid. With this request we get the following error with `404` status code.

Expected Result:
```console
The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.
```

**2. Invalid JSON Data**:
Invalid JSON data can lead to API request failures due to syntax or structure errors. Here are some of the most common syntax and structure errors that can occur in JSON data:

- **Missing Quotes Around Keys:** In JSON, keys must be strings, and strings are defined by enclosing them in double quotes. Omitting quotes around keys will result in invalid JSON.
Invalid:
```json
{ key: "value" }
```
Valid:
```json
{ "key": "value" }
```
- **Single Quotes Instead of Double Quotes:** JSON strings must be enclosed in double quotes. Using single quotes will result in invalid JSON.
Invalid:
```json
{ 'key': 'value' }
```
Valid:
```json
{ "key": "value" }
```
- **Trailing Commas:** JSON does not allow trailing commas after the last element in an object or array. Including a comma after the last element will make the JSON invalid.
Invalid:
```json
{
  "key1": "value1",
  "key2": "value2",
}
```
Valid:
```json
{
  "key1": "value1",
  "key2": "value2"
}
```
- **Missing Comma Between Elements:** In JSON objects and arrays, elements must be separated by commas. Omitting a comma between elements will make the JSON invalid.
Invalid:
```json
{
  "key1": "value1"
  "key2": "value2"
}
```
Valid:
```json
{
  "key1": "value1",
  "key2": "value2"
}
```
- **Incorrect Data Types:** JSON supports several data types, including strings, numbers, objects, arrays, booleans, and null. Using an incorrect data type or a value that does not match the expected type can lead to invalid JSON.
Invlaid:
```json
{
  "key": "value",
  "number": "123"
}
```
Valid:
```json
{
  "key": "value",
  "number": 123
}
```

Let's add a new task with invalid JSON data with missing quote around one of the keys:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":3,task:"Finish the report","completed":false}' http://127.0.0.1:5000/tasks
```
Here, the JSON data in the request body is invalid as the key `task` is not enclosed in double quotes. With this request, we get the following error with status code `400`.

Expected Result:
```console
Failed to decode JSON object: Expecting property name enclosed in double quotes: line 1 column 9 (char 8)
```

**3. Unsupported HTTP method**
When a API request is sent to an endpoint with an unsupported HTTP method, then the API request will fail with an error message `Method Not Allowed`. For example, trying to POST to an endpoint to get a specific task:
```bash
curl -X POST http://127.0.0.1:5000/tasks/1
```
Here, we have sent an API request with POST method to retrieve a specific task with ID `1`. The problem with using the `POST` method to retrieve a specific task by its ID is that it violates the standard conventions of REST API design. In REST APIs, the POST method is intended for creating new resources, not for retrieving existing ones, due to which this API request will fail with error message `Method Not Allowed`.

Expected Result:
```console
Method Not Allowed
```

## Conclusion
In this blog, we've explored the basics of REST APIs and how to implement them using Python Flask. This simple example demonstrates the power and flexibility of REST APIs in building scalable and maintainable web applications. You can expand this basic structure to include more complex data models, authentication, and more advanced features as needed. Building a REST API is just the beginning. The real power comes from how you integrate it with other services, databases, and front-end applications. Happy coding!
