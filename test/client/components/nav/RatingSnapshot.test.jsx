const getCount = require('../../../../client/components/nav/RatingSnapshot').__get__('getCount');

const sampleReviews = [{
  rating: 0,
  title: 'a',
  text: 'a',
  recommend: true,
  name: 'a',
  fit: 0,
  itemId: 27,
  helpful: 0,
  notHelpful: 0,
  inappropriate: false,
}, {
  rating: 1,
  title: 'b',
  text: 'b',
  recommend: true,
  name: 'b',
  fit: 0,
  itemId: 27,
  helpful: 0,
  notHelpful: 0,
  inappropriate: false,
}, {
  rating: 2,
  title: 'b',
  text: 'b',
  recommend: true,
  name: 'b',
  fit: 2,
  itemId: 27,
  helpful: 0,
  notHelpful: 0,
  inappropriate: false,
}, {
  rating: 3,
  title: 'c',
  text: 'c',
  recommend: true,
  name: 'c',
  fit: 2,
  itemId: 27,
  helpful: 0,
  notHelpful: 0,
  inappropriate: false,
}, {
  rating: 4,
  title: 'd',
  text: 'd',
  recommend: true,
  name: 'd',
  fit: 2,
  itemId: 27,
  helpful: 0,
  notHelpful: 0,
  inappropriate: false,
},

];
describe('GetCount Test', () => {
  describe('getCount', () => {
    test('should return a count', () => {
      const expected = 1;
      const actual = getCount(0, sampleReviews);
      expect(actual).toEqual(expected);
    });

    test('should return no count', () => {
      const expected = 0;
      const actual = getCount(5, sampleReviews);
      expect(actual).toEqual(expected);
    });

    test('should return 0 for empty reviews', () => {
      const expected = 0;
      const actual = getCount(0, []);
      expect(actual).toEqual(expected);
    });
  });
});
