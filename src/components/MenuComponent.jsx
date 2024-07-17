import React from 'react'
import { NavLink } from 'react-router-dom'
import IconeAccount from '../icons/IconeAccount'

function MenuComponent() {
    return (
        <div className='grid grid-cols-12 items-center justify-around py-5 '>
        <div className=' flex col-start-1 col-end-4 justify-end'>
            <NavLink to='/'>
                <div className='flex'>
                    <img srcSet="./images/logo.png" alt="logo" className='w-[54.55px] h-[52]' />
                    <h1 className=' text-orange font-medium text-l'>
                        Minimal <span> </span> <span className=' text-pink'>shop</span>ping
                    </h1>
                </div>
            </NavLink>
        </div>
        <div className=' text-end'>
            <NavLink to='/categories' className={({ isPending, isActive }) =>
                isActive ? ' text-gray-900 font-bold m-1' : isPending ? ' text-gray-600 m-1' : ' text-gray-600 m-1'
            }>
                Categories
            </NavLink>
        </div>
        <div className=' text-center'>
            <NavLink to='/deals' className={({ isPending, isActive }) =>
                isActive ? ' text-gray-900 font-bold m-1' : isPending ? ' text-gray-600 m-1' : ' text-gray-600 m-1'
            }>
                Deals
            </NavLink>
        </div>
        <div className=' text-end'>
            <NavLink to='/what' className={({ isPending, isActive }) =>
                isActive ? ' text-gray-900 font-bold m-1' : isPending ? ' text-gray-600 m-1' : ' text-gray-600 m-1'
            }>
                What’s New
            </NavLink>
        </div>
        <div className=' text-end'>
            <NavLink to='/delivery' className={({ isPending, isActive }) =>
                isActive ? ' text-gray-900 font-bold m-1' : isPending ? ' text-gray-600 m-1' : ' text-gray-600 m-1'
            }>
                Delivery
            </NavLink>
        </div>
        <div className=' col-start-11 col-end-12 flex justify-end'>
            <NavLink to='/account' className={({ isPending, isActive }) =>
                isActive ? ' text-gray-900 font-bold m-1' : isPending ? ' text-gray-600 m-1' : ' text-gray-600 m-1'
            }>
                <div className='flex'>
                    <IconeAccount />
                    <span>Account</span>
                </div>
            </NavLink>
        </div>
        <div className='text-center'>
            <NavLink to='/cart' className={({ isPending, isActive }) =>
                isActive ? ' text-gray-900 font-bold m-1' : isPending ? ' text-gray-600 m-1' : ' text-gray-600 m-1'
            }>
                <span>cart</span>
            </NavLink>
        </div>
    </div>
    )
}

export default MenuComponent