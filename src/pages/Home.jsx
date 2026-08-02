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

// Import your product/brand images here
import brand1Img from '../assets/brand1.png';
import brand2Img from '../assets/brand2.png';
import brand3Img from '../assets/brand3.png';
import brand4Img from '../assets/brand4.png';
import brand5Img from '../assets/brand5.png';

export default function Home() {
  
  // 1. Define your services here
  const featuredServices = [
    { title: "Bespoke Kitchens", image: homeImg },
    { title: "Bathroom Upgrades", image: home1Img },
    { title: "Custom Carpentry", image: home2Img },
    { title: "Airbnb Management", image: home3Img },
    { title: "General Handyman", image: home4Img },
    { title: "Flooring & Decking", image: home5Img }
  ];

  // 2. Define the product brands for the scrolling marquee
  const productBrands = [
    { name: "Brand 1", image: brand1Img },
    { name: "Brand 2", image: brand2Img },
    { name: "Brand 3", image: brand3Img },
    { name: "Brand 4", image: brand4Img },
    { name: "Brand 5", image: brand5Img },
  ];

  // 3. Tagembed Widget script hook
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
      
      {/* Hero Section - FIXED FOR MOBILE */}
      <section 
        className="w-full min-h-[500px] md:min-h-[600px] lg:h-[75vh] bg-cover bg-center bg-no-repeat flex items-end pb-8 md:pb-12 border-b border-gray-100"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex sm:justify-end">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/contact" className="px-8 py-4 sm:py-3 bg-blue-600 text-white font-bold text-center rounded-md hover:bg-blue-700 transition-colors text-lg shadow-lg">
              Get a Free Quote
            </Link>
            <Link to="/services" className="px-8 py-4 sm:py-3 bg-white text-blue-600 font-bold text-center rounded-md hover:bg-gray-50 transition-colors text-lg shadow-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
                      className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors w-full text-center"
                    >
                      Book this Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="text-blue-600 font-bold hover:underline text-lg">
              View all our services &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Infinite Scrolling Product Marquee */}
      <section className="py-12 bg-gray-50 overflow-hidden border-b border-gray-200">
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
                className="flex-none w-32 md:w-48 h-24 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4"
              >
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Trusted by Homeowners</h2>
          
          <div 
            className="tagembed-widget" 
            style={{ width: '100%', height: '100%', overflow: 'auto' }} 
            data-widget-id="331406" 
            data-website="1"
          ></div>
          
        </div>
      </section>

    </div>
  );
}