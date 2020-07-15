document.addEventListener("DOMContentLoaded", function() {
    const flagDown = document.querySelector(".fa-chevron-down");
    const flagUp = document.querySelector(".fa-chevron-up");
    const list = document.querySelector(".overview-list");
    flagDown.addEventListener("click", function() {
        list.classList.toggle("active");
        flagDown.classList.toggle("active");
        flagUp.classList.toggle("active");
    })
    flagUp.addEventListener("click", function() {
        list.classList.toggle("active");
        flagDown.classList.toggle("active");
        flagUp.classList.toggle("active");
    })
})
$(window).scroll(function () {console.log($(window).scrollTop());
    if ($(window).scrollTop() > 2300) {
        $(".recall-me").addClass("animate__animated");
        $(".recall-me").addClass("animate__bounceIn");
        $(".recall-me").addClass("animate__delay-1s");
        $(".recall-me").addClass("animate__slow");
        $(".recall-me").addClass("animate__repeat-3");
    } 
})
if($(window).width() > 1200) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1500) {
            $(".recall-me").addClass("animate__animated");
            $(".recall-me").addClass("animate__bounceIn");
            $(".recall-me").addClass("animate__delay-1s");
            $(".recall-me").addClass("animate__slow");
            $(".recall-me").addClass("animate__repeat-3");
        } 
    }) 
}
if($(window).width() < 576) {
    $(window).scroll(function () {console.log($(window).scrollTop());
        if ($(window).scrollTop() > 2450) {
            $(".recall-me").addClass("animate__animated");
            $(".recall-me").addClass("animate__bounceIn");
            $(".recall-me").addClass("animate__delay-1s");
            $(".recall-me").addClass("animate__slow");
            $(".recall-me").addClass("animate__repeat-3");
        } 
    }) 
}