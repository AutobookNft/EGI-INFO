import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { GlossaryTerm, GlossarySection } from '../../components/common';

/**
 * WhyCannotBuyPage - FAQ sui requisiti
 * TUTTI I TESTI DA i18n - ZERO HARDCODED
 */

const WhyCannotBuyPage: React.FC = () => {
  const { t } = useTranslation('info');

  const reasons = ['kyc', 'wallet', 'region'] as const;
  const reasonIcons = {
    kyc: '🔍',
    wallet: '👛',
    region: '🌍',
  };
  const reasonColors = {
    kyc: 'cyan',
    wallet: 'gold',
    region: 'red',
  };

  return (
    <article className="info-page">
      <header className="info-page__hero">
        <span className="info-page__badge info-page__badge--cyan">
          {t('whyCannotBuy.badge')}
        </span>
        <h1 className="info-page__title">
          {t('whyCannotBuy.title')}
        </h1>
        <p className="info-page__subtitle">
          {t('whyCannotBuy.subtitle')}
        </p>
      </header>

      <section className="info-section">
        <div className="info-components">
          {reasons.map((reason) => (
            <div key={reason} className={`info-component info-component--${reasonColors[reason]}`}>
              <div className="info-component__header">
                <span className="info-component__icon-large">
                  {reasonIcons[reason]}
                </span>
                <h2 className="info-component__title">
                  {t(`whyCannotBuy.reasons.${reason}.title`)}
                </h2>
              </div>
              <p className="info-component__text">
                {reason === 'wallet' ? (
                  <Trans
                    i18nKey={`whyCannotBuy.reasons.${reason}.description`}
                    ns="info"
                    components={{
                      wallet: <GlossaryTerm termId="non-custodial">wallet</GlossaryTerm>,
                    }}
                  />
                ) : (
                  t(`whyCannotBuy.reasons.${reason}.description`)
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GlossarySection
        filterTerms={['non-custodial', 'kyc', 'aml', 'gdpr']}
        title={t('whyCannotBuy.relatedTerms')}
      />

      <style>{`
        .info-page { max-width: 800px; }
        .info-page__hero { margin-bottom: 48px; }
        .info-page__badge {
          display: inline-block;
          padding: 6px 16px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .info-page__badge--cyan { background: rgba(6, 182, 212, 0.15); color: #06b6d4; }
        .info-page__title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .info-page__subtitle {
          font-size: 1.15rem;
          color: #a0a0a8;
          line-height: 1.6;
          max-width: 600px;
        }
        .info-section { margin-bottom: 56px; }
        .info-components { display: flex; flex-direction: column; gap: 16px; }
        .info-component {
          padding: 24px;
          border-radius: 16px;
          border-left: 4px solid;
        }
        .info-component--cyan {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, transparent 100%);
          border-left-color: #06b6d4;
        }
        .info-component--gold {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, transparent 100%);
          border-left-color: #d4af37;
        }
        .info-component--red {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, transparent 100%);
          border-left-color: #ef4444;
        }
        .info-component__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .info-component__icon-large { font-size: 2rem; }
        .info-component__title { font-size: 1.1rem; font-weight: 600; color: #ffffff; margin: 0; }
        .info-component__text { font-size: 0.95rem; color: #b0b0b8; line-height: 1.6; margin: 0; }
      `}</style>
    </article>
  );
};

export default WhyCannotBuyPage;
