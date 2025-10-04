function setTimeoutPromisified(duration)
{
    // return new Promise ((resolve)=>{   // or we can use normal function here as well .
    //     setTimeout(resolve,duration);  // setTimeout => Promisifed SetTimeout 
    // });
    return new Promise (function (resolve){  // Note: we are sending object of promise class where it was called so there we can use promise class.
        setTimeout(resolve,duration);      
    });                                    
}                                           

let callback = () => // arrow function
{
    console.log("Promise succeded after 1sec");
}
setTimeoutPromisified(1000).then(callback);

// In this function what is happening as we know promise function completed when constructor of promise class and and parameter of function
// which is called by constructor executed . 
//Like here in Promise we are calling parameterized constructor with arrow function .Now constructor will call that arrow function although 
// it is there just you suppose there a function which is outside somewhere and just get's called by constructor 
// and resolve is the parameter of function of that function and when arrow function or function called by constructor is executing.
//Main motive is that if parameter of that function is executed then we can say Promise is executed succesfully and so , parameter of that 
// function *resolve* is getting called which is nothing a callback function . that's how function executed .