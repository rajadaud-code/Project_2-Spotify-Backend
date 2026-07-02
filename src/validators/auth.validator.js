const { body } = require("express-validator");

const registerValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .optional()
    .isIn(["user", "artist"])
    .withMessage("Invalid role")
];

const loginValidation = [
    body("username")
        .optional({ values: "falsy" })
        .isLength({ min: 3 })
        .withMessage("Username must be at least 3 characters"),

    body("email")
        .optional({ values: "falsy" })
        .isEmail()
        .withMessage("Invalid email format"),

    body("password")
        .notEmpty()
        .withMessage("Password is required"),

    body()
        .custom((value) => {

            if (!value.username && !value.email) {
                throw new Error(
                    "Provide username or email"
                );
            }

            return true;
        })

];

module.exports = { registerValidation, loginValidation};
