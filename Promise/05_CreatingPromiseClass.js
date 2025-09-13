 class OwnPromise{
    constructor(fn){
        console.log("inside constructor of Promise class");
        fn(()=>{   // calling fn function and sending a function as argument .
            console.log("we come back inside fn body which is an arrow function ");
            console.log("As we have callback function name in resolve so from here we can directly call callback function.")
            this.resolve(); // this.resolve will be assigned with function then(afterReturningfromReadFile)
            });             // Note. In real resolve function of promise class it has something to return which can be used in callback as argument.
    }
    then(receiver_from_then_function)
    {
        console.log("We have got argument in then function for calling callback function ");
        this.resolve=receiver_from_then_function;
    }
 }

 function readFile(resolve)
 {
    console.log("Inside readFIle function called by constructor of promise class");
    setTimeout(function(){
        console.log("call back based setTimout is  completed");
        resolve(); // body of arrow function is executing here or we can say fn==readFile function is called in constructor and arrow function inside that 
        },3000);   //came here as function argument and stored in resolve() function and whenever timeout completed it called that Arrow function and it is executing here without object.arrow becuace arrow function auto bind with instance of class and Arrow function calls this.resolve
                    //This function is getting called becuase enitre function comes here with instanceClass.arrow (object.resolve) becuase it is always gets auto bind with instance of class .
                //Note it can only happen when sending arrow function as argument , we cannot call arrow function mannually without obj.arrow();
    }
function setTimeoutPromised(){
    return new OwnPromise(readFile);

}
let p=setTimeoutPromised();

function afterReturningfromReadFile(){
    console.log("if this was a real promise callback it would have accept something as argument becuause promise return something from resolve");
    console.log("which can catch in parameter of callback function . go through program no 09_readingFileusingPromise");
    console.log("Callback has been called ");
}
p.then(afterReturningfromReadFile);
