const Sequelize = require('sequelize'), 
      sequelize = new Sequelize('beaREI_db', 'root', null, {
        dialect: 'mariadb',
        port: 3306
      });

// const Product = sequelize.define('Product', {
//   itemId: Sequelize.INTEGER,
//   companyName: Sequelize.STRING(30),
//   productName: Sequelize.STRING(30)
// })

// const Review = sequelize.define('Review', {
//   rating: Sequelize.INTEGER,
//   title: Sequelize.STRING(30),
//   text: Sequelize.TEXT,
//   recommend: Sequelize.BOOLEAN,
//   name: Sequelize.STRING(30),
//   fit: Sequelize.INTEGER,
//   itemId: Sequelize.INTEGER,  //foreign key
//   helpful: Sequelize.INTEGER,
//   notHelpful: Sequelize.INTEGER,
//   flag: Sequelize.BOOLEAN,
//   createdAt: Sequelize.DATE
// })

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });