/** Return Statement
 * - 1.Returns a single primitive value
 * 2. Returns an expression
 * 3. Returns an object type
 * 4. Returns a function itself
 * 5. Return statement in conditional statement * 
 */

//function addTwoNum (num1,num2){
    //return num1 +num2 // Returns an expression
    //return {total:num1+ num2} //object type
//}

//return a function

// function addTwoNum(num1, num2) {
// return function() {
//     return num1 + num2;
// };
// }

//scenrio 4

function addTwoNum(num1, num2) {
    if (!num1)
    {
        return
    }
return function() {
    return num1 + num2;
};
}
//calling the function
let total= addTwoNum(undefined,2)
console.log(total);

