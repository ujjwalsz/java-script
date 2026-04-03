// singelton
// with use of constructor


//const tinderUser1 = new Object()  //singelton
const tinderUser = {}    // not a singelton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//object ka ander object ku kase declare


const regularUser = {
    email: "some@gnail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudary",
        }
    }
}

//console.log(regularUser.fullname.userfullname?.firstname);


// how to merge two or more objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
//const obj3 = Object.assign( {}, obj1, obj2, obj4)
//console.log(obj3);


const obj3 = {...obj1,...obj2}
console.log(obj3);


// array ka nder bahut sara objects haa
const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
        {
        id: 1,
        email: "h@gmail.com",
    },
        {
        id: 1,
        email: "h@gmail.com",
    },
]


users[1].email
console.log(tinderUser);

// simply convert into array which cana be further used by looping 
// mainly used in database

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLooged'))

