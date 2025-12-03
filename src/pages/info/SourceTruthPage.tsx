import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossarySection } from '../../components/common';

/**
 * SourceTruthPage - Fonte di verità / documentazione
 * TUTTI I TESTI DA i18n - ZERO HARDCODED
 */

const SourceTruthPage: React.FC = () => {
  const { t } = useTranslation('info');

  const sections = ['architecture', 'glossary', 'api'] as const;
  const sectionIcons = {
    architecture: '🏗️',
    glossary: '📖',
    api: '🔗',
  };
  const sectionColors = {
    architecture: 'blue',
    glossary: 'gold',
    api: 'green',
  };

  return (
    <article className="info-page">
      <header className="info-page__hero">
        <span className="info-page__badge info-page__badge--emerald">
          {t('sourceTruth.badge')}
        </span>
        <h1 className="info-page__title">
          {t('sourceTruth.title')}
        </h1>
        <p className="info-page__subtitle">
          {t('sourceTruth.subtitle')}
        </p>
      </header>

      <section className="info-section">
        <div className="info-grid">
          {sections.map((section) => (
            <div key={section} className={`info-card info-card--${sectionColors[section]}`}>
              <span className="info-card__icon">
                {sectionIcons[section]}
              </span>
              <h3 className="info-card__title">
                {t(`sourceTruth.sections.${section}.title`)}
              </h3>
              <p className="info-card__text">
                {t(`sourceTruth.sections.${section}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Glossario completo */}
      <div id="glossary">
        <GlossarySection
          title={t('sourceTruth.sections.glossary.title')}
          showSearch={true}
        />
      </div>

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
        .info-page__badge--emerald { background: rgba(16, 185, 129, 0.15); color: #10b981; }
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
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .info-card {
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .info-card--blue:hover { background: rgba(59, 130, 246, 0.04); border-color: rgba(59, 130, 246, 0.2); }
        .info-card--gold:hover { background: rgba(212, 175, 55, 0.04); border-color: rgba(212, 175, 55, 0.2); }
        .info-card--green:hover { background: rgba(34, 197, 94, 0.04); border-color: rgba(34, 197, 94, 0.2); }
        .info-card__icon { font-size: 2rem; display: block; margin-bottom: 12px; }
        .info-card__title { font-size: 1rem; font-weight: 600; color: #ffffff; margin-bottom: 8px; }
        .info-card__text { font-size: 0.9rem; color: #909098; line-height: 1.5; }
        @media (max-width: 600px) { .info-grid { grid-template-columns: 1fr; } }
      `}</style>
    </article>
  );
};

export default SourceTruthPage;
