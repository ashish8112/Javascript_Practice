 class OwnPromise{
    constructor(fn){
        // this.fn=fn; // Although there is no need to pass fn in this.fn because it is in same scope.
        fn(()=>{  
            console.log("inside fn");
            this.resolve(); // this.resolve will be assigned with function then(afterReturningfromReadFile)
            });  
    }
    then(receiver_from_then_function)
    {
        this.resolve=receiver_from_then_function;
    }
 }

 function readFile(resolve)
 {
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
    console.log("Callback has been called ");
}
p.then(afterReturningfromReadFile);
