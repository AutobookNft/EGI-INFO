/**
 * EppContribute - Sezione CTA contributo EPP
 * 
 * Come partecipare ai programmi EPP
 * 
 * SEO Features:
 * - Schema.org HowTo per i passaggi
 * - ARIA landmarks
 * - Semantic HTML
 * - i18n da namespace 'epp'
 * 
 * @module components/topics/epp/EppContribute
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { HowToSchema } from '@/utils/seo/SchemaOrg';
import { AriaLandmark } from '@/utils/seo/Aria';

interface WayCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

/**
 * Card singolo modo di partecipare
 */
const WayCard: React.FC<WayCardProps> = ({ icon, title, description, index }) => {
  return (
    <div className="
      way-card
      group
      p-6
      bg-dark-lighter/40
      border border-green-500/10
      rounded-xl
      hover:border-green-500/30
      hover:bg-dark-lighter/60
      transition-all duration-300
      text-center
    ">
      {/* Step number */}
      <span className="
        absolute -top-3 -right-3
        w-8 h-8
        bg-green-500 text-dark
        rounded-full
        flex items-center justify-center
        font-bold text-sm
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      " aria-hidden="true">
        {index + 1}
      </span>
      
      {/* Icon */}
      <span 
        className="
          text-4xl mb-4 block
          group-hover:scale-110
          transition-transform duration-300
        "
        aria-hidden="true"
      >
        {icon}
      </span>
      
      {/* Title */}
      <h3 className="
        text-lg font-semibold
        text-white
        mb-2
      ">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/60 text-sm">
        {description}
      </p>
    </div>
  );
};

/**
 * EppContribute - Sezione completa
 */
const EppContribute: React.FC = () => {
  const { t } = useTranslation('epp');
  
  // Ways to participate dal JSON
  const ways = t('participation.ways', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  
  // Steps for HowTo schema
  const howToSteps = Array.isArray(ways) ? ways.map((way, index) => ({
    name: way.title,
    text: way.description,
    position: index + 1
  })) : [];
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('participation.ariaLabel', 'Come partecipare')}
      className="epp-contribute py-16 lg:py-24 bg-gradient-to-b from-transparent via-green-900/10 to-transparent"
    >
      {/* Schema.org HowTo */}
      <HowToSchema
        name={t('participation.schemaName', 'Come contribuire agli EPP')}
        description={t('participation.schemaDescription', 'Modi per partecipare ai programmi di protezione ambientale')}
        steps={howToSteps}
        totalTime="PT5M"
      />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('participation.title')}
          </h2>
          
          <p className="
            text-lg text-white/70
            max-w-2xl mx-auto
          ">
            {t('participation.subtitle')}
          </p>
        </header>
        
        {/* Ways grid */}
        {Array.isArray(ways) && (
          <div 
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-6
              mb-12
            "
            role="list"
          >
            {ways.map((way, index) => (
              <div key={index} role="listitem" className="relative">
                <WayCard
                  icon={way.icon}
                  title={way.title}
                  description={way.description}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
        
        {/* CTA */}
        <div className="
          max-w-2xl mx-auto
          p-8
          bg-gradient-to-r from-green-500/20 to-emerald-500/20
          border border-green-500/30
          rounded-2xl
          text-center
        ">
          <h3 className="
            text-2xl font-display font-bold
            text-white
            mb-4
          ">
            {t('cta.title')}
          </h3>
          
          <p className="text-white/70 mb-6">
            {t('cta.description')}
          </p>
          
          <div className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
          ">
            <a
              href="/explore"
              className="
                inline-flex items-center gap-2
                px-8 py-4
                bg-gradient-to-r from-green-500 to-emerald-600
                text-white font-semibold
                rounded-full
                shadow-lg shadow-green-500/30
                hover:shadow-xl hover:shadow-green-500/40
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              {t('cta.primary')}
              <span aria-hidden="true">→</span>
            </a>
            
            <a
              href="/create"
              className="
                inline-flex items-center gap-2
                px-8 py-4
                bg-transparent
                border-2 border-green-500/50
                text-green-400 font-semibold
                rounded-full
                hover:bg-green-500/10
                transition-all duration-300
              "
            >
              {t('cta.secondary')}
            </a>
          </div>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default EppContribute;
