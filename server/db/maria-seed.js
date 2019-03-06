const db = require('./maria-index');
const fs = require('file-system');

async function runSeed() {
  let conn;
  try {
    let start = new Date();

    function timer() {
      let end = (new Date() - start) / 60000;
      console.info('Execution time: %dm', end);
    }

    conn = await db.getConnection();
    await conn.query('DROP TABLE IF EXISTS `Products`');
    await conn.query('CREATE TABLE `Products` (`itemId` INTEGER NOT NULL,`companyName` CHAR(50) NOT NULL,`productName` CHAR(40) NULL,PRIMARY KEY (`itemId`));')
    await conn.query('DROP TABLE IF EXISTS `Reviews`;');
    await conn.query('CREATE TABLE `Reviews` (`rating` TINYINT NOT NULL,`title` CHAR(50) NOT NULL,`text` TEXT NULL DEFAULT NULL,`recommend` CHAR(5) NOT NULL,`name` CHAR(15) NULL DEFAULT NULL,`fit` TINYINT NULL DEFAULT NULL,`itemId` INTEGER NULL DEFAULT NULL,`helpful` TINYINT NULL DEFAULT NULL,`notHelpful` TINYINT NULL DEFAULT NULL,`flag` CHAR(5) NULL DEFAULT NULL,`createdAt` CHAR(70) NULL DEFAULT NULL);');
    

    let productList = await listFiles('/data/products'),
        reviewList = await listFiles('/data/reviews'),
        productPath = __dirname + '/data/products/',
        reviewPath = __dirname + '/data/reviews/';

    for (let i = 0; i < productList.length; i++) {
      await conn.query(`LOAD DATA INFILE '${productPath + productList[i]}' INTO TABLE Products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES;`)
        .then((success) => console.log(`Wrote product file ${productPath + productList[i]}...`))
        .catch((err) => console.log(err));
    }

    for (let i = 0; i < reviewList.length; i++) {
      await conn.query(`LOAD DATA INFILE '${reviewPath + reviewList[i]}' INTO TABLE Reviews FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES;`)
        .then((success) => console.log(`Wrote review file ${reviewList[i]}...`))
        .catch((err) => console.log(err));
    }

  } catch (err) {
    throw err;
  } finally {
    timer();
    if (conn) return conn.end();
  }
}

function listFiles(directory) {
  return new Promise((resolve) => {
    resolve(fs.readdirSync(__dirname + directory));
  })
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