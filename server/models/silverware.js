const mongoose = require('mongoose');

const SilverSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
    },
    par: Number,
    missing: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Silverware', SilverSchema);