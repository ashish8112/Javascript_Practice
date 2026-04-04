import { useState } from "react";

function StudentList({name,branch})
{
    const [isFriend,setFriend]=useState(false);
return (
    <div>
        <span>Name {name}, branch {branch} </span>
        {isFriend?<button> Friend Added</button>:<button onClick={()=>setFriend(true)}>Add Friend</button>}
    </div>
)
}

export default StudentList