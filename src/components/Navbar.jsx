import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import your logo image here. 
import logo from '../assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200">
      
      {/* TOP ROW: Logo and Mobile Menu Toggle */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-2 px-4">
        
        {/* 1. LEFT: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={logo} 
              alt="Act 4 Home Logo" 
              className="h-12 md:h-16 lg:h-20 w-auto object-contain" 
            />
          </Link>
        </div>
        
        {/* 2. CENTER: Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-none items-center space-x-6 xl:space-x-8 font-medium whitespace-nowrap text-sm xl:text-base">
          <Link to="/" className="text-gray-700 hover:text-red-700 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-red-700 transition-colors">Services</Link>
          <Link to="/airbnb" className="text-gray-700 hover:text-red-700 transition-colors">Airbnb Management</Link>
          <a href="/#testimonials" className="text-gray-700 hover:text-red-700 transition-colors">Testimonials</a>
        </div>

        {/* 3. RIGHT: Phone & Quote Button (Hidden on Mobile) */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:flex items-center space-x-6 font-medium whitespace-nowrap shrink-0 text-sm xl:text-base">
            <a href="tel:+442030048983" className="text-gray-900 hover:text-red-700 font-bold transition-colors">
              020 3004 8983
            </a>
            <Link to="/contact" className="px-5 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors shadow-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-red-700" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* BOTTOM ROW: Centered Slogan */}
      <div className="w-full text-center pb-3 px-4 -mt-1">
        <span 
          className="block lg:inline text-red-700 text-sm sm:text-base md:text-lg xl:text-xl font-sans font-medium tracking-wide lg:font-['Caveat',_cursive] lg:font-normal lg:tracking-normal"
        >
          Don't trust your home to a stranger. <br />
          Hire a proven professional.
        </span>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 pb-4 border-t border-gray-300 pt-4 px-4 bg-gray-100">
          <Link to="/" className="block text-gray-700 hover:text-red-700 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block text-gray-700 hover:text-red-700 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/airbnb" className="block text-gray-700 hover:text-red-700 font-medium" onClick={() => setIsOpen(false)}>Airbnb Management</Link>
          <a href="/#testimonials" className="block text-gray-700 hover:text-red-700 font-medium" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="tel:+442030048983" className="block text-gray-900 font-bold py-2">Call: 020 3004 8983</a>
          <Link to="/contact" className="inline-block text-center w-full px-5 py-2.5 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors shadow-sm" onClick={() => setIsOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}