// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodejs-start",
//   password: "2112",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "2112", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
