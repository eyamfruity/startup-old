$(document).ready(function(){
    //Слайдер about
    var swiper1 = new Swiper('.carousel', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        autoplay: {
            delay: 4000
        },
        slidesPerView: 4
    });

    //Слайдер clients
    var swiper2 = new Swiper('.clients__swiper', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 1
          }
    });

    //"Умные" alt у таб-карточек.
    $('.works-tabs__item').each(function(i){
        $('.works-tabs__item').eq(i-1).attr('alt', $('.works-tabs__item-hovered-heading').eq(i-1).text());
    });

    //Анимации карточек в карусели
    $('.carousel__clicked').on('mouseleave', function(){
        $('.carousel__clicked').fadeOut(200);
    });
    $('.carousel__photo').on('mouseenter', function(){
        $('.carousel__clicked').hide().eq($(this).index('.carousel__photo')).fadeIn(200);
    });
    $('.carousel__clicked').on('mouseenter', function(){
        swiper1.autoplay.stop();
    });
    $('.carousel-clicked__wraper').on('mouseenter', function(){
        $(this).toggleClass('carousel-clicked__wraper_active');
    }).on('mouseleave', function(){
        $(this).toggleClass('carousel-clicked__wraper_active');
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1401){
            swiper1.autoplay.start();
        }
        if ($(this).scrollTop() < 400){
            swiper1.autoplay.start();
        }
    });

    //Табы
    $('.works-tabs__items').hide().eq(0).fadeIn();
    $('.works-tabs__tab').on('click', function(){
        $('.works-tabs__tab').removeClass('works-tabs__tab_active');
        $(this).toggleClass('works-tabs__tab_active');
        $('.works-tabs__items').hide().eq($(this).index()).fadeIn();
    });

    $('.works-tabs__item-hovered').hide().on('mouseleave', function(){
        $('.works-tabs__item-hovered').hide();
    });
    $('.works-tabs__item').on('mouseenter', function(){
        $('.works-tabs__item-hovered').hide().eq($(this).index('.works-tabs__item')).fadeIn(250);
    });

    //Модальные окна
    $('.works-tabs__item-hovered-btn').on('click', function(){
        $('.modal__photo').attr('src', $('.works-tabs__item').eq($(this).index('.works-tabs__item-hovered-btn')).attr('src'));
        $('.modal__photo').attr('alt', $('.works-tabs__item-hovered-heading').eq($(this).index('.works-tabs__item-hovered-btn')).text());
        $('.modal__photo, .modal').fadeIn();
    });
    $('.modal').on('click', function(){
        $('.modal, .modal__photo').hide();
    });

    //Валидация формы
    $('.form').validate({
        rules: {
            name: 'required',
            email: 'required',
            message: 'required'
        }
    });

    //Отправка форм
    $('form').submit(function(e){
        e.preventDefault();
        if($(this).valid()){
            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                // dataType: 'html',
                data: $(this).serialize()
            }).done(function(){
                $('form').trigger('reset');
            });
            return false;
        }
    });

    //Появление фиксированного якоря и плавный скролл
    $(window).scroll(function(){
        if ($(this).scrollTop() > 770){
            $('.to-top').fadeIn(200);
        } else {
            $('.to-top').fadeOut(200);
        }
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    //Hover на постах
    $('#post-1').on('mouseenter', function(){
        $('#post-1 span').toggleClass('font-red');
        $('#post-1 .blog-posts__sup-heading').toggleClass('font-red');
        $('#post-1 .blog-posts__link').toggleClass('font-red');
    }).on('mouseleave', function(){
        $('#post-1 span').toggleClass('font-red');
        $('#post-1 .blog-posts__sup-heading').toggleClass('font-red');
        $('#post-1 .blog-posts__link').toggleClass('font-red');
    });
    $('#post-2').on('mouseenter', function(){
        $('#post-2 span').toggleClass('font-red');
        $('#post-2 .blog-posts__sup-heading').toggleClass('font-red');
        $('#post-2 .blog-posts__link').toggleClass('font-red');
    }).on('mouseleave', function(){
        $('#post-2 span').toggleClass('font-red');
        $('#post-2 .blog-posts__sup-heading').toggleClass('font-red');
        $('#post-2 .blog-posts__link').toggleClass('font-red');
    });
});

