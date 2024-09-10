const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String,
        default: " "
    },
    phone_no: {
        type: Number
    },
    city: {
        type: String
    },
    aadhaar_no: {
        type: String
    },
    password: {
        type: String
    }

})

module.exports = mongoose.model('Userinfo', UserSchema)