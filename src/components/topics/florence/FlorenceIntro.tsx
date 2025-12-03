/**
 * FlorenceIntro.tsx
 * 
 * Introduzione al concetto FlorenceEGI
 * 
 * SEO: OrganizationSchema + DefinedTermSchema
 * ARIA: region landmark
 * i18n: florence.intro
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { OrganizationSchema, DefinedTermSchema, AriaLandmark } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface FlorenceIntroProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const FlorenceIntro: React.FC<FlorenceIntroProps> = ({
  id = 'florence-intro',
  className = ''
}) => {
  const { t } = useTranslation('florence');

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: Organization */}
      <OrganizationSchema
        name="FlorenceEGI Platform"
        description={t('intro.concept')}
        url="https://florenceegi.com"
        logo="https://florenceegi.com/images/logo.svg"
        sameAs={[
          'https://twitter.com/florenceegi',
          'https://linkedin.com/company/florenceegi'
        ]}
      />

      {/* Schema.org: DefinedTerm */}
      <DefinedTermSchema
        name="FlorenceEGI"
        description={t('intro.concept')}
        inDefinedTermSet="EGI Ecosystem"
      />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`florence-intro ${className}`.trim()}
      >
        <div className="florence-intro__container">
          {/* Title */}
          <h2 
            id={`${id}-title`}
            className="florence-intro__title"
          >
            {t('intro.title')}
          </h2>

          {/* Concept Card */}
          <div className="florence-intro__content">
            {/* Main Concept */}
            <div className="florence-intro__concept">
              <div className="florence-intro__concept-icon" aria-hidden="true">
                🌸
              </div>
              <p className="florence-intro__concept-text">
                {t('intro.concept')}
              </p>
            </div>

            {/* Vision */}
            <div className="florence-intro__vision">
              <div className="florence-intro__vision-icon" aria-hidden="true">
                🔭
              </div>
              <p className="florence-intro__vision-text">
                {t('intro.vision')}
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="florence-intro__pillars">
            <div className="florence-intro__pillar">
              <span className="florence-intro__pillar-icon" aria-hidden="true">🎨</span>
              <span className="florence-intro__pillar-label">Arte</span>
            </div>
            <div className="florence-intro__pillar">
              <span className="florence-intro__pillar-icon" aria-hidden="true">⚙️</span>
              <span className="florence-intro__pillar-label">Tecnologia</span>
            </div>
            <div className="florence-intro__pillar">
              <span className="florence-intro__pillar-icon" aria-hidden="true">🌱</span>
              <span className="florence-intro__pillar-label">Sostenibilità</span>
            </div>
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default FlorenceIntro;
