/**
 * Created by luis on 18/08/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.Nombre){
        res.render('principal', {
            usuario: req.session.Nombre
        });
    }else{
        var pagina='<!doctype html><html><head></head><body>'+
            '<p>Para visualizar esta pagina inicie sesion</p>'+
            '<br><a href="/">Regresar</a></body></html>';
        res.send(pagina);
    }


});

module.exports = router;