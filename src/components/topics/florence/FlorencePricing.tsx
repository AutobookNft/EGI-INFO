/**
 * FlorencePricing.tsx
 * 
 * Tabella costi e commissioni FlorenceEGI
 * Include: minting, vendita primaria/secondaria, royalty, pagamenti
 * 
 * SEO: PriceSpecificationSchema (via Offer structure)
 * ARIA: table semantics
 * i18n: florence.pricing + florence.payments
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark, JsonLd } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface FlorencePricingProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

interface Fee {
  title: string;
  value: string;
  description: string;
}

interface PaymentLevel {
  icon: string;
  title: string;
  description: string;
  note: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const FlorencePricing: React.FC<FlorencePricingProps> = ({
  id = 'florence-pricing',
  className = ''
}) => {
  const { t } = useTranslation('florence');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const fees: Fee[] = [
    {
      title: t('pricing.fees.minting.title'),
      value: t('pricing.fees.minting.value'),
      description: t('pricing.fees.minting.description')
    },
    {
      title: t('pricing.fees.primarySale.title'),
      value: t('pricing.fees.primarySale.value'),
      description: t('pricing.fees.primarySale.description')
    },
    {
      title: t('pricing.fees.secondarySale.title'),
      value: t('pricing.fees.secondarySale.value'),
      description: t('pricing.fees.secondarySale.description')
    },
    {
      title: t('pricing.fees.creatorRoyalty.title'),
      value: t('pricing.fees.creatorRoyalty.value'),
      description: t('pricing.fees.creatorRoyalty.description')
    }
  ];

  const paymentLevels = t('payments.levels', { returnObjects: true }) as PaymentLevel[];

  // Schema.org: Offer per ogni fee
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('pricing.title'),
    description: t('pricing.subtitle'),
    itemListElement: fees.map((fee, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Offer',
        name: fee.title,
        price: fee.value,
        priceCurrency: 'EUR',
        description: fee.description
      }
    }))
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: Offers/Pricing */}
      <JsonLd data={offerSchema} />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`florence-pricing ${className}`.trim()}
      >
        <div className="florence-pricing__container">
          {/* Header */}
          <header className="florence-pricing__header">
            <h2 id={`${id}-title`} className="florence-pricing__title">
              {t('pricing.title')}
            </h2>
            <p className="florence-pricing__subtitle">
              {t('pricing.subtitle')}
            </p>
          </header>

          {/* Fees Table */}
          <div className="florence-pricing__fees">
            <table 
              className="florence-pricing__table"
              role="table"
              aria-label={t('pricing.title')}
            >
              <thead>
                <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col">Percentuale</th>
                  <th scope="col">Descrizione</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={index}>
                    <td className="florence-pricing__fee-title">{fee.title}</td>
                    <td className="florence-pricing__fee-value">
                      <span className="florence-pricing__badge">{fee.value}</span>
                    </td>
                    <td className="florence-pricing__fee-description">{fee.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Note */}
            <p className="florence-pricing__note">
              <span className="florence-pricing__note-icon" aria-hidden="true">ℹ️</span>
              {t('pricing.note')}
            </p>
          </div>

          {/* Payment Methods */}
          <div className="florence-pricing__payments">
            <h3 className="florence-pricing__payments-title">
              {t('payments.title')}
            </h3>
            <p className="florence-pricing__payments-subtitle">
              {t('payments.subtitle')}
            </p>

            <div className="florence-pricing__payment-grid">
              {paymentLevels.map((level, index) => (
                <div key={index} className="florence-pricing__payment-card">
                  <span className="florence-pricing__payment-icon" aria-hidden="true">
                    {level.icon}
                  </span>
                  <h4 className="florence-pricing__payment-title">
                    {level.title}
                  </h4>
                  <p className="florence-pricing__payment-description">
                    {level.description}
                  </p>
                  <span className="florence-pricing__payment-note">
                    {level.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default FlorencePricing;
