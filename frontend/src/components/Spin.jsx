import React from 'react'
import  { useState } from 'react';
import axios from 'axios';

function Spin() {
 


  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spinWheel = async() => {
    if (!spinning) {
      setSpinning(true);
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 11);
        setResult(randomNumber);
        setSpinning(false);
      }, 3000); 
    }
     await axios.put("http://localhost:3000/api/v1/account/topup", {
topup:result*50


},{
headers:{
  Authorization:localStorage.getItem("token")
}
} ) 

    
  };
  

  return (
    <div className=" bg-black text-center  pb-32">
        <div></div>
        
      <div className={`w-50 h-200 border-2 border-gray rounded-full relative ${spinning ? 'animate-spin' : ''}`}>
       
        {[...Array(11).keys()].map(number => (
          <div key={number} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
            {number}
          </div>
        ))}
      </div>
      <button onClick={spinWheel} disabled={spinning} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
      {result !== null && <p className=" text-white mt-4">Congrats you won : Rs {result*50}/-</p>


      


      }
   


    </div>
  );
};



 

export default Spin