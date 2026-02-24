
//variable name cannot start with number
//system reserved keywords cannot be used
//variable names are case sensitive
//cannot have same name as of function or any object
//multiple variuables can be declared in same line
//undeclared variable will have value= undefined

let greeting = "Hello Word", greeting1 ="How are You", greeting2
console.log(greeting);
console.log(greeting1);
console.log(greeting2); //undefined


//using let value can be reassigned

//let

let val =0
val =10
console.log("value is " + val)

let count=0
if (true)
{
    let count=10
console.log("value inside block "+ count) 
}
    
console.log("value outside block "+ count)

//let and const supports block scope

//const
//const variable must be initialized with a value and cannot be reassigned
const APP_URL="https://www.google.com"
//APP_URL="https://www.youtube.com"//not allowed to reassign the value
console.log(APP_URL)


