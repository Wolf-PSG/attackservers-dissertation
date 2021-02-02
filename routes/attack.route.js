const attackController = require('../controller/attack.controller');
const express = require('express');
const router = express.Router();

router.route('/').get(attackController.getData);

module.exports = router;