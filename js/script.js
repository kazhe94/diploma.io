$( document ).ready(function() {
    $('.menu-btn').on('click', function(e){
        e.preventDefault;
        $('.nav-menu').toggleClass('active');
        $('.menu-btn').toggleClass('menu-btn_active')
        $('body').toggleClass('stop-scroll');
    });
    $('a[href^="#link"]').on('click', function(e){
        e.preventDefault();
        if ($('.nav-menu').hasClass('active')) {
            $('.nav-menu').removeClass('active');
        }
        if ($('.menu-btn').hasClass('menu-btn_active')) {
            $('.menu-btn').removeClass('menu-btn_active');
        }
        if ($('body').hasClass('stop-scroll')) {
            $('body').removeClass('stop-scroll');
        }
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        },
      });
});

