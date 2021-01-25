const express = require("express");
const AdminController = require("../controllers/admin");

const api = express.Router();

api.post("/signIn", AdminController.signIn);

module.exports = api;
