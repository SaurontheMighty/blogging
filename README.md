## Hooloovoo
#### A blogging application built with Node + React by Ashish
#

Full Stack Web Application: MongoDB, Express, React, Node.js (MERN).

Running on your machine:
1. `npm install` to install dependencies in /backend
2. `nodemon server` to run the backend
3. `npm run start` to run the frontend

<br />

### __Anatomy__:


#### __Backend__:

The backend is a Blogging API that uses mongoose to connect to MongoDB Atlas and express and Node to create the backend.

_MongoDB_: No-SQL database.\
_Express_: Framework for Node.\
_Node_: Run-time environment for JS in the server.

Node Dependencies\
-> Mongoose: Object Data Modelling library to simplify working with MongoDB.\
-> Morgan: Logger to help debug.\
-> dotenv: To protect MongoDB and other API secrets.
-> Nodemon: Live reload server to speed up development.
-> CORS: To facilitate communication between React and Node in development when they are served on different ports.


#### __Frontend__

_React_: JavaScript library for building user interfaces.

Uses Fetch to interact with the Backend, creating, getting and deleting blogs.

React Dependencies\
-> React-Router-DOM: For routing inside the Single Page Application.

P.S.
The name is from Hitchhiker's Guide to the Galaxy\
(I highly recommend the book if you haven't read it!)

#### __Documentation__

| Routes     | HTTP Methods  |   Description      |
|------------|:-------------:|--------------------|
| /blogs     |      GET      | Gets all the blogs |
| /blogs     |     POST      | Creates a blog     |
| /blogs/:id |      GET      | Gets a blog        |
| /blogs/:id |      PUT      | Updates a blog     |
| /blogs/:id |    DELETE     | Deletes a blog     |