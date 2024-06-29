const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "database-1.chagskcoeoyo.us-east-2.rds.amazonaws.com", // Example: mydbinstance.123456789012.us-east-1.rds.amazonaws.com
  user: "admin",
  password: "Srishdb#321",
  database: "database-1",
  port: 3306, 
  connectionLimit: 10 
});

module.exports = pool.promise();


