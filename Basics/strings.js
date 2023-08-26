const name = "Roshan";
const repoCount = 42;

// console.log(`Hello,I am ${name} and my github repocount is ${repoCount}`);

const gameName = new String("Roshan Dalami suck purnima pangeni boobee");

const newString = gameName.substring(0, 4); //will take string upto first index and last given index - 1 . last given index will be excluded
// console.log(newString);

const anotherString = gameName.slice(1, 2);
// console.log(anotherString);

const trimString = "     Roshan     ";
const withOutSpace = trimString.trim();
// console.log(trimString);
// console.log(withOutSpace);

const url = "www.sschdc.org/about/history%20home";

const fixedUrl = url.replace("%20", "_");
// console.log(fixedUrl);

const boobee = gameName.split(" ");
console.log(boobee);
