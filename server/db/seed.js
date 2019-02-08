const db  = require('./index.js');
const Blog = require('./Blog.js');

const sampleReviews = [
];

const insertSampleReviews = function() {
  Blog.create(sampleReviews)
    .then(() => db.disconnect());
};

insertSampleBlogs();