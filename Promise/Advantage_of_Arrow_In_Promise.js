class Person {
    constructor(name) {
        this.name = name;
    }

    normalMethod() {
        console.log("Normal:", this.name);
    }
}

let p = new Person("Ashish");

p.normalMethod(); // It will print Ashish fine .

//So far, fine. But… if you pass the method somewhere else:

setTimeout(p.normalMethod, 10); // It will show undefined.
console.log("It will show undefined.Because when the * any function runs*, JavaScript loses the link to the object.");
console.log("Here, this no longer points to the Person instance.Instead, it becomes undefined in strict mode.");

class Person2 {
    constructor(name) {
        this.name = name;
    }

    arrowMethod = () => {
        console.log("Arrow:", this.name);
    }
}

let p2 = new Person2("Ashish");
setTimeout(p2.arrowMethod, 1000);

console.log("Because arrow functions don’t have their own this. ");
console.log("They capture (or close over )the this value from where they were created.In this case,");
console.log("this was the class instance (p) when arrowMethod was defined.So no matter how or where you call it, this will always point to the instance.")
console.log("Normal methods: this depends on how you call the function.");
console.log("Arrow functions: this is automatically “locked” (auto-bound) to the instance where it was created.");

class Check_Promise{
    constructor(Name)
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
function readFile(resolve)
{
    resolve(); // It can't called without arrow function becuase while running function javascript engine loose the connection this object , but arrow function that is auto bind with instance of class.
}
let p3=new Check_Promise(readFile);