function random(resolve)//if the argument of Promise argument gets invoked or called or it will then go to call back or for understanding when 
                            // argument function of constructor of promise gets invoked then promise gets  succed and call it's call_back using obj.then(callback).
                            //or we can say this random() function is getting called my promise () constructor .
{
    // setTimeout(function ()
    // {
    //     console.log("Hello");
    //     resolve();
    // },3000); 
    //or
    //setTimeout(resolve,3000);
    //or 
    resolve();// Promise will succed when the arugment(function_argument of Promise ) 's argument will called/invoked/resolved.and then it will 
                // calls it call back using dot operator becuase we use dot operator to call function of obj like obj.function(); so p.then(call_back); 


}

let p= new Promise(random); // Creates an object of Promise class and it's eventually return u something and calls function random or you can
                            //say constructor of promise class 
console.log(p);// it is showing undefined becuase it is executed very early.

function call_back()
{
    console.log("Promise succeded");
}
p.then(call_back);;