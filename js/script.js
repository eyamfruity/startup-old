$(document).ready(function(){
    //Слайдер
    new Swiper('.carousel', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        autoplay: {
            delay: 5000
        },
        slidesPerView: 4,
        allowSwipePrev: 0,
        allowSwipeNext: 0,
        onlyExternal: 1
    });

    //"Умные" alt у таб-карточек.
    $('.works-tabs__item').each(function(i){
        $('.works-tabs__item').eq(i-1).attr('alt', $('.works-tabs__item-hovered-heading').eq(i-1).text());
    });

    //Анимации карточек в карусели
    $('.carousel__clicked').on('mouseleave', function(){
        $('.carousel__clicked').fadeOut(250);
    });
    $('.carousel__photo').on('mouseenter', function(){
        $('.carousel__clicked').hide().eq($(this).index('.carousel__photo')).fadeIn(250);
    });
    $('.carousel-clicked__wraper').on('mouseenter', function(){
        $(this).toggleClass('carousel-clicked__wraper_active');
    }).on('mouseleave', function(){
        $(this).toggleClass('carousel-clicked__wraper_active');
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
});

