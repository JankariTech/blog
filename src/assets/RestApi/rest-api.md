---
title: Basics of REST API with Examples
authorName: Prajwol Amatya
authorAvatar: https://1.gravatar.com/avatar/de64e53c0e2cb393dd0d14ffdd53058ee9c607b35e366dd392425bd1b95a034c?size=256
authorLink: https://github.com/prajwolamatya
createdAt: April 16, 2024
tags: rest, api, rest api, python, flask
banner: https://blog.jankaritech.com/src/assets/RestApi/images/rest-api-banner.png
---

Within the field of web development, APIs, or application programming interfaces, are essential for facilitating communication across various software components. Because of its simplicity, scalability, and statelessness, REST (Representational State Transfer) APIs stand out among the other types of APIs. In this blog, we will dive into basics of building a REST API.

## What is a REST API?
REST (Representational State Transfer), serves as an architectural approach for creating networked apps. It operates via a stateless client-server communication system. In this model, clients and servers exchange representations of resources identified by URLs. Access is facilitated through standard HTTP methods such as GET, POST, PUT, DELETE, and others.

### Key Principles of REST
1. **Stateless**: Every client request to the server must include all necessary information for comprehension and processing. The server should not retain any data about the client's latest HTTP request.

2. **Client-Server Architecture**: The client handles the user interface and experience, while the server manages request processing and resource management.

3. **Cacheable**: Clients can cache responses from the server, enhancing performance by reducing the server load and minimizing client-server interactions.

4. **Uniform Interface**: The API has a consistent interface, which simplifies the architecture and enhances visibility of interactions.

## REST API Architecture
REST APIs utilize a client-server architecture, communicating over HTTP. The client sends requests to the server, which processes them and sends back responses. Communication is stateless, requiring each client request to contain all necessary information for processing.

![REST API](/src/assets/RestApi/images/rest_api.png)

### Components of REST API Architecture
- **Resources**: In REST, resources are identified by URLs, representing anything that can be named and addressed, such as documents, images, temporal services, collections of other resources, non-virtual objects, and more.

- **HTTP Methods**: REST APIs utilize standard HTTP methods for operations on resources. Common methods include GET (to retrieve a resource), POST (to create a new resource), PUT (to update a resource), and DELETE (to remove a resource).

- **Representations**: Resources are represented in a format easily understood by both client and server, commonly JSON (JavaScript Object Notation) or XML (eXtensible Markup Language).

### Implementing REST API
Now, lets start to build a REST API. Before we start, make sure you have Python installed on your system. You can download Python from [python.org](https://www.python.org/). We will also need Flask, which you can install using pip:
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
To retrieve all tasks, implement a route that handles GET requests:
```python
@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify({"tasks": tasks})
```
This method will return all the tasks in JSON format.

To retrieve a specific task:
```python
@app.route("/tasks/<int:task_id>", methods=["GET"])
def get_task(task_id):
    task = next((item for item in tasks if item["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404
    return jsonify({"task": task})
```
We use the id of the tasks to identify a specific task since id is unique for every tasks. This method will look for the task with provided id and return the task with the matching id. If the task with the provided id is not found, it will return the error in JSON response indicating the task was not found, with status code `404`.

### POST Request
To add a new task, implement a route that handles POST requests:
```python
@app.route("/tasks", methods=["POST"])
def create_task():
    new_task = request.get_json()
    tasks.append(new_task)
    return jsonify({"task": new_task}), 201
```
`request.get_json()` retrieves the JSON data from the request body and adds the new task to the list of tasks. After the new task has been added to the list of tasks it will return the newly created task as a JSON response with `201` status code, indicating that the task was successfully created.

### PUT Request
To update a task, implement a route that handles PUT requests:
```python
@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    task = next((item for item in tasks if item["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404
    task.update(request.get_json())
    return jsonify({"task": task})
```
We use the id of the task that we want to update. First, it will look whether the task with provided id exists or not. If the task doesn't exist then it will return the error in JSON response indicating the task was not found, with status code `404`. If the task exists then `task.update(request.get_json())` will update the task with the new data from the request body and returns the updated task as a JSON response.

### DELETE Request
To delete a task, implement a route that handles DELETE requests:
```python
@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_tasks(task_id):
    task = next((item for item in tasks if item["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404
    tasks.remove(task)
    return jsonify({"result": "Task deleted"})
```
We use the id of the task that we want to delete. First, it will look whether the task with provided id exists or not. If the task doesn't exist then it will return the error in JSON response indicating the task was not found, with status code `404`. If the task exists then it will remove that specific task from the list of task and returns a JSON repsonse indicating task was deleted successfully.

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

## Testing your API
You can test your API using tools like Postman or cURL.

### List all tasks
You can use the following curl command to list all the avaliable tasks:
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

### List a specific task
To retrieve a specific task by its ID, you can use the following curl command, replacing `<task_id>` with the id of the task you want to retrieve:
```bash
curl http://127.0.0.1:5000/tasks/<task_id>
```
Example:
```bash
curl http://127.0.0.1:5000/tasks/1
```
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
To create a new task, you can use following curl command, replacing `<task_data>` with the JSON data for the new task:
```bash
curl -X POST -H "Content-Type: application/json" -d '<json_data>' http://127.0.0.1:5000/tasks
```
Example:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":3,"task":"Finish the report","completed":false}' http://127.0.0.1:5000/tasks
```
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

### Update a task
To update an existing task, use the following curl command, replacing `<task_id>` with the id of the task, and `<updated_data>` with the JSON data you want to update:
```bash
curl -X PUT -H "Content-Type: application/json" -d '<updated_data>' http://127.0.0.1:5000/tasks/<task_id>
```
Example:
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"completed":true}' http://127.0.0.1:5000/tasks/3
```
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

### Delete a task
To delete a task, use the following curl command, replacing `<task_id>` with the id of the task you want to delete:
```bash
curl -X DELETE http://127.0.0.1:5000/tasks/<task_id>
```
Example:
```bash
curl -X DELETE http://127.0.0.1:5000/tasks/3
```
Expected Result:
```json
{
  "result": "Task deleted"
}
```

Let's try to retrieve a task which doesn't exist in the list of task. For instance, we just deleted task with id = 3. Now, let's try to retrieve the task with id = 3 and see the result.
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

Now, let's look into the cases with invalid requests:
1. **Invalid endpoint**:
Try to get all the tasks with following curl command:
```bash
curl http://127.0.0.1:5000/task
```
Here, we have used `task` instead of `tasks` in our endpoint, which makes our endpoint invalid. With this request we get the following error with `404` status code:
```console
The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.
```

2. **Invalid JSON data**:
Try to add a new task with invalid JSON data:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":3,task:"Finish the report","completed":false}' http://127.0.0.1:5000/tasks
```
Here, the JSON data in request body is invalid as the key `task` is not enclosed in double quotes. With this request we get the following error with status code `400`.
```console
Failed to decode JSON object: Expecting property name enclosed in double quotes: line 1 column 9 (char 8)
```

## Conclusion
In this blog, we've explored the basics of REST APIs and how to implement them using Python Flask. This simple example demonstrates the power and flexibility of REST APIs in building scalable and maintainable web applications.
