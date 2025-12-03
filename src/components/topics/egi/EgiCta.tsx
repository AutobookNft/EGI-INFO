/**
 * EgiCta - Call to Action finale sezione EGI
 * 
 * Invito all'azione con tre opzioni principali
 * 
 * SEO Features:
 * - Schema.org Action per CTAs
 * - ARIA landmarks
 * - Focus management per accessibilità
 * - i18n da namespace 'egi'
 * 
 * @module components/topics/egi/EgiCta
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark } from '@/utils/seo/Aria';

interface CtaButtonProps {
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

/**
 * Button CTA con varianti
 */
const CtaButton: React.FC<CtaButtonProps> = ({ href, variant, children }) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-8 py-4
    font-semibold
    rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r from-gold to-gold-dark
      text-dark
      shadow-lg shadow-gold/30
      hover:shadow-xl hover:shadow-gold/40
      hover:-translate-y-0.5
      focus:ring-gold
    `,
    secondary: `
      bg-transparent
      border-2 border-gold
      text-gold
      hover:bg-gold/10
      hover:-translate-y-0.5
      focus:ring-gold/50
    `,
    tertiary: `
      bg-white/5
      border border-white/20
      text-white/80
      hover:bg-white/10
      hover:text-white
      focus:ring-white/30
    `
  };
  
  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

/**
 * EgiCta - Sezione CTA completa
 */
const EgiCta: React.FC = () => {
  const { t } = useTranslation('egi');
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('cta.ariaLabel', 'Inizia il tuo viaggio')}
      className="egi-cta py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="currentColor" className="text-gold" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="
            inline-block
            px-4 py-1.5
            bg-gold/20 border border-gold/30
            rounded-full
            text-gold text-sm font-medium
            mb-6
          ">
            🚀 {t('cta.badge', 'Inizia Ora')}
          </span>
          
          {/* Title */}
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl
            font-display font-bold
            text-white
            mb-6
            leading-tight
          ">
            {t('cta.title')}
          </h2>
          
          {/* Description */}
          <p className="
            text-lg lg:text-xl
            text-white/70
            mb-10
            max-w-2xl mx-auto
            leading-relaxed
          ">
            {t('cta.description')}
          </p>
          
          {/* Buttons */}
          <div className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
          ">
            <CtaButton href="/explore" variant="primary">
              {t('cta.primary')}
              <span aria-hidden="true">→</span>
            </CtaButton>
            
            <CtaButton href="/create" variant="secondary">
              {t('cta.secondary')}
            </CtaButton>
            
            <CtaButton href="/contact" variant="tertiary">
              {t('cta.tertiary')}
            </CtaButton>
          </div>
          
          {/* Trust indicators */}
          <div className="
            mt-12
            flex flex-wrap items-center justify-center gap-8
            text-white/40 text-sm
          ">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              {t('cta.trust.noFees', 'Nessun costo nascosto')}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              {t('cta.trust.transparent', '100% trasparente')}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              {t('cta.trust.impact', 'Impatto ambientale positivo')}
            </div>
          </div>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default EgiCta;
