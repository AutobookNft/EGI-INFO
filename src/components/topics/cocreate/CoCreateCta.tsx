/**
 * CoCreateCta.tsx
 * 
 * Sezione CTA finale dell'ecosistema co-creativo
 * Tre opzioni: Creator, Co-Creator, Trader Pro
 * 
 * SEO: ActionSchema
 * ARIA: region + CTA cards
 * i18n: cocreate.cta
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark, JsonLd } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface CoCreateCtaProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

interface CtaOption {
  icon: string;
  title: string;
  description: string;
  cta: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const CoCreateCta: React.FC<CoCreateCtaProps> = ({
  id = 'cocreate-cta',
  className = ''
}) => {
  const { t } = useTranslation('cocreate');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const options = t('cta.options', { returnObjects: true }) as CtaOption[];

  const ctaUrls: Record<number, string> = {
    0: '/creator/register',
    1: '/explore/collections',
    2: '/trader-pro'
  };

  // Schema.org: Actions
  const actionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('cta.title'),
    description: t('cta.description'),
    itemListElement: options.map((option, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Action',
        name: option.title,
        description: option.description,
        target: ctaUrls[index]
      }
    }))
  };

  // ---------------------------------------------------------------------------
  // HANDLERS
  // ---------------------------------------------------------------------------

  const handleCtaClick = (index: number, title: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cocreate_cta_click', {
        event_category: 'engagement',
        event_label: title,
        value: index
      });
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: Actions */}
      <JsonLd data={actionsSchema} />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`cocreate-cta ${className}`.trim()}
      >
        <div className="cocreate-cta__container">
          {/* Background */}
          <div className="cocreate-cta__background" aria-hidden="true">
            <div className="cocreate-cta__gradient" />
          </div>

          {/* Header */}
          <header className="cocreate-cta__header">
            <h2 id={`${id}-title`} className="cocreate-cta__title">
              {t('cta.title')}
            </h2>
            <p className="cocreate-cta__description">
              {t('cta.description')}
            </p>
          </header>

          {/* Options Grid */}
          <div className="cocreate-cta__options">
            {options.map((option, index) => (
              <article key={index} className="cocreate-cta__option">
                <span className="cocreate-cta__option-icon" aria-hidden="true">
                  {option.icon}
                </span>
                <h3 className="cocreate-cta__option-title">
                  {option.title}
                </h3>
                <p className="cocreate-cta__option-description">
                  {option.description}
                </p>
                <a
                  href={ctaUrls[index]}
                  className="cocreate-cta__option-button"
                  onClick={() => handleCtaClick(index, option.title)}
                >
                  {option.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default CoCreateCta;
