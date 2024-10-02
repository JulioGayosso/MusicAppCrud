const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Album = sequelize.define('album', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    realeaseYear:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = Album;