import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../components/common/GlossaryTerm';

/**
 * EPPInfoPage - Programmi di Protezione Ambientale
 * TUTTI I DATI DA epp.json - ZERO HARDCODED
 * Termini tecnici linkati al glossario
 */

const EPPInfoPage: React.FC = () => {
  const { t } = useTranslation('epp');
  const [activeProgram, setActiveProgram] = useState<'arf' | 'apr' | 'bpe'>('arf');

  const programs = ['arf', 'apr', 'bpe'] as const;
  const howItWorksSteps = [0, 1, 2, 3, 4];  // 5 step ora
  const percentageTypes = [0, 1];  // Solo 2 voci ora: Primaria e Secondaria

  return (
    <article className="epp-page">
      {/* Hero */}
      <header className="epp-hero">
        <span className="epp-badge">{t('hero.badge')}</span>
        <h1 className="epp-title">{t('hero.title')}</h1>
        <p className="epp-subtitle">{t('hero.subtitle')}</p>
        <p className="epp-description">{t('hero.description')}</p>
        
        {/* Notice: questi sono OBIETTIVI, non risultati */}
        <div className="epp-projection-notice">
          <span className="epp-projection-icon">🎯</span>
          <span className="epp-projection-text">{t('hero.projection_notice')}</span>
        </div>
        
        <div className="epp-hero-stats">
          <div className="epp-stat">
            <span className="epp-stat__value">{t('hero.stats.trees.value')}</span>
            <span className="epp-stat__label">{t('hero.stats.trees.label')}</span>
            <span className="epp-stat__note">{t('hero.stats.trees.note')}</span>
          </div>
          <div className="epp-stat">
            <span className="epp-stat__value">{t('hero.stats.plastic.value')}</span>
            <span className="epp-stat__label">{t('hero.stats.plastic.label')}</span>
            <span className="epp-stat__note">{t('hero.stats.plastic.note')}</span>
          </div>
          <div className="epp-stat">
            <span className="epp-stat__value">{t('hero.stats.bees.value')}</span>
            <span className="epp-stat__label">{t('hero.stats.bees.label')}</span>
            <span className="epp-stat__note">{t('hero.stats.bees.note')}</span>
          </div>
          <div className="epp-stat">
            <span className="epp-stat__value">{t('hero.stats.impact.value')}</span>
            <span className="epp-stat__label">{t('hero.stats.impact.label')}</span>
          </div>
        </div>
      </header>

      {/* Intro / Principles */}
      <section className="epp-section">
        <h2 className="epp-section__title">{t('intro.title')}</h2>
        <p className="epp-section__text">{t('intro.description')}</p>
        
        {/* Glossary Terms Context */}
        <div className="epp-glossary-context">
          <p className="epp-glossary-context__text">
            Ogni <GlossaryTerm termId="egi">EGI</GlossaryTerm> che viene creato o venduto sulla piattaforma{' '}
            <GlossaryTerm termId="florenceegi">FlorenceEGI</GlossaryTerm> destina automaticamente una quota 
            ai progetti <GlossaryTerm termId="epp">EPP</GlossaryTerm>. Questo avviene tramite{' '}
            <GlossaryTerm termId="smart-contract">smart contract</GlossaryTerm> sulla blockchain{' '}
            <GlossaryTerm termId="algorand">Algorand</GlossaryTerm>, garantendo che ogni contributo sia{' '}
            <GlossaryTerm termId="on-chain">tracciabile on-chain</GlossaryTerm> e verificabile da chiunque.
          </p>
        </div>
        
        <div className="epp-principles">
          {[0, 1, 2].map((i) => (
            <div key={i} className="epp-principle">
              <span className="epp-principle__icon">{t(`intro.principles.${i}.icon`)}</span>
              <h3 className="epp-principle__title">{t(`intro.principles.${i}.title`)}</h3>
              <p className="epp-principle__desc">{t(`intro.principles.${i}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* I Tre Programmi - Tabs */}
      <section className="epp-section epp-programs">
        <h2 className="epp-section__title">{t('programs.title')}</h2>
        <p className="epp-section__subtitle">{t('programs.subtitle')}</p>
        
        {/* Program Tabs */}
        <div className="epp-tabs">
          {programs.map((prog) => (
            <button
              key={prog}
              className={`epp-tab ${activeProgram === prog ? 'epp-tab--active' : ''}`}
              onClick={() => setActiveProgram(prog)}
            >
              <span className="epp-tab__icon">{t(`programs.${prog}.icon`)}</span>
              <span className="epp-tab__name">{t(`programs.${prog}.name`)}</span>
            </button>
          ))}
        </div>

        {/* Active Program Content */}
        <div className="epp-program-content">
          <div className="epp-program-header">
            <span className="epp-program-badge">{t(`programs.${activeProgram}.badge`)}</span>
            <h3 className="epp-program-title">{t(`programs.${activeProgram}.title`)}</h3>
            <p className="epp-program-desc">{t(`programs.${activeProgram}.description`)}</p>
            <p className="epp-program-mission"><strong>Missione:</strong> {t(`programs.${activeProgram}.mission`)}</p>
          </div>

          {/* Activities */}
          <div className="epp-activities">
            <h4 className="epp-activities__title">{t(`programs.${activeProgram}.activities.title`)}</h4>
            <div className="epp-activities__grid">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="epp-activity">
                  <span className="epp-activity__icon">{t(`programs.${activeProgram}.activities.items.${i}.icon`)}</span>
                  <h5 className="epp-activity__title">{t(`programs.${activeProgram}.activities.items.${i}.title`)}</h5>
                  <p className="epp-activity__desc">{t(`programs.${activeProgram}.activities.items.${i}.description`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="epp-impact">
            <h4 className="epp-impact__title">{t(`programs.${activeProgram}.impact.title`)}</h4>
            <p className="epp-impact__notice">{t(`programs.${activeProgram}.impact.notice`)}</p>
            <div className="epp-impact__grid">
              {[0, 1, 2].map((i) => (
                <div key={i} className="epp-metric">
                  <span className="epp-metric__icon">{t(`programs.${activeProgram}.impact.metrics.${i}.icon`)}</span>
                  <span className="epp-metric__value">{t(`programs.${activeProgram}.impact.metrics.${i}.value`)}</span>
                  <span className="epp-metric__label">{t(`programs.${activeProgram}.impact.metrics.${i}.label`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="epp-partners">
            <h4 className="epp-partners__title">{t(`programs.${activeProgram}.partners.title`)}</h4>
            <p className="epp-partners__desc">{t(`programs.${activeProgram}.partners.description`)}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="epp-section">
        <h2 className="epp-section__title">{t('howItWorks.title')}</h2>
        <p className="epp-section__subtitle">{t('howItWorks.subtitle')}</p>
        
        <div className="epp-steps">
          {howItWorksSteps.map((i) => (
            <div key={i} className="epp-step">
              <div className="epp-step__number">{t(`howItWorks.steps.${i}.number`)}</div>
              <h3 className="epp-step__title">{t(`howItWorks.steps.${i}.title`)}</h3>
              <p className="epp-step__desc">{t(`howItWorks.steps.${i}.description`)}</p>
            </div>
          ))}
        </div>

        {/* Percentages */}
        <div className="epp-percentages">
          <h3 className="epp-percentages__title">{t('howItWorks.percentages.title')}</h3>
          <div className="epp-percentages__grid">
            {percentageTypes.map((i) => (
              <div key={i} className="epp-percentage">
                <span className="epp-percentage__value">{t(`howItWorks.percentages.items.${i}.percentage`)}</span>
                <span className="epp-percentage__type">{t(`howItWorks.percentages.items.${i}.type`)}</span>
                <span className="epp-percentage__desc">{t(`howItWorks.percentages.items.${i}.description`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="epp-section epp-transparency">
        <h2 className="epp-section__title">{t('transparency.title')}</h2>
        <p className="epp-section__subtitle">{t('transparency.subtitle')}</p>
        <p className="epp-section__text">{t('transparency.description')}</p>
        
        {/* Blockchain Transparency */}
        <div className="epp-blockchain-note">
          <p>
            Grazie alla <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>{' '}
            <GlossaryTerm termId="algorand">Algorand</GlossaryTerm>, ogni transazione lascia un{' '}
            <GlossaryTerm termId="audit-trail">audit trail</GlossaryTerm> immutabile. Questo significa che 
            puoi verificare <GlossaryTerm termId="on-chain">on-chain</GlossaryTerm> ogni singolo contributo 
            ai progetti EPP, garantendo <GlossaryTerm termId="trasparenza">trasparenza totale</GlossaryTerm>.
          </p>
        </div>
        
        <div className="epp-transparency__grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="epp-transparency__item">
              <span className="epp-transparency__icon">{t(`transparency.features.${i}.icon`)}</span>
              <h3 className="epp-transparency__title">{t(`transparency.features.${i}.title`)}</h3>
              <p className="epp-transparency__desc">{t(`transparency.features.${i}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Participation */}
      <section className="epp-section">
        <h2 className="epp-section__title">{t('participation.title')}</h2>
        <p className="epp-section__subtitle">{t('participation.subtitle')}</p>
        
        <div className="epp-participation__grid">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="epp-participation__item">
              <span className="epp-participation__icon">{t(`participation.ways.${i}.icon`)}</span>
              <h3 className="epp-participation__title">{t(`participation.ways.${i}.title`)}</h3>
              <p className="epp-participation__desc">{t(`participation.ways.${i}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="epp-cta">
        <h2 className="epp-cta__title">{t('cta.title')}</h2>
        <p className="epp-cta__desc">{t('cta.description')}</p>
        <div className="epp-cta__buttons">
          <button className="epp-cta__btn epp-cta__btn--primary">{t('cta.primary')}</button>
          <button className="epp-cta__btn epp-cta__btn--secondary">{t('cta.secondary')}</button>
        </div>
      </section>

      <style>{`
        .epp-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
          color: #e0e0e8;
        }

        /* Hero */
        .epp-hero { text-align: center; margin-bottom: 60px; }
        .epp-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .epp-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .epp-subtitle {
          font-size: 1.3rem;
          color: #22c55e;
          margin-bottom: 16px;
        }
        .epp-description {
          font-size: 1.1rem;
          color: #a0a0a8;
          max-width: 600px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }
        .epp-hero-stats {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .epp-stat {
          text-align: center;
          padding: 16px 24px;
          background: rgba(34, 197, 94, 0.08);
          border-radius: 12px;
          min-width: 120px;
        }
        .epp-stat__value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #22c55e;
        }
        .epp-stat__label {
          display: block;
          font-size: 0.8rem;
          color: #909098;
          margin-top: 4px;
        }
        .epp-stat__note {
          display: block;
          font-size: 0.7rem;
          color: #f59e0b;
          font-style: italic;
          margin-top: 2px;
        }
        
        /* Projection Notice */
        .epp-projection-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px dashed rgba(245, 158, 11, 0.4);
          border-radius: 12px;
          margin-bottom: 24px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .epp-projection-icon {
          font-size: 1.2rem;
        }
        .epp-projection-text {
          font-size: 0.85rem;
          color: #f59e0b;
          line-height: 1.4;
        }

        /* Sections */
        .epp-section { margin-bottom: 64px; }
        .epp-section__title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .epp-section__subtitle {
          font-size: 1.1rem;
          color: #22c55e;
          margin-bottom: 16px;
        }
        .epp-section__text {
          font-size: 1rem;
          color: #b0b0b8;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* Principles */
        .epp-principles {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .epp-principle {
          padding: 24px;
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.15);
          border-radius: 16px;
          text-align: center;
        }
        .epp-principle__icon { font-size: 2rem; margin-bottom: 12px; display: block; }
        .epp-principle__title { font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .epp-principle__desc { font-size: 0.9rem; color: #909098; line-height: 1.5; }

        /* Glossary Context */
        .epp-glossary-context {
          margin: 24px 0;
          padding: 24px 28px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(34, 197, 94, 0.08) 100%);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 16px;
        }
        .epp-glossary-context__text {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.8;
          margin: 0;
        }

        /* Blockchain Note */
        .epp-blockchain-note {
          margin: 20px 0 28px;
          padding: 20px 24px;
          background: rgba(34, 197, 94, 0.06);
          border-left: 4px solid #22c55e;
          border-radius: 0 12px 12px 0;
        }
        .epp-blockchain-note p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0;
        }

        /* Program Tabs */
        .epp-tabs {
          display: flex;
          gap: 12px;
          margin: 24px 0;
          flex-wrap: wrap;
        }
        .epp-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #a0a0a8;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .epp-tab:hover {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
        }
        .epp-tab--active {
          background: rgba(34, 197, 94, 0.15);
          border-color: #22c55e;
          color: #22c55e;
        }
        .epp-tab__icon { font-size: 1.3rem; }
        .epp-tab__name { font-weight: 600; }

        /* Program Content */
        .epp-program-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 20px;
          padding: 32px;
        }
        .epp-program-header { margin-bottom: 32px; }
        .epp-program-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 8px;
          margin-bottom: 12px;
        }
        .epp-program-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 12px;
        }
        .epp-program-desc {
          font-size: 1rem;
          color: #b0b0b8;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .epp-program-mission {
          font-size: 0.95rem;
          color: #909098;
          font-style: italic;
        }

        /* Activities */
        .epp-activities { margin-bottom: 32px; }
        .epp-activities__title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #22c55e;
          margin-bottom: 16px;
        }
        .epp-activities__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        .epp-activity {
          padding: 20px;
          background: rgba(34, 197, 94, 0.05);
          border-radius: 12px;
          text-align: center;
        }
        .epp-activity__icon { font-size: 1.8rem; margin-bottom: 8px; display: block; }
        .epp-activity__title { font-size: 0.95rem; font-weight: 600; color: #fff; margin-bottom: 6px; }
        .epp-activity__desc { font-size: 0.85rem; color: #909098; }

        /* Impact */
        .epp-impact { margin-bottom: 32px; }
        .epp-impact__title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #22c55e;
          margin-bottom: 8px;
        }
        .epp-impact__notice {
          font-size: 0.85rem;
          color: #f59e0b;
          font-style: italic;
          margin-bottom: 16px;
          padding: 8px 12px;
          background: rgba(245, 158, 11, 0.1);
          border-left: 3px solid #f59e0b;
          border-radius: 4px;
        }
        .epp-impact__grid {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .epp-metric {
          flex: 1;
          min-width: 140px;
          padding: 20px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 12px;
          text-align: center;
        }
        .epp-metric__icon { font-size: 1.5rem; display: block; margin-bottom: 8px; }
        .epp-metric__value { display: block; font-size: 1.4rem; font-weight: 700; color: #22c55e; }
        .epp-metric__label { display: block; font-size: 0.8rem; color: #909098; margin-top: 4px; }

        /* Partners */
        .epp-partners__title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        .epp-partners__desc {
          font-size: 0.9rem;
          color: #909098;
        }

        /* Steps */
        .epp-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }
        .epp-step {
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          position: relative;
        }
        .epp-step__number {
          position: absolute;
          top: -12px;
          left: 20px;
          width: 32px;
          height: 32px;
          background: #22c55e;
          color: #000;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .epp-step__title { font-size: 1rem; font-weight: 600; color: #fff; margin: 8px 0; }
        .epp-step__desc { font-size: 0.9rem; color: #909098; line-height: 1.5; }

        /* Percentages */
        .epp-percentages {
          background: rgba(34, 197, 94, 0.08);
          border-radius: 16px;
          padding: 24px;
          margin-top: 32px;
        }
        .epp-percentages__title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #22c55e;
          margin-bottom: 20px;
          text-align: center;
        }
        .epp-percentages__grid {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .epp-percentage {
          text-align: center;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          min-width: 140px;
        }
        .epp-percentage__value {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #22c55e;
        }
        .epp-percentage__type {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          margin: 4px 0;
        }
        .epp-percentage__desc {
          display: block;
          font-size: 0.8rem;
          color: #909098;
        }

        /* Transparency */
        .epp-transparency__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .epp-transparency__item {
          padding: 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          text-align: center;
        }
        .epp-transparency__icon { font-size: 2rem; margin-bottom: 12px; display: block; }
        .epp-transparency__title { font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .epp-transparency__desc { font-size: 0.9rem; color: #909098; line-height: 1.5; }

        /* Participation */
        .epp-participation__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .epp-participation__item {
          padding: 24px;
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.15);
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .epp-participation__item:hover {
          background: rgba(34, 197, 94, 0.1);
          transform: translateY(-4px);
        }
        .epp-participation__icon { font-size: 2rem; margin-bottom: 12px; display: block; }
        .epp-participation__title { font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .epp-participation__desc { font-size: 0.9rem; color: #909098; line-height: 1.5; }

        /* CTA */
        .epp-cta {
          text-align: center;
          padding: 48px 32px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 24px;
        }
        .epp-cta__title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        .epp-cta__desc {
          font-size: 1.1rem;
          color: #b0b0b8;
          margin-bottom: 24px;
        }
        .epp-cta__buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .epp-cta__btn {
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .epp-cta__btn--primary {
          background: #22c55e;
          color: #000;
          border: none;
        }
        .epp-cta__btn--primary:hover {
          background: #16a34a;
          transform: translateY(-2px);
        }
        .epp-cta__btn--secondary {
          background: transparent;
          color: #22c55e;
          border: 2px solid #22c55e;
        }
        .epp-cta__btn--secondary:hover {
          background: rgba(34, 197, 94, 0.1);
        }

        @media (max-width: 600px) {
          .epp-hero-stats { gap: 16px; }
          .epp-stat { min-width: 100px; padding: 12px 16px; }
          .epp-tabs { flex-direction: column; }
          .epp-program-content { padding: 20px; }
          .epp-percentages__grid { flex-direction: column; }
        }
      `}</style>
    </article>
  );
};

export default EPPInfoPage;
