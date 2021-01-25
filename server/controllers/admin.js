const bcrypt = require("bcrypt-nodejs");
const Admin = require("../models/admin");
const jwt = require("../services/jwt");

function signIn(req, res) {
  const params = req.body;
  const email = params.email.toLowerCase();
  const password = params.password;

  Admin.findOne({ email }, (err, adminStored) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!adminStored) {
        res.status(404).send({ message: "Usuario no encontrado" });
      } else {
        bcrypt.compare(password, adminStored.password, (err, check) => {
          if (err) {
            res.status(500).send({ message: "Error del servidor." });
          } else if (!check) {
            res.status(404).send({ message: "La contraseña es incorrecta." });
          } else {
            if (!adminStored.active) {
              res
                .status(200)
                .send({ code: 200, message: "El usuario no se ha activado." });
            } else {
              res
                .status(200)
                .send({
                  accessToken: jwt.createAccessToken(adminStored),
                  refreshToken: jwt.createRefreshToken(adminStored)
                });
            }
          }
        });
      }
    }
  });
}

module.exports = {
  signIn,
};
