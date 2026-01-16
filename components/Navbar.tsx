
import React, { useState } from 'react';
import { Menu, X, Laptop, ShoppingCart, Search } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Laptops', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Laptop className="h-8 w-8 text-indigo-600 mr-2" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">Laptop<span className="text-indigo-600">Valley</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  currentPage === item.id ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-slate-500 hover:text-indigo-600"><Search size={20} /></button>
            <button className="p-2 text-slate-500 hover:text-indigo-600 relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => onNavigate('admin')}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-sm"
            >
              Admin
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-indigo-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate('admin'); setIsOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Admin Panel
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
