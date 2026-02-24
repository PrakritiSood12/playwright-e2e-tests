/*Split
Rules
1. The seprator string/regexp is omitted from returned array
2. If the Very first/last character is the seprator, it adds empty strings at first /last positions

Scenario
1. Get only date part of timestamp
2. Split by space/first or last character
3. Get only the filename
*/

let tmstmp="2026-02-26T10:51:52.2072";
let str = "Hello Word";
let filename ="Invoice_123.pdf"

//1. Get only date part of timestamp
let dtarr=tmstmp.split("T")
console.log(dtarr[0]);

//2. Split by space/first or last character

let arr=str.split("H")
console.log(arr);

//3. Get only the filename

let filearr=filename.split(".")
console.log(filearr);

