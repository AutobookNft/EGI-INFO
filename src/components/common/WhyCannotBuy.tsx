/**
 * WhyCannotBuy.tsx
 * 
 * FAQ section per requisiti di acquisto
 * - Verifica identità (KYC)
 * - Wallet non configurato
 * - Restrizioni geografiche
 * 
 * SEO: FAQPageSchema
 * ARIA: region + FAQ list
 * i18n: info.whyCannotBuy
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FAQPageSchema, AriaLandmark } from '../../utils/seo';
import { GlossaryTerm } from './GlossaryTerm';

// =============================================================================
// TYPES
// =============================================================================

interface WhyCannotBuyProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const WhyCannotBuy: React.FC<WhyCannotBuyProps> = ({
  id = 'why-cannot-buy',
  className = ''
}) => {
  const { t } = useTranslation('info');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const reasons = [
    {
      key: 'kyc',
      icon: '🪪',
      title: t('whyCannotBuy.reasons.kyc.title'),
      description: t('whyCannotBuy.reasons.kyc.description'),
      action: 'Completa la verifica',
      actionUrl: '/verify'
    },
    {
      key: 'wallet',
      icon: '👛',
      title: t('whyCannotBuy.reasons.wallet.title'),
      description: t('whyCannotBuy.reasons.wallet.description'),
      action: 'Configura wallet',
      actionUrl: '/wallet/setup'
    },
    {
      key: 'region',
      icon: '🌍',
      title: t('whyCannotBuy.reasons.region.title'),
      description: t('whyCannotBuy.reasons.region.description'),
      action: 'Verifica disponibilità',
      actionUrl: '/regions'
    }
  ];

  // FAQ items for Schema.org
  const faqItems = reasons.map((reason) => ({
    question: reason.title,
    answer: reason.description.replace(/{{[^}]+}}/g, (match) => {
      const term = match.replace(/[{}]/g, '');
      return term.toUpperCase();
    })
  }));

  // ---------------------------------------------------------------------------
  // RENDER HELPERS
  // ---------------------------------------------------------------------------

  const renderDescription = (description: string) => {
    const parts = description.split(/({{[^}]+}})/g);
    
    return parts.map((part, index) => {
      const match = part.match(/{{([^}]+)}}/);
      if (match) {
        const term = match[1];
        return (
          <GlossaryTerm key={index} termKey={term}>
            {term}
          </GlossaryTerm>
        );
      }
      return part;
    });
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: FAQPage */}
      <FAQPageSchema
        name={t('whyCannotBuy.title')}
        items={faqItems}
      />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`why-cannot-buy ${className}`.trim()}
      >
        <div className="why-cannot-buy__container">
          {/* Header */}
          <header className="why-cannot-buy__header">
            <span className="why-cannot-buy__badge">
              {t('whyCannotBuy.badge')}
            </span>
            <h2 id={`${id}-title`} className="why-cannot-buy__title">
              {t('whyCannotBuy.title')}
            </h2>
            <p className="why-cannot-buy__subtitle">
              {t('whyCannotBuy.subtitle')}
            </p>
          </header>

          {/* Reasons List */}
          <ul className="why-cannot-buy__list" role="list">
            {reasons.map((reason) => (
              <li key={reason.key} className="why-cannot-buy__item">
                <div className="why-cannot-buy__item-icon" aria-hidden="true">
                  {reason.icon}
                </div>
                <div className="why-cannot-buy__item-content">
                  <h3 className="why-cannot-buy__item-title">
                    {reason.title}
                  </h3>
                  <p className="why-cannot-buy__item-description">
                    {renderDescription(reason.description)}
                  </p>
                  <a
                    href={reason.actionUrl}
                    className="why-cannot-buy__item-action"
                  >
                    {reason.action}
                    <span aria-hidden="true"> →</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* Related Terms */}
          <footer className="why-cannot-buy__footer">
            <span className="why-cannot-buy__related-label">
              {t('whyCannotBuy.relatedTerms')}:
            </span>
            <div className="why-cannot-buy__related-terms">
              <GlossaryTerm termKey="kyc">KYC</GlossaryTerm>
              <GlossaryTerm termKey="wallet">Wallet</GlossaryTerm>
              <GlossaryTerm termKey="aml">AML</GlossaryTerm>
            </div>
          </footer>
        </div>
      </AriaLandmark>
    </>
  );
};

export default WhyCannotBuy;
