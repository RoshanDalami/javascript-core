//Array

const arr = [0,1,2,3,4,5]
const superHeros = ['Ironman','Captain America','Scarlet Witch'] //one way of declearing array.
const superVillian = new Array('Joker','Thanos') // no need of square brackets. will Automatically given to array
superHeros.push('roshan') //add item to last
superHeros.pop() // remove item from last
superHeros.shift() // shift remove item from beginning of the array.
superHeros.unshift('Roshan') //add item at the beginning of the array.

// console.log(superHeros)

// array questions method (comparasion methods).

// console.log(superHeros.includes('purnima')) //return boolean 
// console.log(superHeros.indexOf('Roshan')) // return index of given element . If not exist return -1

const newArray = superHeros.join() // will return string of array sepreated by comma
// console.log(superHeros)
// console.log(newArray)


//slice , splice

console.log('A',superHeros)

const myn1 = superHeros.slice(1,2) // doesn't mainpulate original array
console.log(myn1)
const myn2 = superHeros.splice(1,2) //mainpulate original array
console.log(superHeros)
console.log(myn2)