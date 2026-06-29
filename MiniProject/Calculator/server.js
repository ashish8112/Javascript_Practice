const display=document.querySelector("input")

function displayClear(){
    display.value=""
}

function appendToDisplay(input){
display.value+=input;
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(err){
        display.value="Error"
    }
}

