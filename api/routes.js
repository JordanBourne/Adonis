var express = require('express');
var router = express.Router();

router.use(require('./programs/getPrograms/getPrograms'));
router.use(require('./programs/downloadProgram/downloadProgram'));

module.exports = router;
