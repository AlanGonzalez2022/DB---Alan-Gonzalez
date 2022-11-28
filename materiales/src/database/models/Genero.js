module.exports = (sequelize, dataTypes) =>{

    let alias = 'Generos';
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        ranking:{
            type: dataTypes.INTEGER
        },
        active:{
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'genres',
    };

    const Genero = sequelize.define(alias, cols, config);

    return Genero;
}