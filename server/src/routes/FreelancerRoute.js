const freelancerController = require('../controllers/OwnersController');



const express = require('express');
const router = express.Router();
const userController = require('../controllers/OwnerController');

router.get('/users', userController.getUsers);

module.exports = router;