
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Eye, Star, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onView: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onView, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product.id);
    setIsAdded(true);
  };

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => setIsAdded(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-widest border border-indigo-100">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
          <button 
            onClick={() => onView(product.id)}
            className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
            title="View Details"
          >
            <Eye size={20} />
          </button>
          <button 
            onClick={handleAddToCart}
            className={`p-3 rounded-full transition-all duration-300 ${isAdded ? 'bg-green-500 text-white' : 'bg-white text-slate-900 hover:bg-indigo-600 hover:text-white'}`}
            title="Add to Cart"
          >
            {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-slate-400 mb-2">
          <span className="font-semibold text-slate-500">{product.brand}</span>
          <span className="mx-2">•</span>
          <div className="flex text-amber-400">
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} />
          </div>
        </div>
        <h3 className="font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs line-clamp-2 mb-4">
          {product.specs.cpu} • {product.specs.ram} • {product.specs.storage}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900">${product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-slate-400 line-through">${product.oldPrice}</span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${isAdded ? 'text-green-600' : 'text-indigo-600 hover:text-indigo-700'}`}
          >
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
