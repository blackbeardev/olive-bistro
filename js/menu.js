var cross = $(".fa-times");
var hamburger = $(".fa-bars")
var menu = $(".menuList-li");
var menuItems = $(".menuList-li li");
var windowWidth = $(window).width();

if(windowWidth <= 739) {
  console.log(windowWidth);
  $(hamburger).on("click", function() {
    $(menu).slideToggle("slow");
    $(hamburger).hide();
    $(cross).css("visibility", "visible");


  });

  $(cross).on("click", function() {
    // $(menu).slideUp("slow");
    // $(hamburger).show();
    // $(cross).hide();
    console.log("the cross has been clicked..");

  });
} else if(windowWidth >= 740){
  console.log("nil");
  $(hamburger).hide();
  $(menu).show();
}
