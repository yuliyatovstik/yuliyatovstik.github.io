//1

let firstPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(1);
    }, Math.floor(Math.random() * 4000 + 1000));
 })
 let secondPromise = new Promise(function(resolve, reject){
     setTimeout(() => {
         resolve(2);
     }, Math.floor(Math.random() * 4000 + 1000));
 })
 let thirdPromise = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve(3);
     }, Math.floor(Math.random() * 4000 + 1000));
 })
 let div = document.createElement('div');
 let body = document.querySelector('body');
 Promise.race([firstPromise, secondPromise, thirdPromise]).then((value) => {
     console.log(value);
     div.innerHTML = value;
     body.prepend(div);
 });
 
 //2
 let time1;
 let firstPromise2 = new Promise(function(resolve, reject){
     setTimeout(() => {
         resolve(time1);
     }, time1 = Math.floor(Math.random() * 4000 + 1000));
 })
 let time2;
 let secondPromise2 = new Promise(function(resolve, reject){
     setTimeout(() => {
         resolve(time2);
     }, time2 = Math.floor(Math.random() * 4000 + 1000));
 })
 let time3;
 let thirdPromise2 = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve(time3);
     }, time3 = Math.floor(Math.random() * 4000 + 1000));
 })
 let divPromiseAll = document.createElement('div');
 Promise.all([firstPromise2, secondPromise2, thirdPromise2]).then((value) => {
     let result = value.reduce((sum, item) => sum + item, 0);
     console.log(result);
     divPromiseAll.innerHTML = result;
     body.append(divPromiseAll);
 });
 
 //3
 
 let userPromise = new Promise(function(resolve, reject){
     setTimeout(() => {
         let user = {
             name: 'Boba', 
             year: '1997', 
             status: 'admin'
         }
         resolve(user);
     }, 3000)
 }) 
 userPromise.then((userData) => {
     userData.age = new Date().getFullYear() - userData.year;
     return userData;
 })
 .then((user) => {
     console.log(user);
 })
 .catch(err => {
     console.log("Error", err)
 })
 .finally(() => {
     console.log("Finally")
 })