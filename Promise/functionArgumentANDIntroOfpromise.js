function promisecallback(resolve)
{
    setTimeout(resolve,3000);
}
promisecallback(function(){console.log("Hiii , it will run after 3 sec")});