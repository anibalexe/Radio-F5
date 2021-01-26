const express = require("express");
const AdminController = require("../controllers/admin");

const api = express.Router();

api.post("/signIn", AdminController.signIn);
api.post("/userAdd", AdminController.userAdd);

module.exports = api;
