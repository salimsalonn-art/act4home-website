import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your background and service images here
import backgroundImg from '../assets/background.png';
import homeImg from '../assets/home.jpg';
import home1Img from '../assets/home1.jpg';
import home2Img from '../assets/home2.jpg';
import home3Img from '../assets/home3.jpg';
import home4Img from '../assets/home4.jpg'; 
import home5Img from '../assets/home5.jpg'; 
// Add your new Painting image here:
// import home6Img from '../assets/home6.jpg'; 

// Import your product/brand images here
import brand1Img from '../assets/brand1.png';
import brand2Img from '../assets/brand2.png';
import brand3Img from '../assets/brand3.png';
import brand4Img from '../assets/brand4.png';
import brand5Img from '../assets/brand5.png';

export default function Home() {
  
  const featuredServices = [
    { title: "Painting & Decorating", image: home4Img }, // Update with home6Img when ready
    { title: "Bespoke Kitchens", image: homeImg },
    { title: "Bathroom Upgrades", image: home1Img },
    { title: "Custom Carpentry", image: home2Img },
    { title: "Airbnb Management", image: home3Img },
    { title: "General Handyman", image: home4Img },
    { title: "Flooring & Decking", image: home5Img }
  ];

  const productBrands = [
    { name: "Brand 1", image: brand1Img },
    { name: "Brand 2", image: brand2Img },
    { name: "Brand 3", image: brand3Img },
    { name: "Brand 4", image: brand4Img },
    { name: "Brand 5", image: brand5Img },
  ];

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://widget.tagembed.com/embed.min.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://widget.tagembed.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      
      {/* 24/7 Emergency Banner */}
      <div className="bg-red-700 text-white font-bold text-center py-2 px-4 shadow-md z-20 relative">
        <p className="animate-pulse">🚨 24/7 Emergency Call-Outs Serving West London 🚨</p>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-gray-900 border-b border-gray-100 flex flex-col md:block">
        
        {/* MOBILE VIEW */}
        <div className="block md:hidden w-full overflow-hidden relative">
          <img 
            src={backgroundImg} 
            alt="Act 4 Home Services" 
            className="w-full h-auto object-contain scale-110 origin-center"
          />
        </div>

        {/* DESKTOP VIEW */}
        <div 
          className="hidden md:flex absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat items-start justify-center pt-24"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
        </div>

        {/* BUTTONS */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 md:min-h-[500px] lg:h-[75vh] flex flex-col justify-end md:pb-12">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:self-end">
            <Link to="/contact" className="px-8 py-4 sm:py-3 bg-red-700 text-white font-bold text-center rounded-md hover:bg-red-800 transition-colors text-lg shadow-lg">
              Get a Free Quote
            </Link>
            <Link to="/services" className="px-8 py-4 sm:py-3 bg-white text-red-700 font-bold text-center rounded-md hover:bg-gray-50 transition-colors text-lg shadow-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Section - MOVED TO THE VERY TOP */}
      <section id="testimonials" className="py-20 bg-gray-50 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Trusted by Homeowners
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto rounded-full mb-12"></div>
          
          <div 
            className="tagembed-widget" 
            style={{ width: '100%', height: '100%', overflow: 'auto' }} 
            data-widget-id="331406" 
            data-website="1"
          ></div>
          
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-lg transition-shadow">
                <div 
                  className="h-56 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})`, backgroundColor: '#e2e8f0' }}
                ></div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.title}
                  </h3>
                  <div className="mt-auto flex justify-center">
                    <Link 
                      to="/contact" 
                      className="px-6 py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition-colors w-full text-center"
                    >
                      Book this Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="text-red-700 font-bold hover:underline text-lg">
              View all our services &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Infinite Scrolling Product Marquee */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Premium Materials We Trust
          </h2>
          <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            We only use industry-leading products to ensure lasting quality.
          </p>
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
            .group:hover .animate-scroll {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="relative w-full flex overflow-hidden group">
          <div className="flex w-max animate-scroll gap-12 items-center px-6">
            {[...productBrands, ...productBrands].map((brand, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 flex-none w-32 md:w-48 p-4"
              >
                <div className="h-24 w-full bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-2">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}