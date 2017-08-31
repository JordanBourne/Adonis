const express = require('express');
const router = express.Router();
const sharedMiddleware = require('../../middleware');

const getPrograms = require('./getPrograms');

router
    .get('/getPrograms',
        getPrograms,
        sharedMiddleware.success);

module.exports = router;