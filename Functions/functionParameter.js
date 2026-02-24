//Defalt name
 function greet (name, greeting = "Hello") { // greeting will have default value 
    console.log (`${greeting}, ${name}!`);

 }
greet("Rob", "Hi")

//Passing undefined/falsy values
 function printFullname (fname, mname, lname) {

     console.log("--------------");
    
    if (mname){
           console.log(`${fname} ${mname} ${lname}`);
    }
           else{
                console.log(`${fname} ${lname}`);

           }
    }
printFullname("Rob",undefined,"Bob")

  console.log("--------------");

  //passing primitive obj type as arguments

function printFullname1 (personobj){
     console.log(`${personobj.firstname} ${personobj.lastname}`);
}
printFullname1( {
    firstname :"Robb",
    lastname : "Bobb",
});
