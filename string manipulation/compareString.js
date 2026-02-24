const { match } = require("assert")

/*Compare String
1. Full match
2. Partial match
- includes()
-startWith()
-endswith()
*/

let filename =" Invoice_123.pdf"
//full comparision
//trim method will trim spaces
if(filename.toUpperCase().trim() === "INVOICE_123.PDF")
{
    console.log("The file name matches");
}

//Partial comparision
if(filename.startsWith("invoice"))
{
     console.log("yes, it starts with invoice");
}
if(filename.endsWith(".pdf"))
{
     console.log("yes, it ends with .pdf");
}


