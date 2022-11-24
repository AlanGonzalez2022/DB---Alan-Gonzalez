let db= require('../database/models');

let moviesController = {
    genres: function(req,res) {
        db.Generos.findAll()
            .then(function(Peliculas){
                res.render('genresList', {generos: generos})
            })
            .catch(error=> res.send(error));
    },
    detail: function(req,res) {
        db.Generos.findByPk(req.params.id).then(function(Generos){
            res.render('genresDetail', {generos: generos})
        })
        .catch(error=> res.send(error));
    }
}