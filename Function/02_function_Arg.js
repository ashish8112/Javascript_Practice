let ashish= function() //Assignment Function
{
    console.log("Hii");
}

ashish();



    function sum(a,b)
    {
        return a+b;
    }

    function caller(a,b,parameter) // Here i am receiving, parameter = sum or we can call taking function as argument without parameter of function,means sending function as argument without giving argument
    {
       return parameter(a,b);
    }
    let Sum = caller(5,10,sum);     //Sending function as argument

    console.log(Sum);

    

    function greet (firstName) // This function will return function .
    {
        return function() // just like we return ;variables or numbers,  so we can return function as well.
        {
            console.log("hello "+firstName); // this will only execute when this function is stored in another function X and when we call function x() that will execute
        }
    }
    let greetMaking = greet("Daksh");
    greetMaking();

