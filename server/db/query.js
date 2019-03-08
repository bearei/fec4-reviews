const db = require('./index');

let conn;

module.exports.findReview = async function(itemId) {
  conn = await db.getConnection();
  await conn.query(`SELECT * FROM reviews WHERE itemId = ${itemId}`);
};

module.exports.findItem = '';

module.exports.updateReview = '';

module.exports.createReview = '';

