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
    }

})

module.exports = mongoose.model('user', UserSchema)