/**
 * FlorenceNatan.tsx
 * 
 * Sezione dedicata all'assistente AI NATAN
 * (Navigational AI Technical Assistant Navigator)
 * 
 * SEO: SoftwareApplicationSchema (AI Assistant)
 * ARIA: region + feature cards
 * i18n: florence.natan
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SoftwareApplicationSchema, AriaLandmark } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface FlorenceNatanProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
  /** Callback per CTA */
  onChatOpen?: () => void;
}

interface NatanFeature {
  icon: string;
  title: string;
  description: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const FlorenceNatan: React.FC<FlorenceNatanProps> = ({
  id = 'florence-natan',
  className = '',
  onChatOpen
}) => {
  const { t } = useTranslation('florence');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const features = t('natan.features', { returnObjects: true }) as NatanFeature[];

  // ---------------------------------------------------------------------------
  // HANDLERS
  // ---------------------------------------------------------------------------

  const handleChatOpen = () => {
    if (onChatOpen) {
      onChatOpen();
    }
    // Track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'natan_chat_open', {
        event_category: 'engagement',
        event_label: t('natan.assistantLabel')
      });
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: SoftwareApplication (AI Assistant) */}
      <SoftwareApplicationSchema
        name="NATAN - AI Assistant"
        description={t('natan.description')}
        applicationCategory="AI Assistant"
        operatingSystem="Web"
        offers={{
          price: "0",
          priceCurrency: "EUR"
        }}
      />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`florence-natan ${className}`.trim()}
      >
        <div className="florence-natan__container">
          {/* Visual: Avatar NATAN */}
          <div className="florence-natan__visual">
            <div className="florence-natan__avatar">
              <div className="florence-natan__avatar-ring florence-natan__avatar-ring--1" />
              <div className="florence-natan__avatar-ring florence-natan__avatar-ring--2" />
              <div className="florence-natan__avatar-ring florence-natan__avatar-ring--3" />
              <div className="florence-natan__avatar-core">
                <span aria-hidden="true">🤖</span>
              </div>
            </div>
            {/* Floating particles effect */}
            <div className="florence-natan__particles" aria-hidden="true">
              <span className="florence-natan__particle" />
              <span className="florence-natan__particle" />
              <span className="florence-natan__particle" />
            </div>
          </div>

          {/* Content */}
          <div className="florence-natan__content">
            {/* Header */}
            <header className="florence-natan__header">
              <h2 id={`${id}-title`} className="florence-natan__title">
                {t('natan.title')}
              </h2>
              <p className="florence-natan__subtitle">
                {t('natan.subtitle')}
              </p>
            </header>

            {/* Description */}
            <p className="florence-natan__description">
              {t('natan.description')}
            </p>

            {/* Features Grid */}
            <div className="florence-natan__features">
              {features.map((feature, index) => (
                <div key={index} className="florence-natan__feature">
                  <span className="florence-natan__feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <div className="florence-natan__feature-content">
                    <h3 className="florence-natan__feature-title">
                      {feature.title}
                    </h3>
                    <p className="florence-natan__feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleChatOpen}
              className="florence-natan__cta"
              aria-label={t('natan.cta')}
            >
              <span className="florence-natan__cta-icon" aria-hidden="true">💬</span>
              <span>{t('natan.cta')}</span>
            </button>
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default FlorenceNatan;
