const testController = require('../controller/test.controller');
const express = require('express');
const router = express.Router();

router.route('/').get(testController.getMessages);
router.route('/').post(testController.destorySession);
module.exports = router;
