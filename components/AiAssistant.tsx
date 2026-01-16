
import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';
import { getAiRecommendation } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm your Laptop Valley guide. Looking for a new machine or need repair advice?", isBot: true }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setLoading(true);

    const response = await getAiRecommendation(userMsg);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col border border-indigo-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Smart Assistant</h3>
                <span className="text-[10px] text-indigo-100 flex items-center">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  AI Powered Experience
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 p-1 rounded-lg">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.isBot 
                    ? 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm' 
                    : 'bg-indigo-600 text-white rounded-tr-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about laptops..."
                className="w-full bg-slate-100 text-slate-700 text-sm pl-4 pr-12 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-110 flex items-center space-x-2 group"
        >
          <Sparkles className="animate-pulse" size={24} />
          <span className="hidden group-hover:block font-medium pr-2">Ask AI</span>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
