const model = require("../models/index");
const Contact = model;

const controller = {};

// Function to render the home page
controller.home = (req, res) => {
  res.send("Kimberly Torres");
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
