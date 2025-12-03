/**
 * Mattoncino #20: Esempi Ambiente
 * 
 * Showcase di come progetti ambientali possono diventare EGI.
 * Chiave JSON: examples.tabs[3]
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const ExamplesEco: React.FC = () => {
  const { t } = useTranslation('florence');

  const tabData = t('examples.tabs', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  }>;

  const ecoTab = tabData?.find(tab => tab.id === 'eco') || {
    name: 'Ambiente',
    description: 'Alberi piantati, kg plastica rimossa, crediti green.',
    items: [
      { title: 'Albero piantato', desc: 'Carbon credit certificato' },
      { title: 'Pulizia oceano', desc: 'Kg plastica rimossa tokenizzati' },
      { title: 'Restauro monumento', desc: 'Contributo storico certificato' },
      { title: 'Energia rinnovabile', desc: 'kWh verdi scambiabili' },
    ],
  };

  const ICONS = ['🌳', '🌊', '🏛️', '⚡'];

  return (
    <section className="examples-eco">
      <div className="examples-eco__container">
        <header className="examples-eco__header">
          <span className="examples-eco__badge">🌍 {ecoTab.name}</span>
          <h2 className="examples-eco__title">
            {t('examples.title', 'Qualsiasi Cosa Esista, Può Diventare un EGI')}
          </h2>
          <p className="examples-eco__subtitle">{ecoTab.description}</p>
        </header>

        <div className="examples-eco__grid">
          {ecoTab.items.map((item, index) => (
            <div key={index} className="examples-eco__card">
              <div className="examples-eco__card-icon">{ICONS[index] || '🌱'}</div>
              <h3 className="examples-eco__card-title">{item.title}</h3>
              <p className="examples-eco__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="examples-eco__highlight">
          <div className="examples-eco__highlight-icon">💚</div>
          <div className="examples-eco__highlight-content">
            <h4>Impatto Verificabile su Blockchain</h4>
            <p>
              Ogni contributo ambientale viene tokenizzato come{' '}
              <GlossaryTerm termId="egi">EGI</GlossaryTerm>, garantendo 
              trasparenza totale. Niente più greenwashing: ogni euro 
              è tracciabile attraverso l'<GlossaryTerm termId="epp">EPP</GlossaryTerm>.
            </p>
          </div>
        </div>

        <div className="examples-eco__features">
          <div className="examples-eco__feature">
            <span className="examples-eco__feature-icon">📊</span>
            <span>Carbon credit certificati</span>
          </div>
          <div className="examples-eco__feature">
            <span className="examples-eco__feature-icon">🔗</span>
            <span>Tracciabilità blockchain</span>
          </div>
          <div className="examples-eco__feature">
            <span className="examples-eco__feature-icon">🤝</span>
            <span>Partner verificati (Treedom, 3Bee)</span>
          </div>
        </div>
      </div>

      <style>{`
        .examples-eco {
          background: linear-gradient(135deg, #0f1a0f 0%, #1a2e1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .examples-eco__container { max-width: 900px; margin: 0 auto; }
        .examples-eco__header { text-align: center; margin-bottom: 3rem; }
        .examples-eco__badge {
          display: inline-block;
          background: rgba(74, 222, 128, 0.15);
          color: #4ade80;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .examples-eco__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .examples-eco__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .examples-eco__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .examples-eco__card {
          background: rgba(74, 222, 128, 0.05);
          border: 1px solid rgba(74, 222, 128, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .examples-eco__card:hover {
          transform: translateY(-4px);
          border-color: rgba(74, 222, 128, 0.5);
          box-shadow: 0 8px 30px rgba(74, 222, 128, 0.15);
        }
        .examples-eco__card-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
        .examples-eco__card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .examples-eco__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }
        .examples-eco__highlight {
          display: flex;
          gap: 1.25rem;
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .examples-eco__highlight-icon { font-size: 2rem; flex-shrink: 0; }
        .examples-eco__highlight-content h4 {
          margin: 0 0 0.5rem 0;
          color: #4ade80;
          font-size: 1rem;
        }
        .examples-eco__highlight-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }
        .examples-eco__features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .examples-eco__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }
        @media (max-width: 600px) {
          .examples-eco__highlight { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default ExamplesEco;
