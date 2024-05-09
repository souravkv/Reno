export const AppBar = ()=>{

    return(<div className="flex justify-between py-3 bg-cover px-5 shadow bg-[url('https://images.unsplash.com/photo-1613857320417-2432a5be8ea7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" >

        <div className="font-thin text-[#ffffff] text-4xl flex flex-col justify-center   ">
        RENO !
        </div>
         
        <div className="flex ">
            <div className="p-3 text-white text-lg">
        hello , Sourav
        </div>
        <div className=" object-cover overflow-hidden rounded-full w-12 h-12  items-center justify-center flex  bg-slate-400 p-2 text-sm">
            <img className=" object-cover w-20 h-20"  src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        </div>
    
    
     </div>)
}