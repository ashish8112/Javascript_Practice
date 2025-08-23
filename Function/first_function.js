let ashish= function() //Assignment Function
{
    console.log("Hii");
}

ashish();

    //Sending function as argument

    function sum(a,b)
    {
        return a+b;
    }

    function caller(a,b,parameter) // Here i am receiving parameter = sum or we can call taking function as argument without that parameter,means sending function as argument without giving argument
    {
       return parameter(a,b);
    }
    let Sum = caller(5,10,sum);
    console.log(Sum);

    // returning function from and storing in assignment function

    function greet (firstName)
    {
        return function() // just like we return a; so we can return function
        {
            console.log("hello "+firstName); // this will only execute when this function is stored in another function X and when we call function x() that will execute
        }
    }
    let greetMaking = greet("Daksh");
    greetMaking();

