﻿$(document).ready(function () {

  $('.grid').isotope({
    // options
    layoutMode: 'masonry',
    itemSelector: '.grid-item',
    masonry: {
      gutter: 30
    }
  });

  $(".dropdown").hover(
      function() {
        $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
        $(this).toggleClass('open');
        $('b', this).toggleClass("caret caret-up");
      },
      function() {
        $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
        $(this).toggleClass('open');
        $('b', this).toggleClass("caret caret-up");
      });

});
