const injectionController = require('../controller/injection.controller');
const express = require('express');
const router = express.Router();

router.route('/').get(injectionController.getDetails);
module.exports = router;
