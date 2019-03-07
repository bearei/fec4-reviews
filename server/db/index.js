const mariadb = require('mariadb');

module.exports = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user:'root', 
  database: 'bearEI_db'
});