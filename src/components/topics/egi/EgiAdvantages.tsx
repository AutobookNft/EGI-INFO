/**
 * EgiAdvantages - Sezione Vantaggi dell'EGI
 * 
 * Presenta i benefici dell'utilizzo degli EGI per diversi
 * stakeholder: artisti, collezionisti, gallerie, istituzioni
 * 
 * SEO Features:
 * - Schema.org ItemList per vantaggi
 * - ARIA tabs per navigazione stakeholder
 * - Semantic HTML con tabpanel pattern
 * - i18n completo da namespace 'egi'
 * 
 * @module components/topics/egi/EgiAdvantages
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ItemListSchema } from '@/utils/seo/SchemaOrg';
import { AriaLandmark, useAnnounce } from '@/utils/seo/Aria';

type StakeholderType = 'artists' | 'collectors' | 'galleries' | 'institutions';

interface AdvantageCardProps {
  id: string;
  stakeholder: StakeholderType;
  index: number;
}

/**
 * Card singolo vantaggio
 */
const AdvantageCard: React.FC<AdvantageCardProps> = ({ 
  id, 
  stakeholder,
  index 
}) => {
  const { t } = useTranslation('egi');
  
  const title = t(`advantages.${stakeholder}.items.${id}.title`);
  const description = t(`advantages.${stakeholder}.items.${id}.description`);
  
  return (
    <article 
      className="
        advantage-card
        group
        p-6
        bg-gradient-to-br from-dark-lighter/60 to-dark/40
        border border-gold/10 hover:border-gold/30
        rounded-xl
        transition-all duration-300
        hover:shadow-lg hover:shadow-gold/5
        hover:-translate-y-1
      "
      aria-labelledby={`advantage-${stakeholder}-${id}`}
    >
      {/* Number badge */}
      <span className="
        inline-flex items-center justify-center
        w-10 h-10
        bg-gold/10 group-hover:bg-gold/20
        text-gold
        rounded-lg
        font-bold text-lg
        mb-4
        transition-colors duration-300
      " aria-hidden="true">
        {(index + 1).toString().padStart(2, '0')}
      </span>
      
      <h4 
        id={`advantage-${stakeholder}-${id}`}
        className="
          text-lg font-display font-semibold
          text-white
          mb-2
        "
      >
        {title}
      </h4>
      
      <p className="text-white/60 text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
};

/**
 * Tab button per stakeholder
 */
interface TabButtonProps {
  stakeholder: StakeholderType;
  isActive: boolean;
  onClick: () => void;
  tabRef?: React.RefObject<HTMLButtonElement>;
}

const TabButton: React.FC<TabButtonProps> = ({
  stakeholder,
  isActive,
  onClick,
  tabRef
}) => {
  const { t } = useTranslation('egi');
  
  const icons: Record<StakeholderType, string> = {
    artists: '🎨',
    collectors: '🖼️',
    galleries: '🏛️',
    institutions: '🏢'
  };
  
  return (
    <button
      ref={tabRef as React.RefObject<HTMLButtonElement>}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${stakeholder}`}
      id={`tab-${stakeholder}`}
      tabIndex={isActive ? 0 : -1}
      onClick={onClick}
      className={`
        flex items-center gap-2
        px-6 py-3
        rounded-full
        font-medium
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-dark
        ${isActive 
          ? 'bg-gold text-dark shadow-lg shadow-gold/20' 
          : 'bg-dark-lighter/50 text-white/70 hover:bg-dark-lighter hover:text-white'
        }
      `}
    >
      <span aria-hidden="true">{icons[stakeholder]}</span>
      {t(`advantages.tabs.${stakeholder}`)}
    </button>
  );
};

/**
 * EgiAdvantages - Vantaggi per stakeholder
 */
const EgiAdvantages: React.FC = () => {
  const { t } = useTranslation('egi');
  const announce = useAnnounce();
  const [activeTab, setActiveTab] = useState<StakeholderType>('artists');
  
  // Refs for keyboard navigation
  const tabRefs = useRef<Record<StakeholderType, React.RefObject<HTMLButtonElement>>>({
    artists: useRef<HTMLButtonElement>(null),
    collectors: useRef<HTMLButtonElement>(null),
    galleries: useRef<HTMLButtonElement>(null),
    institutions: useRef<HTMLButtonElement>(null)
  });
  
  const stakeholders: StakeholderType[] = ['artists', 'collectors', 'galleries', 'institutions'];
  
  // Advantages per stakeholder
  const advantageIds: Record<StakeholderType, string[]> = {
    artists: ['royalties', 'authentication', 'visibility', 'control'],
    collectors: ['provenance', 'investment', 'verification', 'resale'],
    galleries: ['inventory', 'trust', 'digital-presence', 'transactions'],
    institutions: ['cataloging', 'preservation', 'research', 'transparency']
  };
  
  // Build ItemList for current tab
  const currentAdvantages = advantageIds[activeTab].map((id, index) => ({
    name: t(`advantages.${activeTab}.items.${id}.title`),
    description: t(`advantages.${activeTab}.items.${id}.description`),
    position: index + 1
  }));
  
  const handleTabChange = useCallback((stakeholder: StakeholderType) => {
    setActiveTab(stakeholder);
    announce(
      t('advantages.tabChanged', { tab: t(`advantages.tabs.${stakeholder}`) }),
      'polite'
    );
  }, [announce, t]);
  
  // Keyboard navigation for tabs
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const currentIndex = stakeholders.indexOf(activeTab);
    let newIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = (currentIndex + 1) % stakeholders.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = (currentIndex - 1 + stakeholders.length) % stakeholders.length;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = stakeholders.length - 1;
        break;
      default:
        return;
    }
    
    const newTab = stakeholders[newIndex];
    setActiveTab(newTab);
    tabRefs.current[newTab].current?.focus();
  }, [activeTab, stakeholders]);
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('advantages.ariaLabel', 'Vantaggi dell\'EGI per categoria')}
      className="egi-advantages py-16 lg:py-24"
    >
      {/* Schema.org ItemList for current tab advantages */}
      <ItemListSchema
        name={t(`advantages.${activeTab}.schemaName`)}
        description={t(`advantages.${activeTab}.schemaDescription`)}
        items={currentAdvantages}
      />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('advantages.title')}
          </h2>
          
          <p className="
            text-lg lg:text-xl
            text-white/70
            max-w-3xl mx-auto
          ">
            {t('advantages.subtitle')}
          </p>
        </header>
        
        {/* Tabs navigation */}
        <div 
          role="tablist"
          aria-label={t('advantages.tablistLabel')}
          className="
            flex flex-wrap justify-center gap-3
            mb-10 lg:mb-12
          "
          onKeyDown={handleKeyDown}
        >
          {stakeholders.map(stakeholder => (
            <TabButton
              key={stakeholder}
              stakeholder={stakeholder}
              isActive={activeTab === stakeholder}
              onClick={() => handleTabChange(stakeholder)}
              tabRef={tabRefs.current[stakeholder]}
            />
          ))}
        </div>
        
        {/* Tab panels */}
        {stakeholders.map(stakeholder => (
          <div
            key={stakeholder}
            id={`tabpanel-${stakeholder}`}
            role="tabpanel"
            aria-labelledby={`tab-${stakeholder}`}
            hidden={activeTab !== stakeholder}
            tabIndex={0}
            className={activeTab === stakeholder ? 'animate-fadeIn' : ''}
          >
            {/* Stakeholder intro */}
            <div className="
              max-w-3xl mx-auto text-center mb-10
              p-6
              bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5
              border border-gold/20
              rounded-xl
            ">
              <h3 className="text-xl font-display font-semibold text-gold mb-2">
                {t(`advantages.${stakeholder}.title`)}
              </h3>
              <p className="text-white/70">
                {t(`advantages.${stakeholder}.intro`)}
              </p>
            </div>
            
            {/* Advantages grid */}
            <div className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
              gap-6
            ">
              {advantageIds[stakeholder].map((id, index) => (
                <AdvantageCard
                  key={id}
                  id={id}
                  stakeholder={stakeholder}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
        
        {/* CTA */}
        <div className="
          mt-12 lg:mt-16
          text-center
        ">
          <p className="text-white/50 mb-6">
            {t('advantages.cta.text')}
          </p>
          
          <a
            href="#contact"
            className="
              inline-flex items-center gap-2
              px-8 py-4
              bg-gradient-to-r from-gold to-gold-dark
              text-dark font-semibold
              rounded-full
              shadow-lg shadow-gold/20
              hover:shadow-xl hover:shadow-gold/30
              hover:-translate-y-0.5
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark
            "
          >
            {t('advantages.cta.button')}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default EgiAdvantages;
