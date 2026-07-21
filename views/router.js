import express from "express";
import accountsController from "../controllers/accountsController.js";

const Router = express.Router();

Router.route("/accounts") //this creates an endpoint for /accounts
  .get(accountsController.getAllAccounts) //if the user sends a GET request to /account, use this function
  .post(accountsController.createAccount);//if the user sends a POST request to /account, use this functio

Router.route("/accounts/:id")
  .get(accountsController.getAccountById) //if the user sends a GET request to /account:id, use this function
  .put(accountsController.updateAccountById)//if the user sends a PUT request to /account:id, use this function
  .delete(accountsController.deleteAccountById);//if the user sends a DELETE request to /account:id, use this function

export default Router;