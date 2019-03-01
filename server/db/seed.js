const Sequelize = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('Product', {
  itemId: Sequelize.INTEGER,
  companyName: Sequelize.STRING(30),
  productName: Sequelize.STRING(30)
})

const Review = sequelize.define('Review', {
  rating: Sequelize.INTEGER,
  title: Sequelize.STRING(30),
  text: Sequelize.TEXT,
  recommend: Sequelize.BOOLEAN,
  name: Sequelize.STRING(30),
  fit: Sequelize.INTEGER,
  itemId: Sequelize.INTEGER,  //foreign key
  helpful: Sequelize.INTEGER,
  notHelpful: Sequelize.INTEGER,
  flag: Sequelize.BOOLEAN,
  createdAt: Sequelize.DATE
})

Product.drop();
Review.drop();

Product.sync();
Review.sync();