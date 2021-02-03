const express = require("express");
const AdminController = require("../controllers/admin");
const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/signIn", AdminController.signIn);
api.post("/userAdd", AdminController.userAdd);
api.get("/getUsers", [md_auth.ensureAuth], AdminController.getUsers);
api.put("/updateAdmin/:id", [md_auth.ensureAuth], AdminController.updateAdmin);

module.exports = api;
