const Publication = require("../models/publication");

function publicationAdd(req, res) {
  const publication = new Publication();

  const { title, image, content, author, visibility, section } = req.body;
  publication.title = title;
  publication.image = image;
  publication.content = content;
  publication.author = author;
  publication.visibility = visibility;
  publication.section = section;

  publication.save((err, publicationStored) => {
    if (!publicationStored) {
      res.status(500).send({ message: "Error al crear la publicación." });
    } else {
      res.status(200).send({ publication: publicationStored });
    }
  });
}

function getPublications(req, res) {
  Publication.find().then((publications) => {
    if (!publications) {
      res.status(400).send({ message: "No se encontro ninguna publicación." });
    } else {
      res.status(200).send({ publications });
    }
  });
}

function deletePublication(req, res) {
  const { id } = req.params;

  Publication.findByIdAndRemove(id, (err, publicationDeleted) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!publicationDeleted) {
        res.status(404).send({ message: "Publicación no encontrado." });
      } else {
        res
          .status(200)
          .send({ message: "La publicación ha sido eliminada correctamente." });
      }
    }
  });
}

module.exports = {
  publicationAdd,
  getPublications,
  deletePublication,
};

