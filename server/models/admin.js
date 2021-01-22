const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = Schema({
  name: String,
  photo: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  date: String,
  role: String,
  active: Boolean,
});

module.exports = mongoose.model("Admin", AdminSchema);
