document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector("#burger-button");
    const nav = document.querySelector("nav");
    const header = document.querySelector(".header");
    burger.addEventListener("click", function() {
        nav.classList.toggle("active");
    })
})

//if($(window).width() > 751) {
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 50) {
            $("header").css("background", "rgba(0,0,0,0.8)")
        } else {
            $("header").css("background", "rgba(0,0,0,0)")
        }
    })
//}
// if($(window).width() < 769) {
//     $("<li><div>contact us</div></li>").appendTo(".navigation__list").addClass("navigation__button").addClass("navigation__contact-us").css("display", "flex");
    // let list = document.querySelector(".navigation__list");
    // let li = document.createElement("li");
    // li.classList.add("navigation__item");
    // li.innerHTML = "contact us";
    // list.append(li);
    // console.log(li);  
// }