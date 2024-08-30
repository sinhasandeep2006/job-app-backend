const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resume: { type: String, required: false
    }, // Path to the uploaded resume
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
