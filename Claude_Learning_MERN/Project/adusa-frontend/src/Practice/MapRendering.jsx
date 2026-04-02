  import { useState } from "react";
  function MapRendering()
  {
    const students= ["Ashish","Rahul","Manish","Deep"];
    return(
      <div>
       {students.map((student,index)=> { return <div key ={index}>{student}</div>  }
           //automatic return becuase of arrow function ()=>"ashish" but when you use ()=>{return ashish} need return for curly
       )}
      </div>
    )
  }

  export default MapRendering;