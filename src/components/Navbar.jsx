import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import your logo image here. 
import logo from '../assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-gray-900 p-4 shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo & Slogan Area */}
        <div className="flex items-center gap-4">
          
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Act 4 Home Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </Link>
          
          {/* Slogan */}
          <span className="hidden lg:block text-sm text-gray-600 font-medium border-l border-gray-400 pl-4">
            Don't trust your home to a stranger. Hire a proven professional.
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="text-gray-700 hover:text-red-700 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-red-700 transition-colors">Services</Link>
          <Link to="/airbnb" className="text-gray-700 hover:text-red-700 transition-colors">Airbnb Management</Link>
          
          <a href="/#testimonials" className="text-gray-700 hover:text-red-700 transition-colors">Testimonials</a>
          
          <a href="tel:+442030048983" className="text-gray-900 hover:text-red-700 font-bold transition-colors pl-2 border-l border-gray-400">
            020 3004 8983
          </a>

          <Link to="/contact" className="px-5 py-2.5 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors shadow-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-red-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t border-gray-300 pt-4 px-2">
          
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