// -----------------------------------------------------------------------------
// Standard Inner Only JS
// -----------------------------------------------------------------------------
console.log("Standard Inner JS example");
/*
*** SLICK JS ***
*/

function slickSlider() {
  jQuery(".js-inner-slider").not('.slick-initialized').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnChange: true,
      autoplay: false,
      mobileFirst: true,
      adaptiveHeight: true,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
          }
        }
      ],
      dots: false,
      cssEase: 'linear',
      draggable: false,
      swipe: true,
      arrows: true
    });
}

function positionSlickNavArrows(slider) {
  setTimeout(function() {
    var fromTop = slider.children('div').find('img').first().height();
    fromTop = Math.round(fromTop / 2);
    slider.children('button:first-of-type').css('top', fromTop);
    slider.children('button:last-of-type').css('top', fromTop);
  }, 1000);
}


if ($('.js-inner-slider').length > 0) {
  $(window).on('load resize', function() {
    $('.js-inner-slider').each(function() {
      positionSlickNavArrows($(this));
    });
  });
}

slickSlider();
