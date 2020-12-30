$(document).ready(function(){
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

    //Анимации карточек в карусели
    $('.carousel__clicked').hide().on('mouseleave', function(){
        $('.carousel__clicked').hide();
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
});
