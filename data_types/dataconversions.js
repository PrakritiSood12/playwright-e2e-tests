let val1="5"
let val2="5.5"
console.log(`The type of val1 ${typeof val1}`);
console.log(`The type of val2 ${typeof val2}`);

//convert string into number
numval1 = parseInt(val1)
numval2 =parseFloat(val2)
console.log(`The type of numval1 ${typeof numval1}, and the value ${val1}`);
console.log(`The type of numval2 ${typeof numval2}, and the value ${val2}`);

//unaryplus
let val3 ="6"
numval3 = +val3
console.log(`The type of numval3 ${typeof numval3}, and the value ${val3}`);

//convert to a string
let strval = numval1.toString()

console.log(`The type of strval ${typeof strval}, and the value ${strval}`);
