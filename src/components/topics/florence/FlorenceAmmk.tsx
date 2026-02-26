/**
 * FlorenceAmmk - Sezione AMMk (Automatic Market Maker killer)
 * 
 * I 5 motori di FlorenceEGI
 * 
 * SEO Features:
 * - Schema.org SoftwareApplication per ogni engine
 * - ARIA landmarks
 * - Semantic HTML
 * - i18n da namespace 'florence'
 * 
 * @module components/topics/florence/FlorenceAmmk
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SoftwareApplicationSchema, ItemListSchema, AriaLandmark } from '../../../utils/seo';

type EngineId = 'oracle' | 'matching' | 'liquidity' | 'analytics' | 'governance';

interface EngineData {
  id: EngineId;
  icon: string;
  color: string;
}

const engines: EngineData[] = [
  { id: 'oracle', icon: '🔮', color: 'purple' },
  { id: 'matching', icon: '🎯', color: 'blue' },
  { id: 'liquidity', icon: '💧', color: 'cyan' },
  { id: 'analytics', icon: '📊', color: 'green' },
  { id: 'governance', icon: '⚖️', color: 'gold' },
];

interface EngineCardProps {
  engine: EngineData;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Card singolo engine
 */
const EngineCard: React.FC<EngineCardProps> = ({ engine, isActive, onClick }) => {
  const { t } = useTranslation('florence');
  
  const title = t(`ammk.engines.${engine.id}.title`);
  const description = t(`ammk.engines.${engine.id}.description`);
  const features = t(`ammk.engines.${engine.id}.features`, { returnObjects: true }) as string[];
  
  return (
    <article 
      className={`
        engine-card
        cursor-pointer
        p-6
        bg-dark-lighter/40
        border-2 transition-all duration-300
        rounded-xl
        ${isActive 
          ? `border-${engine.color}-400/60 bg-${engine.color}-500/10 shadow-lg shadow-${engine.color}-500/10` 
          : 'border-white/10 hover:border-white/20'
        }
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-4">
        <span 
          className={`
            text-4xl
            ${isActive ? 'scale-110' : ''}
            transition-transform duration-300
          `}
          aria-hidden="true"
        >
          {engine.icon}
        </span>
        <h3 className={`
          text-xl font-display font-bold
          ${isActive ? 'text-white' : 'text-white/80'}
        `}>
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className={`
        text-sm leading-relaxed mb-4
        ${isActive ? 'text-white/80' : 'text-white/50'}
      `}>
        {description}
      </p>
      
      {/* Features (shown when active) */}
      {isActive && Array.isArray(features) && (
        <ul className="
          space-y-2
          animate-fadeIn
        ">
          {features.map((feature, idx) => (
            <li 
              key={idx}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

/**
 * FlorenceAmmk - Sezione completa
 */
const FlorenceAmmk: React.FC = () => {
  const { t } = useTranslation('florence');
  const [activeEngine, setActiveEngine] = useState<EngineId>('oracle');
  
  // Build items for Schema.org
  const schemaItems = engines.map((engine, index) => ({
    name: t(`ammk.engines.${engine.id}.title`),
    description: t(`ammk.engines.${engine.id}.description`),
    position: index + 1
  }));
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('ammk.ariaLabel')}
      className="florence-ammk py-16 lg:py-24"
    >
      {/* Schema.org ItemList */}
      <ItemListSchema
        name={t('ammk.schemaName')}
        description={t('ammk.schemaDescription')}
        items={schemaItems}
      />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
          <span className="
            inline-block
            px-4 py-1.5
            bg-purple-500/20 border border-purple-500/30
            rounded-full
            text-purple-400 text-sm font-medium
            mb-4
          ">
            ⚙️ {t('ammk.badge')}
          </span>
          
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('ammk.title')}
          </h2>
          
          <p className="
            text-lg text-white/70
            max-w-2xl mx-auto
          ">
            {t('ammk.subtitle')}
          </p>
        </header>
        
        {/* Visual representation */}
        <div className="
          max-w-5xl mx-auto
          mb-12
        ">
          {/* Central hub */}
          <div className="
            relative
            flex items-center justify-center
            py-8
          ">
            {/* Central logo */}
            <div className="
              w-32 h-32
              bg-gradient-to-br from-gold/20 to-purple-500/20
              border-2 border-gold/40
              rounded-full
              flex items-center justify-center
              z-10
            ">
              <span className="text-4xl font-display font-bold text-gold">
                AMMk
              </span>
            </div>
            
            {/* Connection lines (decorative) */}
            <div className="
              absolute inset-0
              flex items-center justify-center
            " aria-hidden="true">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>
          </div>
        </div>
        
        {/* Engines grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
          gap-4 lg:gap-6
        ">
          {engines.map((engine) => (
            <EngineCard
              key={engine.id}
              engine={engine}
              isActive={activeEngine === engine.id}
              onClick={() => setActiveEngine(engine.id)}
            />
          ))}
        </div>
        
        {/* Technical note */}
        <div className="
          mt-12
          max-w-3xl mx-auto
          p-6
          bg-dark-lighter/30
          border border-purple-500/20
          rounded-xl
          text-center
        ">
          <p className="text-white/50 text-sm">
            <span className="text-purple-400 font-medium">AMMk</span> = {t('ammk.techNote')}
          </p>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default FlorenceAmmk;
