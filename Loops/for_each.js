//For Each can be used to access array's element

let windows= ["google", "amazon", "youtube"]
// () => {} arrow function syntax
windows.forEach((val,index,arr)=> {
    console.log(val);
    console.log(index);
    console.log(arr);
});
