import { useEffect, useState } from "react";
import axios from "axios";

export const Balance = ({ value }) => {
  const [Bal, setBal] = useState(2);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            authorization: localStorage.getItem("token")
          }
        });
        setBal(response.data.balance);
        console.log(response.data.balance);
        console.log("Balance fetched successfully");
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []); 

  return (
    <div className="text-lg   bg-cover bg-slate-500 w-screen justify-center flex bg-[url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="font-bold  text-2xl text-white py-3 px-4">
        {` Balance :  Rs ${parseInt(Bal)}  `} 
      </div>
      <div className="font-thin py-3">
        <div>Transaction History</div>
      </div>
    </div>
  );
};
