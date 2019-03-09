const db = require('./index');

module.exports.findReview = function(req, res) {
  db
    .then(conn => {
      conn.query(`SELECT * FROM reviews WHERE itemId = ${req.params.itemId}`)
        .then(data => res.status(200).send(data))
        .then(conn => conn.end());
    }) 
};

module.exports.findItem = function(req, res) {
  db.then(conn => {
    conn.query(`SELECT * FROM products WHERE itemId = ${req.params.itemId}`)
      .then(data => res.status(200).send(data))
      .then(conn => conn.end());
  }) 
};

module.exports.markHelpful = function(req, res) {
  db.then(conn => {
    conn.query(`UPDATE reviews SET helpful = helpful + 1 WHERE reviewId = ${req.params.reviewId}`)
      .then(ddata => res.status(200).send(data))
      .catch(err => console.log(err))
      .then(conn => conn.end());
  }) 
}
;
module.exports.markUnhelpful = function(req, res) {
  db.then(conn => {
    conn.query(`UPDATE reviews SET helpful = helpful - 1 WHERE reviewId = ${req.params.reviewId}`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err))
      .then(conn => conn.end());
  }) 
};

module.exports.flag = function(req, res) {
  db.then(conn => {
    conn.query(`UPDATE reviews SET flag = true WHERE reviewId = ${req.params.reviewId}`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err))
      .then(conn => conn.end());
  }) 
};

module.exports.createReview = function(req, res) {
  db.then(conn => {
    conn.query(`INSERT INTO reviews (rating, title, text, recommend, name, fit, itemId) VALUES (${req.body.rating}, ${req.body.title}, ${req.body.text}, ${req.body.recommend}, ${req.body.name}, ${req.body.fit}, ${req.body.itemId})`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err))
      .then(conn => conn.end());
  }) 
};

module.exports.delete = function(req, res) {
  db.then(conn => {
    conn.query(`DELETE FROM reviews where reviewId = ${req.body.reviewId};`)
      .then(data => res.status(200).send(data));
  }) 
};


