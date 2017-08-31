var express = require('express');
var router = express.Router();

router.use(require('./programs/get'));

module.exports = router;