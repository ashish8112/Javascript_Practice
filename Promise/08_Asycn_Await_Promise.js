//Resolving callback Hell Using Async await it is just same to promises just a syntatically sugar version of 07_resolvingcallbackhellUsingPromise.


function setTimeoutPromisified(ms)
{
    return new Promise((resolve)=> setTimeout(resolve,ms));
}
 
//Syntactic sugar
async function execute_promise() // it is same as previous code it is returning Promise <void> hover over function keyword you can see in vscode
{   //async function always returns a Promise (by default). Inside it, you use await to pause execution until that Promise resolves.
    await setTimeoutPromisified(1000);
    console.log("Hii"); // this will execute after upper promise get executed.
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hello there ");
}

execute_promise();