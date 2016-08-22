/**
 * Created by luis on 19/08/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.Nombre){
        res.render('memoria', {
            usuario: req.session.Nombre
        });
    }else{
        res.render('ErrorSesion');
    }

});

module.exports = router;