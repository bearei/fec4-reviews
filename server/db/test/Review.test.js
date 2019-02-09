var mongoose = require('mongoose');
var db = 'mongodb://127.0.0.1/test_reviews';
mongoose.connect(db, { useNewUrlParser: true });
const Review = require('../Review');
import regeneratorRuntime from "regenerator-runtime";

describe('Review model test', () => {
  beforeAll(async () => {
    await Review.deleteMany({});
  });

  afterEach (async () => {
    await Review.deleteMany({});
  });

  afterAll (async () => {
    await mongoose.connection.close();
  });

  it('has a module', ()  => {
    expect(Review).toBeDefined();
  });

  describe('Get review', () => {
    it('should get a review', async () => {
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
