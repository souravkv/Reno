export const Button =({label ,onClick})=>{

    return(<div className="py-6">
        <button onClick= {onClick} className="border p-2 rounded-lg w-full bg-cyan-950 text-white text-sm"> {label}</button>
    </div>)
}