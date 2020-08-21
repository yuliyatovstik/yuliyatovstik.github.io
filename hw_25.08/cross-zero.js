let fieldGame = document.querySelector('.block-tic-tac-toe');
let arrItem = document.querySelectorAll(".item-tic-tac-toe");
let [one, two, three, four, five, six, seven, eight, nine] = arrItem;
let counterClicks = 0;
let countCross = 0;
let countZero = 0;
fieldGame.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != 'P') return;
    addClass(target);
    checkClass();
    checkClicks();
})
function checkClicks(){
    if(counterClicks >= 9){
        location.reload()
    }
}
function addClass(elem){
    if (counterClicks % 2 == 0){
        elem.classList.add('active-cross');
    }else{
        elem.classList.add('active-zero');
    }
    counterClicks++
}
function checkClass(){
    if ((one.classList.contains("active-cross") && two.classList.contains("active-cross") && three.classList.contains("active-cross"))
    || (four.classList.contains("active-cross") && five.classList.contains("active-cross") && six.classList.contains("active-cross"))
    || (seven.classList.contains("active-cross") && eight.classList.contains("active-cross") && nine.classList.contains("active-cross"))
    || (one.classList.contains("active-cross") && five.classList.contains("active-cross") && nine.classList.contains("active-cross"))
    || (three.classList.contains("active-cross") && five.classList.contains("active-cross") && seven.classList.contains("active-cross"))
    || (one.classList.contains("active-cross") && four.classList.contains("active-cross") && seven.classList.contains("active-cross"))
    || (two.classList.contains("active-cross") && five.classList.contains("active-cross") && eight.classList.contains("active-cross"))
    || (three.classList.contains("active-cross") && six.classList.contains("active-cross") && nine.classList.contains("active-cross"))
    ) {
        countCross = JSON.parse(localStorage.getItem("Cross")) + 1;
        localStorage.setItem('Cross', countCross)
        location.reload()
    }
    if ((one.classList.contains("active-zero") && two.classList.contains("active-zero") && three.classList.contains("active-zero"))
    || (four.classList.contains("active-zero") && five.classList.contains("active-zero") && six.classList.contains("active-zero"))
    || (seven.classList.contains("active-zero") && eight.classList.contains("active-zero") && nine.classList.contains("active-zero"))
    || (one.classList.contains("active-zero") && five.classList.contains("active-zero") && nine.classList.contains("active-zero"))
    || (three.classList.contains("active-zero") && five.classList.contains("active-zero") && seven.classList.contains("active-zero"))
    || (one.classList.contains("active-zero") && four.classList.contains("active-zero") && seven.classList.contains("active-zero"))
    || (two.classList.contains("active-zero") && five.classList.contains("active-zero") && eight.classList.contains("active-zero"))
    || (three.classList.contains("active-zero") && six.classList.contains("active-zero") && nine.classList.contains("active-zero"))
    ) {
        countZero = JSON.parse(localStorage.getItem("Zero")) + 1;
        localStorage.setItem('Zero', countZero)
        location.reload()
    }
}
let zeroScreen = document.querySelector(".zero-count")
zeroScreen.innerHTML = JSON.parse(localStorage.getItem("Zero"));
let crossScreen = document.querySelector(".cross-count");
crossScreen.innerHTML = JSON.parse(localStorage.getItem("Cross"));
let buttonClear = document.querySelector("button");
buttonClear.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
});