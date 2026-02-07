//1.forEach 2.Map 3.Filter => Methods of array 4.find

let arr = [1,2,3,4];
//1.forEach Usage
arr.forEach(function(value){ //It is like iterating over every index and perform operations on them.
    console.log(value+2);
})

arr.forEach(value=>{ //instead of function we can use arrow function 
    console.log(value+" hello");
})

// let ashish = arr.forEach((value)=>{ // ashish will store undefined as forEach doesn't return anything.
//     return value+5;
// })
// console.log(ashish);

//2.Map -> It is just like new array with same size of your current array where you can add your functionality or features 
//and return new value to your result array.

let newArr= arr.map(function(value){ // you can use arrow function 
    return value+5;
})
console.log(newArr)

//3.Filter -> It will return new array with your filter criteria not same size as your arr . depends on your filter

let nums = arr.filter((value)=>{  // default return is false . 
    if(value>3)
        return true;
})

console.log(nums); //[ 4 ]

//4.find is also a function like filter and forEach 

let ans = nums.find((value)=>{
    if(value===4)
        return 22; // No matter what you write here it will return the value if exists or undefined if not.
})
console.log(ans);

//5.indexOf Use to return the index of the value 
console.log(nums.indexOf(4));