import { Link } from 'react-router-dom';

export default function Airbnb() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Airbnb Property Management
          </h1>
          <p className="text-xl text-slate-600">
            Complete, hassle-free maintenance and management for your short-term rental properties.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-t-4 border-amber-400">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Protecting Your Investment</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            Managing an Airbnb requires constant attention, regular maintenance, and immediate action when things go wrong. Act 4 Home provides comprehensive property management services tailored specifically for short-term rentals, ensuring your guests always walk into a perfect space.
          </p>
          
          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Airbnb Services Include:</h3>
          <ul className="space-y-3 mb-10">
            {[
              "Emergency call-outs and rapid repairs",
              "Between-guest maintenance checks",
              "Plumbing, electrical, and appliance troubleshooting",
              "General upkeep, carpentry repairs, and touch-up decorating"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-slate-600 text-lg">
                <span className="text-amber-500 mr-3">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Looking for a reliable property partner?</h3>
            <Link to="/contact" className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-md hover:bg-slate-800 transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}