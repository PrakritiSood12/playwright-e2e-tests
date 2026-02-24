//Datatype: 8 (7 primitive and 1 object type) [string, number, boolean, undefined, null, bigint, symbol (unique value), object]
//primitive datatypes are immutable- read obly
//string: ways to use a string with single quote, double quote and literals
let str='Hello'
let str1="Hello1"
let str3=`${str}, World`
console.log(str3)

//Boolean
let bool=true

//object 
let obj = {} //empty object -object type

//Array
let arr = []

//RegExp
let re =/abc/

//undefined,null
let val1
let tempobj=null

//typeof
console.log (`Type of str is ${typeof str}`);
console.log (`Type of obj is ${typeof obj}`);
console.log (`Type of arr is ${typeof arr}`);
console.log (`Type of re is ${typeof re}`);
console.log (`Type of undefined is ${typeof val1}`);
console.log (`Type of null is ${typeof tempobj}`);





let day="sunday"
console.log (day); //here value will be sunday
console.log (day.toUpperCase()); //here value will be SUNDAY
console.log (day); // here cvalue will be again sunday that means value of day is immutable
