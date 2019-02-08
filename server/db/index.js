const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hrei-reviews';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
