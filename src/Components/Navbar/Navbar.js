import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/movix-logo.svg'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 absolute w-full">

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <div className='flex items-center gap-4'>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </button>
          </div>
          <div className="flex flex-1 justify-center sm:items-stretch items-center sm:justify-between" style={{alignItems:"center"}}>
            <Link to={'/'}>
            <div className="flex flex-shrink-0 items-center">
              <img className="w-40" src={logoImg} alt="Your Company"/>
            </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4">
                <Link to={'/explore/movies'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Movies</Link>
                <Link to={'/explore/tv'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">TV Shows</Link>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link to={'/explore/movies'} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Movies</Link>
          <Link to={'/explore/tv'} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">TV Shows</Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
