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
    },
    approval_status: {
        type: String,
        default: "Pending"
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
    updated_date: {
        type: Date,
        default: ""
    },

})

module.exports = mongoose.model('user_register', UserRegisterSchema)