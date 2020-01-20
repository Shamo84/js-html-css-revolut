$(document).ready(function() {
  $(".header-left li:not(:first-child) a").on("click", function() {
    $(".header-left a").removeClass("active");
    $(this).addClass("active");
  });
  $(".header-right li").hover(function() {
    $(this).addClass("black");
  }, function() {
    $(this).removeClass("black");
  });
  $(".header-right li.dropdown-on-hover").hover(function() {
    $(this).addClass("black");
  }, function() {
    $(this).removeClass("black");
  });
});
