const Sequelize = require('sequelize');
const sequelize = require('./index');
const csv = require('csv-parser');  
const fs = require('fs');

const Product = sequelize.define('Product', {
  itemId: Sequelize.INTEGER,
  companyName: Sequelize.STRING(50),
  productName: Sequelize.STRING(50)
})

const Review = sequelize.define('Review', {
  rating: Sequelize.INTEGER,
  title: Sequelize.STRING(50),
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

fs.createReadStream(__dirname + '/data/products.csv')  
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    Product.build(row)
      .save();
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

  fs.createReadStream(__dirname + '/data/reviews.csv')  
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    Review.build(row)
      .save();
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
  