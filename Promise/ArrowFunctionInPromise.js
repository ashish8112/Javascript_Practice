class Check_Promise{
    constructor(Name) // Name= readFile
    {
        Name(()=>{ //Arrow function auto-bind this to the class instance.
            this.resolve();
        })
        // Name(function(){ // This will show error becuase javascript engine lose the connection of object whenever it is executing function. But in Arrow function auto-bind this to the class instance.
        //     this.resolve();
        // })
    }
    resolve()
    {
        console.log("Resolve is called ");
    }
}

function readFile(reslove)
{
    reslove(); // It can't called without arrow function becuase while running function javascript engine loose the connection this object , but arrow function that is auto bind with instance of class.
            //This function is getting called becuase enitre function comes here with instanceClass.arrow (object.resolve) becuase it is always gets auto bind with instance of class .
                //Note it can only happen when sending arrow function as argument , we cannot call arrow function mannually without obj.arrow();
                
}
let p3=new Check_Promise(readFile);


