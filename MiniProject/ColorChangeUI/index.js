document.querySelector(".ui").addEventListener("click",changeColor);
let flag=0;

function changeColor()
{
if(flag==0)
{
    let body=document.querySelector("body");
    body.style.backgroundColor="#A9A9A9";
    flag=1;
}
else{
   let body= document.querySelector("body")
   body.style.backgroundColor="white";
   flag=0;
}
}