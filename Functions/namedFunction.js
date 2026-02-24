/*named function: function that has a name 
Scenarios
1. Function that returns a value
2. Function that does an action
3. Calling a function
4. ANy type of data is provided and no type checking
5. More or less arguments can be provided 
-- no check is performed on #number of parametes vs number of aguments received
6. Function name and Type of operator
*/

//1. Function that returns a value
function addTwoNum (num1, num2)
{
    let sum =num1 + num2
    return sum
}
//2. Function that does an action
function click (ele){
    console.log(`Clicking the given element: ${(ele)}`);
}

//3. Calling a function
// let total=addTwoNum (5,5)
// console.log(total);

// click("loginbtn")

//4. ANy type of data is provided and no type checking- there is drawback that it does not check the type
let total=addTwoNum ("five","five")

//5. More or less arguments can be provided 

//let total=addTwoNum () // it will give output nan
//let total=addTwoNum (5) //output nan as we are supposed to provide two numbers
//let total=addTwoNum (5,5,5) // it will ignore 3rd number
console.log(total);


//6. Function name and Type of operator
console.log(typeof addTwoNum);//function
console.log(typeof addTwoNum(2,2)); //number
