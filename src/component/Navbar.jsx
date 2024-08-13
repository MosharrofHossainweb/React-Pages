import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='py-[10px] bg-blue-500 flex justify-center px-5'>
      <ul className='flex gap-[20px] '>
        <li className='hover:bg-slate-500 text-blue-800 rounded-md px-[5px] transition-all' ><Link className='text-xl px-[10px] text-yellow-300 font-semibold hover:text-blue-950 transition-all' to="/">Home</Link></li>
        <li className='hover:bg-slate-500 text-blue-800 rounded-md px-[5px] transition-all' ><Link className='text-xl px-[10px] text-yellow-300 font-semibold hover:text-blue-950 transition-all' to="/About">About</Link></li>
        <li className='hover:bg-slate-500 text-blue-800 rounded-md px-[5px] transition-all' ><Link className='text-xl px-[10px] text-yellow-300 font-semibold hover:text-blue-950 transition-all' to="/Blog">Blog</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar