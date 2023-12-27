const accountId = 154487;
let accountEmail = 'Ripu@email.com';
var accountPass = '75896';
accountCity = "Delhi";
let accountState;

// acccountId = 2; // Not Allowed

accountEmail = 'Ritu@email.com';
accountPass = '15789';
accountCity = 'Mumbai';

/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState]);
console.log(accountId)