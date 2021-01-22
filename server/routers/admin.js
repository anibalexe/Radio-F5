const express = require("express");
const AdminController = require("../controllers/admin");

const api = express.Router();

api.post("/admin", AdminController.signIn);

module.exports = api;
