const mongoose = require('mongoose');

// Define the contact schema
const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    favoriteColor: { type: String },
    birthday: { type: Date },
});

// Create a model using the schema
const Contact = mongoose.model('Contact', contactSchema, 'contacts');

// Export the model
module.exports = Contact;