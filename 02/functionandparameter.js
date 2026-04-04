

function sayMyname(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");


}

//sayMyname   // ya ha reference
sayMyname() // ya ha execution



// function addTwonumbers(number1, number2){ // here number1,number2 are parameter
//      console.log(number1 + number2);
     
// }

// function addTwonumbers(number1, number2){ // here number1,number2 are parameter
//      let result = number1 + number2
//      return result
     
// }

function addTwonumbers(number1, number2){ // here number1,number2 are parameter
     return number1 + number2
     
}

const result = addTwonumbers(3,5) // 3,4 ya  arguments haa

console.log("result: ", result);

 
function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginusermessage("ujjwal"));
console.log(loginusermessage());  // agar koi value hi pass nhi karoge tu undefined ata ha




