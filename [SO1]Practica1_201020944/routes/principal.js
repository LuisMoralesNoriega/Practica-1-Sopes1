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
        res.render('ErrorSesion');
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
        res.render('ErrorSesion');
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
        res.render('ErrorSesion');
    }
});

module.exports = router;