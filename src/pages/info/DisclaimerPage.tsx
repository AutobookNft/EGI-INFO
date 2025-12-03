import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { GlossaryTerm, GlossarySection } from '../../components/common';

/**
 * DisclaimerPage - Disclaimer legale
 * TUTTI I TESTI DA i18n - ZERO HARDCODED
 */

const DisclaimerPage: React.FC = () => {
  const { t } = useTranslation('info');

  const sections = ['nature', 'compliance', 'risks'] as const;
  const sectionColors = {
    nature: 'orange',
    compliance: 'green',
    risks: 'red',
  };
  const sectionIcons = {
    nature: '📋',
    compliance: '✅',
    risks: '⚠️',
  };

  return (
    <article className="info-page">
      <header className="info-page__hero">
        <span className="info-page__badge info-page__badge--orange">
          {t('disclaimer.badge')}
        </span>
        <h1 className="info-page__title">
          {t('disclaimer.title')}
        </h1>
        <p className="info-page__subtitle">
          {t('disclaimer.subtitle')}
        </p>
      </header>

      <section className="info-section">
        <div className="info-components">
          {sections.map((section) => (
            <div key={section} className={`info-component info-component--${sectionColors[section]}`}>
              <div className="info-component__header">
                <span className="info-component__icon-large">
                  {sectionIcons[section]}
                </span>
                <h2 className="info-component__title">
                  {t(`disclaimer.sections.${section}.title`)}
                </h2>
              </div>
              <p className="info-component__text">
                {section === 'compliance' ? (
                  <Trans
                    i18nKey={`disclaimer.sections.${section}.description`}
                    ns="info"
                    components={{
                      mica: <GlossaryTerm termId="mica">MiCA</GlossaryTerm>,
                      gdpr: <GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>,
                    }}
                  />
                ) : (
                  t(`disclaimer.sections.${section}.description`)
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GlossarySection
        filterTerms={['gdpr', 'mica', 'mica-safe', 'casp', 'psp']}
        title={t('disclaimer.relatedTerms')}
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
        .info-page__badge--orange { background: rgba(249, 115, 22, 0.15); color: #f97316; }
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
        .info-component--orange {
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, transparent 100%);
          border-left-color: #f97316;
        }
        .info-component--green {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, transparent 100%);
          border-left-color: #22c55e;
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

export default DisclaimerPage;
