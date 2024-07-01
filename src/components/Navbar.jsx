import React from 'react';
import menu from '/images/menu.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className='sm:block hidden shadow-sm shadow-current py-2 px-4'>
                <ul className='flex flex-row gap-4 font-bold text-lg justify-center items-center'>
                    {/* Home */}
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 border-b-2 border-b-blue-600" : ""
                        }>Home
                    </NavLink>

                    {/* News */}
                    <details className='relative cursor-pointer'>
                        <summary className='list-none'>News</summary>
                        <div className='absolute border w-max px-2 py-1 mt-2 bg-white text-black'>
                            <li>Latest News</li>
                            <li>Tranding News</li>
                            <details className='relative'>
                                <summary className='list-none'>Categories</summary>
                                <div className='absolute border w-max px-2 py-1 left-full ml-2 bg-white'>
                                    <li>Technology</li>
                                    <li>Entertainment</li>
                                    <li>Sports</li>
                                </div>
                            </details>
                        </div>
                    </details>

                    {/* Contact */}
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 border-b-2 border-b-blue-600" : ""
                        }>Contact
                    </NavLink>

                    {/* Login */}
                    <NavLink
                        to='/auth'
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 border-b-2 border-b-blue-600" : ""
                        }>Login
                    </NavLink>
                </ul>
            </div>

            <div className='block sm:hidden py-2 px-4'>
                <details className='cursor-pointer'>
                    <summary className='list-none'><img src={menu} alt="menu" /></summary>
                    <ul className='bg-white text-black w-full mt-2 py-1 px-2'>
                        {/* Home */}
                        <li><NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 border-b-2 border-b-blue-600" : ""
                            }>Home
                        </NavLink>
                        </li>

                        {/* News */}
                        <details className='cursor-pointer'>
                            <summary className='list-none'>News</summary>
                            <div className='border w-max px-2 py-1 mt-2 bg-white text-black'>
                                <li>Latest News</li>
                                <li>Tranding News</li>
                                <details>
                                    <summary>Categories</summary>
                                    <div className='border w-max px-2 py-1 mt-2 bg-white text-black'>
                                        <li>Technology</li>
                                        <li>Entertainment</li>
                                        <li>Sports</li>
                                    </div>
                                </details>
                            </div>
                        </details>

                        {/* Contact */}
                        <li><NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 border-b-2 border-b-blue-600" : ""
                            }>Contact
                        </NavLink>
                        </li>
                        
                        {/* Login */}
                        <li><NavLink
                            to='/auth'
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 border-b-2 border-b-blue-600" : ""
                            }>Login
                        </NavLink>
                        </li>
                    </ul>
                </details>
            </div>
        </div>
    )
}

export default Navbar