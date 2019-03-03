const sequelize = require('./index');
const Sequelize = require('sequelize');
const csv = require('csv-parser');  
const fs = require('fs');

const Product = sequelize.define('Product', {
  itemId: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
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

Review.belongsTo(Product, {foreignKey: 'itemId'});

async function writeFile(file) {
  await fs.createReadStream(__dirname + file)  
    .pipe(csv())
    .on('data', (row) => {
      console.log(row);
      Product.build(row)
        .save();
    })
    .on('end', () => {
      console.log(`${file} successfully processed`);
    });
}

async function loadDirFiles(directory, func) {
  await fs.readdir(__dirname + directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      await func(directory);
    }
  });
}

async function seedAll() {
  await loadDirFiles('/products', writeFile);
  await loadDirFiles('/reviews', writeFile);
}

Review.drop()
  .then(() => Product.drop())
  .then(() => Product.sync())
  .then(() => Review.sync())
  .then(() => seedAll());
  