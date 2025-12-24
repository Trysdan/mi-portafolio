
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

  const labels = {
    es: {
      title: "Asistente Virtual",
      placeholder: "Pregúntame sobre Jesús...",
      greeting: "¡Hola! Soy el asistente virtual de Jesús. ¿En qué puedo ayudarte hoy?",
      error: "Lo siento, tuve un problema conectando con mi cerebro artificial. Inténtalo de nuevo.",
      outOfContext: "Esa información no trata sobre Jesús Daniel Díaz Pérez. Mi propósito es únicamente responder dudas sobre su carrera, habilidades y proyectos.",
      hint: "Solo preguntas sobre Jesús"
    },
    en: {
      title: "AI Assistant",
      placeholder: "Ask me about Jesús...",
      greeting: "Hi! I'm Jesús's virtual assistant. How can I help you today?",
      error: "Sorry, I had a problem connecting to my artificial brain. Please try again.",
      outOfContext: "That information is not about Jesús Daniel Díaz Pérez. My purpose is exclusively to answer questions about his career, skills, and projects.",
      hint: "Questions about Jesús only"
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
    
    const updatedHistory: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(updatedHistory);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        Eres el asistente virtual especializado de Jesús Daniel Díaz Pérez. 
        Toda la información verídica que necesitas está en este perfil: ${JSON.stringify(cvData)}.
        
        INSTRUCCIONES DE COMPORTAMIENTO:
        1. Solo puedes hablar sobre Jesús Daniel Díaz Pérez.
        2. Si el usuario pregunta algo que NO sea sobre Jesús (ej: "qué hora es", "hazme una receta", "quién ganó el mundial", "clima"), debes responder OBLIGATORIAMENTE: "${l.outOfContext}".
        3. No inventes datos. Si no sabes algo, indica que pueden contactar a Jesús por email.
        4. Sé profesional, conciso y utiliza el idioma: ${lang === 'es' ? 'Español' : 'Inglés'}.
        5. Evita cualquier tema que no sea profesional o relacionado con los proyectos de Jesús.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: updatedHistory.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction,
          temperature: 0.3, // Menor temperatura para ser más preciso y menos creativo
        }
      });

      const aiText = response.text;
      if (aiText) {
        setMessages(prev => [...prev, { role: 'model', text: aiText }]);
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: l.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999] font-sans">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] sm:w-[380px] h-[550px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col overflow-hidden animate-fadeIn glass-effect">
          <div className="p-6 bg-indigo-600 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight">{l.title}</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest">{l.hint}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 border border-slate-100 max-w-[85%] leading-relaxed">
                {l.greeting}
              </div>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[10px] shadow-sm ${
                  msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-indigo-100 text-indigo-600'
                }`}>
                  {msg.role === 'user' ? 'ME' : 'AI'}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm border max-w-[85%] ${
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

          <div className="p-4 bg-white border-t border-slate-100 shrink-0">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative flex items-center"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={l.placeholder}
                className="w-full pl-5 pr-12 py-4 bg-slate-50 rounded-2xl text-sm border border-slate-200 focus:outline-none focus:border-indigo-500 transition-all focus:ring-4 focus:ring-indigo-500/5"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-md active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-5 rounded-full shadow-2xl transition-all duration-300 active:scale-90 flex items-center justify-center group ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default AIChat;
