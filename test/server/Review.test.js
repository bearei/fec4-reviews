const mongoose = require('mongoose');
const Review = require('../../server/db/Review');

const db = 'mongodb://127.0.0.1/test_reviews';
mongoose.connect(db, { useNewUrlParser: true });

describe('Review model test', () => {
  beforeAll(async () => {
    await Review.deleteMany({});
  });

  afterEach(async () => {
    await Review.deleteMany({});
  });

  afterAll(async (done) => {
    await mongoose.disconnect(done);
  });

  test('has a module', () => {
    expect(Review).toBeDefined();
  });

  describe('Get review', () => {
    test('should get a review', async () => {
      const review = new Review({
        rating: 4,
        title: 'This title',
        text: 'THis text',
        recommend: true,
        name: 'Name',
        itemId: 1,
      });
      await review.save();
      const foundReview = await Review.findOne({ name: 'Name' });
      const expected = 'Name';
      const actual = foundReview.name;
      expect(actual).toEqual(expected);
    });
  });
});
