// Description: Controller for the contacts routes that alters the information in the database

const model = require("../models/index");
const Contact = model;

const controller = {};

// Function to add a new contact to the database
controller.insert = async function (req, res) {
  // swagger.tags = ['Contacts'];
  /* #swagger.description = 'Endpoint to POST contact into the database.'\n
        If ApiKey is needed: c1cceaaac2e12fca5fd9f5da7f870b3d */

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

// Function to update a contact in the database
controller.update = async function (req, res) {
  // swagger.tags = ['Contacts'];
  /* #swagger.description = 'Endpoint to UPDATE contact by ID in the database.'\n
        If ApiKey is needed: c1cceaaac2e12fca5fd9f5da7f870b3d */

  try {
    const { contactId } = req.params;
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      {
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday,
      },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to delete a contact from the database
controller.delete = async function (req, res) {
  // swagger.tags = ['Contacts'];
  /* #swagger.description = 'Endpoint to DELETE contact from the database.'\n
        If ApiKey is needed: c1cceaaac2e12fca5fd9f5da7f870b3d */

  try {
    const { contactId } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(
      deletedContact.firstName +
        " " +
        deletedContact.lastName +
        " was deleted successfully!"
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = controller;
