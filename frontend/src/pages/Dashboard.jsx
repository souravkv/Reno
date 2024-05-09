import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { User } from "../components/User";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Topup from "../components/Topup";
import Header1 from "../components/Header1";
import Mid from "../components/Mid";
import Spin from "../components/Spin";
import Chat from "../components/Chat";

export const Dashboard = () => {
  const [one,setone]=useState(false);
  const [two,settwo]=useState(false);
  const [three,setthree]=useState(false);
  const [balance, setBalance] = useState(0); // Use a descriptive variable name
  const navigate = useNavigate();
  const [isTopupOpen, setIsTopupOpen] = useState(false); // Use a clear state variable name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/balance");
        setBalance(response.data);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="dashboard flex flex-col h-[350vh]  bg-white">
      <AppBar />
      <div className="  bg-zinc-800  p-5 rounded-lg flex  justify-between "> 
      
      <div onClick={()=>{setone(!one)}} className=" font-mono font-bold  hover:bg-orange-500  hover:text-white  border-r-2 px-20 bg-white p-2 rounded-lg text-black shadow-lg"> Check Balance</div>
      <div  onClick={()=>{settwo(!two)}} className="  font-mono font-bold hover:bg-orange-500  hover:text-white  border-r-2 px-20 bg-white p-2 rounded-lg text-black shadow-lg">Top-up</div>
      <div  onClick={()=>{setthree(!three)}} className=" font-mono font-bold hover:bg-orange-500  hover:text-white border-r-2 px-20 bg-white p-2 rounded-lg text-black shadow-lg">Search users</div>
       
        </div>

        {one?<div className=" flex justify-center "><Balance></Balance> </div> :null}
        {two?<Topup  oncl={()=>{settwo(!two)}}/> :null}
        {three?<User/> :null}



        
      {/* <main className="container mx-auto px-4 py-8 flex flex-col items-center space-y-8">
        <div className="flex justify-between items-center w-full">
          <Balance value={balance} className="text-3xl font-bold text-gray-800" />
          <button
            type="button"
            onClick={() => setIsTopupOpen(!isTopupOpen)}
            className="px-5 py-3 rounded-full bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Top Up
          </button>
        </div>
        <User />
      </main>
      {isTopupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">
          <Topup onClose={() => setIsTopupOpen(false)} />
          <button
            type="button"
            onClick={() => setIsTopupOpen(false)}
            className="absolute top-1/2 right-1/2 transform translate-x-[500%] -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )} */}

      <Header1/>
      <Mid/>
      <div className=" bg-black text-white  text-4xl p-10  pb-32 underline"> WIN MONEY BY LUCKY DRAW</div>
      <Spin/>
      <div className=" fixed bottom-0 right-0 m-5 ">

      <Chat/>
      </div>


    </div>
  );
};
