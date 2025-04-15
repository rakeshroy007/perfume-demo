import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Calltoaction from './Calltoaction'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!setIsVisible) return null
  return (


    <div className='fixed top-0 w-full bg-white/60 backdrop-blur-md z-50 border-b'>

      <Calltoaction />

      <nav className="p-2 text-black flex flex-col items-center shadow-lg ">
        {/* Brand Name */}
        <div className='pb-1 flex items-center justify-between w-full'>

          {/* Center - Brand Name */}
          <div >
            <Link to="/" className="text-2xl font-bold tracking-widest">
              Perfume Luxe
            </Link>
          </div>

            {/* Navigation Links */}
          <div>
            <ul className="hidden md:flex gap-4">
              <li><Link to="/" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-300 tracking-wider font-serif transition">Home</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-300 tracking-wider font-serif transition">Shop</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-300 tracking-wider font-serif transition">About</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-300 tracking-wider font-serif transition">Contact</Link></li>
            </ul>
          </div>

          {/* Right Side - Login & Register */}
          <div className="flex justify-end items-cneter mt-1 gap-4">
            <span >
              <Link
                to="/"
                className="flex items-center bg-blue-200 rounded-lg px-4 py-2 transition hover:bg-blue-300 active:bg-transparent active:border active:border-black focus:outline-none"
              >
                <button className='flex items-center'>
                  <img
                    src="/account-icon.svg"
                    alt="Account"
                    className="w-6 h-6 mx-2 cursor-pointer"
                  />
                  <span className="text-black hidden md:inline tracking-widest font-serif">Sign In / Register</span>
                </button>
              </Link>

            </span>
          </div>

        </div>

        <div className="h-[1px] w-full bg-slate-300 my-2" />

      </nav>
    </div>
  )
}

export default Navbar
