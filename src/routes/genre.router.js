const { getAll, createGenre, getOneGenre, deleteGenre, updateGenre } = require('../controllers/genre.controllers');
const express = require('express');

const routerGenre = express.Router();

routerGenre.route('/')
    .get(getAll)
    .post(createGenre)

routerGenre.route('/:id')
    .get(getOneGenre)
    .delete(deleteGenre)
    .put(updateGenre)    
    

module.exports = routerGenre;