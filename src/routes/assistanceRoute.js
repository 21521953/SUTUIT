const express = require('express');
const router = express.Router();

const assistanceRoute = require('../app/controllers/assistanceController');

router.use('/chat', assistanceRoute.chat);

module.exports = router;