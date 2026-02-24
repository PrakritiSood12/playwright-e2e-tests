//falsyvalues : false,undefined,nan, empty string'', null,0
//[], {} empty array will be considered as truthy

let val= undefined
if(val)
{
    console.log("condition met");
}
else
{
    console.log("Value is falsy");
}

let val2=2+undefined //undefined is considered as not a number
console.log(val2);

let val3=2+null //value of null is 0
console.log(val3);