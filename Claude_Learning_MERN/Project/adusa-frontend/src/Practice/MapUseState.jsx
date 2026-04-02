import { useState } from "react";
function MapUse()
{
const [todos,setTodos]=useState([
  {title:"DSA Practice",done:true},
  {title:"MERN SESSION ",done:false}
])
return (
  <div>
    {todos.map((todo) =>
      (   
      <div key ={todo.title}>
        <h2>{todo.title}</h2>
        {todo.done?<h3>Done!</h3>:<h3>Pending!</h3>}
      </div>)
    )}
  </div>
)
}
export default MapUse;