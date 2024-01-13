const routes = require('express').Router();
const controller = require('../controllers/index');

// Route for the home page
routes.get('/', controller.home);

// Route for getting all contacts
routes.get('/contacts', controller.list);

// Route for adding a new contact
routes.post('/contacts', controller.insert);

module.exports = routes;