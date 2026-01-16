
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-slate-500 text-xl max-w-2xl">
            Have questions about a laptop? Need technical support? Our team is here to help you get the best out of your technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h4 className="text-xl font-bold mb-6 text-slate-900">Direct Contact</h4>
              <div className="space-y-6">
                <a href="tel:+880123456789" className="flex items-center group">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                    <p className="font-bold text-slate-700">+880 1234-567890</p>
                  </div>
                </a>
                <a href="mailto:info@laptopvalley.com" className="flex items-center group">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="font-bold text-slate-700">info@laptopvalley.com</p>
                  </div>
                </a>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="font-bold text-slate-700">+880 1700-000000</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-slate-900">Working Hours</h4>
              <div className="flex items-start">
                <Clock className="text-indigo-600 mr-4 mt-1" size={24} />
                <div className="text-slate-600 space-y-1">
                  <p><span className="font-bold text-slate-900">Sat – Thu:</span> 10:00 AM – 8:00 PM</p>
                  <p><span className="font-bold text-slate-900">Fri:</span> Closed (Support only)</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-slate-900">Our Location</h4>
              <div className="flex items-start">
                <MapPin className="text-indigo-600 mr-4 mt-1" size={24} />
                <p className="text-slate-600">
                  Level 4, Multiplan Center,<br />69-71 Elephant Road, Dhaka-1205
                </p>
              </div>
              <div className="mt-6 w-full h-48 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">
                <img src="https://picsum.photos/seed/map/600/300" alt="Map" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100">
            <h4 className="text-2xl font-black mb-10 text-slate-900">Send us a Message</h4>
            <form className="grid grid-cols-1 md:row-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all">
                  <option>Product Inquiry</option>
                  <option>Service Booking</option>
                  <option>Warranty Claim</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea placeholder="How can we help you today?" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 h-48 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
