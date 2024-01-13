const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    favoriteColor: { type: String },
    birthday: { type: Date },
});

// Static method to find a contact by ID
contactSchema.statics.findById = async function (contactId) {
    return this.findOne({ _id: contactId });
};

// Static method to find a contact by firstName
contactSchema.statics.findByFirstName = async function (firstName) {
    return this.find({ firstName: new RegExp(firstName, 'i') });
};

const Contact = mongoose.model('Contact', contactSchema, 'contacts');

module.exports = Contact;