const mariadb = require('mariadb');

module.exports = mariadb.createConnection({
  host: 'http://52.15.132.177',
  port: 3306,
  user:'root', 
  database: 'bearei_reviews'
});

module.exports.pool = mariadb.createPool({
  host: 'http://52.15.132.177',
  port: 3306,
  user:'root', 
  database: 'bearei_reviews'
});