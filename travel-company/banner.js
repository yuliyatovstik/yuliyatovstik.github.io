$(document).ready(function() {
    if ($(".slick-slider").length > 0 ) {
        $(".slick-slider").slick({
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: 1500,
            speed: 1000,
            slidesToShow: 1,
            adaptiveHeight: true,
        });
    }
});




