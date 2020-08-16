class Worker {
    static type = 'WORKER'
    constructor(options){
        this.name = options.name
        this.surname = options.surname
        this.rate = options.rate
        this.days = options.days
    }
    getSalary(){
        return this.rate * this.days;
    }
} 
let worker = new Worker({
    name: 'Ivan',
    surname: 'Ivanov',
    rate: 10,
    days: 31
});

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());


class MyString {
    static type = 'MYSTRING'
    constructor(str){
        this.str = str
    }
    reverse(str){
        return str = str.split('').reverse().join('')
    }
    ucFirst(str){
        return str = str.slice(0, 1).toUpperCase() + str.slice(1,)
    }
    ucWords(str){
        let arr = str.split(' ')
        let newArr = [];
        arr.forEach((item) => {
            item = item.slice(0, 1).toUpperCase() + item.slice(1,);
            newArr.push(item)
        })
        return newArr.join(' ')
    }
}
let str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));
