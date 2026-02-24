/**
 Replace and Replace ALL
 -Replace method can accept a string/regexp as its value
 @returns modified string value

 Scenario: 
 1. get only File name
 2. Rename the file extension
 3. Replace table_name with accounts
 4. convert the given date format to yyyymmdd

 */

 let filename ="Invoice_123.pdf"
 let query_template =`SELECT * FROM {{table_name}}`
 let dt="2026-02-13"

 //1. get only File name
 let onlyfilename= filename.replace(".pdf","")
 console.log(onlyfilename);

 //2. Rename the file extension
 let replaceTxt= filename.replace("pdf","txt")
 console.log(replaceTxt);

 //3.  Replace table_name with accounts
 let tablename= query_template.replace("{{table_name}}", "accounts")
 console.log(tablename);

 // 4. convert the given date format to yyyymmdd
 let modifiedDt=dt.replace(/-/g,"")
  console.log(modifiedDt);



