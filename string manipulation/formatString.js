
//Example 1 : ABC bank Statement from  2026-01-01 to 2026-02-01 for account ending 12345

let stDt= "2026-01-01"
let endDt="2026-02-01"
let acNum = 12345

//formating a string using tempalate literal
let emailSub=`ABC bank Statement from ${stDt} to ${endDt} for account ending ${acNum}`
console.log(emailSub);