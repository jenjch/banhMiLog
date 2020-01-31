const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const banhMi = require("../models/banhMi.js");

// Create all our routes and set up logic within those routes where required.
// get
// post
// put

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  banhMi.selectAll(function(data) {
    var hbsObject = {
      banhmi: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// add validation to not add empty entry?
router.post("/api/banhmi", function(req, res) {
  banhMi.insertOne(
    ["banhmi_name", "devoured"],
    [req.body.banhmi_name, req.body.devoured],
    function(result) {
      // Send back the ID of the new banh mi
      res.json({ id: result.insertId });
    }
  );
});

// add validation to not update empy entry?
router.put("/api/banhmi/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  banhMi.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

//   router.delete("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

// Eeport routes for server.js to use.
module.exports = router;
