import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * EGIInfoPage - Cosa sono gli EGI
 * TUTTI I TESTI DA egi.json - ZERO HARDCODED
 */

const EGIInfoPage: React.FC = () => {
  const { t } = useTranslation('egi');
  const [activeTab, setActiveTab] = useState<'artists' | 'collectors' | 'galleries' | 'institutions'>('artists');
  const [expandedFunction, setExpandedFunction] = useState<string | null>(null);

  const tabs = ['artists', 'collectors', 'galleries', 'institutions'] as const;

  const functionKeys = ['certification', 'traceability', 'authenticity', 'ownership', 'provenance'] as const;

  return (
    <article className="egi-page">
      {/* HERO */}
      <header className="egi-hero">
        <span className="egi-hero__badge">{t('hero.badge')}</span>
        <h1 className="egi-hero__title">{t('hero.title')}</h1>
        <p className="egi-hero__subtitle">{t('hero.subtitle')}</p>
        <p className="egi-hero__description">{t('hero.description')}</p>
        <div className="egi-hero__cta">
          <a href="#definition" className="egi-btn egi-btn--primary">{t('hero.cta.primary')}</a>
          <a href="#functions" className="egi-btn egi-btn--secondary">{t('hero.cta.secondary')}</a>
        </div>
      </header>

      {/* DEFINIZIONE - Acronimo E-G-I */}
      <section id="definition" className="egi-section">
        <h2 className="egi-section__title">{t('definition.title')}</h2>
        <p className="egi-section__intro">{t('definition.intro')}</p>
        
        <div className="egi-acronym">
          <h3 className="egi-acronym__title">{t('definition.acronym.title')}</h3>
          <div className="egi-acronym__grid">
            <div className="egi-acronym__item egi-acronym__item--e">
              <span className="egi-acronym__letter">{t('definition.acronym.e.letter')}</span>
              <span className="egi-acronym__word">{t('definition.acronym.e.word')}</span>
              <span className="egi-acronym__meaning">{t('definition.acronym.e.meaning')}</span>
            </div>
            <div className="egi-acronym__item egi-acronym__item--g">
              <span className="egi-acronym__letter">{t('definition.acronym.g.letter')}</span>
              <span className="egi-acronym__word">{t('definition.acronym.g.word')}</span>
              <span className="egi-acronym__meaning">{t('definition.acronym.g.meaning')}</span>
            </div>
            <div className="egi-acronym__item egi-acronym__item--i">
              <span className="egi-acronym__letter">{t('definition.acronym.i.letter')}</span>
              <span className="egi-acronym__word">{t('definition.acronym.i.word')}</span>
              <span className="egi-acronym__meaning">{t('definition.acronym.i.meaning')}</span>
            </div>
          </div>
        </div>
        
        <p className="egi-section__summary">{t('definition.summary')}</p>
      </section>

      {/* TRE COMPONENTI: EPP, GOODS, INVENT */}
      <section className="egi-section">
        <h2 className="egi-section__title">{t('components.threeComponents.title')}</h2>
        <p className="egi-section__intro">{t('components.threeComponents.subtitle')}</p>
        
        <div className="egi-components">
          {/* EPP */}
          <div className="egi-component egi-component--epp">
            <div className="egi-component__header">
              <span className="egi-component__icon">{t('components.epp.icon')}</span>
              <span className="egi-component__badge">{t('components.epp.badge')}</span>
            </div>
            <h3 className="egi-component__title">{t('components.epp.title')}</h3>
            <p className="egi-component__description">{t('components.epp.description')}</p>
            <ul className="egi-component__features">
              {(t('components.epp.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* GOODS */}
          <div className="egi-component egi-component--goods">
            <div className="egi-component__header">
              <span className="egi-component__icon">{t('components.goods.icon')}</span>
              <span className="egi-component__badge">{t('components.goods.badge')}</span>
            </div>
            <h3 className="egi-component__title">{t('components.goods.title')}</h3>
            <p className="egi-component__description">{t('components.goods.description')}</p>
            <ul className="egi-component__features">
              {(t('components.goods.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* INVENT */}
          <div className="egi-component egi-component--invent">
            <div className="egi-component__header">
              <span className="egi-component__icon">{t('components.creativity.icon')}</span>
              <span className="egi-component__badge">{t('components.creativity.badge')}</span>
            </div>
            <h3 className="egi-component__title">{t('components.creativity.title')}</h3>
            <p className="egi-component__description">{t('components.creativity.description')}</p>
            <ul className="egi-component__features">
              {(t('components.creativity.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FUNZIONI - Come funziona un EGI */}
      <section id="functions" className="egi-section">
        <h2 className="egi-section__title">{t('functions.title')}</h2>
        <p className="egi-section__intro">{t('functions.subtitle')}</p>
        
        <div className="egi-functions">
          {functionKeys.map((key) => (
            <div 
              key={key} 
              className={`egi-function ${expandedFunction === key ? 'egi-function--expanded' : ''}`}
            >
              <button 
                className="egi-function__header"
                onClick={() => setExpandedFunction(expandedFunction === key ? null : key)}
                aria-expanded={expandedFunction === key}
              >
                <h3 className="egi-function__title">{t(`functions.items.${key}.title`)}</h3>
                <span className="egi-function__toggle">{expandedFunction === key ? '−' : '+'}</span>
              </button>
              <p className="egi-function__description">{t(`functions.items.${key}.description`)}</p>
              {expandedFunction === key && (
                <ul className="egi-function__details">
                  {(t(`functions.items.${key}.details`, { returnObjects: true }) as string[]).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* VANTAGGI - Per stakeholder */}
      <section className="egi-section">
        <h2 className="egi-section__title">{t('advantages.title')}</h2>
        <p className="egi-section__intro">{t('advantages.subtitle')}</p>
        
        {/* Tabs */}
        <div className="egi-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`egi-tab ${activeTab === tab ? 'egi-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {t(`advantages.tabs.${tab}`)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="egi-advantages" role="tabpanel">
          <h3 className="egi-advantages__title">{t(`advantages.${activeTab}.title`)}</h3>
          <p className="egi-advantages__intro">{t(`advantages.${activeTab}.intro`)}</p>
          <div className="egi-advantages__grid">
            {Object.keys(t(`advantages.${activeTab}.items`, { returnObjects: true }) as object).map((itemKey) => (
              <div key={itemKey} className="egi-advantage-card">
                <h4 className="egi-advantage-card__title">
                  {t(`advantages.${activeTab}.items.${itemKey}.title`)}
                </h4>
                <p className="egi-advantage-card__text">
                  {t(`advantages.${activeTab}.items.${itemKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="egi-cta">
        <h2 className="egi-cta__title">{t('cta.title')}</h2>
        <p className="egi-cta__description">{t('cta.description')}</p>
        <div className="egi-cta__buttons">
          <a href="/explore" className="egi-btn egi-btn--primary">{t('cta.primary')}</a>
          <a href="/creator" className="egi-btn egi-btn--secondary">{t('cta.secondary')}</a>
          <a href="/contact" className="egi-btn egi-btn--tertiary">{t('cta.tertiary')}</a>
        </div>
      </section>

      <style>{`
        .egi-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        /* HERO */
        .egi-hero {
          text-align: center;
          margin-bottom: 64px;
          padding: 40px 0;
        }
        .egi-hero__badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: 24px;
          margin-bottom: 20px;
        }
        .egi-hero__title {
          font-size: clamp(2.2rem, 6vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }
        .egi-hero__subtitle {
          font-size: 1.3rem;
          color: #d4af37;
          margin-bottom: 16px;
        }
        .egi-hero__description {
          font-size: 1.1rem;
          color: #a0a0a8;
          max-width: 600px;
          margin: 0 auto 24px;
          line-height: 1.7;
        }
        .egi-hero__cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* BUTTONS */
        .egi-btn {
          padding: 14px 28px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }
        .egi-btn--primary {
          background: linear-gradient(135deg, #d4af37, #b8962e);
          color: #000;
        }
        .egi-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
        }
        .egi-btn--secondary {
          background: transparent;
          color: #d4af37;
          border: 2px solid rgba(212, 175, 55, 0.4);
        }
        .egi-btn--secondary:hover {
          border-color: #d4af37;
          background: rgba(212, 175, 55, 0.1);
        }
        .egi-btn--tertiary {
          background: transparent;
          color: #808088;
        }
        .egi-btn--tertiary:hover {
          color: #fff;
        }

        /* SECTIONS */
        .egi-section {
          margin-bottom: 64px;
        }
        .egi-section__title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #d4af37;
          margin-bottom: 12px;
        }
        .egi-section__intro {
          font-size: 1.05rem;
          color: #909098;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .egi-section__summary {
          font-size: 1.1rem;
          color: #c0c0c8;
          padding: 20px;
          background: rgba(212, 175, 55, 0.05);
          border-left: 3px solid #d4af37;
          border-radius: 0 12px 12px 0;
          margin-top: 32px;
        }

        /* ACRONYM */
        .egi-acronym {
          margin: 32px 0;
        }
        .egi-acronym__title {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 24px;
          text-align: center;
        }
        .egi-acronym__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .egi-acronym__item {
          padding: 24px;
          border-radius: 16px;
          text-align: center;
        }
        .egi-acronym__item--e {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), transparent);
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .egi-acronym__item--g {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent);
          border: 1px solid rgba(212, 175, 55, 0.3);
        }
        .egi-acronym__item--i {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .egi-acronym__letter {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .egi-acronym__item--e .egi-acronym__letter { color: #22c55e; }
        .egi-acronym__item--g .egi-acronym__letter { color: #d4af37; }
        .egi-acronym__item--i .egi-acronym__letter { color: #3b82f6; }
        .egi-acronym__word {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        .egi-acronym__meaning {
          font-size: 0.9rem;
          color: #909098;
          line-height: 1.5;
        }

        /* COMPONENTS EPP/GOODS/INVENT */
        .egi-components {
          display: grid;
          gap: 24px;
        }
        .egi-component {
          padding: 28px;
          border-radius: 16px;
          border-left: 4px solid;
        }
        .egi-component--epp {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), transparent);
          border-left-color: #22c55e;
        }
        .egi-component--goods {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), transparent);
          border-left-color: #d4af37;
        }
        .egi-component--invent {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), transparent);
          border-left-color: #3b82f6;
        }
        .egi-component__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .egi-component__icon { font-size: 1.8rem; }
        .egi-component__badge {
          font-size: 0.7rem;
          padding: 4px 10px;
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
          color: #a0a0a8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .egi-component__title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        .egi-component__description {
          color: #b0b0b8;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .egi-component__features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 8px;
        }
        .egi-component__features li {
          color: #909098;
          font-size: 0.9rem;
          padding-left: 20px;
          position: relative;
        }
        .egi-component__features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #22c55e;
        }

        /* FUNCTIONS */
        .egi-functions {
          display: grid;
          gap: 12px;
        }
        .egi-function {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .egi-function:hover {
          border-color: rgba(212, 175, 55, 0.2);
        }
        .egi-function--expanded {
          border-color: rgba(212, 175, 55, 0.3);
          background: rgba(212, 175, 55, 0.03);
        }
        .egi-function__header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .egi-function__title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }
        .egi-function__toggle {
          font-size: 1.5rem;
          color: #d4af37;
        }
        .egi-function__description {
          padding: 0 20px 20px;
          color: #909098;
          line-height: 1.6;
          margin: 0;
        }
        .egi-function__details {
          padding: 0 20px 20px 40px;
          margin: 0;
          list-style: disc;
          color: #707078;
        }
        .egi-function__details li {
          margin-bottom: 6px;
        }

        /* TABS */
        .egi-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .egi-tab {
          padding: 12px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #808088;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .egi-tab:hover {
          color: #fff;
          border-color: rgba(212, 175, 55, 0.3);
        }
        .egi-tab--active {
          background: rgba(212, 175, 55, 0.15);
          border-color: rgba(212, 175, 55, 0.4);
          color: #d4af37;
        }

        /* ADVANTAGES */
        .egi-advantages__title {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 8px;
        }
        .egi-advantages__intro {
          color: #909098;
          margin-bottom: 24px;
        }
        .egi-advantages__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .egi-advantage-card {
          padding: 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
        }
        .egi-advantage-card__title {
          font-size: 1rem;
          color: #d4af37;
          margin-bottom: 8px;
        }
        .egi-advantage-card__text {
          font-size: 0.9rem;
          color: #808088;
          line-height: 1.5;
        }

        /* CTA */
        .egi-cta {
          text-align: center;
          padding: 48px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent);
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.1);
        }
        .egi-cta__title {
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 12px;
        }
        .egi-cta__description {
          color: #909098;
          margin-bottom: 24px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .egi-cta__buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .egi-acronym__grid {
            grid-template-columns: 1fr;
          }
          .egi-tabs {
            justify-content: center;
          }
          .egi-cta {
            padding: 32px 20px;
          }
        }
      `}</style>
    </article>
  );
};

export default EGIInfoPage;
