import React from 'react'
import Contentbox from './Contentbox'

function Mid() {
  return (
    <div className=' h-[200vh] w-screen bg-[url("https://images.unsplash.com/photo-1531318701087-32c11653dd77?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>

        <div className=' h-full p-20'>
           <Contentbox  image ="https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?q=80&w=3033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Upgrade your payment business" desc="Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud"/>
            <Contentbox  image="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Accept Payments" desc="With Domestic and International Credit & Debit cards, EMIs ( Credit/Debit Cards & Cardless), PayLater, Netbanking from 58 banks, UPI and 8 mobile wallets, Razorpay provides the most extensive set of payment methods." />
        </div>



    </div>
  

)
}

export default Mid