import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header1() {
    const nav =useNavigate()
  return (
    <div>
       
        <div className='  h-[80vh]  bg-cover r bg-[url("https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <div className=' pt-40 px-10  text-white font-bold text-8xl z-1 '>

            Your All in ONE 
            </div>
            <div className=' flex justify-between'>

                <div className='  text-white font-bold text-8xl z-1 '>

            Shopping Solution
             </div>
             <div className=' flex mr-6'> 
                <div  onClick={()=>{nav('/signin')}}  className='m-4 hover:bg-zinc-600 text-white  w-32 items-center flex flex-col justify-center p-3  text-center rounded-lg bg bg-zinc-800'>LOGOUT</div>
                <div  onClick={()=>{nav('/signup')}}   className='m-4  hover:bg-zinc-600 text-white w-32 items-center  p-3 text-center  justify-center  flex flex-col rounded-lg bg bg-zinc-800'>REGISTER</div>
             </div>
            </div>

            <div className='pt-5 px-20  text-orange-200 text-md'>
                We present you advanced Payment methods from the future..
            </div>


        </div>
    </div>
  )
}

export default Header1