const express = require("express");
const PublicationController = require("../controllers/publication");
const multiparty = require("connect-multiparty");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/publicationAdd", [md_auth.ensureAuth], PublicationController.publicationAdd);
api.get("/getPublications", [md_auth.ensureAuth], PublicationController.getPublications);
api.get("/getPublicationsVisitor", PublicationController.getPublicationsVisitor);
api.delete("/deletePublication/:id", [md_auth.ensureAuth], PublicationController.deletePublication);
api.put("/updatePublication/:id", [md_auth.ensureAuth], PublicationController.updatePublication);

module.exports = api;

