/**
 * Created by luis on 21/08/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cpu', { title: 'CPU' });
});

module.exports = router;