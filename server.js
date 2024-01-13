const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./db/mongo');

// Middleware for body parsing
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/index'));

// Start server
const port = process.env.PORT || 5500;

// Use mongo for the database connection
mongo.connectDb().then(() => {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}).catch(err => {
    console.log('Error: ', err.message);
    process.exit(1);
});
