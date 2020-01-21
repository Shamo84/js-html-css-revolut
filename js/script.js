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
    $(this).children(".dropdown").show();
  }, function() {
    $(this).children(".dropdown").hide();
  });

  // apre e chiude il dropdown sul click
  $(".header-right li.dropdown-on-hover").on("click", function() {
    $(this).children(".dropdown").toggle();
  });

  // alterna la freccina della lingua
  $("#language").hover(function() {
    $("#language .fa-angle-down").hide();
    $("#language .fa-angle-up").show();
  }, function() {
    $("#language .fa-angle-up").hide();
    $("#language .fa-angle-down").show();
  });
});
