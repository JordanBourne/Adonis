const express = require('express');
const router = express.Router();
const sharedMiddleware = require('../../middleware');

const downloadProgram = require('./downloadProgram.middleware');

router
	.get('/downloadProgram/:programName',
		downloadProgram,
		sharedMiddleware.success);

module.exports = router;
