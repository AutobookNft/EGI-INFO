/**
 * Mattoncino #40: Case Studies
 * 
 * Obiettivi di impatto e proiezioni Anno 1.
 * Chiave JSON: cases.items
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const Cases: React.FC = () => {
  const { t } = useTranslation('florence');

  const casesData = t('cases', { returnObjects: true }) as {
    title: string;
    disclaimer: string;
    items: Array<{ name: string; result: string }>;
  };

  const cases = casesData || {
    title: t('cases.title', 'Chi può usare FlorenceEGI'),
    disclaimer: t('cases.disclaimer', 'FlorenceEGI non è ancora in produzione'),
    items: [
      { name: 'Maria, Pittrice', result: '+€4,500 in 3 mesi con royalty.' },
      { name: t('cases.items.1.name', 'Ente Pubblico'), result: t('cases.items.1.result', 'Notarizzazione documenti blockchain') },
      { name: 'GreenThreads', result: 'Filiera moda certificata, -20% resi.' },
    ],
  };

  const ICONS = ['👩‍🎨', '🏛️', '👔'];
  const COLORS = ['#f87171', '#60a5fa', '#4ade80'];

  return (
    <section className="cases">
      <div className="cases__container">
        <header className="cases__header">
          <span className="cases__badge">📊 Obiettivi</span>
          <h2 className="cases__title">{cases.title}</h2>
          <p className="cases__disclaimer">⚠️ {cases.disclaimer}</p>
        </header>

        <div className="cases__grid">
          {cases.items.map((item, index) => (
            <div 
              key={index} 
              className="cases__card"
              style={{ '--accent-color': COLORS[index] } as React.CSSProperties}
            >
              <div className="cases__card-avatar">
                <span>{ICONS[index] || '👤'}</span>
              </div>
              <h3 className="cases__card-name">{item.name}</h3>
              <p className="cases__card-result">{item.result}</p>
            </div>
          ))}
        </div>

        <div className="cases__stats">
          <div className="cases__stat">
            <span className="cases__stat-value">1200+</span>
            <span className="cases__stat-label">
              <GlossaryTerm termId="creator">Creator</GlossaryTerm> obiettivo
            </span>
          </div>
          <div className="cases__stat">
            <span className="cases__stat-value">€450k+</span>
            <span className="cases__stat-label">
              Donati via <GlossaryTerm termId="epp">EPP</GlossaryTerm>
            </span>
          </div>
          <div className="cases__stat">
            <span className="cases__stat-value">100%</span>
            <span className="cases__stat-label">Trasparenza</span>
          </div>
        </div>

        <div className="cases__note">
          <span className="cases__note-icon">💡</span>
          <p>
            Questi sono <strong>obiettivi</strong>, non risultati. FlorenceEGI è in fase 
            di sviluppo. Ogni numero sarà verificabile su blockchain una volta lanciato.
          </p>
        </div>
      </div>

      <style>{`
        .cases {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .cases__container { max-width: 900px; margin: 0 auto; }
        .cases__header { text-align: center; margin-bottom: 3rem; }
        .cases__badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .cases__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .cases__disclaimer {
          color: #fbbf24;
          font-size: 0.9rem;
          margin: 0;
          padding: 0.5rem 1rem;
          background: rgba(251, 191, 36, 0.1);
          border-radius: 8px;
          display: inline-block;
        }
        .cases__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .cases__card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 3px solid var(--accent-color);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .cases__card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-color);
        }
        .cases__card-avatar {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }
        .cases__card-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent-color);
          margin: 0 0 0.5rem 0;
        }
        .cases__card-result {
          font-size: 0.9rem;
          color: #ccc;
          margin: 0;
          line-height: 1.4;
        }
        .cases__stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 12px;
        }
        .cases__stat { text-align: center; }
        .cases__stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #d4af37;
        }
        .cases__stat-label {
          font-size: 0.85rem;
          color: #888;
        }
        .cases__note {
          display: flex;
          gap: 1rem;
          background: rgba(100, 100, 100, 0.1);
          border: 1px solid rgba(100, 100, 100, 0.3);
          border-radius: 12px;
          padding: 1.25rem;
        }
        .cases__note-icon { font-size: 1.5rem; flex-shrink: 0; }
        .cases__note p {
          margin: 0;
          font-size: 0.9rem;
          color: #aaa;
          line-height: 1.5;
        }
        .cases__note strong { color: #fff; }
        @media (max-width: 600px) {
          .cases__stats { gap: 1.5rem; }
          .cases__note { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default Cases;
