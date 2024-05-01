import React from 'react'
import Profile from './Profile'

const Navbar = () => {
  return (
   <>
   <div className='bg-blue-300 flex items-center justify-between px-6 py-2 drop-shadow-lg'>
    <h2 className='text-xl  text-black font-bold py-2'>Proscribe</h2>
    <Profile/>
   </div>
   </>
  )
}

export default Navbar