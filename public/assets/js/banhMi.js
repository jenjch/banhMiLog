// wrap; make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // on click send data
  $(".create-form").on("submit", function(event) {
    // make sure to preventDefault on a submit event
    event.preventDefault();

    var addBanhmi = {
      // id used in handlebars
      banhmi_name: $("#banhmi")
        .val()
        .trim(),
      // default devoured (false)
      devoured: 0
    };
    // added validation to prevent sending of emtry with only space(s)
    if (addBanhmi.banhmi_name.trim().length < 1) {
    // alert
    alert("please enter text!")
    // empty the entry if not valid entry
    $("#banhmi").val("");
      return;
    }
    // send the POST request.
    $.ajax("/api/banhmi", {
      type: "POST",
      data: addBanhmi
    }).then(function() {
      console.log("Added " + addBanhmi + "banh mi!");
      // alert("saved!");
      // reload the page after addition to get the updated list
      location.reload();
    });
  });

  // on click update data (devoured)
  $(".devour-banhmi").on("click", function(event) {
    // add preventDefault for on click
    event.preventDefault();

    var id = $(this).data("id");
    // update boolean value to true (1) on click
    var devouredStatus = {
      devoured: 1
    };

    // send the PUT request.
    $.ajax("/api/banhmi/" + id, {
      type: "PUT",
      data: devouredStatus
    }).then(function() {
      // alert("YUM!");
      console.log("Banh mi eaten!");
      // reload the page to get the updated list
      location.reload();
    });
  });
});
