import React from 'react'
import { Link } from 'react-router-dom'
import IconePhone from "../icons/IconePhone"

function SalesComponent() {
    return (
        
        <div className='text-white bg-orange w-full max-w-[1920px] h-[60px] grid grid-cols-4 items-center'>
            <div className=' ml-[20px]'>
            <Link to='/support' className='flex hover:font-bold' >
                <IconePhone/>
                +91 (720) 090 1896
            </Link>
            </div>
            <div className=' grid col-start-2 col-end-4'>
                <div className='flex justify-center'>
                <Link to='/slases' className=' hover:font-bold' >
                    Get 50% Off on Selected Items 
                </Link>
                <span className=' mx-3'>
                    |
                </span>
                <Link to='shopping' className=' hover:font-bold'>
                    Shop Now
                </Link>
                </div>
            </div>
        </div>
    )
}

export default SalesComponent