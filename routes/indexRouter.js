var express = require('express');
var router = express.Router();
const inicio = require('../controllers/indexController')

/* GET home page. */
router.get('/', inicio);


module.exports = router;
