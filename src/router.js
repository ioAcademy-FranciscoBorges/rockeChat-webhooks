const express = require('express');
const RootController = require('./controllers/RootController');

const router = express.Router();

const rootController = new RootController();


router.get('/', rootController.index)
router.get('/message/:message', )

module.exports = router;