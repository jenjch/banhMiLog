
// import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// all
// create
// update

var banhMi = {
  // displays all current data
    selectAll: function(cb) {
      orm.selectAll("banhmi", function(res) {
        cb(res);
      });
    },
    // adds a new entry
    // the variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("banhmi", cols, vals, function(res) {
        cb(res);
      });
    },
    // updates an entry by id
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("banhmi", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };
  

// export the database functions for the controller (banhMi_controller.js).
module.exports = banhMi;