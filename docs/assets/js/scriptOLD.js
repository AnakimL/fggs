"use strict";

$(document).ready(function () {
  //    alert('Ваша версия jQuery ' + jQuery.fn.jquery);
  //
  //    $('.test').click(function(){
  //        $('.test').hide(); 
  //    });
  $('.jqprint').click(function () {
    $('#pills-home').addClass('active show');
    $('#pills-profile').removeClass('active show');
    $('#pills-contact').removeClass('active show');
  });
  $('.progs').owlCarousel({
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    navText: ['<span class="left__arr"><i class="icon-left-circle"></i></span>', '<span class="right__arr"><i class="icon-right-circle"></i></span>']
  });
  $('.child').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  var telInput = $("#phone"); // initialize

  telInput.intlTelInput({
    initialCountry: 'auto',
    preferredCountries: ['us', 'gb', 'br', 'ru', 'cn', 'es', 'it'],
    autoPlaceholder: 'aggressive',
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js",
    //        customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
    //            return "e.g. +7 (912) 345-67-89" + selectedCountryPlaceholder;
    //        },
    geoIpLookup: function geoIpLookup(callback) {
      fetch('https://ipinfo.io/json', {
        cache: 'reload'
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Failed: ' + response.status);
      }).then(function (ipjson) {
        callback(ipjson.country);
      })["catch"](function (e) {
        callback('ru');
      });
    }
  });
  var menuSizegl = $('.menu a').length;
  $('.menu > a > div').hover(function () {
    var thisElem = $(this).parents('a').index();
    setTimeout(function () {
      $('.menu > a').eq(thisElem).children('div').children('div:nth-child(2)').addClass('active');
    }, 0);
  }, function () {
    var thisElem = $(this).parents('a').index();
    $('.menu > a').eq(thisElem).children('div').children('div:nth-child(2)').removeClass('active');
  });
  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  }); //    $('.sec').hover(function () {
  //        $(this).children('.menutop_second').addClass('anim');
  //        $(this).children('.menutop_second').css('backgroundPosition', '0px' + ' ' + '0px');
  //
  //    }, function () {
  //        $('.menutop').delay(500);
  //        $(this).children('.menutop_second').removeClass('anim');
  //        $(this).children('.menutop_second').css('backgroundPosition', '-1386px' + ' ' + '0px');
  //
  //    });
  //    $('.menutop').hover(function () {
  //
  //        $(this).children('.menutop_second').css('backgroundPosition', '0px' + ' ' + '-42px');
  //
  //    }, function () {
  //
  //        $(this).children('.menutop_second').css('backgroundPosition', '-1386px' + ' ' + '-42px');
  //
  //    });
});