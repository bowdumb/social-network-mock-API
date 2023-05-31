const { connect, connection } = require('mongoose');

// connect('mongodb://127.0.0.1:27017/socialDB')
const connectionString = 
    process.env.MONGODUB_URI || 'mongodb://127.0.0.1:27017/socialDB';

    connect(connectionString);

module.exports = connection;