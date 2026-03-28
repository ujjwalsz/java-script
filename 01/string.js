const name = "ujjwal"
const repoCount = 50


//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('ujjwalsz')
console.log(gameName[0]);
console.log(gameName.__proto__)


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('z'));

//ujjwalsz

 const newString = gameName.substring(0,4) /// ujjw
 console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

//trim
//replace


const newStringone = "   ujjwal    "
console.log(newStringone)
console.log(newStringone.trim());

// space ku %20

const url = "https://ujjwal.com/ujjwal%20roy"

console.log(url.replace('%20', '-'));
console.log(url.includes('ujjwwal'));

console.log(gameName.split('-'))