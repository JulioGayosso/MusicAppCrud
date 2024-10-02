const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

Artist.belongsToMany(Genre,{through:'artistGenre'})
Genre.belongsToMany(Artist,{through:'artistGenre'})

Song.belongsToMany(Genre,{through:'songGenre'})
Genre.belongsToMany(Song,{through:'songGenre'})


// Una album pertenece a un artista
Album.belongsTo(Artist)
// Un artista tiene muchos albunes
Artist.hasMany(Album)

// Una canción pertenece a un álbum
Song.belongsTo(Album);
// Un álbum tiene muchas canciones
Album.hasMany(Song);
