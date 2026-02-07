
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AssistantIcon: React.FC = () => (
  <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/20 overflow-hidden relative group">
    <div className="absolute inset-0 bg-gradient-to-tr from-violet-700 to-indigo-500"></div>
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
      <path d="M19 1h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2zM19 14h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2zM4.5 10c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5zm9 0c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9 9-4.037 9-9zm-6 2.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1zm4 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1z" />
    </svg>
    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
  </div>
);

const ChatFabIcon: React.FC = () => (
  <div className="relative w-16 h-16 bg-violet-600 rounded-2xl shadow-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 border border-white/20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-700"></div>
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338C8.47 21.513 10.179 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.871-.383-4.084-1.054L5 19.826l.88-2.916C5.232 15.659 4.8 13.882 4.8 12c0-3.97 3.23-7.2 7.2-7.2s7.2 3.23 7.2 7.2-3.23 7.2-7.2 7.2zm-2.4-8.4a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0zm4.8 0a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0z" />
    </svg>
    {/* Decorative Sparkles */}
    <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
    <div className="absolute bottom-4 left-3 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-700"></div>
  </div>
);

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Malik's Virtual Architect initialized. How can I assist you with his technical profile?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getGeminiResponse(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "System offline. Re-initializing..." }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[90vw] sm:w-[400px] h-[600px] bg-zinc-950 border border-white/10 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 zoom-in-95 duration-500">
          {/* Terminal Header */}
          <div className="bg-zinc-900 px-6 py-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <AssistantIcon />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-zinc-950 rounded-full"></div>
              </div>
              <div>
                <span className="block text-xs font-black uppercase tracking-widest leading-none mb-1">Architect v1.0</span>
                <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Status: Operational</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
              <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Message List */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-violet-600 text-white shadow-xl shadow-violet-600/20' 
                  : 'bg-zinc-900 text-zinc-300 border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-zinc-900/50 border-t border-white/5">
            <div className="relative flex items-center gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query system metadata..."
                className="flex-1 bg-zinc-950 border border-white/5 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 bg-violet-600 flex items-center justify-center rounded-2xl hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-violet-600/20 active:scale-90"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </button>
            </div>
            <p className="mt-4 text-[9px] text-center font-black uppercase tracking-[0.3em] text-zinc-700">Powered by Gemini Large Language Model</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-violet-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity"></div>
          <ChatFabIcon />
        </button>
      )}
    </div>
  );
};

export default AIChat;
