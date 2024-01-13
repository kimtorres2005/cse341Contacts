const routes = require('express').Router();
const controller = require('../controllers/index');

// Route for the home page
routes.get('/', controller.home);

// Route for getting all contacts
routes.get('/contacts', controller.list);

// Route for getting a contact by ID
routes.get('/contacts/:contactId', controller.getById);

// Route for getting contacts by firstName
routes.get('/contacts/firstName/:firstName', controller.getByFirstName);

// Route for adding a new contact
routes.post('/contacts', controller.insert);

module.exports = routes;