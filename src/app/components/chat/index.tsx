'use client';

import React from 'react';
import { ChatButton } from './ChatButton';
import { ChatInterface } from './ChatInterface';

export const ChatWidget: React.FC = () => {
  return (
    <>
      <ChatButton />
      <ChatInterface />
    </>
  );
};

