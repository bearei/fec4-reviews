const db = require('./index');

module.exports.findReview = function(req, res) {
  db.then(conn => {
    conn.query(`SELECT * FROM reviews WHERE itemId = ${req.params.itemId}`)
      .then(data => res.status(200).send(data));
  }) 
};

module.exports.findItem = function(req, res) {
  db.then(conn => {
    conn.query(`SELECT * FROM products WHERE itemId = ${req.params.itemId}`)
      .then(data => res.status(200).send(data));
  }) 
};

module.exports.markHelpful = function(req, res) {
  console.log('heard patch for helpful')
  db.then(conn => {
    conn.query(`UPDATE reviews SET helpful = helpful + 1 WHERE reviewId = ${req.params.reviewId}`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }) 
}
;
module.exports.marUnhelpful = function(req, res) {
  console.log('heard patch for unhelpful')
  db.then(conn => {
    conn.query(`UPDATE reviews SET helpful = helpful - 1 WHERE reviewId = ${req.params.reviewId}`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }) 
};

module.exports.createReview = function(req, res) {
  db.then(conn => {
    conn.query(`SELECT * FROM products WHERE itemId = ${req.params.itemId}`)
      .then(data => res.status(200).send(data));
  }) 
};

