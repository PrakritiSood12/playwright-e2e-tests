/*for (let i=0; i<=10; i++)
{
 console.log(i);
}
 */

let arr = ["Apple" , 10, "Orange" ,20, "Grapes", 30];
console.log(`length of array : ${arr.length}`);
let sum = 0
for (let i=0; i<arr.length;i++){
    let arrEle =arr[i]
     if (typeof arrEle === "number"){
     sum += arrEle
  }
  // if (typeof arrEle !== "number") continue
  //sum += arrEle
}
console.log (`The value of sum: ${sum}`);