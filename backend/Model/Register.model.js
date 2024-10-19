const mongoose = require('mongoose')

const UserRegisterSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    aadhaar_no: {
        type: Number
    },
    pan_no: {
        type: String
    },
    account_no: {
        type: Number
    },
    ifsc: {
        type: String
    },
    bank_name: {
        type: String
    },
    phone_no: {
        type: Number
    },
    upi_no: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pin_code: {
        type: Number
    }

})

module.exports = mongoose.model('user_register', UserRegisterSchema)