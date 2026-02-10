import React, { useState, useEffect, useRef } from 'react'
import react_svg from '../assets/react.svg'
import ume_png from '../assets/ume.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
    const [showMore, setShowMore] = useState<boolean>(false)
    const showMoreRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (showMoreRef.current && !showMoreRef.current.contains(e.target as Node)) {
                setShowMore(false);
            }
        }

        if (showMore) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [showMore])


    const location = useLocation()
    console.log(location.pathname);
    return (
        <div className='bg-amber-300 flex justify-between py-0.5 mt-1 border-solid border-y-2 border-amber-200'>
            <div className='flex ml-3'>
                <div className='items-center flex mx-2'>
                    <Link to="/"><img src={react_svg} className='animate-spin' alt="react" /></Link>
                    <a href="http://"><img src={ume_png} className='size-10 animate-bounce' alt="ume" /></a>
                </div>
                <ul className='flex mx-4 items-center'>
                    <Link to="/"><li className={addStyleToLink(location.pathname === "/")}>Home</li></Link>
                    <Link to="about"><li className={addStyleToLink(location.pathname === "/about")}>About</li></Link>
                    <Link to="add_item"><li className={addStyleToLink((location.pathname === "/add_item") || (location.pathname === "/view_item"))}>Items</li></Link>
                </ul>
            </div>
            <div className='mr-30 items-center flex h-full'>
                <div className='h-full relative'>
                    <button onClick={() => setShowMore(!showMore)} className='bg-amber-600 h-full px-10'>More</button>
                    <div ref={showMoreRef} className={(showMore ? 'flex' : 'hidden') + ' absolute bg-blue-400 mt-0.5 w-50 left-0'}>
                        Hello b
                        Hello b
                        Hello b
                        Hello b
                        Hello b
                        Hello b
                    </div>
                </div>
            </div>
        </div>
    )
}

const addStyleToLink = (matchPath: boolean): string => {
    const moreStyle = "mr-0.5 p-3"
    if(matchPath) {
        return "bg-amber-500 hover:cursor-default" + ` ${moreStyle}`
    } else {
        return "hover:bg-amber-600" + ` ${moreStyle}`
    }
}

export default Navbar