const mongoose = require('mongoose');

// creating connection or database
const connection = mongoose.connect('mongodb://0.0.0.0/men').then(() => {
    console.log("Database is connected");
})

module.exports = connection;