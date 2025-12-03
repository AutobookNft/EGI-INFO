/**
 * TraderPro.tsx
 * 
 * Sezione Trader Pro: strategia duplice
 * - Strumenti per trader professionali
 * - Marketing per creator (EGI PT - emissari digitali)
 * - Struttura economica ottimizzata
 * - Impatto sull'ecosistema
 * 
 * SEO: ProductSchema + ItemListSchema
 * ARIA: region + feature cards
 * i18n: cocreate.trader
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark, JsonLd } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface TraderProProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

interface EgiPtFeature {
  icon: string;
  title: string;
  description: string;
}

interface FeeItem {
  icon: string;
  title: string;
  value: string;
  description: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const TraderPro: React.FC<TraderProProps> = ({
  id = 'trader-pro',
  className = ''
}) => {
  const { t } = useTranslation('cocreate');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const egiPtFeatures = t('trader.egiPtSystem.features', {
    returnObjects: true
  }) as EgiPtFeature[];

  const fees = t('trader.economicStructure.fees', {
    returnObjects: true
  }) as FeeItem[];

  // Schema.org: Product (EGI PT)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EGI PT (Print Token)',
    description: t('trader.egiPtSystem.description'),
    category: 'Digital Asset',
    brand: {
      '@type': 'Brand',
      name: 'FlorenceEGI'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: Product */}
      <JsonLd data={productSchema} />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`trader-pro ${className}`.trim()}
      >
        <div className="trader-pro__container">
          {/* Header */}
          <header className="trader-pro__header">
            <h2 id={`${id}-title`} className="trader-pro__title">
              {t('trader.title')}
            </h2>
            <p className="trader-pro__subtitle">
              {t('trader.subtitle')}
            </p>
          </header>

          {/* Strategic Vision */}
          <div className="trader-pro__vision">
            <h3 className="trader-pro__vision-title">
              {t('trader.strategicVision.title')}
            </h3>
            <div className="trader-pro__vision-grid">
              {/* For Traders */}
              <article className="trader-pro__vision-card trader-pro__vision-card--trader">
                <span className="trader-pro__vision-icon" aria-hidden="true">
                  {t('trader.strategicVision.forTraders.icon')}
                </span>
                <h4>{t('trader.strategicVision.forTraders.title')}</h4>
                <p>{t('trader.strategicVision.forTraders.content')}</p>
              </article>

              {/* For Creators */}
              <article className="trader-pro__vision-card trader-pro__vision-card--creator">
                <span className="trader-pro__vision-icon" aria-hidden="true">
                  {t('trader.strategicVision.forCreators.icon')}
                </span>
                <h4>{t('trader.strategicVision.forCreators.title')}</h4>
                <p>{t('trader.strategicVision.forCreators.content')}</p>
              </article>
            </div>
          </div>

          {/* EGI PT System */}
          <div className="trader-pro__egi-pt">
            <h3 className="trader-pro__egi-pt-title">
              {t('trader.egiPtSystem.title')}
            </h3>
            <p className="trader-pro__egi-pt-description">
              {t('trader.egiPtSystem.description')}
            </p>

            <div className="trader-pro__egi-pt-features">
              {egiPtFeatures.map((feature, index) => (
                <article key={index} className="trader-pro__egi-pt-feature">
                  <span className="trader-pro__egi-pt-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Trader Benefits */}
          <div className="trader-pro__benefits">
            <h3 className="trader-pro__benefits-title">
              {t('trader.traderBenefits.title')}
            </h3>

            <div className="trader-pro__benefits-grid">
              {/* Guaranteed Rarity */}
              <article className="trader-pro__benefit-card">
                <span className="trader-pro__benefit-icon" aria-hidden="true">
                  {t('trader.traderBenefits.guaranteedRarity.icon')}
                </span>
                <h4>{t('trader.traderBenefits.guaranteedRarity.title')}</h4>
                <p>{t('trader.traderBenefits.guaranteedRarity.content')}</p>
                <blockquote className="trader-pro__benefit-highlight">
                  {t('trader.traderBenefits.guaranteedRarity.highlight')}
                </blockquote>
              </article>

              {/* Real Art */}
              <article className="trader-pro__benefit-card">
                <span className="trader-pro__benefit-icon" aria-hidden="true">
                  {t('trader.traderBenefits.realArt.icon')}
                </span>
                <h4>{t('trader.traderBenefits.realArt.title')}</h4>
                <p>{t('trader.traderBenefits.realArt.content')}</p>
                <ul className="trader-pro__benefit-features">
                  {(t('trader.traderBenefits.realArt.features', { returnObjects: true }) as string[]).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          {/* Economic Structure */}
          <div className="trader-pro__economics">
            <h3 className="trader-pro__economics-title">
              {t('trader.economicStructure.title')}
            </h3>
            <p className="trader-pro__economics-description">
              {t('trader.economicStructure.description')}
            </p>

            <div className="trader-pro__fees">
              {fees.map((fee, index) => (
                <article key={index} className="trader-pro__fee-card">
                  <span className="trader-pro__fee-icon" aria-hidden="true">
                    {fee.icon}
                  </span>
                  <h4>{fee.title}</h4>
                  <span className="trader-pro__fee-value">{fee.value}</span>
                  <p>{fee.description}</p>
                </article>
              ))}
            </div>

            <p className="trader-pro__economics-message">
              {t('trader.economicStructure.message')}
            </p>
          </div>

          {/* Ecosystem Impact */}
          <div className="trader-pro__impact">
            <h3 className="trader-pro__impact-title">
              {t('trader.ecosystemImpact.title')}
            </h3>

            <div className="trader-pro__impact-grid">
              {/* Volumes & Visibility */}
              <article className="trader-pro__impact-card">
                <span className="trader-pro__impact-icon" aria-hidden="true">
                  {t('trader.ecosystemImpact.volumesVisibility.icon')}
                </span>
                <h4>{t('trader.ecosystemImpact.volumesVisibility.title')}</h4>
                <p>{t('trader.ecosystemImpact.volumesVisibility.content')}</p>
              </article>

              {/* Return for All */}
              <article className="trader-pro__impact-card">
                <span className="trader-pro__impact-icon" aria-hidden="true">
                  {t('trader.ecosystemImpact.returnForAll.icon')}
                </span>
                <h4>{t('trader.ecosystemImpact.returnForAll.title')}</h4>
                <p>{t('trader.ecosystemImpact.returnForAll.content')}</p>
              </article>
            </div>

            <blockquote className="trader-pro__synergy-message">
              {t('trader.ecosystemImpact.synergyMessage')}
            </blockquote>
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default TraderPro;
