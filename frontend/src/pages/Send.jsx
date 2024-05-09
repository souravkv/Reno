import { useNavigate, useSearchParams} from "react-router-dom";
import {useState } from "react"
import axios from "axios"

export function Send(){

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const name= searchParams.get("name")
    const id= searchParams.get("id")
    

const [amount,setAmount] = useState(0)

    return <div className="flex   bg-cover  justify-center h-screen bg-[url('https://images.unsplash.com/photo-1613857320417-2432a5be8ea7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex flex-col justify-center ">
            <div className="flex justify-between">
             <div className="p-6 bg-white shadow-lg rounded-lg w-96 h-96 flex flex-col justify-between " >
                <div >
                    
                     <h2 className="text-4xl font-extrabold text-center">Send Money</h2>
                </div>
                <div >
                    <div className="flex px-2 items-center space-x-3 ">
                    <div className="rounded-full w-11 h-11  flex  items-center justify-center text-lg    bg-green-400 text-white">{name[0].toUpperCase()}</div>
                   <div className="py-3 text-2xl">{name}</div>
                    </div>
                   <div className="py-3">Amount (in Rs)</div>
                   
                   <input type="number" onChange={(e)=>{setAmount(e.target.valueAsNumber)}} className="border border-slate-200  text-medium  w-full rounded p-1" placeholder="Enter amount"></input>
                 <div className="py-3 w-full">
                  
                    <button  onClick={()=>{
                        
                        axios.post("http://localhost:3000/api/v1/account/transfer",{ to:id,
                        amount:amount
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    })
                    .then(response=>{response.send("rrrrrrrrr")})
                
                    navigate('/done')}

                    ///my extra code
                  

                    
                } className="border   p-2 text-center w-full bg-green-500 text-white"> Initiate Transfer</button></div> 
               
                </div>
               {/*to add on axiospost {
                        headers:{
                            Authorization:"Bearer "+ localStorage.getItem("token")
                        }
                    }
            */}
             </div> 
             </div>
             
             </div>
      
    </div>
}