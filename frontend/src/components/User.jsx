
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from "axios"
export const User = ()=>{
    const navigate= useNavigate();

    const [users,setUsers ] = useState([]);
    const [filter,setFilter] = useState("");


    useEffect(()=>{
       axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
        .then(response=>{
                setUsers(response.data.user);
        })
    },[filter])
    return(<div className=' bg-cover  bg-[url("https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>

        <div className="py-3 font-mono   font-bold ">Users</div>
        <input onChange={e=>{setFilter(e.target.value)}} placeholder="Search Users....." className="border border-slate-300 text-xs p-2 w-full font-mono rounded"></input>
      <div>
     
      {users.map(user=> [<User user={user}/>]  )}
      
      </div>
    </div>)


function User({user}){

    return(<div>

<div className="py-2 p-4 flex justify-between ">

<div className="flex ">
    <div className="flex justify-center">
<div className="rounded-full w-10 h-10 bg-slate-400 text-sm  flex flex-col justify-center text-center ">
{user.firstName[[0]]}
</div>
</div>
<div className="px-5 flex flex-col justify-center">{user.firstName} {user.lastName}</div>
</div>
<div className=" flex flex-col justify-center">
<button  onClick={()=>{navigate("/send?id="+user._id+"&name="+user.firstName)}} className="border bg-slate-900 rounded-lg text-white text-xs py-2 px-4 font-medium">Send Money</button>
</div>



</div>
        
    </div>)
}




}