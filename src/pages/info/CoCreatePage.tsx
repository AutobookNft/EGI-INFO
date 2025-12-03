import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { GlossaryTerm, GlossarySection } from '../../components/common';

/**
 * CoCreatePage - Ecosistema Co-Creativo
 * TUTTI I TESTI DA i18n - ZERO HARDCODED
 */

const CoCreatePage: React.FC = () => {
  const { t } = useTranslation('info');

  const roles = ['artist', 'patron', 'collector'] as const;
  const roleColors = {
    artist: 'gold',
    patron: 'purple',
    collector: 'blue',
  };

  return (
    <article className="info-page">
      <header className="info-page__hero">
        <span className="info-page__badge info-page__badge--purple">
          {t('coCreate.badge')}
        </span>
        <h1 className="info-page__title">
          {t('coCreate.title')}
        </h1>
        <p className="info-page__subtitle">
          {t('coCreate.subtitle')}
        </p>
      </header>

      <section className="info-section">
        <h2 className="info-section__title info-section__title--purple">
          {t('coCreate.philosophy.title')}
        </h2>
        <p className="info-section__text">
          <Trans
            i18nKey="coCreate.philosophy.description"
            ns="info"
            components={{
              coCreator: <GlossaryTerm termId="co-creatore">Co-Creatore</GlossaryTerm>,
            }}
          />
        </p>
      </section>

      <section className="info-section">
        <h2 className="info-section__title info-section__title--purple">
          {t('coCreate.roles.title')}
        </h2>

        <div className="info-components">
          {roles.map((role) => (
            <div key={role} className={`info-component info-component--${roleColors[role]}`}>
              <div className="info-component__header">
                <span className="info-component__icon-large">
                  {t(`coCreate.roles.${role}.icon`)}
                </span>
                <h3 className="info-component__title">
                  {t(`coCreate.roles.${role}.title`)}
                </h3>
              </div>
              <p className="info-component__text">
                {t(`coCreate.roles.${role}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GlossarySection
        filterTerms={['co-creatore', 'creator', 'collector', 'mecenate']}
        title={t('coCreate.relatedTerms')}
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
        .info-page__badge--purple { background: rgba(168, 85, 247, 0.15); color: #a855f7; }
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
        .info-section__title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .info-section__title--purple { color: #a855f7; }
        .info-section__text {
          font-size: 1rem;
          color: #c0c0c8;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .info-components { display: flex; flex-direction: column; gap: 16px; }
        .info-component {
          padding: 24px;
          border-radius: 16px;
          border-left: 4px solid;
        }
        .info-component--gold {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, transparent 100%);
          border-left-color: #d4af37;
        }
        .info-component--purple {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, transparent 100%);
          border-left-color: #a855f7;
        }
        .info-component--blue {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, transparent 100%);
          border-left-color: #3b82f6;
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

export default CoCreatePage;
