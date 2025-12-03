/**
 * CoCreateConcept.tsx
 * 
 * Il concetto di Co-Creare in FlorenceEGI
 * - Atto della creazione condivisa
 * - Dal privato al pubblico
 * - L'opportunità unica
 * 
 * SEO: DefinedTermSchema + HowToSchema
 * ARIA: region landmark
 * i18n: cocreate.cocreate
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { DefinedTermSchema, HowToSchema, AriaLandmark } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface CoCreateConceptProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const CoCreateConcept: React.FC<CoCreateConceptProps> = ({
  id = 'cocreate-concept',
  className = ''
}) => {
  const { t } = useTranslation('cocreate');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const benefits = t('cocreate.privateToPublic.benefits', { 
    returnObjects: true 
  }) as Benefit[];

  // Schema HowTo steps
  const howToSteps = [
    {
      name: t('cocreate.sharedCreation.title'),
      text: t('cocreate.sharedCreation.content')
    },
    {
      name: t('cocreate.privateToPublic.title'),
      text: t('cocreate.privateToPublic.content')
    },
    {
      name: t('cocreate.uniqueOpportunity.title'),
      text: t('cocreate.uniqueOpportunity.content')
    }
  ];

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: DefinedTerm */}
      <DefinedTermSchema
        name="Co-Creare"
        description={t('cocreate.sharedCreation.content')}
        inDefinedTermSet="FlorenceEGI Ecosystem"
      />

      {/* Schema.org: HowTo */}
      <HowToSchema
        name={t('cocreate.title')}
        description={t('cocreate.subtitle')}
        steps={howToSteps}
      />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`cocreate-concept ${className}`.trim()}
      >
        <div className="cocreate-concept__container">
          {/* Header */}
          <header className="cocreate-concept__header">
            <h2 id={`${id}-title`} className="cocreate-concept__title">
              {t('cocreate.title')}
            </h2>
            <p className="cocreate-concept__subtitle">
              {t('cocreate.subtitle')}
            </p>
          </header>

          {/* Content Grid */}
          <div className="cocreate-concept__grid">
            {/* Shared Creation */}
            <article className="cocreate-concept__card cocreate-concept__card--shared">
              <div className="cocreate-concept__card-icon" aria-hidden="true">🎨</div>
              <h3 className="cocreate-concept__card-title">
                {t('cocreate.sharedCreation.title')}
              </h3>
              <p className="cocreate-concept__card-content">
                {t('cocreate.sharedCreation.content')}
              </p>
              <blockquote className="cocreate-concept__highlight">
                <span className="cocreate-concept__highlight-icon" aria-hidden="true">💡</span>
                {t('cocreate.sharedCreation.highlight')}
              </blockquote>
            </article>

            {/* Private to Public */}
            <article className="cocreate-concept__card cocreate-concept__card--transition">
              <div className="cocreate-concept__card-icon" aria-hidden="true">🔄</div>
              <h3 className="cocreate-concept__card-title">
                {t('cocreate.privateToPublic.title')}
              </h3>
              <p className="cocreate-concept__card-content">
                {t('cocreate.privateToPublic.content')}
              </p>
              
              {/* Benefits */}
              <ul className="cocreate-concept__benefits">
                {benefits.map((benefit, index) => (
                  <li key={index} className="cocreate-concept__benefit">
                    <span className="cocreate-concept__benefit-icon" aria-hidden="true">
                      {benefit.icon}
                    </span>
                    <div className="cocreate-concept__benefit-content">
                      <strong>{benefit.title}</strong>
                      <span>{benefit.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* Unique Opportunity */}
            <article className="cocreate-concept__card cocreate-concept__card--unique">
              <div className="cocreate-concept__card-icon" aria-hidden="true">✨</div>
              <h3 className="cocreate-concept__card-title">
                {t('cocreate.uniqueOpportunity.title')}
              </h3>
              <p className="cocreate-concept__card-content">
                {t('cocreate.uniqueOpportunity.content')}
              </p>
            </article>
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default CoCreateConcept;
