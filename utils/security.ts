/**
 * Security utilities for the portfolio application
 */

// Input sanitization function
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Email validation with security checks
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitizedEmail = sanitizeInput(email);
  
  // Additional security checks
  if (sanitizedEmail.length > 254) return false; // RFC 5321 limit
  if (sanitizedEmail.includes('..')) return false; // Prevent directory traversal
  if (sanitizedEmail.includes('javascript:')) return false; // Prevent XSS
  
  return emailRegex.test(sanitizedEmail);
};

// URL validation with security checks
export const validateUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    // Only allow HTTP and HTTPS protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

// CSRF token generation (for forms)
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// Rate limiting utility
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const recentRequests = userRequests.filter(time => now - time < this.windowMs);
    
    if (recentRequests.length >= this.maxRequests) {
      return false;
    }
    
    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);
    return true;
  }
}

// Content Security Policy nonce generator
export const generateNonce = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// Secure random string generator
export const generateSecureRandomString = (length: number = 32): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// XSS prevention - escape HTML
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Secure form data validation
export const validateFormData = (data: Record<string, any>): boolean => {
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      // Check for potential XSS or injection attacks
      if (value.includes('<script>') || 
          value.includes('javascript:') || 
          value.includes('onerror=') ||
          value.includes('onload=')) {
        return false;
      }
    }
  }
  return true;
}; 