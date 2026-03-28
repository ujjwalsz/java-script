// react angular reactnative(javascript ka basic)
// number and math
const score = 400

const balance = new Number(100)
console.log(balance);
// string ma convert karta ha balance ku and
// like iska madad sa hum e-commerce ma use kar sakta ha
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // ans=100.00


const otherNumber = 1123.8966
// precision ku dhyan sa use karna
//decimal ka phale ku priority milti ha
console.group(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++ MATHS ++++++++++++++++++++++


//MATHS LIBRARY

// console.log(Math);
// console.log(Math.abs(-4));  //4
// console.log(Math.round(4.3)); //4 we use these
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4.3,6,8));

console.log(Math.random()); // 0 sa 1 ka bich ma value deta ha
console.log((Math.random()*10)+ 1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

Math.random()