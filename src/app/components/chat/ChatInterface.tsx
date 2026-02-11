'use client';

import React, { useEffect, useRef } from 'react';
import { useChatStore } from '@/app/store/chatStore';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { ChatInput } from './ChatInput';

export const ChatInterface: React.FC = () => {
  const { isOpen, messages, isLoading, addMessage, setLoading, closeChat } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Send initial greeting if no messages
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage({
          role: 'assistant',
          content: "Hello! 👋 Welcome to KolkhiSea! I'm here to help you find your perfect Black Sea apartment. Are you looking for a vacation home, investment property, or permanent residence?",
        });
      }, 500);
    }
  }, [isOpen, messages.length, addMessage]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    addMessage({
      role: 'user',
      content,
    });

    // Set loading state
    setLoading(true);

    try {
      // Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          conversationHistory: messages.slice(-10), // Send last 10 messages for context
          conversationId: useChatStore.getState().conversationId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Add AI response
      addMessage({
        role: 'assistant',
        content: data.message,
      });
    } catch (error) {
      console.error('Chat error:', error);
      addMessage({
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at +995 599 123 456 or sales@kolkhisea.ge.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl">🏖️</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">KolkhiSea</h3>
            <p className="text-xs text-green-100">Sales Assistant</p>
          </div>
        </div>
        <button
          onClick={closeChat}
          className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          aria-label="Close chat"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 bg-[#E5DDD5] space-y-2"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h100v100H0z\" fill=\"%23E5DDD5\"/%3E%3Cpath d=\"M10 10h80v80H10z\" fill=\"none\" stroke=\"%23D1C4B0\" stroke-width=\"0.5\" opacity=\"0.1\"/%3E%3C/svg%3E')",
        }}
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />

      {/* Footer */}
      <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Powered by AI • Available 24/7
        </p>
      </div>
    </div>
  );
};

