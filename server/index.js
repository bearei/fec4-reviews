import express from 'express';
import parser from 'body-parser';
import Reviews from './db/Review.js';

const app = express();
const port = 3003;

app.unsubscribe(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/reviews/:itemId', (req, res) => {
  console.log('GET');
  Reviews.find({itemId: req.params.itemId})
    .then(data => res.status(200).send(data));
});

app.post('/reviews', (req, res) => {
  console.log('POST');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});