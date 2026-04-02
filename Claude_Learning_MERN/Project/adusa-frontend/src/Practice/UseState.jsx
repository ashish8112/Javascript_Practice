import {useState} from 'react'
function UseStatePractice()
{
    const[count,setCount]=useState(0);//useState initialise count variable to 0 and setCount is setterFunction created by useState
   function handleClick(){
   // count = count+1;// unnecessary use setCount(count+1); and as well as if it is directly in component it will cause infinite loop
    setCount(count+1);//when we increase count value react use to render new value || It is used to re render 
   }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increase Count</button>
        </div>
    )
}
export default UseStatePractice;