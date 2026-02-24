//  used in case of callback
// No function keyword or function name required
//can be assigned to a variable
//no binding of this keyword


//convert a function into arrow fn

// named function
//function addTwoNum (num1, num2)
// {
//     let sum =num1 + num2
//     return sum
// }

let sum = (num1, num2) =>{
    let sum =num1 + num2
    return sum
}
let total= sum (2,2)
console.log(total);

//1. No Param
let arrowfn = () => 10<5
let result = arrowfn()
console.log(result);

//Single Param
let greet = (name) => console.log(`"Hello", ${name}!`)
//let greet = name => console.log(`"Hello", ${name}!`) -- no need of () at left side for singke statement
greet("Rob")