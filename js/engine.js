$(document).ready(function() {

    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close5").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close6").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close7").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });


    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // nav fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $(".header").addClass("fixshow");
            $(".home__content").addClass("spacetop");
        } else {
            $(".header").removeClass("fixshow");
            $(".home__content").removeClass("spacetop");
        }
    });

    $('.icon-sosmed').click(function() {
        if ($('.social').hasClass('social-show')) {
            $('.social').removeClass('social-show');
        } else {
            $('.social').addClass('social-show');
        }
    });

    // s backtotop
    var toggleHeight = $(window).outerHeight() * 0.5;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // e backtotop
});

var $swiper = $(".slide1");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide1", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    pagination: '.swiper-pagination',
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
// 2
var swiper = new Swiper('.slide2', {
    loop: true,
    pagination: ".swiper-pagination",
    speed: 3000,
    paginationClickable: true,
    autoplay: true,
    effect: "slide",
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: '.swiper-pagination',

});
// 3
var mySwiper = new Swiper(".slide3", {
    spaceBetween: 1,
    slidesPerView: 1.27,
    centeredSlides: true,
    roundLengths: true,
    pagination: '.swiper-pagination',
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});