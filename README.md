# UVic Engineering Competition Project

This repository contains my group's entry for the UVEC Fall 2018 programming competition.
The goal of the competition was to implement a simple chat application for text-based
communication at a large company. We placed first, qualifying us for the Western Engineering
Competition in Winnipeg.

## Authors
 * Jayden Chan
 * Cobey Hollier
 * Kahvi Patel
 * Ahnaf Ahmed

## Screenshots
![alt text](/img/img1.png "Chat room")
![alt text](/img/img2.png "Login screen")
![alt text](/img/img3.png "Manager-only chat room")

## Implementation
This application requires user authentication and securely stores passwords and sensitive data.

### Authentication
Upon login the clients credentials are compared against the database’s stored hash.
If the two match, a JSON Web Token (JWT) is generated and sent to the client.

When the user sends a message their JWT is parsed to ensure the authenticity of the user and their
message is added to an array containing all the messages.

Every few seconds the frontend requests the list of messages from the server and updates the
chatroom with any new messages.

### Chatroom functionality
There is a separate chatroom, one for general purpose use, and another for managers only. When a
user access the manager chatroom their token if checked. If they are a non-manager then the chat is
blocked and they are prompted to go back to the login page

File Overview:

The project structure is broken into two folders containing the frontend and server.

* **Index.js**
This is the main server file. It handles authentication, database queries, and houses all the
endpoints for the project.
* **Message.js**
This is a simply storage location for the array of messages that will be displayed. It contains an
accessor and a permutator for the messages array. Each item in the array is an object containing the
body of the message and the name of the person that sent the message.

## Packages
* Express
* body-parser
* sqlstring
* pg
* jsonwebtoken
* React

### Dev dependencies
* Gulp

### Readme author:
Ahnaf Ahmed
