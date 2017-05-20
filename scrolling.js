$(window).scroll(function() {
  var windowHeight = $(window).height();
  var fineIngredients = $(".highlight-block-text");
  var dishImage = $(".about-dish-img");
  $(dishImage).delay(500).fadeIn(2000);


});


$(window).scroll(function() {
  var ingredients = $(".highlight-block-text");
  var ingredientsOffset = ingredients.offset().top - 350;

  if($(window).scrollTop() > ingredientsOffset) {
    $(ingredients).animate({
      opacity: 1,
      },
      2000);
    }
});

$(window).scroll(function() {
  var guestReviews = $("#reviews-fadein");
  var guestReviewsOffset = guestReviews.offset().top - 350;

  if($(window).scrollTop() > guestReviewsOffset) {
    $(guestReviews).animate({
      left: "50px",
      opacity: "1"},
    1000);

  }
});
