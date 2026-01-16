
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Laptop } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Laptop className="h-8 w-8 text-indigo-500 mr-2" />
              <span className="text-xl font-bold text-white tracking-tight">Laptop<span className="text-indigo-500">Valley</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for high-performance laptops and expert tech solutions. Quality, trust, and service are our pillars in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Laptop Catalog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Repair Services</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Laptop Series</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Gaming Laptops</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Business Series</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Student Friendly</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Workstation Laptops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-indigo-500" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-indigo-500" />
                <span>info@laptopvalley.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-indigo-500" />
                <span>Level 4, Multiplan Center,<br />Elephant Road, Dhaka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:row items-center justify-between text-xs text-slate-500">
          <p>© 2024 Laptop Valley. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
