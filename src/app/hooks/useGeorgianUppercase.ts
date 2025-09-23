
import { useEffect } from 'react';
import { useLocale } from 'next-intl';

/**
 * Georgian text transformation utility
 */
const toMtavruli = (input: string): string => {
  const OFFSET = 0x1C90 - 0x10D0; // Unicode offset: Mkhedruli to Mtavruli
  return Array.from(input).map(ch => {
    const cp = ch.codePointAt(0);
    if (cp && cp >= 0x10D0 && cp <= 0x10FF) { // Mkhedruli range
      return String.fromCodePoint(cp + OFFSET); // Convert to Mtavruli
    }
    return ch;
  }).join('');
};

/**
 * Transform Georgian uppercase text in the DOM
 */
const transformGeorgianUppercase = (): void => {
  if (typeof window === 'undefined') return;
  
  const locale = document.body.dataset.locale;
  if (locale !== 'ka') return; // Only process Georgian locale
  
  // Find all elements with uppercase class
  const uppercaseElements = document.querySelectorAll('.uppercase');
  
  uppercaseElements.forEach(element => {
    // Skip if already processed
    if (element.getAttribute('data-georgian-processed')) return;
    
    // Process all text nodes within the element
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null
    );
    
    const textNodes: Text[] = [];
    let node: Text | null;
    while ((node = walker.nextNode() as Text)) {
      textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
      const text = textNode.textContent;
      // Check if text contains Georgian characters
      if (text && /[\u10D0-\u10FF]/.test(text)) {
        textNode.textContent = toMtavruli(text);
      }
    });
    
    // Mark as processed and add language attribute
    element.setAttribute('data-georgian-processed', 'true');
    element.setAttribute('lang', 'ka');
  });
};

/**
 * Hook to automatically transform Georgian uppercase text
 * Use this in components where you need Georgian text transformation
 */
export const useGeorgianUppercase = (): void => {
  const locale = useLocale();
  
  useEffect(() => {
    if (locale !== 'ka') return;
    
    // Initial transformation
    transformGeorgianUppercase();
    
    // Handle dynamic content (React state changes, etc.)
    const observer = new MutationObserver(transformGeorgianUppercase);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      observer.disconnect();
    };
  }, [locale]);
};

/**
 * Utility function to transform Georgian text programmatically
 */
export const georgianToUppercase = (text: string): string => {
  return toMtavruli(text);
};

export default useGeorgianUppercase;