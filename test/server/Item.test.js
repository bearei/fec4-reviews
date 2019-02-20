const mongoose = require('mongoose');
const Item = require('../../server/db/Item');

const db = 'mongodb://127.0.0.1/test_reviews';
mongoose.connect(db, { useNewUrlParser: true });

describe('Item model test', () => {
  beforeAll(async () => {
    await Item.deleteMany({});
  });

  afterEach(async () => {
    await Item.deleteMany({});
  });

  afterAll(async (done) => {
    await mongoose.disconnect(done);
  });

  test('has a module', () => {
    expect(Item).toBeDefined();
  });

  describe('Get item', () => {
    test('should get a item', async () => {
      const item = new Item({
        itemId: 1,
        companyName: 'GOOGLE',
        productName: 'GLASS',
      });
      await item.save();
      const foundItem = await Item.findOne({ itemId: 1 });
      const expected = 'GOOGLE';
      const actual = foundItem.companyName;
      expect(actual).toEqual(expected);
    });
  });
});
