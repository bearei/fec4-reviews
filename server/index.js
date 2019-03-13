require('newrelic');
const express = require('express');
const parser = require('body-parser');
const proxy = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/:itemId/', express.static(`${__dirname}/../public`));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
  next();
});

app.use(
  '/:itemId',
  proxy({
    target:'http://18.217.98.173:3004/',
    changeOrigin: true
  })
);

// app.get('/reviews/:itemId', query.findReview);
// app.get('/items/:itemId', query.findItem);
// app.patch('/reviews/helpful/:reviewId', query.markHelpful);
// app.patch('/reviews/notHelpful/:reviewId', query.markUnhelpful);
// app.patch('/reviews/flag/:reviewId', query.flag);
// app.post('/reviews/', query.createReview);
// app.delete('/reviews/:reviewId', query.delete);


if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

module.exports = app;