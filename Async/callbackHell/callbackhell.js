// Call back hell async function inside a async funciton and inside a async funtion which goes on 


// Hii after 1 sec hello after 3 sec of hii and Hello there after 5 sec of Hello 
setTimeout(function(){ // This code looks ugly and hard to understand for others and callback inside callback and then so on... That's why 
    console.log("Hii");     // It is called callback hell.
    setTimeout(function(){
        console.log("Hello");
        setTimeout(function(){
            console.log("Hello there");
        },5000);
    },3000);
},1000); 

