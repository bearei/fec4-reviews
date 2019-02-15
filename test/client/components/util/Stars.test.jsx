const getIcon = require('../../../../client/components/util/Stars.jsx').__get__('getIcon');

describe('GetIcon Test', () => {
  describe('getIcon', () => {
    it('should return star', () => {
      const expected = 'star';
      const actual = getIcon(1, 3);
      expect(actual).toEqual(expected);
    });

    it('should return half star', () => {
      const expected = 'star-half';
      const actual = getIcon(3, 2.5);
      expect(actual).toEqual(expected);
    });
  });
});
