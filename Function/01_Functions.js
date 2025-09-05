// Traditional Function     1. Normal function with No Parameter 
function sayHello()
{
    console.log("1. Hello in Traditional Function");
}
sayHello();


// Assignment function 
let SayHello = function()
{
    console.log("1. Hello in Assignment function");
}
SayHello();


//Arrow function of above function.
let sayHeLlo = () =>{       // similar to assignment and  traditional function ,suppose it is a assignment function and  without function keyword and => operator
    console.log("1. Hello in Arrow function ");
}
sayHeLlo();// Difference = Removed function Keyword . Added => after parameter list.


// Traditional Function     2.  Function with  Parameter
function greet(Name)
{
    console.log(Name);
}
greet("2. Inside the Traditional function, Function with parameter");

//Arrow function of above function(parameter)
let Greet = (Name)=>{
    console.log(Name);
}
Greet("2. Inside the Arrow function, Function without Parameter");

//One parameter in Arrow function we can remove paranthesis. 

let GreeT = Name => {
    console.log(Name);
}
GreeT("2. Lucky is inside Arrow function with parameter without paranthesis"); 

// Traditional function    3. Function Returning a value
function add(a,b){
    return a+b;
}
console.log("3. Traditional function with only returning value in body "+add(5,5));

// Arrow function returning value  

let arrow = (a,b) =>{
    return a+b;
}
console.log("3. Arrow function with only returning value in body "+arrow(6,6));

//Note :  If arrow function body has only **one return and nothing else you can remove {} and return keyword**.

let Arrow = (a,b) => a+b;

console.log("3. Arrow function with only returning value in body "+Arrow(10,10));

// Arrow function with one parameter and one return as body 
let check = number => number;

console.log("3. Arrow function with one parameter and one return as body only "+check(5));

// Traditional Function      4. Function with no parmeter and only return 
function getNumber()
{
    return 10;
}
console.log("4. Traditional function with no parameter and only return "+getNumber());

//Arrow function with no parameter and only one return 
let getNumbeR = () => 10;
console.log("4. Arrow function with no parameter and only one return "+getNumbeR());

// Traditional Function      5. Function as a callback
setTimeout(function(){              // SetTimeout function defination is already in Javascript engine we need call only with proper argument
console.log("5. Traditonal function as callback and Note : SetTimeout function defination is already in Javascript engine we need call only with proper argument ");
},5000)

//Arrow function 
setTimeout(()=>{
    console.log("5.Unlike Traditional function we are writing arrow function in function  parameter of setTimeout , It is a Arrow function as callback")
},5000);

// Arrow functions auto-bind this to the class instance. see Advantage_of_Arrow_In_Promise.js program.





