const date = new Date();
const form = document.querySelector("#form-age");
let age = document.querySelector("#child-age");
let birth = document.querySelector("#birth-date");
const currentDate = Date.parse(date);

// Без учета высокосного года

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const birthDate = Date.parse(birth.value);
//     if ((Math.floor((currentDate - birthDate) / (3600 * 24 * 1000 * 365))) == age.value) {
//         console.log("Welcome!");
//     } else {
//         console.log(`Your age is ${(Math.floor((currentDate - birthDate) / (3600 * 24 * 1000 * 365)))}! `);
//     }
// })
//////////////////////////////////////////////

// С учетом высокосного года

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const birthDate = Date.parse(birth.value);
    let arrBirthDate = birth.value.split('-');
    if (date.getFullYear() % 4 == 0 && date.getMonth() == 1 && date.getDate() == 29 && arrBirthDate[0] % 4 == 0) {
        let daysFebr = ((Math.floor((currentDate - birthDate) / (3600 * 24 * 1000 * 365))) / 4) * 3600 * 24 * 1000;
        if ((Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365))) == age.value) {
            console.log("Welcome!");
        } else {
            console.log(`Your age is ${(Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365)))}! `);
        }
    } else if (date.getFullYear() % 4 == 0 && date.getMonth() > 1 && arrBirthDate[0] % 4 == 0) {
        let daysFebr = ((Math.floor((currentDate - birthDate) / (3600 * 24 * 1000 * 365))) / 4) * 3600 * 24 * 1000;
        if ((Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365))) == age.value) {
            console.log("Welcome!");
        } else {
            console.log(`Your age is ${(Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365)))}! `);
        }
    } else if (date.getFullYear() % 4 == 0 && date.getMonth() > 1 && arrBirthDate[0] % 4 == 0 && arrBirthDate[1] < 3) {
        let daysFebr = ((Math.floor((currentDate - birthDate) / (3600 * 24 * 1000 * 365))) / 4) * 3600 * 24 * 1000;
        if ((Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365))) == age.value) {
            console.log("Welcome!");
        } else {
            console.log(`Your age is ${(Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365)))}! `);
        }
    } else {
        let daysFebr = (((Math.floor((currentDate - birthDate) / (3600 * 24 * 1000 * 365))) / 4) + 1) * 3600 * 24 * 1000;
        if ((Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365))) == age.value) {
            console.log("Welcome!");
        } else {
            console.log(`Your age is ${(Math.floor((currentDate - birthDate - daysFebr) / (3600 * 24 * 1000 * 365)))}! `);
        }
    }

})