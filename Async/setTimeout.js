function greet()
{
    console.log("This function has excuted after 2s");
}
setTimeout(greet,2000);//Asynchronous function; 
console.log("This function will execute first because of synchoronus function");
