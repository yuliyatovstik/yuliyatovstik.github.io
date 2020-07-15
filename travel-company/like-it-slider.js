$(document).ready(function() {
    if ($(".slick-slides").length > 0 ) {
        $(".slick-slides").slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToScroll: 2,
            prevArrow: "<img src='img/arrow-left.png'>",
            nextArrow: "<img src='img/arrow-right.png'>",
            speed: 1000,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1200,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        }
                }, {               
                    breakpoint: 992,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        }
            
                }, {               
                    breakpoint: 720,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        }
            
                }, {               
                    breakpoint: 577,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        }
            
                }, {               
                    breakpoint: 460,
                        settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        //centerMode: true,
                        autoplay: 1500,
                        speed: 1000,
                        }
            
                }] 

        });
    }
});

