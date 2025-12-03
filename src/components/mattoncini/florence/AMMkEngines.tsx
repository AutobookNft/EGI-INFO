/**
 * Mattoncino #28: AMMk Engines - 5 Engine Integrati
 * 
 * I 5 motori che alimentano AMMk.
 * Chiave JSON: ammk.engines
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const AMMkEngines: React.FC = () => {
  const { t } = useTranslation('florence');

  const enginesData = t('ammk.engines', { returnObjects: true }) as Array<{
    name: string;
    desc: string;
  }>;

  const engines = enginesData || [
    { name: 'NATAN Market Engine', desc: 'AI valuta mercato, suggerisce prezzi, identifica trend' },
    { name: 'Asset Management', desc: 'Mint, transfer, royalty automatici' },
    { name: 'Distribution Engine', desc: 'Split trustless multi-wallet (Creator/EPP/Platform)' },
    { name: 'Co-Creation Engine', desc: 'Gestione collaborazioni multi-artista' },
    { name: 'Compliance Engine', desc: 'GDPR/MiCA/Fiscale automatico' },
  ];

  const ICONS = ['🤖', '📦', '💰', '🤝', '✅'];
  const COLORS = ['#a78bfa', '#4ade80', '#fbbf24', '#60a5fa', '#f87171'];

  return (
    <section className="ammk-engines">
      <div className="ammk-engines__container">
        <header className="ammk-engines__header">
          <span className="ammk-engines__badge">⚙️ Engine</span>
          <h2 className="ammk-engines__title">
            {t('ammk.enginesTitle', '5 Engine Integrati')}
          </h2>
          <p className="ammk-engines__subtitle">
            I motori che alimentano ogni operazione
          </p>
        </header>

        <div className="ammk-engines__list">
          {engines.map((engine, index) => (
            <div 
              key={index} 
              className="ammk-engines__card"
              style={{ '--accent-color': COLORS[index] } as React.CSSProperties}
            >
              <div className="ammk-engines__card-number">{index + 1}</div>
              <div className="ammk-engines__card-icon">{ICONS[index]}</div>
              <div className="ammk-engines__card-content">
                <h3 className="ammk-engines__card-name">{engine.name}</h3>
                <p className="ammk-engines__card-desc">{engine.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ammk-engines__note">
          <span className="ammk-engines__note-icon">🔗</span>
          <p>
            Tutti gli engine lavorano insieme attraverso un{' '}
            <GlossaryTerm termId="smart-contract">Event Bus pub/sub</GlossaryTerm>,
            garantendo comunicazione asincrona e scalabilità enterprise.
          </p>
        </div>
      </div>

      <style>{`
        .ammk-engines {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .ammk-engines__container { max-width: 800px; margin: 0 auto; }
        .ammk-engines__header { text-align: center; margin-bottom: 3rem; }
        .ammk-engines__badge {
          display: inline-block;
          background: rgba(167, 139, 250, 0.15);
          color: #a78bfa;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .ammk-engines__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .ammk-engines__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .ammk-engines__list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .ammk-engines__card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid var(--accent-color);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.3s ease;
        }
        .ammk-engines__card:hover {
          border-color: var(--accent-color);
          transform: translateX(5px);
        }
        .ammk-engines__card-number {
          width: 32px;
          height: 32px;
          background: var(--accent-color);
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .ammk-engines__card-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }
        .ammk-engines__card-content { flex: 1; }
        .ammk-engines__card-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-color);
          margin: 0 0 0.25rem 0;
        }
        .ammk-engines__card-desc {
          font-size: 0.85rem;
          color: #888;
          margin: 0;
        }
        .ammk-engines__note {
          display: flex;
          gap: 1rem;
          background: rgba(167, 139, 250, 0.1);
          border: 1px solid rgba(167, 139, 250, 0.3);
          border-radius: 12px;
          padding: 1.25rem;
          margin-top: 2rem;
        }
        .ammk-engines__note-icon { font-size: 1.5rem; flex-shrink: 0; }
        .ammk-engines__note p {
          margin: 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default AMMkEngines;
