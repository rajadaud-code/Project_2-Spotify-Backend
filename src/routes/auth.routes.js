const express = require('express');
const authController = require("../controllers/auth.controller")

const router = express.Router();



// creating register api
router.post('/register', authController.registerUser)

// creating login api
router.post('/login', authController.loginUser)

router.post('/logout', authController.logoutUser)


module.exports = router;