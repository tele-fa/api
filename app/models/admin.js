const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminModule = new Schema({
    access_token: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Admin = mongoose.model('admin', adminModule);

module.exports = Admin;