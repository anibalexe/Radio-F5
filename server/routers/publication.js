const express = require("express");
const PublicationController = require("../controllers/publication");
const multiparty = require("connect-multiparty");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/publicationAdd", [md_auth.ensureAuth], PublicationController.publicationAdd);
api.get("/getPublications", [md_auth.ensureAuth], PublicationController.getPublications);
api.delete("/deletePublication/:id", [md_auth.ensureAuth], PublicationController.deletePublication);

module.exports = api;

