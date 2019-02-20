const request = require('supertest');
const app = require('../../server/index');

describe('GET /reviews', () => {
  test('retrieves products from the database', (done) => {
    request(app)
      .get('/reviews/1')
      .expect((res) => {
        expect(res.statusCode).toBe(200);
        const products = JSON.parse(res.text);
        expect(products.length).toBeGreaterThan(0);
      })
      .end(done);
  });
});

describe('invalid GET', () => {
  test('should provide a 404 statusCode given an invalid URL', (done) => {
    request(app)
      .get('/invalidUrl')
      .expect(404, done);
  });
});
