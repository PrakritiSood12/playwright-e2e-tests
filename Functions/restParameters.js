//Rest Parameters are denoted by ... <paramName>
// To Represent indefinite number of arguments as an array


function sum (num1, num2, ...numN){
    let total = 0;
    //console.log(arguments);
    //console.log(arguments[2]);
    //console.log(arguments.length);
    // let sum = num1 + num2
    // return sum
     for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
      
     }
      return total;
}

let val =sum(1,2,3,4)
console.log(val);