/**
 * Disclaimer.tsx
 * 
 * Sezione disclaimer legale
 * - Natura degli EGI
 * - Compliance normativa (MiCA, GDPR)
 * - Avvertenze sui rischi
 * 
 * SEO: WebPage + LegalDocument schema
 * ARIA: region + article structure
 * i18n: info.disclaimer
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark, JsonLd } from '../../utils/seo';
import { GlossaryTerm } from './GlossaryTerm';

// =============================================================================
// TYPES
// =============================================================================

interface DisclaimerProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
  /** Versione compatta per footer */
  compact?: boolean;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const Disclaimer: React.FC<DisclaimerProps> = ({
  id = 'disclaimer',
  className = '',
  compact = false
}) => {
  const { t } = useTranslation('info');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const sections = [
    {
      key: 'nature',
      icon: '📜',
      title: t('disclaimer.sections.nature.title'),
      description: t('disclaimer.sections.nature.description')
    },
    {
      key: 'compliance',
      icon: '⚖️',
      title: t('disclaimer.sections.compliance.title'),
      description: t('disclaimer.sections.compliance.description')
    },
    {
      key: 'risks',
      icon: '⚠️',
      title: t('disclaimer.sections.risks.title'),
      description: t('disclaimer.sections.risks.description')
    }
  ];

  // Schema.org: WebPage with legal content
  const legalSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('disclaimer.title'),
    description: t('disclaimer.subtitle'),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.disclaimer__content']
    },
    about: {
      '@type': 'Thing',
      name: 'Legal Information',
      description: 'Legal disclaimer and compliance information for FlorenceEGI platform'
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER HELPERS
  // ---------------------------------------------------------------------------

  const renderDescription = (description: string) => {
    // Replace {{term}} with GlossaryTerm components
    const parts = description.split(/({{[^}]+}})/g);
    
    return parts.map((part, index) => {
      const match = part.match(/{{([^}]+)}}/);
      if (match) {
        const term = match[1];
        return (
          <GlossaryTerm key={index} termKey={term}>
            {term.toUpperCase()}
          </GlossaryTerm>
        );
      }
      return part;
    });
  };

  // ---------------------------------------------------------------------------
  // RENDER: COMPACT
  // ---------------------------------------------------------------------------

  if (compact) {
    return (
      <aside className={`disclaimer disclaimer--compact ${className}`.trim()}>
        <p className="disclaimer__compact-text">
          {t('disclaimer.sections.risks.description')}
        </p>
      </aside>
    );
  }

  // ---------------------------------------------------------------------------
  // RENDER: FULL
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: Legal Page */}
      <JsonLd data={legalSchema} />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`disclaimer ${className}`.trim()}
      >
        <div className="disclaimer__container">
          {/* Header */}
          <header className="disclaimer__header">
            <span className="disclaimer__badge">
              {t('disclaimer.badge')}
            </span>
            <h2 id={`${id}-title`} className="disclaimer__title">
              {t('disclaimer.title')}
            </h2>
            <p className="disclaimer__subtitle">
              {t('disclaimer.subtitle')}
            </p>
          </header>

          {/* Content */}
          <div className="disclaimer__content">
            {sections.map((section) => (
              <article key={section.key} className="disclaimer__section">
                <span className="disclaimer__section-icon" aria-hidden="true">
                  {section.icon}
                </span>
                <div className="disclaimer__section-content">
                  <h3 className="disclaimer__section-title">
                    {section.title}
                  </h3>
                  <p className="disclaimer__section-description">
                    {renderDescription(section.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Related Terms */}
          <footer className="disclaimer__footer">
            <span className="disclaimer__related-label">
              {t('disclaimer.relatedTerms')}:
            </span>
            <div className="disclaimer__related-terms">
              <GlossaryTerm termKey="egi">EGI</GlossaryTerm>
              <GlossaryTerm termKey="mica">MiCA</GlossaryTerm>
              <GlossaryTerm termKey="gdpr">GDPR</GlossaryTerm>
              <GlossaryTerm termKey="kyc">KYC</GlossaryTerm>
            </div>
          </footer>
        </div>
      </AriaLandmark>
    </>
  );
};

export default Disclaimer;
