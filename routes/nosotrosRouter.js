var express = require('express');
var router = express.Router();
const nosotros = require('../controllers/nosotrosController')

/* GET home page. */
router.get('/', nosotros);


module.exports = router;