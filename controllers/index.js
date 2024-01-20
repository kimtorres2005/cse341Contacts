// Description: Initialize the database and GET contacts from the database

const model = require("../models/index");
const Contact = model;

const controller = {};

// Function to render the home page
controller.home = (req, res) => {
  // swagger.tags = ['Home'];
  res.send("Kimberly Torres: Contacts Project for CSE 341");
};

// Function to get all contacts from the database
controller.list = (req, res) => {
  // swagger.tags = ['Contacts'];
  /* #swagger.description = 'Endpoint to get all contacts from the database.'\n
        If ApiKey is needed: c1cceaaac2e12fca5fd9f5da7f870b3d */
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
  // swagger.tags = ['Contacts'];
  /* #swagger.description = 'Endpoint to get contact by ID from the database.'\n
        If ApiKey is needed: c1cceaaac2e12fca5fd9f5da7f870b3d */

  try {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get a contact by firstName
controller.getByFirstName = async function (req, res) {
  // swagger.tags = ['Contacts'];
    /* #swagger.description = 'Endpoint to get contact by firstName from the database.'\n
        If ApiKey is needed: c1cceaaac2e12fca5fd9f5da7f870b3d */

  try {
    const { firstName } = req.params;
    const contacts = await Contact.findByFirstName(firstName);

    if (contacts.length === 0) {
      return res.status(404).json({ message: "Contacts not found" });
    }

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = controller;
