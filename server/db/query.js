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
  db.then(conn => {
    conn.query(`UPDATE reviews SET helpful = helpful + 1 WHERE reviewId = ${req.params.reviewId}`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }) 
}
;
module.exports.markUnhelpful = function(req, res) {
  db.then(conn => {
    conn.query(`UPDATE reviews SET helpful = helpful - 1 WHERE reviewId = ${req.params.reviewId}`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }) 
};

module.exports.flag = function(req, res) {
  db.then(conn => {
    conn.query(`UPDATE reviews SET flag = true WHERE reviewId = ${req.params.reviewId}`)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }) 
};

module.exports.createReview = function(req, res) {
  db.then(conn => {
    conn.query(`SELECT * FROM products WHERE itemId = ${req.params.itemId}`)
      .then(data => res.status(200).send(data));

      // (req, res) => {
      //   query.createReview({
      //     rating: req.body.rating,
      //     title: req.body.title,
      //     text: req.body.text,
      //     recommend: req.body.recommend ? req.body.recommend : true,
      //     name: req.body.name,
      //     fit: req.body.fit ? req.body.fit : 0,
      //     itemId: req.body.itemId,
      //   })
      //     .then(data => res.status(201).send(data));
  }) 
};

module.exports.delete = function(req, res) {
  db.then(conn => {
    conn.query(`SELECT * FROM products WHERE itemId = ${req.params.itemId}`)
      .then(data => res.status(200).send(data));
  }) 
};


