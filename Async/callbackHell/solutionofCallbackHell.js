// Alternate solution which doesn't have really callback hell 

function step1Done()
{
    console.log("hii");
    setTimeout(step2Done,3000);
}
function step2Done()
{
    console.log("hello");
    setTimeout(step3Done,5000);
}
function step3Done()
{
    console.log("Hello There");
}

setTimeout(step1Done,1000);