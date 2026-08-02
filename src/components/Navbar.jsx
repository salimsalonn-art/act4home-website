import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-900 p-4 shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo & Slogan Area */}
        <div className="flex items-center gap-4">
          {/* Notice the added 'font-heading' class here */}
          <Link to="/" className="font-heading text-2xl font-extrabold tracking-tight text-gray-900">
            ACT4<span className="text-blue-600">HOME</span>
          </Link>
          
          {/* Slogan - Automatically uses the new Inter font */}
          <span className="hidden lg:block text-sm text-gray-500 font-medium border-l border-gray-300 pl-4">
            Don't trust your home to a stranger. Hire a proven professional.
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/airbnb" className="text-gray-600 hover:text-blue-600 transition-colors">Airbnb Management</Link>
          <Link to="/contact" className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm">
            Get a Quote
          </Link>
        </div>
        
      </div>
    </nav>
  );
}