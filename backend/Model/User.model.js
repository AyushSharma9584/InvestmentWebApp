const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,

    },
    password: {
        type: String,
    },
    register_status: {
        type: Boolean,
        default: false
    },
    approval_status: {
        type: String,
        default: "Pending"
    },
    created_date: {
        type: Date,
        default: Date.now,
    },


})

module.exports = mongoose.model('user', UserSchema)