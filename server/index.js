//Importa mongoose, app, port y las constantes en el archivo config.
const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

//Establece la conexion con la base de datos.
mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/database`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexión con la base de datos ha sido exitosa.");

      app.listen(port, () => {
        console.log(`https://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);
