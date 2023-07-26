const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejs-start",
  password: "2112",
});

module.exports = pool.promise();
