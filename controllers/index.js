const model = require("../models/index");
const Contact = model;

const controller = {};

// Function to render the home page
controller.home = (req, res) => {
  res.send("Kimberly Torres: Contacts Project for CSE 341");
};

// Function to get all contacts from the database
controller.list = (req, res) => {
  model
    .find()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// Function to get a contact by ID
controller.getById = async function (req, res) {
    try {
        const { contactId } = req.params;
        const contact = await Contact.findById(contactId);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to get a contact by firstName
controller.getByFirstName = async function (req, res) {
    try {
        const { firstName } = req.params;
        const contacts = await Contact.findByFirstName(firstName);

        if (contacts.length === 0) {
            return res.status(404).json({ message: 'Contacts not found' });
        }

        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to add a new contact to the database
controller.insert = async function (req, res) {
    try {
        // Create a new contact from the request body
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;
        const newContact = new model({
            firstName,
            lastName,
            email,
            favoriteColor,
            birthday,
        });
        // Save the new contact
        const savedContact = await newContact.save();

        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

module.exports = controller;
