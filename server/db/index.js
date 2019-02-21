const mongoose = require('mongoose');
// process.env.NODE_ENV
// “NODE_ENV=test jest”

const mongoUri = 'mongodb://localhost/hrei-reviews';
mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;
