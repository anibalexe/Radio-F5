const Publication = require("../models/publication");

function publicationAdd(req, res) {
  const publication = new Publication();

  const { title, subtitle, image, content, author, visibility, section, creationDate } = req.body;
  publication.title = title;
  publication.subtitle = subtitle;
  publication.image = image;
  publication.content = content;
  publication.author = author;
  publication.visibility = visibility;
  publication.section = section;
  publication.creationDate = creationDate;

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

function getPublicationsVisitor(req, res) {
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

function updatePublication(req, res) {
  const publicationData = req.body;
  const params = req.params;

  Publication.findByIdAndUpdate({ _id: params.id }, publicationData, (err, publicationUpdate) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!publicationUpdate) {
        res
          .status(404)
          .send({ message: "No se ha encontrado ningún usuario." });
      } else {
        res.status(200).send({ message: "Usuario actualizado correctamente." });
      }
    }
  });
}

function getPublicationVisitor(req, res) {
  const params = req.params;

  Publication.findById({ _id: params.id }, (err, publicationData) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!publicationData) {
        res
          .status(404)
          .send({ message: "No se ha encontrado ningún usuario." });
      } else {
        res.status(200).send({ publicationData });
      }
    }
  });
}

module.exports = {
  publicationAdd,
  deletePublication,
  updatePublication,
  getPublications,
  getPublicationsVisitor,
  getPublicationVisitor,
};

