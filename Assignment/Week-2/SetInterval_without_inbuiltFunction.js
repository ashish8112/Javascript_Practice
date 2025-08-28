let count =1;
function callback()
{
    console.clear();
    console.log(count+" sec passed"); // count is global variable
    count++;
    setTimeout(callback,1000);
}
setTimeout(callback,1000);



//  let count=0; 
//  let i=1; 
//  while(i<=10)    // This will not work becuase unitl call stack is empty async function can't excute in call stack it will stay in callback Queue until call stack is empty
//  {
//      count++  
//    setTimeout(callback,1000);
//    i++
//  }
//  function callback(count)
//  {
//     console.log(count);
//  }














