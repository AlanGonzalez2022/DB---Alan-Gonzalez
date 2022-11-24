let db= require('../database/models');

let moviesController = {
    list: function(req,res) {
        db.Peliculas.findAll()
            .then(function(Peliculas){
                res.render('moviesList', {peliculas: peliculas})
            })
            .catch(error=> res.send(error));
    },
    detail: function(req,res) {
        db.Peliculas.findByPk(req.params.id).then(function(Peliculas){
            res.render('moviesDetail', {peliculas: peliculas})
        })
        .catch(error=> res.send(error));
        }
}