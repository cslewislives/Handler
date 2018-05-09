const mongoose = require('mongoose');

const GlassSchema = new mongoose.Schema({
    glass: {
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

module.exports = mongoose.model('Glass', GlassSchema);