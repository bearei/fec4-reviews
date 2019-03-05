const db = require('./index');

async function runSeed() {
  let conn;
  try {
    conn = await db.getConnection();
    console.log(__dirname + '/schema.sql')
    await conn.query('DROP TABLE IF EXISTS `Products`');
    await conn.query('CREATE TABLE `Products` (`itemId` INTEGER NOT NULL AUTO_INCREMENT,`companyName` CHAR(50) NOT NULL,`productName` CHAR(50) NULL,PRIMARY KEY (`itemId`));')
    await conn.query('DROP TABLE IF EXISTS `Reviews`;');
    await conn.query('CREATE TABLE `Reviews` (`productId` INTEGER NOT NULL AUTO_INCREMENT,`rating` INTEGER NOT NULL,`title` CHAR(50) NOT NULL,`text` MEDIUMTEXT NULL DEFAULT NULL,`recommend` BOOLEAN NOT NULL,`name` CHAR(30) NULL DEFAULT NULL,`fit` INTEGER NULL DEFAULT NULL,`itemId` INTEGER NULL DEFAULT NULL,`helpful` INTEGER NULL DEFAULT NULL,`notHelpful` INTEGER NULL DEFAULT NULL,`flag` BOOLEAN NULL DEFAULT NULL,`createdAt` DATE NULL DEFAULT NULL,PRIMARY KEY (`productId`));');
  
  } catch (err) {
  throw err;
  } finally {
  if (conn) return conn.end();
  }
}

runSeed();

// SEQUELIZE
// const sequelize = require('./index');
// const Sequelize = require('sequelize');
// const csv = require('csv-parser');  
// const fs = require('fs');

// const Product = sequelize.define('Product', {
//   itemId: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   companyName: Sequelize.STRING(50),
//   productName: Sequelize.STRING(50)
// })

// const Review = sequelize.define('Review', {
//   rating: Sequelize.INTEGER,
//   title: Sequelize.STRING(50),
//   text: Sequelize.TEXT,
//   recommend: Sequelize.BOOLEAN,
//   name: Sequelize.STRING(30),
//   fit: Sequelize.INTEGER,
//   itemId: Sequelize.INTEGER,
//   helpful: Sequelize.INTEGER,
//   notHelpful: Sequelize.INTEGER,
//   flag: Sequelize.BOOLEAN,
//   createdAt: Sequelize.DATE
// })

// Review.belongsTo(Product, {foreignKey: 'itemId'});

// async function writeFile(pathAndFile, table) {
//   await fs.createReadStream(__dirname + pathAndFile)  
//     .pipe(csv())
//     .on('data', (row) => {
//       table.create(row)
//     })
//     .on('end', () => {
//       console.log(`${pathAndFile} successfully processed`);
//     });
// }

// function listFiles(directory) {
//   return new Promise((resolve) => {
//     resolve(fs.readdirSync(__dirname + directory));
//   })
// }

// async function loopFiles(directory, list, table) {
//   for (let i = 0; i < list.length; i++) {
//     await writeFile(directory + '/' + list[i], table);
//   }
// }

// async function seedAll() {
//   let productDir = '/data/products',
//       reviewDir = '/data/reviews';
//   await listFiles(productDir)
//     .then((list) => loopFiles(productDir, list, Product))
//   await listFiles(reviewDir)
//     .then((list) => loopFiles(reviewDir, list, Review))

// }

// Review.drop()
//   .then(() => Product.drop())
//   .then(() => Product.sync())
//   .then(() => Review.sync())
//   .then(() => seedAll());
  

// CASSANDRA NOTES
// Use Java 8
// cassandra -f
// .cql file
// databases are call keyspaces