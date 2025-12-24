
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { cvData } from '../data/cvData';
import { Language } from '../App';
import { Sparkles, Send } from './Icon';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIChatProps {
  lang: Language;
}

const AIChat: React.FC<AIChatProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("AIChat component mounted. Language:", lang);
  }, []);

  const labels = {
    es: {
      title: "Asistente Virtual",
      placeholder: "Pregúntame sobre Jesús...",
      greeting: "¡Hola! Soy el asistente virtual de Jesús. ¿En qué puedo ayudarte hoy?",
      error: "Lo siento, tuve un problema conectando con mi cerebro artificial. Inténtalo de nuevo.",
    },
    en: {
      title: "AI Assistant",
      placeholder: "Ask me about Jesús...",
      greeting: "Hi! I'm Jesús's virtual assistant. How can I help you today?",
      error: "Sorry, I had trouble connecting to my artificial brain. Please try again.",
    }
  };

  const l = labels[lang];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are the professional AI assistant for Jesús Daniel Díaz Pérez, a Software Engineer and Game Developer.
        Answer questions based on the following JSON data: ${JSON.stringify(cvData)}.
        Keep answers professional, concise, and helpful. 
        Always respond in ${lang === 'es' ? 'Spanish' : 'English'}.
        If you don't know something, suggest contacting Jesús at ${cvData.email}.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const aiText = response.text || l.error;
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: l.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] sm:w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fadeIn glass-effect">
          <div className="p-6 bg-indigo-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight">{l.title}</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] opacity-80 font-medium">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 leading-relaxed border border-slate-100">
                {l.greeting}
              </div>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
                  {msg.role === 'user' ? 'U' : <Sparkles className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm border ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none border-indigo-500' 
                    : 'bg-white text-slate-700 rounded-tl-none border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center border border-slate-100">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative flex items-center"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={l.placeholder}
                className="w-full pl-5 pr-12 py-4 bg-slate-50 rounded-2xl text-sm border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200 active:scale-90"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chat"
        className={`group relative p-4 rounded-full shadow-2xl transition-all duration-500 active:scale-90 ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-indigo-600 text-white'
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20 group-hover:opacity-40"></div>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <Sparkles className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default AIChat;
