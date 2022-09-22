$(function () {
  // menu fix
  var menu = $('.navbar').offset().top;
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (menu < scroll) {
      $('.navbar').addClass('menu_fix');
    } else {
      $('.navbar').removeClass('menu_fix');
    }
  });
  // counter-up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // popular slider
  $('.pop_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
    arrows: true,
    fade: true,
    prevArrow: '<i class="fa-solid fa-chevron-right pop_first"></i>',
    nextArrow: ' <i class="fa-solid fa-chevron-left pop_last"></i>',
  });

  // sale slider 
  $('.sale_row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  // popular slider
  $('.store_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-chevron-right st_first"></i>',
    nextArrow: ' <i class="fa-solid fa-chevron-left st_last"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  // tour slider
  $('.main-tournament-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: false,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: 0,
    infinite: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        }
      },
    ]
  });

  // 3d slider
  var rev = $('.main_cat');
  rev.on('init', function (event, slick, currentSlide) {
    var
      cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      next2 = cur.next().next(),
      prev = cur.prev(),
      prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
      cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    next = cur.next(),
      prev = cur.prev();
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev.prev().addClass('slick-sprev2');
    next.next().addClass('slick-snext2');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
  });

  rev.slick({
    speed: 2000,
    arrows: false,
    dots: false,
    autoplay: true,
    focusOnSelect: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
  });

})

// navbar search
$('.serch').on('click', function () {
  $('.navber_search').css('top', '50%');
});
$('.hide').on('click', function () {
  $('.navber_search').css('top', '-50%');
});

// navbar sign
$('.sign_in').on('click', function () {
  $('.navbar_sign').css('top', '0');
});
$('.sign_out').on('click', function () {
  $('.navbar_sign').css('top', '-100%');
});

// menu show
$('.menu_bar').on('click', function () {
  $('.menu_show').css('left', '0');
});
$('.menu_hide').on('click', function () {
  $('.menu_show').css('left', '-100%');
});

// .bt_top
$('.bt_top').click(function () {
  $('html,body').animate({
    scrollTop: 0,
  }, 1500);
});

$(window).scroll(function () {
  var abc = $(this).scrollTop();

  if (abc > 200) {
    $('.bt_top').fadeIn();
  } else {
    $('.bt_top').fadeOut();
  }
});

// cursor 
$(window).mousemove(function (e) {

  $('.cursor').css({
    left: e.pageX,
    top: e.pageY
  })

})

// wow js
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();


// preloader
$(window).load(function () {
  $('.pre_body').delay(300).fadeOut(300);
});

//scroll-spy & Smooth-scrolling

var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 80;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});