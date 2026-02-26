/**
 * Mattoncino #23: Esempi Heritage
 * 
 * Showcase di come beni culturali possono diventare EGI.
 * Chiave JSON: examples.tabs[6]
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const ExamplesHeritage: React.FC = () => {
  const { t } = useTranslation('florence');

  const tabData = t('examples.tabs', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  }>;

  const heritageTab = tabData?.find(tab => tab.id === 'culture') || {
    name: 'Heritage',
    description: 'Reperti museali, manoscritti, opere teatrali.',
    items: [
      { title: 'Reperto storico', desc: 'Certificato provenienza + 3D scan' },
      { title: 'Manoscritto', desc: 'Digitalizzazione HD + accesso ricerca' },
      { title: 'Opera teatrale', desc: 'Replica streaming + royalty cast' },
    ],
  };

  const ICONS = ['🏺', '📜', '🎭'];

  return (
    <section className="examples-heritage">
      <div className="examples-heritage__container">
        <header className="examples-heritage__header">
          <span className="examples-heritage__badge">🏛️ {heritageTab.name}</span>
          <h2 className="examples-heritage__title">
            {t('examples.title')}
          </h2>
          <p className="examples-heritage__subtitle">{heritageTab.description}</p>
        </header>

        <div className="examples-heritage__museum">
          {heritageTab.items.map((item, index) => (
            <div key={index} className="examples-heritage__card">
              <div className="examples-heritage__card-frame">
                <span className="examples-heritage__card-icon">{ICONS[index] || '🏛️'}</span>
              </div>
              <div className="examples-heritage__card-plaque">
                <h3 className="examples-heritage__card-title">{item.title}</h3>
                <p className="examples-heritage__card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="examples-heritage__highlight">
          <div className="examples-heritage__highlight-icon">🏛️</div>
          <div className="examples-heritage__highlight-content">
            <h4>Preservazione Digitale del Patrimonio</h4>
            <p>
              Musei e istituzioni culturali possono creare <GlossaryTerm termId="egi">EGI</GlossaryTerm>{' '}
              dei loro reperti: gemelli digitali 3D, certificati di provenienza immutabili,
              e nuove fonti di finanziamento tramite l'<GlossaryTerm termId="epp">EPP</GlossaryTerm>{' '}
              per il restauro e la conservazione.
            </p>
          </div>
        </div>

        <div className="examples-heritage__features">
          <div className="examples-heritage__feature">
            <span className="examples-heritage__feature-icon">🔬</span>
            <span>Scansioni 3D alta definizione</span>
          </div>
          <div className="examples-heritage__feature">
            <span className="examples-heritage__feature-icon">📋</span>
            <span>Provenienza certificata</span>
          </div>
          <div className="examples-heritage__feature">
            <span className="examples-heritage__feature-icon">💝</span>
            <span>Donazioni tracciabili</span>
          </div>
        </div>
      </div>

      <style>{`
        .examples-heritage {
          background: linear-gradient(135deg, #1a1510 0%, #2e251a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .examples-heritage__container { max-width: 900px; margin: 0 auto; }
        .examples-heritage__header { text-align: center; margin-bottom: 3rem; }
        .examples-heritage__badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .examples-heritage__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .examples-heritage__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .examples-heritage__museum {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .examples-heritage__card {
          background: rgba(212, 175, 55, 0.03);
          border: 2px solid rgba(212, 175, 55, 0.2);
          border-radius: 4px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .examples-heritage__card:hover {
          border-color: rgba(212, 175, 55, 0.5);
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
        }
        .examples-heritage__card-frame {
          width: 100px;
          height: 100px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #2a2520 0%, #1a1510 100%);
          border: 3px solid #d4af37;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.3);
        }
        .examples-heritage__card-icon { font-size: 2.5rem; }
        .examples-heritage__card-plaque {
          background: rgba(212, 175, 55, 0.1);
          padding: 0.75rem;
          border-radius: 4px;
        }
        .examples-heritage__card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #d4af37;
          margin: 0 0 0.25rem 0;
        }
        .examples-heritage__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }
        .examples-heritage__highlight {
          display: flex;
          gap: 1.25rem;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .examples-heritage__highlight-icon { font-size: 2rem; flex-shrink: 0; }
        .examples-heritage__highlight-content h4 {
          margin: 0 0 0.5rem 0;
          color: #d4af37;
          font-size: 1rem;
        }
        .examples-heritage__highlight-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }
        .examples-heritage__features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .examples-heritage__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }
        @media (max-width: 600px) {
          .examples-heritage__highlight { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default ExamplesHeritage;
