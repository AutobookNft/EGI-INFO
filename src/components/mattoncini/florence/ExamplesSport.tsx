/**
 * Mattoncino #21: Esempi Sport & Experience
 * 
 * Showcase di come esperienze sportive possono diventare EGI.
 * Chiave JSON: examples.tabs[4]
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const ExamplesSport: React.FC = () => {
  const { t } = useTranslation('florence');

  const tabData = t('examples.tabs', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  }>;

  const sportTab = tabData?.find(tab => tab.id === 'sport') || {
    name: 'Sport & Exp',
    description: 'Risultati maratone, percorsi GPS, memorabilia.',
    items: [
      { title: 'Maratona', desc: 'Risultato certificato + sponsor split' },
      { title: 'Gara ciclismo', desc: 'Percorso GPS + memorabilia' },
      { title: 'Immersione subacquea', desc: 'Esperienza documentata + video 360°' },
    ],
  };

  const ICONS = ['🏃', '🚴', '🤿'];

  return (
    <section className="examples-sport">
      <div className="examples-sport__container">
        <header className="examples-sport__header">
          <span className="examples-sport__badge">🏆 {sportTab.name}</span>
          <h2 className="examples-sport__title">
            {t('examples.title', 'Qualsiasi Cosa Esista, Può Diventare un EGI')}
          </h2>
          <p className="examples-sport__subtitle">{sportTab.description}</p>
        </header>

        <div className="examples-sport__grid">
          {sportTab.items.map((item, index) => (
            <div key={index} className="examples-sport__card">
              <div className="examples-sport__card-medal">
                <span className="examples-sport__card-icon">{ICONS[index] || '🏅'}</span>
              </div>
              <h3 className="examples-sport__card-title">{item.title}</h3>
              <p className="examples-sport__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="examples-sport__highlight">
          <div className="examples-sport__highlight-icon">🎖️</div>
          <div className="examples-sport__highlight-content">
            <h4>Risultati Certificati Forever</h4>
            <p>
              I tuoi traguardi sportivi diventano <GlossaryTerm termId="egi">EGI</GlossaryTerm> permanenti.
              Maratone completate, record personali, imprese memorabili: tutto certificato su blockchain,
              con possibilità di <GlossaryTerm termId="royalty">royalty</GlossaryTerm> dagli sponsor.
            </p>
          </div>
        </div>

        <div className="examples-sport__features">
          <div className="examples-sport__feature">
            <span className="examples-sport__feature-icon">📍</span>
            <span>Tracciati GPS certificati</span>
          </div>
          <div className="examples-sport__feature">
            <span className="examples-sport__feature-icon">🎬</span>
            <span>Video 360° dell'esperienza</span>
          </div>
          <div className="examples-sport__feature">
            <span className="examples-sport__feature-icon">💰</span>
            <span>Split sponsor automatico</span>
          </div>
        </div>
      </div>

      <style>{`
        .examples-sport {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .examples-sport__container { max-width: 900px; margin: 0 auto; }
        .examples-sport__header { text-align: center; margin-bottom: 3rem; }
        .examples-sport__badge {
          display: inline-block;
          background: rgba(251, 191, 36, 0.15);
          color: #fbbf24;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .examples-sport__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .examples-sport__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .examples-sport__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .examples-sport__card {
          background: rgba(251, 191, 36, 0.05);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .examples-sport__card:hover {
          transform: translateY(-4px);
          border-color: rgba(251, 191, 36, 0.5);
        }
        .examples-sport__card-medal {
          width: 70px;
          height: 70px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .examples-sport__card-icon { font-size: 2rem; }
        .examples-sport__card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .examples-sport__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }
        .examples-sport__highlight {
          display: flex;
          gap: 1.25rem;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .examples-sport__highlight-icon { font-size: 2rem; flex-shrink: 0; }
        .examples-sport__highlight-content h4 {
          margin: 0 0 0.5rem 0;
          color: #fbbf24;
          font-size: 1rem;
        }
        .examples-sport__highlight-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }
        .examples-sport__features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .examples-sport__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }
        @media (max-width: 600px) {
          .examples-sport__highlight { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default ExamplesSport;
