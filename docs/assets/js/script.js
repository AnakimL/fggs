"use strict";

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1.25,
    navText: ["<i class='icon-left-dir'></i>", "<i class='icon-right-dir'></i>"]
  });
});