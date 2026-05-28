/* 
/ is an escape character and will be skipped
if we want to print characters like ' or / or $ then we can use /
\n-new line
\t- tab
\b backspace
\\ backslash character
\v vertical tab

 
*/

let str = 'Hello Word, it\'s me' // without backslash it will give error
let strpath = 'test\\Hello\\Here' // one backslash will be skipped
let str2 = 'Hello Word,\n it\'s me' // /n means new line because it already have special meaning
console.log(str);
console.log(strpath);
console.log(str2);