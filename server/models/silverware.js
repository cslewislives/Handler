const mongoose = require('mongoose');

const SilverSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    totalDay: {
        type: Number,
        required: true,
    },
    totalTurn: {
        type: Number,
        default: 0
    },
    parDay: Number,
    parTurn: {
        type: Number,
        default: 0
    },
    missing: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Silverware', SilverSchema);