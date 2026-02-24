//While loop --when to use
// - until a condition is met (or when end condition is not known) eg: retry until you get response
//scenario: waiting for an API response, retry max of 10 times

let count=1;
let isDataReturned = false
while(isDataReturned ===false && count <=10)
{
    console.log(count);
   
    if (count == 5)
    {
         isDataReturned=true;
    }
    count++;
}