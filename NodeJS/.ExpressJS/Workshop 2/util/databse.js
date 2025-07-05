const Sequelize=require('sequelize')

const sequelize=new Sequelize("xyz","root","123456",{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports=sequelize





// // db.js
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '123456', // your MySQL password
//   database: 'xyz' // your database name
// });



// module.exports = pool.promise();
