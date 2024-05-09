import { Link } from "react-router-dom"

export const Done = ()=>{


    return(<div className="flex justify-center h-screen">

        <div className="flex flex-col justify-center">
            <div className="rounded-lg flex justify-center shadow-lg bg-slate-100 w-96 h-96">
            <div className=" text-2xl flex flex-col justify-center text-green-500 ">
                <div className="py-24">Transaction Successfull !!</div>
                <Link  to="/dashboard"  className="  py-5 flex justify-end text-sm  text-slate-600  underline">Goto Dashboard</Link>
                </div>

            </div>

        </div>
        
    </div>)
}