const express = require('express');
const router = express.Router();


const homecontroller = require('../app/controllers/homeController');

router.get('/', homecontroller.index);
router.get('/:slug=1', homecontroller.index);


module.exports = router