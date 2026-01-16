
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AiAssistant from './components/AiAssistant';

type Page = 'home' | 'products' | 'product-details' | 'services' | 'about' | 'contact' | 'admin';

interface CartItem {
  id: string;
  quantity: number;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageParams, setPageParams] = useState<any>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const navigate = (page: string, params: any = null) => {
    setCurrentPage(page as Page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} onAddToCart={handleAddToCart} />;
      case 'products': return <Products onNavigate={navigate} onAddToCart={handleAddToCart} />;
      case 'product-details': return <ProductDetails id={pageParams?.id} onNavigate={navigate} onAddToCart={handleAddToCart} />;
      case 'services': return <Services />;
      case 'about': return <div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-bold">About Laptop Valley</h1><p className="mt-8 text-slate-500">Premium Tech Retailer Since 2018.</p></div>;
      case 'contact': return <Contact />;
      case 'admin': return <Admin />;
      default: return <Home onNavigate={navigate} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={navigate} currentPage={currentPage} cartCount={cartCount} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;
