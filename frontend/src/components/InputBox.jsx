export function InputBox({title , inner , onChange,type}){

    return(<div className="text-left">
        <div className="py-2 text-sm">{title}

        </div>

       <input onChange={onChange}  type={type  }  className=" border-slate-300 border rounded p-1 text-sm w-full" placeholder={inner}></input>

    </div>)
} 