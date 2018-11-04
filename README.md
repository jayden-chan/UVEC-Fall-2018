# University of Victoria Engineering Competition Project
## Authors
1. Jayden Chan
2. Cobey Hollier
3. Kahvi Patel
4. Ahnaf Ahmed



## Purpose
Create a chat application that allows for text based communication between users.
## Implementation

This application requires user authentication and securely stores passwords and sensitive data.

### Authentication
Upon login the clients credentials are hashes with SHA256 and compared against the database’s stored hash. If the two match, a JavaScript Web Token (JWT) is generated and sent to the client. 

When the user sends a message their JWT is parsed to ensure the authenticity of the user and their message is added to an array containing all the messages.

Every X seconds the frontend requests the list of messages from the server and updates the chatroom with any new messages.

### Chatroom functionality
There is a separate chatroom, one for general purpose use, and another for managers only. When a user access the manager chatroom their token if checked. If they are a non-manager then the chat is blocked and they are prompted to go back to the login page

File Overview:

The project structure is broken into two folders containing the frontend and server. 

* **Index.js** 
This is the main server file. It handles authentication, database queries, and houses all the endpoints for the project.
* **Message.js** 
This is a simply storage location for the array of messages that will be displayed. It contains an accessor and a permutator for the messages array. Each item in the array is an object containing the body of the message and the name of the person that sent the message.

## Packages
1. Body-parser
2. Express
3. pg

