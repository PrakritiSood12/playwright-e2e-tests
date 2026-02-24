//Ternary Operator (?)
//<expression> ? "val1": "val2"

//use case : Set log level to run environment 
//basic
let runner = "local"
let loglevel = runner == "local"? "info": "error"
console.log(loglevel);

//advanced

let runner1 ="cloud"
let loglevel1 = runner1 =="local"? "info": runner1 == "cloud"? "silent": "error"
console.log(loglevel1);
