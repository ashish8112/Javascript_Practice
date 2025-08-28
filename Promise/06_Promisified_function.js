function setTimeoutPromisified(duration)
{
    // return new Promise ((resolve)=>{   // or we can use normal function here as well .
    //     setTimeout(resolve,duration);  // setTimeout => Promisifed SetTimeout 
    // });
    return new Promise (function (resolve){ // this function will called by constructor suppose which is a outside of class and that function 
        setTimeout(resolve,duration);      // and that function has parameter which is executed inside function that is called by constructor and
    });                                    // then promise get succed and resolve gets called which has stored callback function and which gets invoked
}                                           // to understand go through with 05_CreatingPromiseClass .

let callback = () =>
{
    console.log("Promise succeded after 1sec");
}
setTimeoutPromisified(1000).then(callback);