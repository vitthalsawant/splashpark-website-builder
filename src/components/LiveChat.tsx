
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const botResponses = [
  "Hello! How can I help you today?",
  "That's a great question! The park is open from 9 AM to 7 PM every day during summer season.",
  "Yes, we offer family packages that include tickets for 2 adults and 2 children starting at $199.",
  "Our most popular attractions are the Wave Pool Paradise and the Thrilling Water Slides!",
  "Safety is our top priority. All our attractions are supervised by certified lifeguards.",
  "We recommend arriving at least 30 minutes before opening time to avoid long queues.",
  "Yes, we have lockers available for rent to store your belongings securely.",
  "I understand. Let me connect you with one of our customer service representatives."
];

const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to AquaVenture Live Support. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Random response time between 1-3 seconds
    const responseTime = Math.floor(Math.random() * 2000) + 1000;
    
    setTimeout(() => {
      // Generate bot response
      const randomIndex = Math.floor(Math.random() * botResponses.length);
      const botResponse: Message = {
        id: messages.length + 2,
        text: botResponses[randomIndex],
        sender: 'bot',
        timestamp: new Date()
      };
      
      setIsTyping(false);
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, responseTime);
  };

  return (
    <div className="flex flex-col h-96">
      <div className="flex-1 p-4 overflow-y-auto">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-aqua-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start mb-4"
            >
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>
      
      <div className="border-t p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500"
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-aqua-600 hover:bg-aqua-700 px-3"
            disabled={!inputValue.trim()}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
