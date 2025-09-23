'use client';

import { useGeorgianUppercase } from '@/app/hooks/useGeorgianUppercase';

/**
 * Provider component that automatically handles Georgian uppercase transformations
 * This component should be included once in your app layout
 */
const GeorgianUppercaseProvider: React.FC = () => {
  useGeorgianUppercase();
  return null; // This component doesn't render anything
};

export default GeorgianUppercaseProvider;
