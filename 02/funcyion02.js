 // ... ku hi rest aur spread operator bola jata
 // bas inke use case pa decide huta haa
 
 
 function calculatecartPrice(val1,val2,...num1){
    return num1
 }

 console.log(calculatecartPrice(200,400,500,600,700))// 200 400 val1 or val2 ma chale jayega

 const user = {
    username : "ujjwal",
    price: 189,
 }

 // object ku function ma kase pass karte haa

 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
// object ka pass karna ha aur idhar object user haa
//  handleobject(user);


  handleobject({
    username : "ujjwal",
    price: 188,
 })



 const myNewArray = [200,400,100,600]

// array ku function ma kase pass karna haa
 function returnsecondvalue(getArray){
    return getArray[1]
 }


//  console.log(returnsecondvalue(myNewArray));
 console.log(returnsecondvalue(200,400,500,1000));
 