//Using Promise chainning before that go through with week 2 assignment anagram.js and just look call channing in it.
function setPromisifiedpromise(duration)
{
    // return new promise(function (resolve){
    //     return setTimeout(resolve,duration);
    // });
    // return new promise ((resolve)=>{
    //     return setTimeout(resolve,1000);
    // });
    //in below line we are sending arrow function in constructor which is calling it which have parameter of resolve and return statement .
    return new Promise(resolve=>setTimeout(resolve,duration));// return will first call the setTimeout and then go back where this setPromisifedpromise fucntion called.
    // in above resolve is parameter in arrow function.
}
setPromisifiedpromise(1000).then(function(){// basically setPromisifiedpromise(1000) stores the object of promise class with that obj.then()
    console.log("Hii");
    return setPromisifiedpromise(3000); // it will again return object of promise which executes it's next .then() function
}).then(function(){  
    console.log("Hello");//like OneName.toLowerCase().split("").sort().join(""); // we can chain function calls 
    return setPromisifiedpromise(5000);
}).then(function(){
    console.log("hello there ");
})
// It is similar to this 
// Promise p2 = p1.then(fn1);
// Promise p3 = p2.then(fn2);
// Promise p4 = p3.then(fn3);

// Or think like that .then(functionName) // means here we call called function so it return object of promise 
//becuase at end of function we have returned a new object of promise 
// so let p =  .then(functionName) 
// so p stores object of returned promise class so 
// now we can do p.then() again 
// that why chainning is working here 
// .then(FunctionName) -> become objectName of promise and - > .then(functionName).then() we can perform.