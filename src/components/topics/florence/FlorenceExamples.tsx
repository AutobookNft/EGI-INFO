/**
 * FlorenceExamples - Sezione Esempi per Settore
 * 
 * Tabs per diversi settori: art, music, books, eco, sport, fashion, culture
 * 
 * SEO Features:
 * - Schema.org ItemList per esempi
 * - ARIA tabs pattern
 * - Semantic HTML
 * - i18n da namespace 'florence'
 * 
 * @module components/topics/florence/FlorenceExamples
 */

import React, { useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ItemListSchema, AriaLandmark, useAnnounce } from '../../../utils/seo';

type SectorId = 'art' | 'music' | 'books' | 'eco' | 'sport' | 'fashion' | 'culture';

interface SectorTab {
  id: SectorId;
  icon: string;
  color: string;
}

const sectors: SectorTab[] = [
  { id: 'art', icon: '🎨', color: 'purple' },
  { id: 'music', icon: '🎵', color: 'pink' },
  { id: 'books', icon: '📚', color: 'amber' },
  { id: 'eco', icon: '🌱', color: 'green' },
  { id: 'sport', icon: '⚽', color: 'blue' },
  { id: 'fashion', icon: '👗', color: 'rose' },
  { id: 'culture', icon: '🏛️', color: 'gold' },
];

interface ExampleCardProps {
  sectorId: SectorId;
  exampleIndex: number;
}

/**
 * Card singolo esempio
 */
const ExampleCard: React.FC<ExampleCardProps> = ({ sectorId, exampleIndex }) => {
  const { t } = useTranslation('florence');
  
  const title = t(`examples.${sectorId}.examples.${exampleIndex}.title`, '');
  const description = t(`examples.${sectorId}.examples.${exampleIndex}.description`, '');
  const useCase = t(`examples.${sectorId}.examples.${exampleIndex}.useCase`, '');
  
  if (!title) return null;
  
  return (
    <article className="
      example-card
      p-6
      bg-dark-lighter/40
      border border-gold/10
      rounded-xl
      hover:border-gold/30
      transition-all duration-300
    ">
      <h4 className="text-lg font-semibold text-white mb-2">
        {title}
      </h4>
      <p className="text-white/60 text-sm mb-3">
        {description}
      </p>
      {useCase && (
        <span className="
          inline-block
          px-3 py-1
          bg-gold/10
          text-gold text-xs
          rounded-full
        ">
          {useCase}
        </span>
      )}
    </article>
  );
};

/**
 * FlorenceExamples - Sezione completa
 */
const FlorenceExamples: React.FC = () => {
  const { t } = useTranslation('florence');
  const announce = useAnnounce();
  const [activeSector, setActiveSector] = useState<SectorId>('art');
  const tabListRef = useRef<HTMLDivElement>(null);
  
  // Esempi per settore attivo (assumiamo 3 per settore)
  const exampleIndices = [0, 1, 2];
  
  // Build items for Schema.org
  const schemaItems = exampleIndices.map((idx, position) => ({
    name: t(`examples.${activeSector}.examples.${idx}.title`, ''),
    description: t(`examples.${activeSector}.examples.${idx}.description`, ''),
    position: position + 1
  })).filter(item => item.name);
  
  const handleSectorChange = useCallback((sector: SectorId) => {
    setActiveSector(sector);
    announce(
      t('examples.sectorChanged', { sector: t(`examples.${sector}.title`) }),
      'polite'
    );
  }, [announce, t]);
  
  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const currentIndex = sectors.findIndex(s => s.id === activeSector);
    let newIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = (currentIndex + 1) % sectors.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = (currentIndex - 1 + sectors.length) % sectors.length;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = sectors.length - 1;
        break;
      default:
        return;
    }
    
    setActiveSector(sectors[newIndex].id);
  }, [activeSector]);
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('examples.ariaLabel', 'Esempi per settore')}
      className="florence-examples py-16 lg:py-24 bg-gradient-to-b from-transparent via-dark-lighter/10 to-transparent"
    >
      {/* Schema.org ItemList */}
      <ItemListSchema
        name={t(`examples.${activeSector}.title`)}
        description={t(`examples.${activeSector}.description`)}
        items={schemaItems}
      />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('examples.title')}
          </h2>
          
          <p className="
            text-lg text-white/70
            max-w-2xl mx-auto
          ">
            {t('examples.subtitle')}
          </p>
        </header>
        
        {/* Sector tabs */}
        <div 
          ref={tabListRef}
          role="tablist"
          aria-label={t('examples.tablistLabel', 'Seleziona settore')}
          className="
            flex flex-wrap justify-center gap-2 lg:gap-3
            mb-10
          "
          onKeyDown={handleKeyDown}
        >
          {sectors.map((sector) => (
            <button
              key={sector.id}
              role="tab"
              aria-selected={activeSector === sector.id}
              aria-controls={`panel-${sector.id}`}
              id={`tab-${sector.id}`}
              tabIndex={activeSector === sector.id ? 0 : -1}
              onClick={() => handleSectorChange(sector.id)}
              className={`
                flex items-center gap-2
                px-4 py-2.5
                rounded-full
                font-medium text-sm
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-gold/50
                ${activeSector === sector.id
                  ? 'bg-gold text-dark shadow-lg shadow-gold/20'
                  : 'bg-dark-lighter/50 text-white/70 hover:text-white hover:bg-dark-lighter'
                }
              `}
            >
              <span aria-hidden="true">{sector.icon}</span>
              {t(`examples.${sector.id}.title`)}
            </button>
          ))}
        </div>
        
        {/* Sector panels */}
        {sectors.map((sector) => (
          <div
            key={sector.id}
            id={`panel-${sector.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${sector.id}`}
            hidden={activeSector !== sector.id}
            tabIndex={0}
            className={activeSector === sector.id ? 'animate-fadeIn' : ''}
          >
            {/* Sector intro */}
            <div className="
              max-w-3xl mx-auto text-center mb-10
              p-6
              bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5
              border border-gold/20
              rounded-xl
            ">
              <h3 className="text-xl font-display font-semibold text-gold mb-2">
                <span className="mr-2" aria-hidden="true">{sector.icon}</span>
                {t(`examples.${sector.id}.title`)}
              </h3>
              <p className="text-white/70">
                {t(`examples.${sector.id}.description`)}
              </p>
            </div>
            
            {/* Examples grid */}
            <div className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              gap-6
            ">
              {exampleIndices.map((idx) => (
                <ExampleCard
                  key={idx}
                  sectorId={sector.id}
                  exampleIndex={idx}
                />
              ))}
            </div>
          </div>
        ))}
        
        {/* See more CTA */}
        <div className="
          mt-12
          text-center
        ">
          <a
            href="/explore"
            className="
              inline-flex items-center gap-2
              text-gold hover:text-gold-light
              hover:underline
            "
          >
            {t('examples.seeAll', 'Esplora tutte le collezioni')}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default FlorenceExamples;
