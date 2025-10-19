let count =0;
function increase()
{
    count++;
    let increment=document.querySelector(".counterValue");
    increment.innerHTML="Count = "+count;
}
function decrease()
{
    if(count==0)
    {
        alert("You cannot decrease than 0");
        return;
    }
    count--;
    document.querySelector(".counterValue").innerHTML="Count = "+count;
}
function reset()
{
    count =0;
    document.querySelector(".counterValue").
    innerHTML="Count = "+count;
}