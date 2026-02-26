/**
 * Mattoncino #31: Tech System - Cosa Fa il Sistema
 * 
 * Tecnologie e funzionalità backend.
 * Chiave JSON: technology.systemFeatures
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const TechSystem: React.FC = () => {
  const { t } = useTranslation('florence');

  const systemFeaturesData = t('technology.systemFeatures', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  const systemFeatures = systemFeaturesData || [
    { title: 'Blockchain Algorand', desc: '1000 TPS, <5s finalità, €0.001/tx' },
    { title: 'Smart contract TEAL', desc: 'Verificabili e sicuri' },
    { title: 'ULM Audit Trail', desc: 'Log immutabile 10 anni' },
    { title: 'AES-256 Encryption', desc: 'Chiavi wallet protette' },
    { title: 'Multi-tenant SaaS', desc: 'Scalabile infinitamente' },
    { title: 'NATAN AI', desc: 'RAG, Valuation, Activation' },
    { title: 'Event Bus pub/sub', desc: 'Comunicazione asincrona' },
    { title: 'Observability completa', desc: 'UEM/ULM/GDPR monitoring' },
  ];

  const ICONS = ['⛓️', '📜', '📋', '🔐', '☁️', '🤖', '📡', '👁️'];

  return (
    <section className="tech-system">
      <div className="tech-system__container">
        <header className="tech-system__header">
          <span className="tech-system__badge">⚙️ Backend</span>
          <h2 className="tech-system__title">
            {t('technology.systemColumnTitle', t('technology.systemColumnTitle'))}
          </h2>
          <p className="tech-system__subtitle">
            Potenza enterprise invisibile
          </p>
        </header>

        <div className="tech-system__grid">
          {systemFeatures.map((feature, index) => (
            <div key={index} className="tech-system__card">
              <div className="tech-system__card-header">
                <span className="tech-system__card-icon">{ICONS[index]}</span>
                <h3 className="tech-system__card-title">{feature.title}</h3>
              </div>
              <p className="tech-system__card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="tech-system__highlight">
          <div className="tech-system__highlight-icon">🔗</div>
          <div className="tech-system__highlight-content">
            <h4>Powered by <GlossaryTerm termId="algorand">{t('technology.algorandLabel')}</GlossaryTerm></h4>
            <p>
              Blockchain carbon-negative, {t('technology.algorandDesc')} in meno di 5 secondi, costo medio €0.001 per transazione.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .tech-system {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .tech-system__container { max-width: 900px; margin: 0 auto; }
        .tech-system__header { text-align: center; margin-bottom: 3rem; }
        .tech-system__badge {
          display: inline-block;
          background: rgba(167, 139, 250, 0.15);
          color: #a78bfa;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .tech-system__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #a78bfa;
          margin: 0 0 0.5rem 0;
          letter-spacing: 2px;
        }
        .tech-system__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .tech-system__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .tech-system__card {
          background: rgba(167, 139, 250, 0.05);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 10px;
          padding: 1rem;
          transition: all 0.3s ease;
        }
        .tech-system__card:hover {
          border-color: rgba(167, 139, 250, 0.5);
        }
        .tech-system__card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .tech-system__card-icon { font-size: 1.25rem; }
        .tech-system__card-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }
        .tech-system__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          font-family: monospace;
        }
        .tech-system__highlight {
          display: flex;
          gap: 1.25rem;
          background: rgba(167, 139, 250, 0.1);
          border: 1px solid rgba(167, 139, 250, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
        }
        .tech-system__highlight-icon { font-size: 2rem; flex-shrink: 0; }
        .tech-system__highlight-content h4 {
          margin: 0 0 0.5rem 0;
          color: #a78bfa;
          font-size: 1rem;
        }
        .tech-system__highlight-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .tech-system__highlight { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default TechSystem;
