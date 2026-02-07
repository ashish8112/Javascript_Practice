//Note function is also a Object so we can find the length of function 
// Length is nothing its parameter of the function 
//Even if check the typeoof function it will display function but at the end of the day function is an object in js 
function sum (a,b,c)
{
    return true;
}

console.log(sum.length); // output will be 3 

console.dir(sum) //console.dir() is a JavaScript debugging method used to display an object in a structured, interactive way in the console.

const user = { 
  name: "Ashish",
  skills: { js: true, java: true }
};

console.dir(user);// Check in browser console.

//Useful for DOM elements (browser)
//When logging HTML elements:
//console.dir(document.body);
//Shows all properties/methods of the DOM object instead of just HTML markup.
