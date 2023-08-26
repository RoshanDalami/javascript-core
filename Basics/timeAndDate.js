//dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23);
let newMyCreatedDate = new Date(2023, 0, 23,5,3);
// console.log(newMyCreatedDate.toLocaleString());


const current = Date.now() // will return current date . in millisecond.
// console.log(current)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // converting into seconds.

let newDate   = new Date();

// console.log(newDate.getDate())
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)
// console.log(newDate.getFullYear())

const local = newDate.toLocaleString('np',{
    weekday:'long',
    
})

console.log(local)
