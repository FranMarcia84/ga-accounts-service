import dotenv from 'dotenv'; // Dotenv is a package that lets us use environment variables
dotenv.config() // we call this to initialize dotenv
import express from "express"; //we need the express package because it provides the router object
import Router from "./views/router.js"; // import the router object from the router file

const port = process.env.PORT; // get the PORT variable from the .env file
const app = express(); //create a new express application (use express.json)

app.use(express.json());// this configures express to read request body ehrn a user sends data
app.use(Router);

async function startServer() { // we can make the code wait for someting with the async function, the async function can wait for things to happen
  try {
    app.listen(port, () => console.log(`🤖 Listening on Port: ${port}`));
  } catch (err) {
    console.log("🤖 Oh no something went wrong", err);
  }
}

startServer();