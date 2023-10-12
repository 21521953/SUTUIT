const express = require('express');

const router = express.Router();

const signinRoute = require('../app/controllers/signinController');

router.use('/signpage', signinRoute.sigin);
module.exports = router;
