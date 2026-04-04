// var dhokebazz ha scope ku follow nhi karta 
//which make thing difficult

var c =300


// box ka bahar ju bhi app likhenga vu global scope ha 
//       ^ ^ ^ ^
//       | | | |



let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
   // console.log("INNER: ",a);
}




console.log(a);
// console.log(b);
// console.log(c);

// closure,dom



// nested scope

// closure ku adhae kah sakta ha ju ander ka function vu bhar ka function ku access kar 
// pata haa


function one(){
    const username = "ujjwal"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    

    two()
}

one()

if(true){
    const username = "ujjwal"
    if(username === "ujjwal"){
        const website = "youtube"
        //console.log(username + website);
    }
    //console.log(website);
    
}


//console.log(username);



//*******************************interseting *********************** */


// 1ST WAY

function addone(num){
    return num +1

addone(5);

// 2ND WAY

const addTwo = function(num){
    return num + 2
}

addTwo(6)