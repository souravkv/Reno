import {Link} from 'react-router-dom'

export const BottomWarning = ({label,buttonText,to})=>{

    return(<div className="text-xs flex justify-center">
        <div>
        {label }
        </div>
        <Link className='underline px-1' to={to}>{buttonText}</Link>
    </div>)
}