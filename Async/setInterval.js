let count=1;
let stop;
function counter(){
    console.clear(); // for clearing the console else all output will be shown like 1 2 3 4 ....
    console.log(count);
    count++;
    if(i==60)
        clearInterval(stop);// This will stop the counter when reaches to 60 second.
    
}
stop=setInterval(counter,1000); // will call continously to function counter after each 1sec interval.