/**
 * EgiTraitsUtilities - Sezione Traits e Utilità
 * 
 * Mostra le caratteristiche (traits) e le utilità concrete
 * che ogni EGI può offrire
 * 
 * SEO Features:
 * - Schema.org DefinedTerm per traits
 * - Schema.org Offer per utilities
 * - ARIA tabs per navigazione
 * - Semantic HTML
 * - i18n da namespace 'egi'
 * 
 * @module components/topics/egi/EgiTraitsUtilities
 */

import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DefinedTermSchema, ItemListSchema } from '@/utils/seo/SchemaOrg';
import { AriaLandmark, useAnnounce } from '@/utils/seo/Aria';
import { ArtTerm } from '@/components/common/GlossaryTerm';

type TabType = 'traits' | 'utilities';

interface TraitItemProps {
  category: string;
  examples: string[];
}

/**
 * Singolo trait con esempi
 */
const TraitItem: React.FC<TraitItemProps> = ({ category, examples }) => {
  const { t } = useTranslation('egi');
  
  // Parse category per estrazione sottocategoria
  const [mainCat, detail] = category.split(':').map(s => s.trim());
  
  return (
    <div className="
      trait-item
      p-4
      bg-dark-lighter/40
      border border-gold/10
      rounded-xl
      hover:border-gold/30
      transition-all duration-300
    ">
      <h4 className="
        text-sm font-semibold uppercase tracking-wider
        text-gold
        mb-2
      ">
        {mainCat}
      </h4>
      
      <div className="flex flex-wrap gap-2">
        {examples.map((example, idx) => (
          <span
            key={idx}
            className="
              inline-block
              px-3 py-1
              bg-gold/10
              text-white/80 text-sm
              rounded-full
            "
          >
            {example}
          </span>
        ))}
      </div>
    </div>
  );
};

interface UtilityItemProps {
  icon: string;
  title: string;
  description: string;
}

/**
 * Singola utilità
 */
const UtilityItem: React.FC<UtilityItemProps> = ({ icon, title, description }) => {
  return (
    <div className="
      utility-item
      flex items-start gap-4
      p-4
      bg-gradient-to-r from-gold/5 to-transparent
      border-l-2 border-gold/40
      rounded-r-lg
      hover:border-gold
      transition-all duration-300
    ">
      <span 
        className="text-2xl flex-shrink-0"
        aria-hidden="true"
      >
        {icon}
      </span>
      
      <div>
        <h4 className="
          text-white font-semibold
          mb-1
        ">
          {title}
        </h4>
        <p className="text-white/60 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

/**
 * EgiTraitsUtilities - Sezione completa
 */
const EgiTraitsUtilities: React.FC = () => {
  const { t } = useTranslation('egi');
  const announce = useAnnounce();
  const [activeTab, setActiveTab] = useState<TabType>('traits');
  
  // Dati traits dal JSON
  const traitsTitle = t('traitsUtilities.traits.title');
  const traitsDescription = t('traitsUtilities.traits.description');
  const traitsExamples = t('traitsUtilities.traits.examples', { returnObjects: true }) as string[];
  
  // Dati utilities dal JSON
  const utilitiesTitle = t('traitsUtilities.utilities.title');
  const utilitiesDescription = t('traitsUtilities.utilities.description');
  const utilitiesExamples = t('traitsUtilities.utilities.examples', { returnObjects: true }) as string[];
  
  // Parse traits examples (formato "Categoria: valore1, valore2")
  const parsedTraits = (traitsExamples || []).map(example => {
    const [category, values] = example.split(':').map(s => s.trim());
    return {
      category,
      examples: values ? values.split(',').map(v => v.trim()) : []
    };
  });
  
  // Utilities con icone
  const utilities = [
    { icon: '🎫', title: t('traitsUtilities.utilities.items.events.title'), description: t('traitsUtilities.utilities.items.events.description') },
    { icon: '💸', title: t('traitsUtilities.utilities.items.discounts.title'), description: t('traitsUtilities.utilities.items.discounts.description') },
    { icon: '🗳️', title: t('traitsUtilities.utilities.items.voting.title'), description: t('traitsUtilities.utilities.items.voting.description') },
    { icon: '🎁', title: t('traitsUtilities.utilities.items.content.title'), description: t('traitsUtilities.utilities.items.content.description') },
  ];
  
  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    announce(
      t('traitsUtilities.tabChanged', { tab: tab === 'traits' ? traitsTitle : utilitiesTitle }),
      'polite'
    );
  }, [announce, t, traitsTitle, utilitiesTitle]);
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('traitsUtilities.title')}
      className="egi-traits-utilities py-16 lg:py-24 bg-gradient-to-b from-transparent via-dark-lighter/10 to-transparent"
    >
      {/* Schema.org DefinedTerm per Traits */}
      <DefinedTermSchema
        name={traitsTitle}
        description={traitsDescription}
        inDefinedTermSet="EGI Traits System"
      />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="
            text-3xl lg:text-4xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('traitsUtilities.title')}
          </h2>
          <p className="
            text-lg text-white/70
            max-w-2xl mx-auto
          ">
            {t('traitsUtilities.subtitle')}
          </p>
        </header>
        
        {/* Tab buttons */}
        <div 
          role="tablist"
          aria-label={t('traitsUtilities.tablistLabel')}
          className="
            flex justify-center gap-4
            mb-10
          "
        >
          <button
            role="tab"
            aria-selected={activeTab === 'traits'}
            aria-controls="panel-traits"
            id="tab-traits"
            tabIndex={activeTab === 'traits' ? 0 : -1}
            onClick={() => handleTabChange('traits')}
            className={`
              px-6 py-3
              rounded-full
              font-medium
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-gold/50
              ${activeTab === 'traits'
                ? 'bg-gold text-dark shadow-lg shadow-gold/20'
                : 'bg-dark-lighter text-white/70 hover:text-white'
              }
            `}
          >
            🏷️ {traitsTitle}
          </button>
          
          <button
            role="tab"
            aria-selected={activeTab === 'utilities'}
            aria-controls="panel-utilities"
            id="tab-utilities"
            tabIndex={activeTab === 'utilities' ? 0 : -1}
            onClick={() => handleTabChange('utilities')}
            className={`
              px-6 py-3
              rounded-full
              font-medium
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-gold/50
              ${activeTab === 'utilities'
                ? 'bg-gold text-dark shadow-lg shadow-gold/20'
                : 'bg-dark-lighter text-white/70 hover:text-white'
              }
            `}
          >
            ⚡ {utilitiesTitle}
          </button>
        </div>
        
        {/* Tab panels */}
        <div className="max-w-4xl mx-auto">
          {/* Traits panel */}
          <div
            id="panel-traits"
            role="tabpanel"
            aria-labelledby="tab-traits"
            hidden={activeTab !== 'traits'}
            tabIndex={0}
            className={activeTab === 'traits' ? 'animate-fadeIn' : ''}
          >
            <p className="text-white/70 text-center mb-8">
              {traitsDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {parsedTraits.map((trait, index) => (
                <TraitItem 
                  key={index}
                  category={trait.category}
                  examples={trait.examples}
                />
              ))}
            </div>
            
            {/* Link to art vocabulary */}
            <div className="
              mt-8 p-4
              bg-dark-lighter/30
              border border-gold/20
              rounded-xl
              text-center
            ">
              <p className="text-white/60 text-sm">
                {t('traitsUtilities.traits.vocabNote', 'Per opere d\'arte, i traits seguono il vocabolario standardizzato CoA con oltre 350 termini tecnici.')}
              </p>
            </div>
          </div>
          
          {/* Utilities panel */}
          <div
            id="panel-utilities"
            role="tabpanel"
            aria-labelledby="tab-utilities"
            hidden={activeTab !== 'utilities'}
            tabIndex={0}
            className={activeTab === 'utilities' ? 'animate-fadeIn' : ''}
          >
            <p className="text-white/70 text-center mb-8">
              {utilitiesDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {utilities.map((utility, index) => (
                <UtilityItem 
                  key={index}
                  icon={utility.icon}
                  title={utility.title}
                  description={utility.description}
                />
              ))}
            </div>
            
            {/* Dynamic utilities note */}
            <div className="
              mt-8 p-4
              bg-gradient-to-r from-purple-500/10 to-transparent
              border border-purple-500/20
              rounded-xl
              text-center
            ">
              <p className="text-white/60 text-sm">
                <span className="text-purple-400 font-medium">INVENT:</span>{' '}
                {t('traitsUtilities.utilities.dynamicNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default EgiTraitsUtilities;
