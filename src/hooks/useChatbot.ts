import { useState, useCallback, useRef, useEffect } from 'react';
import { CHATBOT_DATA, FALLBACK_RESPONSE } from '../data/chatbotData';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      text: "Hi! I'm Tilak's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping, scrollToBottom]);

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Find the best matching response based on keywords
    const match = CHATBOT_DATA.find((item) =>
      item.keywords.some((keyword) => lowerInput.includes(keyword))
    );

    return match ? match.response : FALLBACK_RESPONSE;
  };

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    messages,
    isTyping,
    messagesEndRef,
    sendMessage,
    toggleChat,
  };
};
