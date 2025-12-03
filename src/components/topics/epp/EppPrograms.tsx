/**
 * EppPrograms - Griglia dei 3 programmi EPP
 * 
 * Aggregatore per ARF, APR, BPE
 * 
 * SEO Features:
 * - Schema.org ItemList per i programmi
 * - ARIA tabs per navigazione
 * - Semantic HTML
 * - i18n da namespace 'epp'
 * 
 * @module components/topics/epp/EppPrograms
 */

import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ItemListSchema } from '@/utils/seo/SchemaOrg';
import { AriaLandmark, useAnnounce } from '@/utils/seo/Aria';
import EppProgramCard, { ProgramId } from './EppProgramCard';

/**
 * EppPrograms - Griglia completa
 */
const EppPrograms: React.FC = () => {
  const { t } = useTranslation('epp');
  const announce = useAnnounce();
  const [expandedProgram, setExpandedProgram] = useState<ProgramId | null>(null);
  
  const programs: ProgramId[] = ['arf', 'apr', 'bpe'];
  
  // Build items for Schema.org
  const schemaItems = programs.map((id, index) => ({
    name: t(`programs.${id}.fullName`),
    description: t(`programs.${id}.description`),
    url: `https://florenceegi.com/epp/${id}`,
    position: index + 1
  }));
  
  const handleToggle = useCallback((programId: ProgramId) => {
    setExpandedProgram(prev => {
      const newValue = prev === programId ? null : programId;
      
      if (newValue) {
        announce(
          t('programs.expanded', { program: t(`programs.${programId}.name`) }),
          'polite'
        );
      }
      
      return newValue;
    });
  }, [announce, t]);
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('programs.ariaLabel', 'I tre programmi EPP')}
      className="epp-programs py-16 lg:py-24"
      id="programs"
    >
      {/* Schema.org ItemList */}
      <ItemListSchema
        name={t('programs.schemaName', 'Programmi EPP')}
        description={t('programs.schemaDescription', 'I tre programmi di protezione ambientale EPP')}
        items={schemaItems}
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
            {t('programs.title')}
          </h2>
          
          <p className="
            text-lg text-white/70
            max-w-2xl mx-auto
          ">
            {t('programs.subtitle')}
          </p>
        </header>
        
        {/* Programs grid */}
        <div 
          className="
            grid grid-cols-1 lg:grid-cols-3
            gap-6 lg:gap-8
          "
          role="list"
          aria-label={t('programs.listLabel', 'Lista programmi EPP')}
        >
          {programs.map((programId) => (
            <div key={programId} role="listitem">
              <EppProgramCard
                programId={programId}
                isExpanded={expandedProgram === programId}
                onToggle={() => handleToggle(programId)}
              />
            </div>
          ))}
        </div>
        
        {/* How it works teaser */}
        <div className="
          mt-12 lg:mt-16
          p-6 lg:p-8
          bg-gradient-to-r from-green-500/10 via-blue-500/10 to-amber-500/10
          border border-white/10
          rounded-2xl
          text-center
        ">
          <h3 className="text-xl font-display font-semibold text-white mb-2">
            {t('programs.howTeaser.title', 'Come funziona il contributo?')}
          </h3>
          <p className="text-white/60 mb-4">
            {t('programs.howTeaser.description', 'Ogni transazione EGI destina automaticamente una percentuale ai programmi EPP.')}
          </p>
          <a
            href="#how-it-works"
            className="
              inline-flex items-center gap-2
              text-green-400
              hover:underline
            "
          >
            {t('programs.howTeaser.cta', 'Scopri come')}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default EppPrograms;
