$(function () { 
   
  $('.menu__btn').on('click', function(){  
    $('.menu__list').toggleClass('menu__list--active')
   }) 
    
   $('.menu__link').on('click', function(){ 
      $('.menu__list').removeClass('menu__list--active')
   }) 
    
   $(".menu a, .to-top__link").on("click", function (event) {
    //відміняєм стандартну обробку кліку по ссилці
  event.preventDefault();

    // забираєм індифікатор блоку з атрибутом href
  var id  = $(this).attr('href'),

    //дізнаємся висоту від початку сторінки до блоку на який зсилається якір
    top = $(id).offset().top;
  
    //анімуєм перехід на відстань - top за 1500мс
  $('body,html').animate({scrollTop: top}, 1500);
});

  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"> <img src="images/next-arrow.svg" alt="next"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"> <img src="images/prev-arrow.svg" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },

      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }

    ]
  }); 
   
   
  $('.bottom-slider__slider').slick({ 
    dots: true, 
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // $('.news__items').masonry({
  //      itemSelector: '.news__item',   
  //      // columnWidth: 200,
  //      fitWidth: true,     
  //       percentPosition: true,
  //       olumnWidth: '.grid-sizer',

  //  }); 

  var elem = document.querySelector('.news__items');
  var msnry = new Masonry(elem, {
    // options 
    itemSelector: '.news__item',
  });


});