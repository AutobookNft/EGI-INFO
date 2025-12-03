/**
 * EppHero - Hero Section per EPP
 * 
 * Sezione hero per la pagina dei Programmi di Protezione Ambientale (EPP)
 * 
 * SEO Features:
 * - Schema.org Organization per EPP
 * - Open Graph per condivisione social
 * - ARIA landmarks
 * - Semantic HTML
 * 
 * @module components/topics/epp/EppHero
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SeoHead, OrganizationSchema } from '@/utils/seo';
import { AriaLandmark } from '@/utils/seo/Aria';

interface EppHeroProps {
  /** Immagine hero personalizzata */
  heroImage?: string;
  /** Mostra particelle animate */
  showParticles?: boolean;
}

const EppHero: React.FC<EppHeroProps> = ({ 
  heroImage,
  showParticles = true 
}) => {
  const { t } = useTranslation('epp');
  
  return (
    <>
      {/* SEO Head */}
      <SeoHead
        title={t('meta.title')}
        description={t('meta.description')}
        type="website"
        image={heroImage || '/images/epp-hero.jpg'}
      />
      
      {/* Schema.org Organization for EPP */}
      <OrganizationSchema
        name="Environmental Protection Programs (EPP)"
        description={t('meta.description')}
        url="https://florenceegi.com/epp"
        logo="/images/epp-logo.png"
        sameAs={[
          'https://twitter.com/florenceegi',
          'https://linkedin.com/company/florenceegi'
        ]}
      />
      
      <AriaLandmark
        as="header"
        role="banner"
        label={t('hero.ariaLabel', 'Intestazione EPP')}
        className="epp-hero relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-dark to-emerald-900/30"
          aria-hidden="true"
        />
        
        {/* Animated particles - nature themed */}
        {showParticles && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Leaf particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={`leaf-${i}`}
                className="absolute text-2xl animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 7}s`,
                  opacity: 0.3
                }}
              >
                🍃
              </div>
            ))}
          </div>
        )}
        
        {/* Content container */}
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <span className="
            inline-flex items-center gap-2
            px-5 py-2
            bg-emerald-500/10 border border-emerald-500/30
            rounded-full
            text-emerald-400 text-sm font-medium
            mb-6
            animate-fadeInUp
          ">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            {t('hero.badge')}
          </span>
          
          {/* Main title */}
          <h1 className="
            text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
            font-display font-bold
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-emerald-200 to-white
            mb-6
            animate-fadeInUp
            [animation-delay:0.1s]
          ">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="
            text-lg sm:text-xl lg:text-2xl
            text-emerald-100/80
            max-w-3xl mx-auto
            mb-8
            animate-fadeInUp
            [animation-delay:0.2s]
          ">
            {t('hero.subtitle')}
          </p>
          
          {/* Stats row */}
          <div className="
            grid grid-cols-2 md:grid-cols-4
            gap-4 md:gap-6
            max-w-4xl mx-auto
            mb-10
            animate-fadeInUp
            [animation-delay:0.3s]
          ">
            {['trees', 'plastic', 'bees', 'impact'].map(stat => (
              <div 
                key={stat}
                className="
                  p-4
                  bg-white/5 backdrop-blur-sm
                  border border-emerald-500/20
                  rounded-xl
                "
              >
                <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                  {t(`hero.stats.${stat}.value`)}
                </div>
                <div className="text-sm text-white/60">
                  {t(`hero.stats.${stat}.label`)}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
            animate-fadeInUp
            [animation-delay:0.4s]
          ">
            <a
              href="#programs"
              className="
                inline-flex items-center gap-2
                px-8 py-4
                bg-gradient-to-r from-emerald-500 to-green-600
                text-white font-semibold
                rounded-full
                shadow-lg shadow-emerald-500/20
                hover:shadow-xl hover:shadow-emerald-500/30
                hover:-translate-y-0.5
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-dark
              "
            >
              {t('hero.cta.primary')}
              <span aria-hidden="true">🌱</span>
            </a>
            
            <a
              href="#impact"
              className="
                inline-flex items-center gap-2
                px-8 py-4
                bg-white/5 backdrop-blur-sm
                border border-emerald-500/30
                text-emerald-200
                rounded-full
                hover:bg-white/10
                hover:border-emerald-500/50
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-dark
              "
            >
              {t('hero.cta.secondary')}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          animate-bounce
          text-emerald-400/50
        " aria-hidden="true">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </AriaLandmark>
    </>
  );
};

export default EppHero;
