const mysql = require ("mysql");

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user:process.env.DB_USER,
  password:process.env.DB_PW,
  database:process.env.DB_NAME
});
 /*  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
}); */

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
});

module.exports = connection;