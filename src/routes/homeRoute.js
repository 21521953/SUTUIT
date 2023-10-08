const express = require('express');
const router = express.Router();


const homecontroller = require('../app/controllers/homeController');

router.get('/', homecontroller.index);

module.exports = router