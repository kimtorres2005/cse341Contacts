// create a swagger.js file in the root of your project

const swaggerAutogen = require('swagger-autogen')();

const doc = {
        info: {
            title: 'CSE341 Contacts API',
            version: '1.0.0',
            description: 'A simple contacts API for CSE341 to GET, POST, PUT, and DELETE contacts',
        },
        host: 'cse341contacts-grna.onrender.com',
        schemes: ['https'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
