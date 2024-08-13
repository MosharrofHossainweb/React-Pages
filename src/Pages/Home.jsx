import React from 'react'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
   <>
            <Navbar/>
        <div className='w-full h-[500px] bg-slate-600 flex justify-center items-center'>
            <h1 className='text-7xl'>Home Page</h1>
        </div>
   </>
  )
}

export default Home