const Validator = require("validator");
const isEmpty = require("is-empty");

function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // Username checks
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    } else if (!Validator.isLength(data.username, { min: 3, max: 30 })) {
        errors.username = "Username must be between 3 and 30 characters long";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    } else if (!Validator.isLength(data.email, { min: 5, max: 60 })) {
        errors.email = "Email must be between 5 and 60 characters long";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    } else if (!Validator.isLength(data.password, { min: 5, max: 40 })) {
        errors.password = "Password must be between 5 and 40 characters long";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password is required";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = validateRegisterInput;
