/**
 * CoCreateHero.tsx
 * 
 * Hero section dell'ecosistema co-creativo
 * Badge per Co-Creare, Co-Creatori, Trader Pro
 * 
 * SEO: SeoHead + OrganizationSchema
 * ARIA: banner landmark
 * i18n: cocreate.hero
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SeoHead, OrganizationSchema, AriaLandmark } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface CoCreateHeroProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const CoCreateHero: React.FC<CoCreateHeroProps> = ({
  id = 'cocreate-hero',
  className = ''
}) => {
  const { t } = useTranslation('cocreate');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const badges = [
    { key: 'cocreate', icon: '🎨', label: t('hero.badges.cocreate') },
    { key: 'cocreator', icon: '🔗', label: t('hero.badges.cocreator') },
    { key: 'trader', icon: '📈', label: t('hero.badges.trader') }
  ];

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* SEO Head */}
      <SeoHead
        title={t('meta.title')}
        description={t('meta.description')}
        keywords={t('meta.keywords')}
        type="website"
      />

      {/* Schema.org: Organization */}
      <OrganizationSchema
        name="FlorenceEGI Co-Creation Ecosystem"
        description={t('hero.description')}
        url="https://florenceegi.com/cocreate"
      />

      <AriaLandmark
        as="section"
        role="banner"
        labelledBy={`${id}-title`}
        id={id}
        className={`cocreate-hero ${className}`.trim()}
      >
        <div className="cocreate-hero__container">
          {/* Background decorations */}
          <div className="cocreate-hero__background" aria-hidden="true">
            <div className="cocreate-hero__gradient" />
            <div className="cocreate-hero__pattern" />
          </div>

          {/* Content */}
          <div className="cocreate-hero__content">
            {/* Badge */}
            <span className="cocreate-hero__badge">
              {t('hero.badge')}
            </span>

            {/* Title */}
            <h1 id={`${id}-title`} className="cocreate-hero__title">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="cocreate-hero__subtitle">
              {t('hero.subtitle')}
            </p>

            {/* Description */}
            <p className="cocreate-hero__description">
              {t('hero.description')}
            </p>

            {/* Ecosystem Badges */}
            <div className="cocreate-hero__ecosystem-badges" role="list">
              {badges.map((badge) => (
                <div
                  key={badge.key}
                  className="cocreate-hero__ecosystem-badge"
                  role="listitem"
                >
                  <span className="cocreate-hero__ecosystem-badge-icon" aria-hidden="true">
                    {badge.icon}
                  </span>
                  <span className="cocreate-hero__ecosystem-badge-label">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="cocreate-hero__cta-group">
              <a
                href="/register"
                className="cocreate-hero__cta cocreate-hero__cta--primary"
              >
                {t('hero.cta.primary')}
              </a>
              <a
                href="#cocreate-concept"
                className="cocreate-hero__cta cocreate-hero__cta--secondary"
              >
                {t('hero.cta.secondary')}
              </a>
            </div>
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default CoCreateHero;
