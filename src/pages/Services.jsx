import React from 'react';
import { Link } from 'react-router-dom';

// We are reusing the same images you added for the Home page
import homeImg from '../assets/home.jpg';
import home1Img from '../assets/home1.jpg';
import home2Img from '../assets/home2.jpg';
import home3Img from '../assets/home3.jpg';
import home4Img from '../assets/home4.jpg'; 
import home5Img from '../assets/home5.jpg'; 

export default function Services() {
  
  // Expanded service details for the dedicated page
  const allServices = [
    { 
      title: "Bespoke Kitchens", 
      image: homeImg,
      description: "Transform the heart of your home. From custom cabinetry and island installations to complete remodels, we deliver precision craftsmanship that blends functionality with stunning design." 
    },
    { 
      title: "Bathroom Upgrades", 
      image: home1Img,
      description: "Upgrade to a spa-like experience. We handle tiling, vanity installations, plumbing fixtures, and complete bathroom renovations with an eye for luxurious detail." 
    },
    { 
      title: "Custom Carpentry", 
      image: home2Img,
      description: "Built-in wardrobes, custom shelving, and bespoke furniture pieces. If you can dream it, our master carpenters can build it exactly to your specifications." 
    },
    { 
      title: "Airbnb Property Management", 
      image: home3Img,
      description: "Complete peace of mind for property investors. We handle maintenance, emergency repairs, guest turnovers, and aesthetic upkeep to ensure 5-star reviews." 
    },
    { 
      title: "General Handyman Repairs", 
      image: home4Img,
      description: "No job is too small. From fixing drywall and mounting TVs to repairing leaky faucets and assembling furniture, get reliable fixes from a trusted professional." 
    },
    { 
      title: "Flooring & Decking", 
      image: home5Img,
      description: "Elevate your indoor and outdoor spaces. We specialize in hardwood, laminate, and luxury vinyl installations, as well as custom outdoor decking." 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Page Header */}
      <div className="bg-[#0F1626] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Expert craftsmanship, reliable repairs, and comprehensive property management tailored to your needs.
          </p>
        </div>
      </div>

      {/* Services List - Alternating Layout */}
      <div className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div 
                className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
                <div>
                  <Link 
                    to="/contact" 
                    className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Don't see what you're looking for?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We handle a wide variety of custom projects. Reach out to discuss your specific needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors text-lg shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </div>

    </div>
  );
}