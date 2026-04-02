import {useState} from 'react';
function studentList()
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

export default studentList;