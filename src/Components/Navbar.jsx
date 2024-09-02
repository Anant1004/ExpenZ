import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-14 bg-slate-500 flex'>
            <ul className='flex w-2/4 items-center text-4xl pl-4 '>ExpenZ</ul>
            <ul className='flex w-2/4 text-2xl gap-5 justify-end items-center pr-7'>
                <li className='cursor-pointer md:flex hidden'>Home</li>
                <li className='cursor-pointer md:flex hidden'>About</li>
                <li className='cursor-pointer md:flex hidden'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
