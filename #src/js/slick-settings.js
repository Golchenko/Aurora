$(document).ready(function () {
    $(".main-slider__list").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $(".categories-slider__list").slick({
        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});