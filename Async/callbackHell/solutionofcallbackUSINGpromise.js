//Using Promise chainning before that go through with week 2 assignment anagram.js and just look call channing in it.
function setPromisifiedpromise(duration)
{
    // return new promise(function (resolve){
    //     return setTimeout(resolve,duration);
    // });
    // return new promise ((resolve)=>{
    //     return setTimeout(resolve,1000);
    // });
    return new Promise(resolve=>setTimeout(resolve,duration));
}
setPromisifiedpromise(1000).then(function(){
    console.log("Hii");
    return setPromisifiedpromise(3000); // it will again call setPromisifiedpromise with 3 sec duration , think about recursion sort of because before returning it call the function 
}).then(function(){   // and then execute another line or step up, because of returning that setPromisifedpromise function ,now till then() of first it will act as singleLine and again with that I am doing .then() ,
    console.log("Hello");//like OneName.toLowerCase().split("").sort().join(""); // we can chain function calls 
    return setPromisifiedpromise(5000);
}).then(function(){
    console.log("hello there ");
})