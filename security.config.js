/**
 * Security configuration for production deployment
 */

module.exports = {
  // Security headers configuration
  headers: {
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Enable XSS protection
    'X-XSS-Protection': '1; mode=block',
    
    // Control referrer information
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Control browser features
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    
    // Force HTTPS in production
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    
    // Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://esm.sh",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.tailwindcss.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://images.unsplash.com",
      "connect-src 'self' https://esm.sh",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')
  },

  // CORS configuration
  cors: {
    origin: ['https://yourdomain.com', 'https://www.yourdomain.com'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
    maxAge: 86400
  },

  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
  },

  // Security middleware
  middleware: {
    // Trust proxy for rate limiting
    trustProxy: true,
    
    // Body parser limits
    bodyParser: {
      limit: '10mb',
      extended: false
    },
    
    // Helmet configuration
    helmet: {
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com", "https://esm.sh"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.tailwindcss.com"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
          connectSrc: ["'self'", "https://esm.sh"],
          frameSrc: ["'none'"],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
          formAction: ["'self'"]
        }
      },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
      }
    }
  },

  // Environment-specific settings
  environments: {
    development: {
      cors: {
        origin: ['http://localhost:5173', 'http://localhost:5174'],
        credentials: true
      },
      headers: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      }
    },
    production: {
      cors: {
        origin: ['https://yourdomain.com'],
        credentials: false
      },
      headers: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
      }
    }
  },

  // Security logging
  logging: {
    enabled: true,
    level: 'info',
    format: 'combined'
  },

  // Input validation rules
  validation: {
    email: {
      maxLength: 254,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    name: {
      maxLength: 100,
      pattern: /^[a-zA-Z\s]+$/
    },
    message: {
      maxLength: 1000,
      pattern: /^[^<>]*$/
    }
  }
}; 