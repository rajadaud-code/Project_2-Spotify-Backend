const express = require('express');
const authController = require("../controllers/auth.controller")

const router = express.Router();



// creating register api
router.post('/register', authController.registerUser)



module.exports = router;