// && Use case 1: check if given value is valid text

let val="Monday"

if (typeof(val=== "string")&& val.length>1)
{
    console.log("Given value is string");
}
else{
console.log("Given value is not string");
}


//OR(||)
let day="Sunday"
if (day== "Saturday"|| day=="Sunday")
{
    console.log("day is weekend");
}
else
{
console.log("not a weekend");
}


//Not !

let firstname="Ron"
let lastname= ""
if (!firstname || !lastname)
{
console.log ("name is not valid")
}
else
{
    console.log ("name is valid")

}


//default operators
let targetvalue
let browser= targetvalue||"Chrome" // if target browser is not provided then it will take default value on right side i.e. chrome
console.log(browser);


