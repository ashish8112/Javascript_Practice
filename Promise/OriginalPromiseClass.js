// class OwnPromise{
//     constructor(fn){
//         this.resolve = null;
//         this.reject = null;
//         fn((a)=>this.resolve(a),(b)=>{
//             this.reject(b)});
//     }
//     then(receiverFunction)
//     {
//         this.resolve=receiverFunction;
//         return this;
//     }
//     catch(receiverFunction){
//         this.reject=receiverFunction;
//         return this;
//     }
// }
// function Great(resolve,reject)
// {
//     let a=5,b=6;
//     if(a>b)
//         return resolve(a);
//     else
//         return reject(b);
// }
// let p=new OwnPromise(Great);
// p.then(callback).catch(error);

// function callback(content)
// {
//     console.log(content);
// }
// function error(content)
// {
//     console.log(content);
// }

class OwnPromise {
    constructor(fn) {
        this.onResolve = null;
        this.onReject = null;

        fn(
            (value) => {
                if (this.onResolve) this.onResolve(value);
                else this.value = value; // store for later
            },
            (error) => {
                if (this.onReject) this.onReject(error);
                else this.error = error; // store for later
            }
        );
    }

    then(receiverFunction) {
        this.onResolve = receiverFunction;
        if (this.value !== undefined) this.onResolve(this.value);
        return this; // for chaining
    }

    catch(receiverFunction) {
        this.onReject = receiverFunction;
        if (this.error !== undefined) this.onReject(this.error);
        return this;
    }
}

// Test:
function Great(resolve, reject) {
    let a = 5, b = 6;
    if (a > b) return resolve(a);
    else return reject(b);
}

let p = new OwnPromise(Great);
p.then(callback).catch(error);

function callback(content) {
    console.log("Resolved:", content);
}
function error(content) {
    console.log("Rejected:", content);
}
