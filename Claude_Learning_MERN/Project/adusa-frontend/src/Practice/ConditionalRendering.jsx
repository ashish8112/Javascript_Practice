import {useState} from 'react';
function ConditionalRendering()
{
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return(
    <div>
      {isLoggedIn?<h1>Welcome to Adusa</h1>:<h1>Please Login</h1>}
      {isLoggedIn && <h1>Welcome Ashu </h1>}
       {/* <button onClick={function run(){return setIsLoggedIn(true)}}>Login</button>//verbose use arrow function for modern industry level  */}
      {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
  )
}

export default ConditionalRenderingonditionalRendering;