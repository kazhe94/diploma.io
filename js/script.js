$( document ).ready(function() {
    $('.menu-btn').on('click', function(e){
        e.preventDefault;
        $('.nav-menu').toggleClass('active');
        $('.menu-btn').toggleClass('menu-btn_active')
        $('body').toggleClass('stop-scroll');
    });
});

