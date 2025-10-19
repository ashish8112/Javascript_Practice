// Js for Alert Message with input message

document.querySelector(".btnAlert").addEventListener("click",showAlert);

function showAlert()
{
    let message=document.querySelector(".input").value;
    console.log(message);
    if(message==="")
    {
        alert("No message to pop-up");
        return;
    }
   alert(message);
} 