const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.editUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
