
// wrap; make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // make sure to preventDefault on a submit event
    event.preventDefault();

    var addBanhmi = {
      banhmi_name: $("#banhmi")
        .val()
        .trim(),
      devoured: 0
    };

    // send the POST request.
    $.ajax("/api/banhmi", {
      type: "POST",
      data: addBanhmi
    }).then(function() {
      console.log("Added " + addBanhmi + "banh mi!");
      // reload the page after addition to get the updated list
      location.reload();
    });
  });

  $(".devour-banhmi").on("click", function(event) {
    // add preventDefault for on click
    event.preventDefault();

    var id = $(this).data("id");
    // update boolean value to true on click 
    var devouredStatus = {
      devoured: 1
    };

    // send the PUT request.
    $.ajax("/api/banhmi/" + id, {
      type: "PUT",
      data: devouredStatus
    }).then(function() {
      console.log("Banh mi eaten!");
      // reload the page to get the updated list
      location.reload();
    });
  });

});
