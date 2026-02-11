'use client';

import React from 'react';
import { useChatStore } from '@/app/store/chatStore';

export const ChatButton: React.FC = () => {
  const { isOpen, toggleChat, messages } = useChatStore();
  const unreadCount = messages.filter(m => m.role === 'assistant').length;

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 group"
      aria-label="Open chat"
    >
      {!isOpen ? (
        <>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
          {/* Pulse animation for first-time visitors */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        </>
      ) : (
        <svg
          className="w-8 h-8 text-white"
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
      )}
    </button>
  );
};

