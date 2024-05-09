import React from 'react'

function Contentbox({image,title,desc}) {
  return (
    <div className=' mt-44 h-[500px] rounded-2xl w-full bg-gray-100 p-8'>
    <h1 className=' text-4xl text-orange-500 font-bold'>{title}

</h1>
<div className=' grid grid-cols-2 text-xl  font-thin p-5'>

<div>{desc}

</div>
<img  className=' h-full object-cover rounded-full shadow-xl -translate-y-10' src={image}/>
</div>

</div>
  )
}

export default Contentbox