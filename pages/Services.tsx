
import React from 'react';
import { Wrench, Zap, Monitor, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const iconMap: any = {
    wrench: Wrench,
    zap: Zap,
    monitor: Monitor
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase bg-indigo-50 px-4 py-1.5 rounded-full inline-block mb-4">Support & Care</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Expert Services for Your Machine</h1>
          <p className="text-slate-500 text-lg">
            We don't just sell laptops; we ensure they run at peak performance for years. From simple cleaning to complex motherboard repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                <button className="text-indigo-600 font-bold text-sm uppercase tracking-wider flex items-center group-hover:translate-x-2 transition-transform">
                  Book Service <Clock size={16} className="ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Why trust section */}
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Sparkles size={300} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8">Why Customers Trust Laptop Valley Servicing</h2>
              <ul className="space-y-6">
                {[
                  { icon: ShieldCheck, text: "Certified Technicians with 10+ years of experience." },
                  { icon: Zap, text: "Express servicing: Minor repairs done in 2 hours." },
                  { icon: HeartPulse, text: "Complimentary health check-up with every service." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-lg">
                    <div className="bg-white/20 p-2 rounded-lg mr-4"><item.icon size={24} /></div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl border border-white/20">
              <h4 className="text-xl font-bold mb-6">Request a Service Quote</h4>
              <form className="space-y-4">
                <input type="text" placeholder="Laptop Model" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/50 focus:outline-none focus:bg-white/20" />
                <textarea placeholder="Describe the issue..." className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/50 h-32 focus:outline-none focus:bg-white/20"></textarea>
                <button className="w-full py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
