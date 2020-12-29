$(function () {

  $('.menu__btn').on('click', function (){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1100);
  });


  $('.slider__items').slick({
    dots: true,
    fade: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="arrow-next"></button>', responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      },
    ]
    
  });


  $('.about-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.about-tabs__top-item').removeClass('about-tabs__top-item--active');
    $(this).addClass('about-tabs__top-item--active');

    $('.about-tabs__content-item').removeClass('about-tabs__content-item--active');
    $($(this).attr('href')).addClass('about-tabs__content-item--active');

  })

});