const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PublicationSchema = Schema({
    title: String,
    image: String,
    author: String,
    content: String,
    visibility: String,
    section: String,
    //fecha de publicacion (la fecha de modificacion y creacion van en la tabla intermedia)
})


module.exports = mongoose.model("Publication", PublicationSchema);
