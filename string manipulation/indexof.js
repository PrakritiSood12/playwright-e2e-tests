

let str= "App # {12345} submitted"
let start = str.indexOf("{")
let end= str.lastIndexOf("}")
console.log(start);
console.log(end);

let appnum =str.slice(start+1,end)
console.log(appnum);