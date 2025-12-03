/**
 * JsonLd.tsx
 * 
 * Componente per iniettare JSON-LD Schema.org
 * Compatibile con React 19 (senza react-helmet-async)
 * 
 * Usa useEffect per inserire script nel head
 */

import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Inietta JSON-LD nel document head
 * Pulisce automaticamente al unmount
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = `jsonld-${Math.random().toString(36).slice(2, 9)}`;
    
    document.head.appendChild(script);
    
    return () => {
      const existing = document.getElementById(script.id);
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, [data]);

  return null;
};

export default JsonLd;
