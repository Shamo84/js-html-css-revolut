$(document).ready(function() {
  // alterna tra PERSONALE e BUSINESS
  $(".header-left li:not(:first-child) a").on("click", function() {
    $(".header-left a").removeClass("active");
    $(this).addClass("active");
  });

  // evidenzia di nero all'hover
  $(".header-right li, header li a").hover(function() {
    $(this).addClass("black");
  }, function() {
    $(this).removeClass("black");
  });

  // cala il dropdown sull'hover
  $(".header-right li.dropdown-on-hover").hover(function() {
    $(this).children(".dropdown").toggle();
    $(this).find(".fas").toggleClass("fa-angle-up fa-angle-down");
  });

  // apre e chiude il dropdown sul click
  $(".header-right li.dropdown-on-hover").on("click", function() {
    $(this).children(".dropdown").toggle();
  });
});
