import React from 'react';
import { Search, Star, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">FinFuse</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">For Experts</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Login</a></li>
            <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find the Perfect Financial Expert for Your Business</h1>
          <p className="text-xl text-gray-600 mb-8">Connect with top CFOs, accountants, and financial advisors tailored to your needs</p>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for financial experts..." 
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <Search size={20} />
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((expert) => (
              <div key={expert} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={`/api/placeholder/64/64`} alt="Expert" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">John Doe</h3>
                    <p className="text-gray-600">CFO Consultant</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Specializing in startup finance and growth strategies.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" size={16} />
                    <span className="text-gray-700">4.9 (120 reviews)</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Profile <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How FinFuse Works</h2>
          <p className="text-gray-600 mb-8">Connect with top financial experts in just a few simple steps</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Search", description: "Find experts based on your specific needs" },
              { title: "Connect", description: "Message experts and schedule consultations" },
              { title: "Collaborate", description: "Work together to achieve your financial goals" }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Find an Expert</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Experts</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Join as an Expert</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Expert Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            © 2024 FinFuse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;