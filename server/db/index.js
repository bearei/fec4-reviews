const mariadb = require('mariadb');

module.exports = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user:'root', 
  database: 'bearEI_db'
});



// SAMPLE MARIADB CONNECTION
// async function asyncFunction() {
//   let conn;

//   try {
//   conn = await pool.getConnection();
//   const rows = await conn.query("SELECT 1 as val");
//   console.log(rows); //[ {val: 1}, meta: ... ]
//   const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
//   console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

//   } catch (err) {
//   throw err;
//   } finally {
//   if (conn) return conn.end();
//   }
// }

// SEQUELIZE
// const Sequelize = require('sequelize');
// module.exports = new Sequelize('beaREI_db', 'root', null, {
//   dialect: 'mariadb',
//   port: 3306
// });
