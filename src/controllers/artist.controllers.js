const catchError = require("../utils/catchError");

const Artist = require("../models/Artist");
const Genre = require("../models/Genre");

const getAll = catchError(async (req, res) => {
  const result = await Artist.findAll({include:Genre});
  return res.json(result);
});

const createArtist = catchError(async (req, res) => {
  const result = await Artist.create(req.body);
  return res.status(201).json(result);
});

const getOneArtist = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.findByPk(id,{include:Genre});
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const deleteArtist = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.destroy({ where: { id } });
  if (!result) return res.senStatus(404);
  return res.sendStatus(204);
});

const updateArtist = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result === 0) {
    return res.sendStatus(404);
  }
  return res.json(result[1][0]);
});

const setGenres = catchError(async (req,res) => {
  //localizar al artist
  const {id} = req.params
  const artist = await Artist.findByPk(id)

  //setear los generos al artista localizado
 await artist.setGenres(req.body)

 //obtener los generos seteados
 const genres = await artist.getGenres()


  return res.json(genres)
})

module.exports = {
  getAll,
  createArtist,
  getOneArtist,
  deleteArtist,
  updateArtist,
  setGenres
};
