const db = require('./index');
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
    await conn.query('CREATE TABLE `Reviews` (`rating` TINYINT NOT NULL,`title` CHAR(50) NOT NULL,`text` TEXT NULL DEFAULT NULL,`recommend` CHAR(5) NOT NULL,`name` CHAR(15) NULL DEFAULT NULL,`fit` TINYINT NULL DEFAULT NULL,`itemId` INTEGER NULL DEFAULT NULL,`helpful` TINYINT NULL DEFAULT NULL,`notHelpful` TINYINT NULL DEFAULT NULL,`flag` CHAR(5) NULL DEFAULT NULL,`createdAt` CHAR(70) NULL DEFAULT NULL, `reviewId` INTEGER);');
    await conn.query('CREATE INDEX review_itemId ON reviews (`itemId`);'); 

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