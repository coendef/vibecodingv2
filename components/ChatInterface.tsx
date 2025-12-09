import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { sendMessageStream } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: 'Hallo! Ik ben je persoonlijke Vibe-coding mentor. Heb je vragen over concepten, tools, of loop je vast? Vraag het mij in gewone taal, en ik leg het eenvoudig uit.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const modelMessageId = (Date.now() + 1).toString();
    const modelMessage: Message = {
      id: modelMessageId,
      role: 'model',
      content: '',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMessage]);

    await sendMessageStream(userMessage.content, (textChunk) => {
      setMessages(prev => prev.map(msg => 
        msg.id === modelMessageId 
          ? { ...msg, content: msg.content + textChunk }
          : msg
      ));
    });

    setIsLoading(false);
    // Focus back on input after sending (optional, good for desktop)
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          AI Vibe Mentor
        </h2>
        <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full font-medium">
          Powered by Gemini
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-5 py-4 shadow-sm text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-slate-900 text-white rounded-br-none'
                  : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
              }`}
            >
              {msg.role === 'model' && (
                <div className="mb-2 text-xs font-bold text-emerald-600 uppercase tracking-wide flex items-center gap-1">
                  <span>✨</span> Mentor
                </div>
              )}
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          </div>
        ))}
        {isLoading && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start w-full">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-5 py-4 shadow-sm">
               <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-end gap-2 relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Stel je vraag over Vibe-coding..."
            className="w-full resize-none bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm min-h-[50px] max-h-[120px]"
            rows={1}
            style={{ minHeight: '52px' }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white p-3 rounded-xl transition-colors shadow-sm flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-2">
          AI kan fouten maken. Controleer belangrijke informatie.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;