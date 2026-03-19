const accountId = 144553
let accountEmail = "ujjwal@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "us@us.com"
accountPassword = "213452"
accountCity = "Bengalurur"

console.log(accountId);

/*
prefer not tu use var
because of issue in block scope and functionanl
scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])