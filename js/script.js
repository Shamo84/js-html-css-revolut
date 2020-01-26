$(document).ready(function() {
  trovato = false;
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
  $(".header-right li.dropdown-on-hover").mouseenter(function() {
    $(this).siblings().children(".dropdown").removeClass("display-block");
    $(this).siblings().children(".fas").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    $(this).children(".dropdown").addClass("display-block");
    $(this).children(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
  });

  $(document).on("click", function(event) {
    if ($(".dropdown").hasClass("display-block")) {
      if ($(event.target).hasClass("dropdown-on-hover")) {
        $(event.target).children(".dropdown").removeClass("display-block");
        if ($(event.target).children("i").hasClass("fa-chevron-up")) {
          $("#language").children(".fas").addClass("fa-chevron-down").removeClass("fa-chevron-up");
        }
      } else if ($(event.target).hasClass(".dropdown")) {
      } else {
        $(".dropdown.display-block").removeClass("display-block");
        if ($(event.target).hasClass("fa-chevron-up")) {
          $("#language").children(".fas").addClass("fa-chevron-down").removeClass("fa-chevron-up");
        }
      }
    } else {
      if ($(event.target).hasClass("dropdown-on-hover")) {
        $(event.target).children(".dropdown").addClass("display-block");
      } else if ($(event.target).hasClass("fa-chevron-down")) {
        $("#language").children(".dropdown").addClass("display-block");
        $("#language").children(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      }
      if ($(event.target).children("i").hasClass("fa-chevron-down")) {
        $("#language").children(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      }
    }
  });
});
