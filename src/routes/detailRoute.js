const express = require('express');
const router = express.Router();

const detailRoute = require('../app/controllers/detailController');


router.use('/:_id/:TenCongTy', detailRoute.test);
router.use('/:_id', detailRoute.show);

module.exports = router;