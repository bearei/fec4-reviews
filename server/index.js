const express = require('express');
const parser = require('body-parser');
const Reviews = require('./db/Review.js');

const app = express();
const PORT = 3003;

app.unsubscribe(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/reviews/:itemId', (req, res) => {
  Reviews.find({itemId: req.params.itemId})
    .then(data => res.status(200).send(data));
});

app.post('/reviews', (req, res) => {
  console.log('POST');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});