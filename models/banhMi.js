
// import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// all
// create
// update

var banhMi = {
    selectAll: function(cb) {
      orm.selectAll("banhmi", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("banhmi", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("banhmi", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };
  

// export the database functions for the controller (banhMi_controller.js).
module.exports = banhMi;