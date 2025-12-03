/**
 * EgiFunctions - Sezione Funzioni dell'EGI
 * 
 * Mostra le funzionalità principali dell'EGI in formato
 * timeline/accordion interattivo con Schema.org HowTo
 * 
 * SEO Features:
 * - Schema.org HowTo per processo di funzionamento
 * - ARIA expanded/collapsed per accordion
 * - Semantic HTML con details/summary fallback
 * - i18n completo da namespace 'egi'
 * 
 * @module components/topics/egi/EgiFunctions
 */

import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { HowToSchema } from '@/utils/seo/SchemaOrg';
import { AriaLandmark, useAnnounce } from '@/utils/seo/Aria';
import GlossaryTerm from '@/components/common/GlossaryTerm';

interface FunctionItemProps {
  id: string;
  stepNumber: number;
  isExpanded: boolean;
  onToggle: () => void;
}

/**
 * Singola funzione EGI in formato accordion
 */
const FunctionItem: React.FC<FunctionItemProps> = ({
  id,
  stepNumber,
  isExpanded,
  onToggle
}) => {
  const { t } = useTranslation('egi');
  const announce = useAnnounce();
  
  const title = t(`functions.items.${id}.title`);
  const description = t(`functions.items.${id}.description`);
  const details = t(`functions.items.${id}.details`, { returnObjects: true }) as string[];
  
  const handleToggle = useCallback(() => {
    onToggle();
    announce(
      isExpanded 
        ? t('functions.collapsed', { title })
        : t('functions.expanded', { title }),
      'polite'
    );
  }, [onToggle, isExpanded, announce, title, t]);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  }, [handleToggle]);
  
  return (
    <article 
      className={`
        function-item
        border border-gold/20
        rounded-xl
        overflow-hidden
        transition-all duration-300
        ${isExpanded ? 'bg-dark-lighter/60 shadow-lg shadow-gold/5' : 'bg-dark/40'}
      `}
    >
      {/* Header/Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={`function-content-${id}`}
        id={`function-header-${id}`}
        className="
          w-full
          flex items-center gap-4
          p-6 lg:p-8
          text-left
          hover:bg-gold/5
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold/50
        "
      >
        {/* Step number */}
        <span className={`
          flex-shrink-0
          w-12 h-12
          rounded-full
          flex items-center justify-center
          font-display font-bold text-lg
          transition-all duration-300
          ${isExpanded 
            ? 'bg-gold text-dark' 
            : 'bg-gold/20 text-gold'
          }
        `}>
          {stepNumber.toString().padStart(2, '0')}
        </span>
        
        {/* Title */}
        <h3 className="
          flex-grow
          text-xl lg:text-2xl
          font-display font-semibold
          text-white
        ">
          {title}
        </h3>
        
        {/* Expand icon */}
        <span 
          className={`
            flex-shrink-0
            w-8 h-8
            flex items-center justify-center
            text-gold text-2xl
            transition-transform duration-300
            ${isExpanded ? 'rotate-180' : ''}
          `}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      
      {/* Content panel */}
      <div
        id={`function-content-${id}`}
        role="region"
        aria-labelledby={`function-header-${id}`}
        hidden={!isExpanded}
        className={`
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6" />
          
          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Details list */}
          {Array.isArray(details) && details.length > 0 && (
            <ul className="space-y-3" role="list">
              {details.map((detail, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="
                    flex-shrink-0
                    w-6 h-6
                    bg-gold/20
                    rounded-full
                    flex items-center justify-center
                    text-gold text-xs
                    mt-0.5
                  " aria-hidden="true">
                    ✓
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

/**
 * EgiFunctions - Panoramica funzioni EGI
 */
const EgiFunctions: React.FC = () => {
  const { t } = useTranslation('egi');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Function IDs
  const functionIds = [
    'certification',
    'traceability',
    'authenticity',
    'ownership',
    'provenance'
  ];
  
  // Build steps for HowTo Schema
  const howToSteps = functionIds.map((id, index) => ({
    name: t(`functions.items.${id}.title`),
    text: t(`functions.items.${id}.description`),
    position: index + 1
  }));
  
  const handleToggle = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('functions.ariaLabel', 'Funzioni dell\'EGI')}
      className="egi-functions py-16 lg:py-24 bg-gradient-to-b from-transparent via-dark-lighter/20 to-transparent"
    >
      {/* Schema.org HowTo */}
      <HowToSchema
        name={t('functions.schemaName', 'Come funziona un EGI')}
        description={t('functions.schemaDescription')}
        steps={howToSteps}
        totalTime="PT5M"
      />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <header className="text-center mb-12 lg:mb-16">
          <span className="
            inline-block
            px-4 py-1.5
            bg-gold/10 border border-gold/30
            rounded-full
            text-gold text-sm font-medium
            mb-4
          ">
            {t('functions.badge')}
          </span>
          
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('functions.title')}
          </h2>
          
          <p className="
            text-lg lg:text-xl
            text-white/70
            max-w-3xl mx-auto
          ">
            {t('functions.subtitle')}
          </p>
        </header>
        
        {/* Context paragraph */}
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-white/70 leading-relaxed text-center">
            {t('functions.intro.part1')}{' '}
            <GlossaryTerm termId="smart-contract">
              {t('glossary:smart-contract.term', 'smart contract')}
            </GlossaryTerm>{' '}
            {t('functions.intro.part2')}
          </p>
        </div>
        
        {/* Functions accordion */}
        <div 
          className="max-w-4xl mx-auto space-y-4"
          role="group"
          aria-label={t('functions.groupLabel', 'Funzionalità EGI espandibili')}
        >
          {functionIds.map((id, index) => (
            <FunctionItem
              key={id}
              id={id}
              stepNumber={index + 1}
              isExpanded={expandedId === id}
              onToggle={() => handleToggle(id)}
            />
          ))}
        </div>
        
        {/* Expand all hint */}
        <p className="
          text-center text-white/40 text-sm
          mt-8
        " aria-live="polite">
          {expandedId 
            ? t('functions.hint.clickToCollapse')
            : t('functions.hint.clickToExpand')
          }
        </p>
      </div>
    </AriaLandmark>
  );
};

export default EgiFunctions;
