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
    $(this).siblings().children(".dropdown").hide();
    $(this).siblings().children(".fas").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    $(this).children(".dropdown").show();
    $(this).children(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
  });

  $(document).on("click", function() {
      $(".dropdown").hide();
  });
});
