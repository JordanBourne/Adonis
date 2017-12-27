const express = require('express');
const router = express.Router();
const sharedMiddleware = require('../../../middleware');
const getPrograms = require('./getPrograms.middleware');

router
	.post('/getPrograms',
		getPrograms,
		sharedMiddleware.success);

module.exports = router;
