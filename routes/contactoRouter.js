
const express = require('express');
const router = express.Router();
const contacto = require('../controllers/contactoController');


router.get('/', contacto);



module.exports = router;