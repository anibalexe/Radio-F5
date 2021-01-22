/*Importa express y bodyparser*/
const express = require("express");
const bodyParser = require("body-parser");

/*Inicializa la api y extrae la version*/
const app = express();
const { API_VERSION } = require("./config");

//Cargar rutas...
const AdminRoutes = require("./routers/admin");

//Configurar bodyParser 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Configurar Header HTTP

//Router basic
app.use(`/api/${API_VERSION}`, AdminRoutes);

/*Exporta la app*/
module.exports = app;