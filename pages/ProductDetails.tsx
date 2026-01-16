
import React, { useState } from 'react';
import { ChevronLeft, Shield, Truck, RotateCcw, ShoppingCart, MessageSquare, Cpu, HardDrive, Monitor, Layers, Check } from 'lucide-react';
import { PRODUCTS } from '../constants';

interface ProductDetailsProps {
  id: string;
  onNavigate: (page: string) => void;
  onAddToCart: (id: string) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ id, onNavigate, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold">Product not found.</h2>
        <button onClick={() => onNavigate('products')} className="mt-4 text-indigo-600 font-bold">Back to Products</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product.id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => onNavigate('products')}
          className="flex items-center text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" /> Back to Catalog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-inner">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 cursor-pointer hover:border-indigo-500 transition-all">
                  <img src={`https://picsum.photos/seed/${product.id}${i}/400/400`} alt="Thumb" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{product.brand}</span>
              <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center space-x-4 text-2xl font-bold text-slate-900">
                <span>${product.price}</span>
                {product.oldPrice && (
                  <span className="text-lg text-slate-400 line-through">${product.oldPrice}</span>
                )}
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-3 text-indigo-600"><Cpu size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Processor</p>
                  <p className="text-sm font-bold text-slate-700">{product.specs.cpu}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-3 text-indigo-600"><Layers size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Memory</p>
                  <p className="text-sm font-bold text-slate-700">{product.specs.ram}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-3 text-indigo-600"><HardDrive size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Storage</p>
                  <p className="text-sm font-bold text-slate-700">{product.specs.storage}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-3 text-indigo-600"><Monitor size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Display</p>
                  <p className="text-sm font-bold text-slate-700">{product.specs.display}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className={`flex-1 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-xl ${isAdded ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/20'}`}
              >
                {isAdded ? (
                  <>
                    <Check className="mr-2" size={20} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2" size={20} /> Add to Cart
                  </>
                )}
              </button>
              <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-5 rounded-2xl font-bold flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-all">
                <MessageSquare className="mr-2" size={20} /> Inquiry on WhatsApp
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
              <div className="flex flex-col items-center text-center">
                <Shield className="text-slate-400 mb-2" size={20} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="text-slate-400 mb-2" size={20} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="text-slate-400 mb-2" size={20} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">7-Day Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
