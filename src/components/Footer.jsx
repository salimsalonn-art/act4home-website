import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0F1626] text-white pt-16 pb-8 border-t-4 border-blue-600">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Act 4 Home
          </h3>
          <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Premium craftsmanship, reliable repairs, and comprehensive property management tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Quick Links
          </h4>
          <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white hover:underline transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-white hover:underline transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white hover:underline transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get In Touch
          </h4>
          <ul className="space-y-3 text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            <li className="flex items-start gap-2">
              <span className="mt-1">📍</span> 
              <span>8E Chiswick High Rd., Chiswick,<br/>London W4 1TH, UK</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +44 20 3004 8983
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> info@act4home.com {/* Don't forget to update this if you have a business email! */}
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
        <p>&copy; {new Date().getFullYear()} Act 4 Home. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Licensed & Insured</p>
      </div>
    </footer>
  );
}