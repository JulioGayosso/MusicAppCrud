const {
  getAll,
  createArtist,
  getOneArtist,
  deleteArtist,
  updateArtist,
  setGenres,
} = require("../controllers/artist.controllers");
const express = require("express");

const routerArtist = express.Router();

routerArtist.route("/").get(getAll).post(createArtist);

routerArtist.route("/:id/genres").post(setGenres);

routerArtist
  .route("/:id")
  .get(getOneArtist)
  .delete(deleteArtist)
  .put(updateArtist);

module.exports = routerArtist;
