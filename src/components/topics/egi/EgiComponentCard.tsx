/**
 * EgiComponentCard - Card riutilizzabile per le 3 componenti EGI
 * 
 * Usata per EPP, GOODS, INVENT - le tre colonne portanti
 * 
 * SEO Features:
 * - Schema.org Product per ogni componente
 * - ARIA landmarks
 * - Semantic HTML
 * - i18n da namespace 'egi'
 * 
 * @module components/topics/egi/EgiComponentCard
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark } from '@/utils/seo/Aria';
import GlossaryTerm from '@/components/common/GlossaryTerm';

export type ComponentType = 'epp' | 'goods' | 'creativity';

interface EgiComponentCardProps {
  type: ComponentType;
  isExpanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

/**
 * Singola card componente EGI (EPP/GOODS/INVENT)
 */
const EgiComponentCard: React.FC<EgiComponentCardProps> = ({
  type,
  isExpanded = false,
  onToggle,
  className = ''
}) => {
  const { t } = useTranslation('egi');
  
  // Dati dal JSON
  const icon = t(`components.${type}.icon`);
  const badge = t(`components.${type}.badge`);
  const title = t(`components.${type}.title`);
  const shortTitle = t(`components.${type}.shortTitle`);
  const description = t(`components.${type}.description`);
  const features = t(`components.${type}.features`, { returnObjects: true }) as string[];
  const cta = t(`components.${type}.cta`);
  
  // Colori per tipo
  const colors: Record<ComponentType, { gradient: string; border: string; glow: string }> = {
    epp: {
      gradient: 'from-green-500/20 to-emerald-500/10',
      border: 'border-green-500/30 hover:border-green-400/50',
      glow: 'shadow-green-500/20'
    },
    goods: {
      gradient: 'from-gold/20 to-amber-500/10',
      border: 'border-gold/30 hover:border-gold/50',
      glow: 'shadow-gold/20'
    },
    creativity: {
      gradient: 'from-purple-500/20 to-violet-500/10',
      border: 'border-purple-500/30 hover:border-purple-400/50',
      glow: 'shadow-purple-500/20'
    }
  };
  
  const color = colors[type];
  
  // Glossary term ID per ogni tipo
  const glossaryIds: Record<ComponentType, string> = {
    epp: 'epp',
    goods: 'goods',
    creativity: 'invent'
  };
  
  return (
    <article
      className={`
        egi-component-card
        relative
        bg-gradient-to-br ${color.gradient}
        border ${color.border}
        rounded-2xl
        overflow-hidden
        transition-all duration-500
        hover:shadow-xl hover:${color.glow}
        ${isExpanded ? 'lg:col-span-2' : ''}
        ${className}
      `}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Hidden Schema.org data */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      
      {/* Header */}
      <header className="p-6 lg:p-8">
        {/* Badge */}
        <span className="
          inline-block
          px-3 py-1
          text-xs font-medium uppercase tracking-wider
          bg-white/10
          rounded-full
          mb-4
        ">
          {badge}
        </span>
        
        {/* Icon + Title */}
        <div className="flex items-start gap-4">
          <span 
            className="text-4xl lg:text-5xl"
            aria-hidden="true"
          >
            {icon}
          </span>
          
          <div>
            <h3 
              className="
                text-xl lg:text-2xl
                font-display font-bold
                text-white
                mb-2
              "
              itemProp="name"
            >
              <GlossaryTerm termId={glossaryIds[type]}>
                {shortTitle}
              </GlossaryTerm>
              <span className="text-white/50 font-normal"> - </span>
              <span className="text-white/80 font-normal text-lg">
                {title.replace(`${shortTitle} - `, '')}
              </span>
            </h3>
          </div>
        </div>
      </header>
      
      {/* Description */}
      <div className="px-6 lg:px-8 pb-4">
        <p 
          className="text-white/70 leading-relaxed"
          itemProp="description"
        >
          {description}
        </p>
      </div>
      
      {/* Features list */}
      {Array.isArray(features) && features.length > 0 && (
        <div className="px-6 lg:px-8 pb-6">
          <ul 
            className="space-y-2"
            role="list"
            aria-label={t('components.featuresLabel', 'Caratteristiche')}
          >
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-white/60 text-sm"
              >
                <span className="w-1.5 h-1.5 bg-current rounded-full" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* CTA / Expand toggle */}
      <footer className="
        px-6 lg:px-8 py-4
        border-t border-white/10
        bg-white/5
      ">
        {onToggle ? (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isExpanded}
            className="
              flex items-center justify-between w-full
              text-sm text-white/60 hover:text-white
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-gold/50
            "
          >
            <span>{isExpanded ? t('components.showLess', 'Mostra meno') : t('components.showMore', 'Scopri di più')}</span>
            <span 
              className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
        ) : (
          <a
            href={`#${type}`}
            className="
              inline-flex items-center gap-2
              text-sm text-gold hover:text-gold-light
              font-medium
              transition-colors duration-200
            "
          >
            {cta}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </footer>
    </article>
  );
};

/**
 * EgiThreeComponents - Griglia delle 3 componenti
 */
export const EgiThreeComponents: React.FC = () => {
  const { t } = useTranslation('egi');
  const [expandedType, setExpandedType] = React.useState<ComponentType | null>(null);
  
  const handleToggle = (type: ComponentType) => {
    setExpandedType(prev => prev === type ? null : type);
  };
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('components.threeComponents.title')}
      className="egi-three-components py-16 lg:py-24"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('components.threeComponents.title')}
          </h2>
          <p className="
            text-lg text-white/70
            max-w-3xl mx-auto
          ">
            {t('components.threeComponents.subtitle')}
          </p>
        </header>
        
        {/* Grid */}
        <div className="
          grid grid-cols-1 lg:grid-cols-3
          gap-6 lg:gap-8
        ">
          <EgiComponentCard 
            type="epp" 
            isExpanded={expandedType === 'epp'}
            onToggle={() => handleToggle('epp')}
          />
          <EgiComponentCard 
            type="goods"
            isExpanded={expandedType === 'goods'}
            onToggle={() => handleToggle('goods')}
          />
          <EgiComponentCard 
            type="creativity"
            isExpanded={expandedType === 'creativity'}
            onToggle={() => handleToggle('creativity')}
          />
        </div>
      </div>
    </AriaLandmark>
  );
};

export default EgiComponentCard;
