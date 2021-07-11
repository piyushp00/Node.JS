const mongoose = require('mongoose');

//? create schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

//TODO->  whenever creating model or collection name you should keep first letter capital

//? name of collection used by schema
const Contact = mongoose.model('Contact', contactSchema);

//? export
module.exports = Contact;
