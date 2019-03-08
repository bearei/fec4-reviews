const express = require('express');
const parser = require('body-parser');
const query = require('./db/query');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS,  PATCH');
  next();
});

app.get('/reviews/:itemId', query.findReview);
app.get('/items/:itemId', query.findItem);
app.patch('/reviews/helpful/:reviewId', query.markHelpful);
app.patch('/reviews/notHelpful/:reviewId', query.markUnhelpful);
app.patch('/reviews/flag/:reviewId', query.flag);

app.post('/reviews', (req, res) => {
  q.createReview({
    rating: req.body.rating,
    title: req.body.title,
    text: req.body.text,
    recommend: req.body.recommend ? req.body.recommend : true,
    name: req.body.name,
    fit: req.body.fit ? req.body.fit : 0,
    itemId: req.body.itemId,
  })
    .then(data => res.status(201).send(data));
});

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

module.exports = app;