import React, { useEffect } from 'react';

function Contact() {
  
  // This hook runs once when the Contact page loads
  useEffect(() => {
    const formElement = document.getElementById('quote-form');
    
    if (formElement) {
      // Smoothly scrolls to the top of the element
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12">
      {/* Added the ID here so it scrolls exactly to the top of the page content */}
      <div id="quote-form" className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Whether you need a quick repair, a bespoke carpentry project, or complete Airbnb management, Act 4 Home is ready to help.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* Left Side: Contact Information */}
          <div className="bg-slate-900 text-white p-10 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Information</h2>
            <p className="text-gray-300 mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg"> +44 20 3004 8983</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">info@act4home.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">London, UK.</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-10 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors bg-white"
                >
                  <option>General Handyman Repair</option>
                  <option>Bespoke Carpentry</option>
                  <option>Airbnb Property Management</option>
                  <option>Other / Request Quote</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors shadow-md text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;