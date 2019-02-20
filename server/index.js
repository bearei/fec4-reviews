const express = require('express');
const parser = require('body-parser');
const Reviews = require('./db/Review.js');
const Items = require('./db/Item.js');

const app = express();
const PORT = 3003;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../public`));

app.get('/reviews/:itemId', (req, res) => {
  Reviews.find({ itemId: req.params.itemId })
    .then(data => res.status(200).send(data));
});

app.get('/items/:itemId', (req, res) => {
  Items.find({ itemId: req.params.itemId })
    .then(data => res.status(200).send(data));
});

app.patch('/reviews/helpful/:postId', (req, res) => {
  Reviews.update({ _id: req.params.postId }, { $inc: { helpful: 1 } })
    .then(data => res.status(200).send(data));
});

app.patch('/reviews/notHelpful/:postId', (req, res) => {
  Reviews.update({ _id: req.params.postId }, { $inc: { notHelpful: 1 } })
    .then(data => res.status(200).send(data));
});

app.patch('/reviews/flag/:postId', (req, res) => {
  Reviews.updateOne({ _id: req.params.postId }, { flag: true })
    .then(data => res.status(200).send(data));
});

app.post('/reviews', (req, res) => {
  Reviews.create({
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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
