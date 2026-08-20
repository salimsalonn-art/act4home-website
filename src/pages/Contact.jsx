import React, { useEffect, useState } from 'react';

function Contact() {
  // State to manage the success message after form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // This hook runs once when the Contact page loads to handle scrolling
  useEffect(() => {
    const formElement = document.getElementById('quote-form');
    
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Handle form submission via Web3Forms
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        form.reset(); // Clear the form after success
      } else {
        console.error('Error submitting form', data);
        alert('There was a problem submitting your message. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12">
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
                <svg className="w-6 h-6 text-red-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg"> +44 20 3004 8983</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">info@act4home.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">London, UK.</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-10 md:p-12 relative">
            
            {/* Success Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-8 z-10 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors font-medium"
                >
                  Send another message
                </button>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="844c093f-97c0-4f05-b16c-890016c969d0" />
              
              {/* Subject line for the email */}
              <input type="hidden" name="subject" value="New Web Lead for Act 4 Home" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select 
                  id="service" 
                  name="service" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors bg-white"
                >
                  <option value="General Handyman Repair">General Handyman Repair</option>
                  <option value="Bespoke Carpentry">Bespoke Carpentry</option>
                  <option value="Airbnb Property Management">Airbnb Property Management</option>
                  <option value="Painting & Decorating">Painting & Decorating</option>
                  <option value="Other">Other / Request Quote</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Honeypot Spam Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button 
                type="submit" 
                className="w-full bg-red-700 text-white font-bold py-3 px-4 rounded-md hover:bg-red-800 transition-colors shadow-md text-lg"
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