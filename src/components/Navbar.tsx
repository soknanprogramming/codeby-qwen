import React from 'react'
import react_svg from '../assets/react.svg'
import ume_png from '../assets/ume.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <div className='bg-amber-300 flex py-0.5 mt-1 border-solid border-y-2 border-amber-200'>
            <div className='items-center flex mx-2'>
                <Link to="/"><img src={react_svg} className='animate-spin' alt="react" /></Link>
                <a href="http://"><img src={ume_png} className='size-10 animate-bounce' alt="ume" /></a>
            </div>
            <ul className='flex mx-4 items-center'>
                <Link to="/"><li className={addStyleToLink(location.pathname === "/")}>Home</li></Link>
                <Link to="about"><li className={addStyleToLink(location.pathname === "/about")}>About</li></Link>
                <Link to="add_item"><li className={addStyleToLink(location.pathname === "/add_item")}>Items</li></Link>
            </ul>
        </div>
    )
}

const addStyleToLink = (matchPath: boolean): string => {
    const moreStyle = "mr-0.5 p-3"
    if(matchPath) {
        return "bg-amber-500" + ` ${moreStyle}`
    } else {
        return "hover:bg-amber-600" + ` ${moreStyle}`
    }
}

export default Navbar