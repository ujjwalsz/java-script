// # primitive 
// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

 const bigNumber =  3447937297479247n

// non primitive or referencce types

// array, objects, functios

// array
const heros = ["shaktiman", "naagraj", "doga"];

// key-value pair (objects)
let myObj = {
    name: "hitesh",
    age: 22,
}

// function (variable ka tarika)


const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

