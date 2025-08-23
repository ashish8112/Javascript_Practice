 class OwnPromise{
    constructor(fn){
        // this.fn=fn; // Althoug there is no need to pass fn in this.fn.
        fn(()=>{
            console.log("inside fn");
            this.resolve();
            })  
        // function afterDone(){

        //      this.resolve();
        //  }
        
        
        //  fn(afterDone);


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
        p.resolve();
        },3000);
    }
function setTimeoutPromised(){
    return new OwnPromise(readFile);

}
let p=setTimeoutPromised();

function afterReturningfromReadFile(){
    console.log("Callback has been called ");
}
p.then(afterReturningfromReadFile);
