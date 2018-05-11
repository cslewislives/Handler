const mongoose = require('mongoose');

const SilverSchema = new mongoose.Schema({
    silver: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
    },
    par: Number,
    missing: Number
}, {timestamps: true});

module.exports = mongoose.model('Silverware', SilverSchema);