// function ProfileCard({name,branch,bio})
// {
//     return(
//       <div>
//         <h2>{name}</h2>
//         <p>Branch: {branch}</p>
//         <p>Bio: {bio}</p>
//         <SkillBadge skill={"NodeJs"}/>
//         <SkillBadge skill={"MongoDB"}/>
//         <SkillBadge skill={"ExpressJs"}/>
//       </div>
//     );
// }

// function WelcomeBanner({collegeName,tagline})
// {
//   return(
//     <div>
//       <h2>Welcome in {collegeName}</h2>
//       <h3>Tagline : {tagline}</h3>
//     </div>
//   )
// }
// function SkillBadge({skill}){
//   return(
//     <>
//       <pre>['{skill}']</pre>
//     </>
//   )
// }

// function App()  //or write here export default app
// {
//   return(
//     <div>
//       <WelcomeBanner collegeName="Kristu Jayanti University" tagline={"Where Coders Meet"} /> 
//       <ProfileCard name="Ashu" branch="CSE" bio="I love Coding" />
//       <ProfileCard name ="Rahul" branch="ECE" bio="I love businnes"/>
//       <ProfileCard name ="Vikas" branch="CSE" bio="I love gym"/>
//     </div>
//   )
// }
 

//Note in props we use {} to send object or array or number for string we can use directly ""
//for object -> {{key:value}} outside specify sending other than string inside object is written

 // Tumne likha:
// skill={"NodeJs"}   // kaam karta hai but unnecessary

 // Sahi:
// skill="NodeJs"     // string = seedha quotes ✅




                                            //Day 2. Use State
// import {useState} from 'react'
// function App()
// {
//     const[count,setCount]=useState(0);//useState initialise count variable to 0 and setCount is setterFunction created by useState
//    function handleClick(){
//    // count = count+1;// unnecessary use setCount(count+1); and as well as if it is directly in component it will cause infinite loop
//     setCount(count+1);//when we increase count value react use to render new value || It is used to re render 
//    }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick}>Increase Count</button>
//         </div>
//     )
// }
// export default App;


// import {useState} from 'react';
// function App()
// {
//   const[isLoggedIn,setIsLoggedIn]=useState(false);
//   return(
//     <div>
//       {isLoggedIn?<h1>Welcome to Adusa</h1>:<h1>Please Login</h1>}
//       {isLoggedIn && <h1>Welcome Ashu </h1>}
//        {/* <button onClick={function run(){return setIsLoggedIn(true)}}>Login</button>//verbose use arrow function for modern industry level  */}
//       {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
//     </div>
//   )
// }


  // import { useState } from "react";
  // function App()
  // {
  //   const students= ["Ashish","Rahul","Manish","Deep"];
  //   return(
  //     <div>
  //      {students.map((student,index)=> { return <div key ={index}>{student}</div>  }
  //          //automatic return becuase of arrow function ()=>"ashish" but when you use ()=>{return ashish} need return for curly
  //      )}
  //     </div>
  //   )
  // }


  // import {useState} from 'react';
  // function App()
  // {
  //   const[count,Counter]=useState(0);
  //   function increaseCounter()
  //   {
  //     Counter(count+1);
  //   }
  //   function decreaseCounter()
  //   {
  //     Counter(count-1);
  //   }

  //   return (
  //     <div>
  //       <h1>{count}</h1>
  //       <button onClick={increaseCounter}>Increase Count</button> 
  //       <br></br>
  //       <button onClick={decreaseCounter}>Decrease Count</button>
  //       <br></br>
  //       <button onClick={()=>Counter(0)}>Reset Count</button>
  //       {/* Note we cannot do onClick={Counter(count+1)} it is not HTML , it is jsx it will excute instantly and will cause infinite loop */}
  //       {/* Instead create arrow function  */}
  //       <br></br>
  //       <button onClick={function(){Counter(0)}}>Another reset Count with Traditional function</button>
  //     </div>
  //   )
  // }

function App()
{
  const students=[
    {_id:"1",name:"Ashish",branch:"MCA"},
    {_id:"2",name:"Riya",branch:"CSE"},
    {_id:"3",name:"Rahul",branch:"ECE"}
  ];

  return(
    <div>
      {
        students.map((student)=>(
          <div key={student._id}>
          <h2>{student.name}</h2>
          <p>{student.branch}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App;