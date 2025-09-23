/**
 * Georgian Uppercase Auto-Transform Script
 * Automatically converts Georgian text with 'uppercase' class from Mkhedruli to Mtavruli
 */

// Georgian text transformation utility
function toMtavruli(input) {
  const OFFSET = 0x1C90 - 0x10D0; // Unicode offset: Mkhedruli to Mtavruli
  return Array.from(input).map(ch => {
    const cp = ch.codePointAt(0);
    if (cp >= 0x10D0 && cp <= 0x10FF) { // Mkhedruli range
      return String.fromCodePoint(cp + OFFSET); // Convert to Mtavruli
    }
    return ch;
  }).join('');
}

// Auto-transform Georgian uppercase text
function transformGeorgianUppercase() {
  const locale = document.body.dataset.locale;
  if (locale !== 'ka') return; // Only process Georgian locale
  
  // Find all elements with uppercase class
  const uppercaseElements = document.querySelectorAll('.uppercase');
  
  uppercaseElements.forEach(element => {
    // Skip if already processed
    if (element.dataset.georgianProcessed) return;
    
    // Process all text nodes within the element
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
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
    element.dataset.georgianProcessed = 'true';
    element.setAttribute('lang', 'ka');
  });
}

// Initialize Georgian uppercase transformation
function initGeorgianUppercase() {
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', transformGeorgianUppercase);
  } else {
    transformGeorgianUppercase();
  }
  
  // Handle dynamic content (React state changes, etc.)
  const observer = new MutationObserver(transformGeorgianUppercase);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Auto-initialize when script loads
initGeorgianUppercase();
