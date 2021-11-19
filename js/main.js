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
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });


    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // nav fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".header").addClass("fixshow");
            $(".main").addClass("spacetop");
        } else {
            $(".header").removeClass("fixshow");
            $(".main").removeClass("spacetop");
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

});
// pagination
jQuery(function($) {
    var items = $("#content div.cardPeserta");
    var numItems = items.length;
    var perPage = 9;
    items.slice(perPage).hide();

    $(".pagination-vip").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});

// scroll & drag video
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});


// 
$('.js-btn-modal').on('click', function() {
    $('#overlay').fadeIn();
    var id = $(this).data('id');
    $('.js-modal[data-id="modal' + id + '"]').fadeIn();
});

$('.js-close-btn').on('click', function() {
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
});
$('#overlay').on('click', function() {
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
});
$('.done__close').on('click', function() {
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
});
$('.vote_modal button').on('click', function() {
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
});

// droptdont
console.clear();
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', e => {
        dropdown.classList.toggle('dropdown__options--visible');
    });
    dropdown.querySelectorAll('.dropdown__options .dropdown__option').forEach(opt => {
        opt.addEventListener('click', e => {
            dropdown.querySelector('.dropdown__selected').innerHTML = opt.innerHTML;
        });
    });
});

// bilangual

var indonesia = document.getElementById('id_click'),
    english = document.getElementById('en_click'),
    id_txt = document.querySelectorAll('#id'),
    en_txt = document.querySelectorAll('#en'),
    nb_id = id_txt.length,
    nb_en = en_txt.length;

indonesia.addEventListener('click', function() {
    langue(indonesia, english);
}, false);

english.addEventListener('click', function() {
    langue(english, indonesia);
}, false);

function langue(langueOn, langueOff) {
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if (langueOn.innerHTML == 'ID') {
        afficher(id_txt, nb_id);
        cacher(en_txt, nb_en);
    } else if (langueOn.innerHTML == 'EN') {
        afficher(en_txt, nb_en);
        cacher(id_txt, nb_id);
    }
}

function afficher(txt, nb) {
    for (var i = 0; i < nb; i++) {
        txt[i].style.display = 'block';
    }
}

function cacher(txt, nb) {
    for (var i = 0; i < nb; i++) {
        txt[i].style.display = 'none';
    }
}

function init() {
    langue(indonesia, english);
}
init();