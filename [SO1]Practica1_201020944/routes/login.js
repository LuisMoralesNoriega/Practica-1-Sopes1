/**
 * Created by luis on 18/08/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});


router.post('/', function (req, res) {
    req.session.Nombre = req.body.Nombre;
    req.session.Clave = req.body.Clave;

    if(req.session.Nombre==="admin" && req.session.Clave==="admin")
    {
        console.log(req.session.Nombre);
        console.log(req.session.Clave);
        res.render('principal', {
            usuario: req.session.Nombre
        });
    }else{
        var pagina = '<!doctype html><html><head></head><body>'+
                     '<p>Datos No Validos</p>'+
                     '<br><a href= "/" > Regresar </a></body></html>';
        res.send(pagina);
    }

    /*
    if(req.body.Nombre === 'admin' && req.body.Contrasenia === 'admin'){
        console.log(req.body.Nombre);
        console.log(req.body.Contrasenia);
    }

    res.send('Post page');*/
});

module.exports = router;