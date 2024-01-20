const routes = require('express').Router();
const controller = require('../controllers/index');
const altController = require('../controllers/contactsAltController');

// Route for getting all contacts
routes.get('/', controller.list);

// Route for getting a contact by ID
routes.get('/:contactId', controller.getById);

// Route for getting contacts by firstName
routes.get('/firstName/:firstName', controller.getByFirstName);

// Route for adding a new contact
routes.post('/', altController.insert);

// Route for updating a contact
routes.put('/:contactId', altController.update);

// Route for deleting a contact
routes.delete('/:contactId', altController.delete);

module.exports = routes;