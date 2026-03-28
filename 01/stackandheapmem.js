// stack,heap
// stack(primitive), Heap(non-primitive)
// jab bhi stack memory use hota ha uska matlab huta ha ki variable ka ek
// copy milta haa
// heap ka andar hame reference milta ha original value ka
// example
let myYoutubename = "nba.com" 
let anothername = myYoutubename
anothername = "google.com";
console.log(anothername);
console.log(myYoutubename)


// isma ham ek copy banata ha tu value original ka ander chahnge nhi huta
// bas vu copy ma change huta haa


//********************************************************************************************************************************


let user = {
    email: "user@goggle.com",
    upi: "use@bob123"
}

let userTwo = user

userTwo.email =  "roy@gmail.com"

console.log(user.email);
console.log(userTwo.email);

// yaha par heap hama reference milega na ki copy
// jase upar mila tha

// see diagram


