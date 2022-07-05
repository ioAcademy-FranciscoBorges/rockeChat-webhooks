const express = require('express');
const RootController = require('./Controller/RootController');

const router = express.Router();

const rootController = new RootController();


router.get('/', rootController.index)

module.exports = router;