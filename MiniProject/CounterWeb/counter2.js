//Counter for Counting people in Party
let count =0;
let btn = document.querySelector(".increase");
btn.addEventListener("click",increase); // eventListener for increase fun

function increase()
{
     count++;
    let increment=document.querySelector(".counterValue");
    increment.innerHTML="Count = "+count;
    updateColor();
}

document.querySelector(".decrease").addEventListener("click",decrease);

function decrease()
{
    if(count==0)
    {
        alert("You cannot decrease than 0");
        return;
    }
    count--;
    document.querySelector(".counterValue").innerHTML="Count = "+count;
    updateColor();
}

document.querySelector(".reset").addEventListener
("click",reset);

function reset()
{
    count =0;
    document.querySelector(".counterValue").
    innerHTML="Count = "+count;
    updateColor();
}

function updateColor() {
  let counter = document.querySelector(".counterValue");
  if (count > 0) 
    counter.style.color = "green";
  else 
    counter.style.color = "black";
}
