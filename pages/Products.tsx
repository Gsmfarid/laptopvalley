
import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

interface ProductsProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onNavigate, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = ['All', 'Gaming', 'Business', 'Student', 'Creator'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Machines</h1>
          <p className="text-slate-500">Browse our extensive collection of high-performance laptops.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Filters & Search */}
          <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by brand or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 flex overflow-x-auto pb-2 sm:pb-0 gap-2 items-center no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 whitespace-nowrap rounded-2xl text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={(id) => onNavigate('product-details', { id })}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-20 text-center">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-6">
              <SlidersHorizontal size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No matching products</h3>
            <p className="text-slate-500 mb-8">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
