$(document).ready(function() {
  $('.menu_logo').on('click',  function(e){
     e.preventDefault();
     $('.menu').toggleClass('menu-open');
 });
});