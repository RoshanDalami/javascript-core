//singleton

//objects literals
const mySym = Symbol('key1')
const obj = {
    name:'roshan',
    "full name":'Roshan Dalami',
    [mySym] : 'key1', // how to use Symbol type as key-value pair.
    age:23,
    location:'Nepal',
    email : 'roshan@google.com',
    isLoggedIn : false ,
    lastLoggedInDays : ['Monday','Thursday','Wednesday']
} // one way

// console.log(obj.name)
// console.log(obj["full name"])
// console.log(obj['name'])

Object.freeze(obj) //freeze the obj not change will apply to that object how





//construction method.
const tinderUser = new Object() 
//singleton object

tinderUser.id = '123abc'
tinderUser.name = "Roshan"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email:'regular@google.com',
    fullname:{
        userFullname :{
            firstname : "Roshan",
            lastname: 'Dalami'
        }

    }
}

// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4)

// console.log(Object.values(tinderUser))
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('fullname'))

//+++++++++ Object De-structuring ++++++++++++++

const course = {
    courseName : 'ReactJS Master Class',
    price : '$100',
    availability : 'life time'
}

const {courseName , price , availability} = course ;

console.log(courseName)
console.log(price)
console.log(availability)