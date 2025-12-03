/**
 * FlorenceHero - Hero Section FlorenceEGI Platform
 * 
 * SEO Features:
 * - Schema.org WebApplication
 * - SeoHead per Open Graph
 * - ARIA landmarks
 * - i18n da namespace 'florence'
 * 
 * @module components/topics/florence/FlorenceHero
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SeoHead, SoftwareApplicationSchema, AriaLandmark } from '../../../utils/seo';

/**
 * FlorenceHero - Hero completo
 */
const FlorenceHero: React.FC = () => {
  const { t } = useTranslation('florence');
  
  return (
    <AriaLandmark
      as="header"
      role="banner"
      label={t('hero.ariaLabel', 'Intestazione FlorenceEGI')}
      className="florence-hero relative min-h-screen flex items-center overflow-hidden"
    >
      {/* SEO Head */}
      <SeoHead
        title={t('meta.title')}
        description={t('meta.description')}
        type="website"
      />
      
      {/* Schema.org SoftwareApplication */}
      <SoftwareApplicationSchema
        name="FlorenceEGI"
        description={t('hero.description')}
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={{
          price: "0",
          priceCurrency: "EUR"
        }}
      />
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient rinascimentale */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter/50 to-gold/10" />
        
        {/* Pattern Firenze */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="florence-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                {/* Giglio fiorentino stilizzato */}
                <path 
                  d="M40 10 L45 25 L55 25 L48 35 L52 50 L40 42 L28 50 L32 35 L25 25 L35 25 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  className="text-gold"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#florence-pattern)" />
          </svg>
        </div>
        
        {/* Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <span className="
            inline-flex items-center gap-2
            px-4 py-2
            bg-gold/20 border border-gold/30
            rounded-full
            text-gold text-sm font-medium
            mb-6
          ">
            ⚜️ {t('hero.badge')}
          </span>
          
          {/* Title - Logo-style */}
          <h1 className="
            text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            font-display font-bold
            mb-4
          ">
            <span className="
              text-transparent bg-clip-text
              bg-gradient-to-r from-gold via-gold-light to-gold
            ">
              Florence
            </span>
            <span className="text-white">EGI</span>
          </h1>
          
          {/* MOTTO - Se Esiste EGIZZALO */}
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl
            font-display font-bold
            mb-6
            leading-tight
          ">
            <span className="text-white">Se Esiste, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">EGIZZALO</span>
            <span className="text-white">.</span>
            <br />
            <span className="text-white">Se lo EGIZZI, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Vale</span>
            <span className="text-white">.</span>
          </h2>
          
          {/* Subheadline */}
          <p className="
            text-xl lg:text-2xl
            text-gold-light
            font-medium
            mb-6
          ">
            {t('hero.subheadline')}
          </p>
          
          {/* What We Do */}
          <p className="
            text-lg lg:text-xl
            text-white/70
            mb-10
            max-w-3xl mx-auto
            leading-relaxed
          ">
            {t('hero.whatWeDo')}
          </p>
          
          {/* CTA buttons */}
          <div className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
            mb-12
          ">
            <a
              href="/register"
              className="
                inline-flex items-center gap-2
                px-10 py-5
                bg-gradient-to-r from-gold to-gold-dark
                text-dark font-bold text-lg
                rounded-full
                shadow-lg shadow-gold/30
                hover:shadow-xl hover:shadow-gold/40
                hover:-translate-y-0.5
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark
              "
            >
              {t('hero.ctaPrimary')}
              <span aria-hidden="true">→</span>
            </a>
            
            <a
              href="#how-it-works"
              className="
                inline-flex items-center gap-2
                px-10 py-5
                bg-transparent
                border-2 border-gold/50
                text-gold font-semibold text-lg
                rounded-full
                hover:bg-gold/10
                hover:-translate-y-0.5
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-dark
              "
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="
            flex flex-wrap items-center justify-center gap-6
            text-white/40 text-sm
          ">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Algorand Blockchain
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Carbon Negative
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              EPP Integrati
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Made in Italy
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="
        absolute bottom-8 left-1/2 -translate-x-1/2
        animate-bounce
        text-gold/50
      " aria-hidden="true">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </AriaLandmark>
  );
};

export default FlorenceHero;
