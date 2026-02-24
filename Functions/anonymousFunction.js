//Anonymous function- function without name is assigned to a variable

//function without a name assigned to variable

let addTwoNum = function (num1, num2)
{
    let sum =num1 + num2
    return sum
}
let val= addTwoNum (1,2)
console.log(val);


let sumFn = function addTwoNum (num1, num2)
{
    let sum =num1 + num2
    return sum
}
let val1= sumFn(3,2)
console.log(val1);