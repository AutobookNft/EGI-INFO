/**
 * FlorenceFondamenti.tsx
 * 
 * Fondamenti filosofici e visione di FlorenceEGI
 * Raggruppa i mattoncini: Premessa, PrincipioFondo, Cocreazione, Visione, Unicum
 * 
 * ARIA: region landmark
 * i18n: florence.fondamenti
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Premessa,
  PrincipioFondo,
  Cocreazione,
  Visione,
  Unicum,
} from '../../mattoncini/florence';

// =============================================================================
// TYPES
// =============================================================================

interface FlorenceFondamentiProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const FlorenceFondamenti: React.FC<FlorenceFondamentiProps> = ({
  id = 'florence-fondamenti',
  className = ''
}) => {
  const { t } = useTranslation('florence');

  return (
    <section
      id={id}
      className={`florence-fondamenti ${className}`}
      role="region"
      aria-labelledby="fondamenti-heading"
      style={{
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2
          id="fondamenti-heading"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '1rem',
          }}
        >
          {t('fondamentiSection.title', 'Fondamenti e Visione')}
        </h2>
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#4b5563',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {t('fondamentiSection.subtitle', 'I principi filosofici alla base di FlorenceEGI')}
        </p>
      </header>

      {/* Mattoncini Fondamenti */}
      <Premessa />
      <PrincipioFondo />
      <Cocreazione />
      
      {/* Mattoncini Visione */}
      <Visione />
      <Unicum />
    </section>
  );
};

export default FlorenceFondamenti;
