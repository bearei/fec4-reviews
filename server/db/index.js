const Sequelize = require('sequelize');
module.exports = new Sequelize('beaREI_db', 'root', null, {
  dialect: 'mariadb',
  port: 3306
});


// TEST CONNECTION
// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   }, function (err) { 
//     console.log('Unable to connect to the database:', err);
//   });