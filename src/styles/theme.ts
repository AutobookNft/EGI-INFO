/**
 * @package EGI-INFO
 * @description Design system theme configuration
 */

export const theme = {
  colors: {
    // Brand FlorenceEGI
    primary: {
      gold: '#D4AF37',
      goldLight: '#D4A574',
      blue: '#1B365D',
      green: '#2D5016',
    },
    
    // Background (Dark Theme)
    background: {
      dark: '#0F0F0F',
      card: '#1A1A1A',
      elevated: '#242424',
    },
    
    // Text
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      accent: '#D4AF37',
    },
    
    // Pagine specifiche
    pages: {
      epp: '#16A34A',
      whitePaper: '#047857',
      pa: '#1E3A8A',
      artist: '#7C3AED',
    }
  },
  
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Source Sans Pro", sans-serif',
  },

  spacing: {
    section: '5rem',
    sectionMobile: '3rem',
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  shadows: {
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
    elevated: '0 10px 25px rgba(0, 0, 0, 0.4)',
    glow: '0 0 20px rgba(212, 175, 55, 0.3)',
  },

  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
} as const;

export type Theme = typeof theme;
