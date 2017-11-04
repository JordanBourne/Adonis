const express = require('express');
const router = express.Router();
const sharedMiddleware = require('../../middleware');
const joi = require('joi');

const getPrograms = require('./getPrograms');

router
    .post('/getPrograms',
        getPrograms,
        sharedMiddleware.success);

module.exports = router;
