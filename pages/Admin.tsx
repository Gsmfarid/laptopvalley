
import React from 'react';
import { Package, Plus, Trash2, Edit3, DollarSign, Users, ShoppingBag, BarChart3 } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Admin: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Manage your inventory, orders, and business insights.</p>
          </div>
          <button className="flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
            <Plus size={20} className="mr-2" /> Add Product
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Sales', val: '$24,500', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Active Orders', val: '12', icon: ShoppingBag, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Customers', val: '1,240', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Inventory', val: '45 Units', icon: Package, color: 'text-rose-600', bg: 'bg-rose-50' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon size={20} />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h4 className="text-2xl font-black text-slate-900">{stat.val}</h4>
            </div>
          ))}
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900">Inventory Management</h3>
            <div className="flex text-indigo-600 text-sm font-bold items-center cursor-pointer">
              <BarChart3 size={18} className="mr-2" /> View Detailed Report
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold tracking-widest border-b border-slate-100">
                  <th className="px-8 py-5">Product Name</th>
                  <th className="px-8 py-5">Category</th>
                  <th className="px-8 py-5">Stock Status</th>
                  <th className="px-8 py-5">Price</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {PRODUCTS.map(product => (
                  <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <img src={product.image} className="w-10 h-10 rounded-lg object-cover mr-4" />
                        <div>
                          <p className="font-bold text-slate-900">{product.name}</p>
                          <p className="text-xs text-slate-400">{product.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase">{product.category}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${product.stock > 5 ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                        <span className="text-sm font-medium text-slate-700">{product.stock} left</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="font-bold text-slate-900">${product.price}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex justify-end space-x-2">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Edit3 size={18} /></button>
                        <button className="p-2 text-slate-400 hover:text-rose-600 transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
