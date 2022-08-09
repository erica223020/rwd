$(document).ready(function () {
    $(".menu_logo").click(function (e) {
      e.preventDefault();
      $("body").toggleClass("menu-open");
    });
  });
  