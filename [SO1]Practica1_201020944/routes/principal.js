/**
 * Created by luis on 18/08/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/principal', function(req, res, next) {
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

router.post('infomen', function (req, res) {

    if(req.session.Nombre)
    {
        console.log(req.session.Nombre);
        res.render('memoria', {
            usuario: req.session.Nombre
        });
    }else{
        var pagina = '<!doctype html><html><head></head><body>'+
            '<p>Datos No Validos</p>'+
            '<br><a href= "/" > Regresar </a></body></html>';
        res.send(pagina);
    }
});

router.post('infocpu', function (req, res) {

    if(req.session.Nombre)
    {
        console.log(req.session.Nombre);
        res.render('cpu', {
            usuario: req.session.Nombre
        });
    }else{
        var pagina = '<!doctype html><html><head></head><body>'+
            '<p>Datos No Validos</p>'+
            '<br><a href= "/" > Regresar </a></body></html>';
        res.send(pagina);
    }
});

module.exports = router;