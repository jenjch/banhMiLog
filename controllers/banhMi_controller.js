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

router.post("/api/banhmi", function(req, res) {
  // validation for to make sure entries are not empty spaces
  if (req.body.banhmi_name.trim().length<1) {
    // returns "Not Acceptable" error (but only if the javascript sends the entry. Will not see this with validation also included on the front end javascript)
    return res.status(406).end();
  }
  banhMi.insertOne(
    ["banhmi_name", "devoured"],
    [req.body.banhmi_name, req.body.devoured],
    function(result) {
      // Send back the ID of the new banh mi
      res.json({ id: result.insertId });
    }
  );
});

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

// Export routes for server.js to use.
module.exports = router;
