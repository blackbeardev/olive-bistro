//Cache reference to window and animation items
// var $animation_elements = $(".animation_element");
// var $window = $(window);

/*Create an event listener that's listening for the scroll event
Every time the scroll event is fired, the check_if_in_view function will be called*/
// $window.on("scroll resize", check_if_in_view);
//
// $window.trigger("scroll");
var heroTitleText = $("#hero-text");
// var bookbtn = $(".book-table-btn");

$(document).ready(function() {
    $(heroTitleText).css("display", "none");

    // $(heroTitleText).addClass("hero-title-text");
  $(heroTitleText).fadeIn(2500);

  // $(heroTitleText).removeClass("hidden");



});
