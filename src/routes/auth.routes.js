const express = require('express');
const authController = require("../controllers/auth.controller")
const {registerValidation, loginValidation} = require("../validators/auth.validator");
const validate = require("../middlewares/validation.middleware");
const router = express.Router();



// creating register api
router.post('/register', registerValidation, validate, authController.registerUser)

// creating login api
router.post('/login', loginValidation, validate, authController.loginUser)

router.post('/logout', authController.logoutUser)



module.exports = router;
