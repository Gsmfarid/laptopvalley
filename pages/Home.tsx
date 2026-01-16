
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Headphones, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart }) => {
  const featured = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <img 
            src="https://picsum.photos/seed/tech-hero/1920/1080" 
            className="w-full h-full object-cover opacity-50"
            alt="Hero Background"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
              Welcome to the Valley
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Empower Your <span className="text-indigo-500">Digital Journey</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Discover the finest collection of premium laptops, custom-tailored for gamers, creators, and professionals. Experience tech excellence with Laptop Valley.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center group shadow-xl shadow-indigo-600/20"
              >
                Shop Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Official Warranty", desc: "100% genuine products" },
              { icon: Zap, title: "Fast Service", desc: "Quick repair turnarounds" },
              { icon: Headphones, title: "Expert Support", desc: "Professional tech advice" },
              { icon: ArrowRight, title: "Easy Returns", desc: "Hassle-free guarantee" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Featured Excellence</h2>
              <p className="text-slate-500">Hand-picked premium machines for your unique needs.</p>
            </div>
            <button 
              onClick={() => onNavigate('products')}
              className="flex items-center text-indigo-600 font-bold hover:underline"
            >
              View All <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={(id) => onNavigate('product-details', { id })} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-20 bg-indigo-600 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-200">Limited Time Offer</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Upgrade & Save Up to $200</h2>
            <p className="text-indigo-100 opacity-90 text-lg max-w-xl">
              Bring your old laptop and get a guaranteed discount on the latest RTX 40-Series machines.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-2xl"
          >
            Get Offer Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
