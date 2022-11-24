module.exports = (sequelize, dataTypes) =>{

    let alias = 'Peliculas';
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL
        },
        awards:{
            type: dataTypes.STRING
        },
        release_date:{
            type: dataTypes.INTEGER
        },
        length:{
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.STRING
        },
    };

    let config = {
        tableName: 'movies',
        timestamp: false
    };

    const Pelicula = sequelize.define(alias, cols, config);

    return Pelicula;
}