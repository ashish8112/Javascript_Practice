  import {useState} from 'react';
  function Counter()
  {
    const[count,Counter]=useState(0);
    function increaseCounter()
    {
      Counter(count+1);
    }
    function decreaseCounter()
    {
      Counter(count-1);
    }

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increaseCounter}>Increase Count</button> 
        <br></br>
        <button onClick={decreaseCounter}>Decrease Count</button>
        <br></br>
        <button onClick={()=>Counter(0)}>Reset Count</button>
        {/* Note we cannot do onClick={Counter(count+1)} it is not HTML , it is jsx it will excute instantly and will cause infinite loop */}
        {/* Instead create arrow function  */}
        <br></br>
        <button onClick={function(){Counter(0)}}>Another reset Count with Traditional function</button>
      </div>
    )
  }

  export default Counter;