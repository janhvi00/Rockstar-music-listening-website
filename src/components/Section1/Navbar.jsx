import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-2 lg:px-20 pt-6 pb-2 gap-2'>
        <h4 className = "font-semibold bg-black text-white px-4 py-2 uppercase rounded-full">Rockstar's Universe</h4>
        <button className = "font-semibold text-white bg-black px-4 py-2 rounded-full uppercase tracking-widest text-sm">Beyond the canvas</button>
    </div>
  )
}

export default Navbar