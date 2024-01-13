const mongoose = require('mongoose');

const mongo = {};

// Set Mongoose to use the ES6 promise
mongoose.Promise = global.Promise;

// Connect to the database
const uri = 'mongodb+srv://kimtorres2005:kimberly181986@cluster0.efctyh5.mongodb.net/CSE341?retryWrites=true&w=majority';

// Connection promise using the uri
const db = mongoose.connect(uri);

// Export the connection promise 
mongo.db = db;
mongo.connectDb = async function () {
    await db
    return mongoose.db;
};

// Log successful connection
db.then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => {
        console.log('Error: ', err.message);
        process.exit(1)});

// Export the module
module.exports = mongo;