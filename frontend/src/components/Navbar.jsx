import React,{useState} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'

// Navbar Component with Mobile Menu
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 sticky top-0 z-50 shadow-lg' id='navbar'>
      <div className='container py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
          Liyakhat Yusuf Raza
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-8'>
          <a href="#home" className='hover:text-green-400 transition-colors duration-300'>Home</a>
          <a href="#about" className='hover:text-green-400 transition-colors duration-300'>About Me</a>
          <a href="#service" className='hover:text-green-400 transition-colors duration-300'>Services</a>
          <a href="#project" className='hover:text-green-400 transition-colors duration-300'>Projects</a>
          <a href="#contact" className='hover:text-green-400 transition-colors duration-300'>Contact</a>
        </div>

        {/* Desktop CTA Button */}
        <a href="#contact" className='hidden md:block'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-6 py-2 rounded-full font-semibold'>
            Connect With Me
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-gray-900 py-4'>
          <div className='flex flex-col space-y-4 px-4'>
            <a href="#home" className='hover:text-green-400 transition-colors duration-300 py-2' onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className='hover:text-green-400 transition-colors duration-300 py-2' onClick={() => setIsOpen(false)}>About Me</a>
            <a href="#service" className='hover:text-green-400 transition-colors duration-300 py-2' onClick={() => setIsOpen(false)}>Services</a>
            <a href="#project" className='hover:text-green-400 transition-colors duration-300 py-2' onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className='hover:text-green-400 transition-colors duration-300 py-2' onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white w-full py-3 rounded-full font-semibold mt-4'>
                Connect With Me
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar
