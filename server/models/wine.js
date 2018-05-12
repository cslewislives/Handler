const mongoose = require('mongoose');

const WineSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
    },
    par: {
        type: Number,
        default: 6
    },
    missing: {
        type: Number,
        default: 0
    },
    distributor: String
}, {timestamps: true});

module.exports = mongoose.model('Wine', WineSchema);