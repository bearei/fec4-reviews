const express = require('express');
const parser = require('body-parser');
const Reviews = require('./db/Review.js');

const app = express();
const PORT = 3003;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/reviews/:itemId', (req, res) => {
  Reviews.find({itemId: req.params.itemId})
    .then(data => res.status(200).send(data));
});

app.post('/reviews', (req, res) => {
  Reviews.create({
    rating: req.body.rating,
    title: req.body.title,
    text: req.body.text,
    recommend: req.body.recommend,
    name: req.body.name,
    fit: req.body.fit,
    itemId: req.body.itemId,
    helpful: req.body.helpful,
    notHelpful: req.body.notHelpful,
    inappropriate: req.body.inappropriate
  })
  .then(data => res.status(201).send(data));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});