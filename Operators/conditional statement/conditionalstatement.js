
//case 1just if
let popup="True"
if (popup === "True")
{
console.log ("click the button");
}

//case 2 just ifnot :  checking falsy value
let data ="jj"
if(!data) throw Error("no valid data")

//case 3: if else-- if file exists read the file else create a file

let fileExist =""
if (fileExist)
{
    console.log(">>read the file");
}
else
{
console.log(">>create the file");
}

//case 4: if else if

let err="DataValidation"
if(err==="LoadingError")
{
console.log("Retry");
}
else if(err==="assertion error")
{
console.log("fail the test");
}
else if(err==="DataValidation")
{
console.log("read the test data file");
}
else
{
    console.log("print the error message");
}

//Case5:If else (inner conditions): querying a database for test data

let isSuccess =true
if (isSuccess === true)
{
console.log('storing the db values');
}
else
{
console.log('no data is received');
let errorCode="Accept"
    if (errorCode ==="Accept")
    {
    console.log('continue the execution');
    }
    
    else
    {
        console.log('fail the test');
    }
}

//Use case 6: using if in loops
for(let i=1; i<=10;i++)
{
    if (i=== 6) break
    console.log(i);
}
console.log ("for loop ends");
