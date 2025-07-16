/**
 * Custom CCP Style Injector
 * This module injects custom CSS into the CCP iframe to customize its appearance
 */

/**
 * Injects custom CSS into the CCP iframe
 * @param {HTMLIFrameElement} iframe - The CCP iframe element
 */
function injectCustomStyles(iframe) {
  try {
    // Wait for iframe to load
    iframe.addEventListener('load', function() {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        // Create style element
        const styleElement = iframeDoc.createElement('style');
        styleElement.type = 'text/css';
        styleElement.innerHTML = getCustomCSS();
        
        // Add to iframe head
        const head = iframeDoc.head || iframeDoc.getElementsByTagName('head')[0];
        head.appendChild(styleElement);
        
        console.log('✅ Custom CCP styles injected successfully');
      } catch (error) {
        console.warn('⚠️ Could not inject custom styles into CCP iframe (cross-origin restriction):', error.message);
        // This is expected for cross-origin iframes
      }
    });
  } catch (error) {
    console.error('❌ Error setting up style injection:', error);
  }
}

/**
 * Returns the custom CSS string
 */
function getCustomCSS() {
  return `
/* Custom CCP Styling */
/* This CSS will be injected into the CCP iframe to customize its appearance */

/* Main CCP container */
.ccp-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
  background-color: #f8f9fa !important;
  border-radius: 8px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

/* Header styling */
.ccp-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border-radius: 8px 8px 0 0 !important;
  padding: 12px !important;
}

/* Button styling */
.ccp-button, button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border: none !important;
  border-radius: 6px !important;
  color: white !important;
  padding: 8px 16px !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
  cursor: pointer !important;
}

.ccp-button:hover, button:hover {
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4) !important;
}

/* Accept call button - green */
.ccp-button.accept, button[data-testid*="accept"], button[aria-label*="accept" i] {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%) !important;
}

/* Reject/End call button - red */
.ccp-button.reject, .ccp-button.end, button[data-testid*="reject"], button[data-testid*="end"], button[aria-label*="end" i], button[aria-label*="reject" i] {
  background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%) !important;
}

/* Hold button - orange */
.ccp-button.hold, button[data-testid*="hold"], button[aria-label*="hold" i] {
  background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%) !important;
}

/* Mute button styling */
.ccp-button.mute, button[data-testid*="mute"], button[aria-label*="mute" i] {
  background: linear-gradient(135deg, #a0aec0 0%, #718096 100%) !important;
}

/* Status indicators */
.ccp-status {
  border-radius: 20px !important;
  padding: 4px 12px !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

/* Input fields */
.ccp-input, input[type="text"], input[type="tel"], input[type="number"] {
  border: 2px solid #e2e8f0 !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  font-size: 14px !important;
  transition: border-color 0.3s ease !important;
}

/* Phone number display */
.ccp-phone-number {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #2d3748 !important;
  background-color: #f7fafc !important;
  padding: 8px 12px !important;
  border-radius: 6px !important;
  border: 1px solid #e2e8f0 !important;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px !important;
}

::-webkit-scrollbar-track {
  background: #f1f1f1 !important;
  border-radius: 4px !important;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1 !important;
  border-radius: 4px !important;
}

/* Animation for state changes */
.ccp-state-transition {
  transition: all 0.3s ease !important;
}

/* Custom loading spinner */
.ccp-loading {
  border: 3px solid #f3f3f3 !important;
  border-top: 3px solid #667eea !important;
  border-radius: 50% !important;
  width: 30px !important;
  height: 30px !important;
  animation: spin 1s linear infinite !important;
  margin: 20px auto !important;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
}

/**
 * Applies custom styling to the CCP container (parent element)
 * @param {HTMLElement} container - The container element that holds the CCP iframe
 */
function styleContainer(container) {
  if (!container) return;
  
  // Apply custom styles to the container
  container.style.cssText = `
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    border: 1px solid #e2e8f0;
  `;
  
  console.log('✅ Custom container styles applied');
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectCustomStyles,
    styleContainer,
    getCustomCSS
  };
} else if (typeof window !== 'undefined') {
  window.CCPStyleInjector = {
    injectCustomStyles,
    styleContainer,
    getCustomCSS
  };
}
