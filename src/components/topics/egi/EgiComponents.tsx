/**
 * EgiComponents - Sezione Componenti dell'EGI
 * 
 * SEO Features:
 * - Schema.org SoftwareSourceCode per ogni componente
 * - ARIA landmarks e live regions
 * - Semantic HTML con article/section
 * - i18n completo da namespace 'egi'
 * 
 * @module components/topics/egi/EgiComponents
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SoftwareSourceCodeSchema, ItemListSchema } from '@/utils/seo/SchemaOrg';
import { AriaLandmark } from '@/utils/seo/Aria';
import GlossaryTerm from '@/components/common/GlossaryTerm';

interface EgiComponentItemProps {
  id: string;
  icon: React.ReactNode;
  position: number;
}

/**
 * Singolo componente EGI con Schema.org
 */
const EgiComponentItem: React.FC<EgiComponentItemProps> = ({ 
  id, 
  icon,
  position 
}) => {
  const { t } = useTranslation('egi');
  
  const name = t(`components.items.${id}.name`);
  const description = t(`components.items.${id}.description`);
  const purpose = t(`components.items.${id}.purpose`);
  
  return (
    <article 
      className="egi-component-item group"
      aria-labelledby={`component-${id}`}
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      {/* Schema.org JSON-LD */}
      <SoftwareSourceCodeSchema
        name={name}
        description={description}
        programmingLanguage="TypeScript"
        runtimePlatform="Blockchain"
        codeRepository="https://github.com/egicoin/egi-protocol"
        license="https://opensource.org/licenses/MIT"
      />
      
      {/* Visual card */}
      <div className="
        relative
        p-6 lg:p-8
        bg-gradient-to-br from-dark-lighter/80 to-dark/60
        backdrop-blur-sm
        border border-gold/20 hover:border-gold/40
        rounded-2xl
        transition-all duration-500
        group-hover:shadow-xl group-hover:shadow-gold/10
        group-hover:-translate-y-1
      ">
        {/* Position indicator */}
        <span 
          className="
            absolute -top-3 -left-3
            w-8 h-8
            bg-gold text-dark
            rounded-full
            flex items-center justify-center
            font-bold text-sm
            shadow-lg
          "
          aria-hidden="true"
        >
          {position}
        </span>
        
        {/* Icon */}
        <div className="
          mb-4
          w-16 h-16
          bg-gradient-to-br from-gold/20 to-gold/5
          rounded-xl
          flex items-center justify-center
          text-gold text-3xl
          group-hover:scale-110
          transition-transform duration-300
        " aria-hidden="true">
          {icon}
        </div>
        
        {/* Content */}
        <h3 
          id={`component-${id}`}
          className="
            text-xl lg:text-2xl
            font-display font-bold
            text-white mb-3
          "
          itemProp="name"
        >
          {name}
        </h3>
        
        <p 
          className="text-white/70 mb-4 leading-relaxed"
          itemProp="description"
        >
          {description}
        </p>
        
        {/* Purpose tag */}
        <div className="
          inline-flex items-center gap-2
          px-3 py-1.5
          bg-gold/10 border border-gold/20
          rounded-full
          text-gold text-sm
        ">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" aria-hidden="true" />
          {purpose}
        </div>
      </div>
    </article>
  );
};

/**
 * EgiComponents - Griglia dei componenti dell'EGI
 */
const EgiComponents: React.FC = () => {
  const { t } = useTranslation('egi');
  
  // Component IDs - quelli che definiamo nel JSON
  const componentIds = [
    'digital-certificate',
    'blockchain-record', 
    'smart-contract',
    'metadata-layer',
    'verification-protocol'
  ];
  
  // Icons per ogni componente
  const icons: Record<string, React.ReactNode> = {
    'digital-certificate': '📜',
    'blockchain-record': '⛓️',
    'smart-contract': '📋',
    'metadata-layer': '🗄️',
    'verification-protocol': '✅'
  };
  
  // Build list items for Schema.org ItemList
  const listItems = componentIds.map((id, index) => ({
    name: t(`components.items.${id}.name`),
    description: t(`components.items.${id}.description`),
    url: `#component-${id}`,
    position: index + 1
  }));
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('components.ariaLabel', 'Componenti dell\'EGI')}
      className="egi-components py-16 lg:py-24"
    >
      {/* Schema.org ItemList for all components */}
      <ItemListSchema
        name={t('components.schemaName', 'Componenti EGI')}
        description={t('components.schemaDescription')}
        items={listItems}
      />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-gold to-white
            mb-4
          ">
            {t('components.title')}
          </h2>
          
          <p className="
            text-lg lg:text-xl
            text-white/70
            max-w-3xl mx-auto
            leading-relaxed
          ">
            {t('components.subtitle')}
          </p>
        </header>
        
        {/* Introduction */}
        <div className="
          max-w-4xl mx-auto mb-12
          p-6 lg:p-8
          bg-dark-lighter/50
          border-l-4 border-gold
          rounded-r-xl
        ">
          <p className="text-white/80 leading-relaxed">
            {t('components.intro.part1')}{' '}
            <GlossaryTerm termId="egi">
              {t('glossary:egi.term', 'EGI')}
            </GlossaryTerm>{' '}
            {t('components.intro.part2')}{' '}
            <GlossaryTerm termId="blockchain">
              {t('glossary:blockchain.term', 'blockchain')}
            </GlossaryTerm>{' '}
            {t('components.intro.part3')}
          </p>
        </div>
        
        {/* Components grid */}
        <div 
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6 lg:gap-8
          "
          role="list"
          aria-label={t('components.listLabel', 'Lista componenti EGI')}
        >
          {componentIds.map((id, index) => (
            <div key={id} role="listitem">
              <EgiComponentItem
                id={id}
                icon={icons[id]}
                position={index + 1}
              />
            </div>
          ))}
        </div>
        
        {/* Technical note */}
        <aside className="
          mt-12 lg:mt-16
          p-6
          bg-gradient-to-r from-gold/10 via-transparent to-gold/10
          border border-gold/20
          rounded-xl
          text-center
        ">
          <p className="text-white/60 text-sm">
            <span className="text-gold font-semibold">
              {t('components.techNote.label')}:
            </span>{' '}
            {t('components.techNote.text')}
          </p>
        </aside>
      </div>
    </AriaLandmark>
  );
};

export default EgiComponents;
