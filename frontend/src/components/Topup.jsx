import axios from 'axios'
import React from 'react'

function Topup({oncl}) {
  return (
    <div className="  fixed absolute top-0  bg-opacity-80  h-screen w-screen bg-black flex flex-col items-center justify-center"> 
    <div className=" h-[300px] w-[300px] bg-cover bg-[url('https://images.unsplash.com/photo-1613857320417-2432a5be8ea7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-lg  justify-center  p-3 uppercase   "> 
    <div className=" h-1/4 items-center text-4xl uppercase text-white justify-center flex">Top-Up</div>
    <div  className="  h-3/4 ">
       <div className=" flex text-orange-100 p-3 font-bold justify-center">select amount</div>
       <div className="   ">

       <div onClick={async()=>{ const res = await axios.put("http://localhost:3000/api/v1/account/topup", {
topup:"100"


},{
headers:{
  Authorization:localStorage.getItem("token")
}
} )}}  className="  focus:bg-black rounded-xl mt-3  select-none items-center flex justify-center  hover:bg-slate-300 hover:text-black  bg-slate-600 p-2 text-white">100</div>
    <div    onClick={async()=>{ const res = await axios.put("http://localhost:3000/api/v1/account/topup", {
topup:"50"


},{
headers:{
  Authorization:localStorage.getItem("token")
}
} )}}  className="  focus:bg-black focus:text-white  select-none  rounded-xl mt-3 bg-slate-600  flex justify-center hover:bg-slate-300 p-2 hover:text-black  text-white"> 50</div> </div>
   
       </div>
    {/* <div className=" absolute left-1/2 top-1/2 flex   translate-x-[-50%] w-[300px p=22]">
    <div className=" p-4 bg-slate-600 text-white">100</div>
    <div className=" p-4 bg-slate-600 text-white"> 50</div>
    </div> */}
   
    </div>
    <div  onClick={oncl} className=' select-none   p-2 hover:bg-slate-200 rounded-full w-8 h-8 bg-white absolute left-[61%] top-[30%]'></div>
</div>
  )
}

export default Topup