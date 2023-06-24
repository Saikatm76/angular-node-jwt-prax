const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const authSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

authSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Auth', authSchema);