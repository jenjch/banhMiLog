// set up MySQL connection.
const mysql = require("mysql");

// require pw in separate file using module.exports
const pw = require("./pw.js");



const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: pw,
  database: "banhmi_db"
});

// make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection for our ORM to use.
module.exports = connection;
