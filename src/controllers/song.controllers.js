const catchError = require('../utils/catchError');
const Song = require('../models/Song');
const Album = require('../models/Album');
const Genre = require('../models/Genre');

const getAll = catchError(async(req, res) => {
    const results = await Song.findAll({
        include: [
            Genre,
            Album // Incluye el modelo Album en la consulta
        ]
    });
    return res.json(results);
});
/* const getAll = catchError(async(req, res) => {
    const results = await Song.findAll({include:Genre});
    return res.json(results);
}); */

const create = catchError(async(req, res) => {
    const result = await Song.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Song.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Song.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Song.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const getGen = catchError(async(req,res) =>{
    //localizamos el song
    const {id} = req.params
    const song = await Song.findByPk(id)
   /*  return res.json(song) */
    /* const song = await Song.findByPk(id) */

   //seteamos el genero 
    await song.setGenres(req.body)
 
   //obtener los generos seteados
 const genres = await song.getGenres() 

 return res.json(genres)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    getGen
}