/**
 * Created by luis on 19/08/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('memoria', { title: 'Memoria Ram' });
});

module.exports = router;