Dotenv, jsonwebtoken and express used in this project as dependancy and nodemon as dev dependancy. 
FS core module used for log operations.
Created express server with local dummy db, added crud operations with jwt authentication and log the requests and request time to json file.

As default Server is working on Port: 8000

You should add a .env file and add ACCESS_TOKEN_EXAMPLE=ACCESS_TOKEN_EXAMPLE
Then you can send requests to urls with header Authorization: Bearer ACCESS_TOKEN_EXAMPLE

Login Url is added for simulating the user login and get an access token then sending requests for posts.

http://localhost:8000/login<br>
http://localhost:8000/posts<br>

These addresses can be use for valid requests. Other requests will respond as 404.

Just clone the repository, run it with "node index" command and enjoy.

