$(function () {
  // The DOM has loaded.
  // The script goes here

  //holds all the elements whose class attribute has a value of 'accorion'.
  var $accordion = $(".accordion");
  var $icon = $("i");
  //this event listener waits for the user to click on an element whose class attribute has a value of 'accordion-control'
  $accordion.on("click", ".accordion-control", function (e) {
    //prevents the browser from treating the button like a submit button
    e.preventDefault();

    //'this' = refers to the element the user clicked on
    $(this).next(".accordion-panel").not(":animated").slideToggle();

    // These 'i' elements hold our up and down arrows. Find any 'i' elements within the element we clicked on and toggle their display. If they're showing, hide it and vice versa.
    $(this).parent().find("i").not(":animated").toggle();
  });
});
