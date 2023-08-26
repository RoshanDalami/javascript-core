const marvelHeros = ['Ironman','Thor','Spider-man'];
const dcHeros = ['Superman','Batman','Flash']

// marvelHeros.push(dcHeros) //will push array into marvelHeros
// console.log(marvelHeros[3])
const newArray = marvelHeros.concat(dcHeros)// instead of using concat.
//use spread opreator.


const allHeros = [...marvelHeros,...dcHeros];
// console.log(allHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const useable_another_array = another_array.flat(Infinity) //return flat array
// console.log(useable_another_array) //[1,2,3,4,5,6,7,6,7,4,5]

// console.log(Array.isArray('Roshan')) //false

// console.log(Array.from('Roshan'))//will return array of roshan

console.log(Array.from({name:'roshan'})) //has to specify . key or value to be array.
