/**
 * Mattoncino #22: Esempi Moda
 * 
 * Showcase di come la moda può diventare EGI.
 * Chiave JSON: examples.tabs[5]
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const ExamplesFashion: React.FC = () => {
  const { t } = useTranslation('florence');

  const tabData = t('examples.tabs', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  }>;

  const fashionTab = tabData?.find(tab => tab.id === 'fashion') || {
    name: 'Moda',
    description: 'Scarpe artigianali, gioielli tracciati, abiti unici.',
    items: [
      { title: 'Scarpa artigianale', desc: 'Prototipo unico + storia produzione' },
      { title: 'Gioiello', desc: 'Certificato autenticità + tracciabilità gemme' },
      { title: 'Abito sartoriale', desc: 'Design esclusivo + making-of' },
    ],
  };

  const ICONS = ['👟', '💎', '👗'];

  return (
    <section className="examples-fashion">
      <div className="examples-fashion__container">
        <header className="examples-fashion__header">
          <span className="examples-fashion__badge">✨ {fashionTab.name}</span>
          <h2 className="examples-fashion__title">
            {t('examples.title')}
          </h2>
          <p className="examples-fashion__subtitle">{fashionTab.description}</p>
        </header>

        <div className="examples-fashion__runway">
          {fashionTab.items.map((item, index) => (
            <div key={index} className="examples-fashion__card">
              <div className="examples-fashion__card-spotlight">
                <span className="examples-fashion__card-icon">{ICONS[index] || '👔'}</span>
              </div>
              <h3 className="examples-fashion__card-title">{item.title}</h3>
              <p className="examples-fashion__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="examples-fashion__highlight">
          <div className="examples-fashion__highlight-icon">🏷️</div>
          <div className="examples-fashion__highlight-content">
            <h4>Autenticità Certificata Anti-Contraffazione</h4>
            <p>
              Ogni capo diventa un <GlossaryTerm termId="egi">EGI</GlossaryTerm> con{' '}
              <GlossaryTerm termId="coa">Certificato di Autenticità</GlossaryTerm> immutabile.
              Filiera tracciabile, materiali certificati, storia del prodotto accessibile
              via QR code. Fine della contraffazione nel lusso.
            </p>
          </div>
        </div>

        <div className="examples-fashion__features">
          <div className="examples-fashion__feature">
            <span className="examples-fashion__feature-icon">🔍</span>
            <span>Filiera 100% tracciabile</span>
          </div>
          <div className="examples-fashion__feature">
            <span className="examples-fashion__feature-icon">📱</span>
            <span>QR code verifica istantanea</span>
          </div>
          <div className="examples-fashion__feature">
            <span className="examples-fashion__feature-icon">♻️</span>
            <span>Certificazione sostenibilità</span>
          </div>
        </div>
      </div>

      <style>{`
        .examples-fashion {
          background: linear-gradient(135deg, #1a0f1a 0%, #2e1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .examples-fashion__container { max-width: 900px; margin: 0 auto; }
        .examples-fashion__header { text-align: center; margin-bottom: 3rem; }
        .examples-fashion__badge {
          display: inline-block;
          background: rgba(236, 72, 153, 0.15);
          color: #ec4899;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .examples-fashion__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .examples-fashion__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .examples-fashion__runway {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .examples-fashion__card {
          background: rgba(236, 72, 153, 0.05);
          border: 1px solid rgba(236, 72, 153, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .examples-fashion__card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ec4899, transparent);
        }
        .examples-fashion__card:hover {
          transform: translateY(-4px);
          border-color: rgba(236, 72, 153, 0.5);
        }
        .examples-fashion__card-spotlight {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .examples-fashion__card-icon { font-size: 2.5rem; }
        .examples-fashion__card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .examples-fashion__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }
        .examples-fashion__highlight {
          display: flex;
          gap: 1.25rem;
          background: rgba(236, 72, 153, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .examples-fashion__highlight-icon { font-size: 2rem; flex-shrink: 0; }
        .examples-fashion__highlight-content h4 {
          margin: 0 0 0.5rem 0;
          color: #ec4899;
          font-size: 1rem;
        }
        .examples-fashion__highlight-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }
        .examples-fashion__features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .examples-fashion__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }
        @media (max-width: 600px) {
          .examples-fashion__highlight { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default ExamplesFashion;
