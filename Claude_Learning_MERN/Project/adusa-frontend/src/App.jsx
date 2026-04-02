import StudentList from "./StudentList";
import { useState } from "react";
function App()
{
  const [students,setStudents]=useState([{name:"Ashish",branch:"MCA"},{name:"Rahul",branch:"ECE"},{name:"Claude",branch:"All Rounder"}])
  return (
    <div>
      {
        students.map((student)=>(
          <div key={student.name}>
          <StudentList name = {student.name} branch={student.branch}/>
          </div>
        ))
      }
    </div>
  
  )
}
export default App;