const emailValidator = require('deep-email-validator');

const validateEmail = (email) => {
    try {
        return emailValidator.validate(email)
    } catch (error) {
        console.log("error in email validation " + error)
    }
}

module.exports = { validateEmail }