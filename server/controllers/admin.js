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
        res.status(404).send({ message: "Usuario no encontrado." });
      } else {
        bcrypt.compare(password, adminStored.password, (err, check) => {
          if (err) {
            res.status(500).send({ message: "Error del servidor." });
          } else if (!check) {
            res.status(404).send({ message: "La contraseña es incorrecta." });
          } else {
            if (adminStored.active == 2) {
              res
                .status(200)
                .send({ code: 200, message: "El usuario no se ha activado." });
            } else {
              res.status(200).send({
                accessToken: jwt.createAccessToken(adminStored),
                refreshToken: jwt.createRefreshToken(adminStored),
              });
            }
          }
        });
      }
    }
  });
}

function userAdd(req, res) {
  const user = new Admin();

  const {
    name,
    lastname,
    email,
    password,
    repeatPassword,
    privilege,
    status,
  } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.privilege = privilege;
  user.status = status;

  if (!password || !repeatPassword) {
    res.status(404).send({ message: "Las contraseñas son obligatorias." });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ message: "Las contraseñas no son iguales" });
    } else {
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res
            .status(500)
            .send({ message: "Error al encriptar la contraseña." });
        } else {
          user.password = hash;
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "El usuario ya existe." });
            } else {
              if (!userStored) {
                res.status(500).send({ message: "Error al crear el usuario." });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

function getUsers(req, res) {
  Admin.find().then((users) => {
    if (!users) {
      res.status(400).send({ message: "No se encontro ningun usuario." });
    } else {
      res.status(200).send({ users });
    }
  });
}

module.exports = {
  signIn,
  userAdd,
  getUsers,
};
