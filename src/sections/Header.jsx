import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import logo from '../assets/logo.jpeg'

const Header = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [

    {
      link: 'Home', path: 'hero'
    },
    {
      link: 'SADDOC', path: 'about'
    },
    {
      link: 'Serviços', path: 'working'
    },

    {
      link: 'Contato', path: 'contact'
    },


  ]

  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-3 sticky top-0 z-50 shadow-sm'>
      {/* Logo + SADDOC integrado */}
      <div className='flex items-center gap-3'>
        <img
          src={logo}
          alt="RSBarra Logo"
          className='h-12 md:h-14 w-auto object-contain'
        />
        <div className='border-l-2 border-gray-300 h-12 hidden md:block'></div>
        <div className='flex flex-col leading-tight'>
          <span className='text-[#1E88E5] font-bold text-lg md:text-xl tracking-wide'>SADDOC</span>
          <span className='text-gray-500 text-[10px] md:text-xs uppercase tracking-wider'>Sistema de Documentos</span>
        </div>
      </div>

      {/* Navegação Desktop */}
      <ul className='lg:flex justify-center items-center gap-2 hidden'>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className='text-gray-700 uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#1E88E5] hover:text-white transition-all duration-300 text-sm'
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Botão Login Desktop */}
      <button
        onClick={() => window.location.href = 'http://127.0.0.1:8000'}
        className='bg-[#1E88E5] hover:bg-[#1565C0] text-white px-8 py-2.5 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 cursor-pointer lg:flex hidden shadow-md hover:shadow-lg'
      >
        Login
      </button>

      {/* Mobile menu toggle */}
      <div className='flex justify-between items-center lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className='text-[#1E88E5] text-3xl cursor-pointer' />
          ) : (
            <FaBars className='text-[#1E88E5] text-3xl cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-white border-t-2 border-[#1E88E5] p-6 absolute top-[68px] left-0 shadow-lg`}
        onClick={closeMenu}
      >
        <ul className='flex flex-col justify-center items-center gap-3 w-full'>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className='text-gray-700 uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#1E88E5] hover:text-white w-full text-center transition-all duration-300'
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
          <button
            onClick={() => window.location.href = 'http://127.0.0.1:8000'}
            className='bg-[#1E88E5] hover:bg-[#1565C0] text-white px-8 py-3 rounded-lg font-semibold w-full mt-2 transition-all duration-300'
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Header