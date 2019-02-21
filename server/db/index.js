const mongoose = require('mongoose');

const mongoUri = process.env.NODE_ENV==='test' ? 'mongodb://127.0.0.1/test_reviews' : 'mongodb://localhost/hrei-reviews';
mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;
