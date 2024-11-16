const mongoose = require('mongoose');

const SupportSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    message: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('support', SupportSchema);
