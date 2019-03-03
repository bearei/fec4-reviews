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

async function writeFile(pathAndFile) {
  await fs.createReadStream(__dirname + pathAndFile)  
    .pipe(csv())
    .on('data', (row) => {
      Product.build(row)
        .save();
    })
    .on('end', () => {
      console.log(`${pathAndFiles} successfully processed`);
    });
}

// async function loadDirFiles(directory, func) {
//   await fs.readdir(__dirname + directory, (err, files) => {
//     if (err) throw err;
//     for (const file of files) {
//       func(directory + '/' + file);
//     }
//   });
// }

function listFiles(directory) {
  return new Promise((resolve, reject) => {
    resolve(fs.readdirSync(__dirname + directory));
    reject(console.log('Error reading' + directory));
  })
}

async function loopFiles(directory, list) {
  for (let i = 0; i < list.length; i++) {
    await writeFile(directory + '/' + list[i]);
  }
}


async function seedAll() {
  let productDir = '/data/products',
      reviewDir = '/data/reviews';
  listFiles(productDir)
    .then((list) => loopFiles(productDir, list))
  // await loadDirFiles('/data/products', writeFile);
  // await loadDirFiles('/data/reviews', writeFile);
}

Review.drop()
  .then(() => Product.drop())
  .then(() => Product.sync())
  .then(() => Review.sync())
  .then(() => seedAll());
  