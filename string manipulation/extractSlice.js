
/* Slice Method
Rules:
-Requires start inclusive and end index (end index is not included)
-You can specify only start index
- Can specify negative range

Scenario
1. Extract only yy-mm-dd format
2. Extract year 4 digits- 0 index
3. Extract month- 5 index
4. Extract date- 8 index

*/

let dt="2026-02-26"

//yy-mm-dd format
let ddmmyy=dt.slice(2)
console.log(ddmmyy);

//year
let year=dt.slice(0,4)
console.log(year);

//month
let month=dt.slice(5,7)
console.log(month);

//date
//let date=dt.slice(8,10) or
//let date=dt.slice(8) or
let date=dt.slice(-2) // will provide same output as we pass negative range

console.log(date);