/**
 * Mattoncino #30: Tech User - Cosa Vedi Tu
 * 
 * Features lato utente della piattaforma.
 * Chiave JSON: technology.userFeatures
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const TechUser: React.FC = () => {
  const { t } = useTranslation('florence');

  const userFeaturesData = t('technology.userFeatures', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  const userFeatures = userFeaturesData || [
    { title: 'Interfaccia drag&drop', desc: 'Carica opere intuitivamente' },
    { title: 'Dashboard mobile-responsive', desc: 'Gestisci da qualsiasi dispositivo' },
    { title: 'Notifiche real-time', desc: 'Mai perdere una vendita' },
    { title: 'Analytics comprensibili', desc: 'Dati senza complessità' },
  ];

  const ICONS = ['📤', '📱', '🔔', '📊'];

  return (
    <section className="tech-user">
      <div className="tech-user__container">
        <header className="tech-user__header">
          <span className="tech-user__badge">👤 Lato Utente</span>
          <h2 className="tech-user__title">
            {t('technology.userColumnTitle')}
          </h2>
          <p className="tech-user__subtitle">
            Semplicità senza compromessi
          </p>
        </header>

        <div className="tech-user__grid">
          {userFeatures.map((feature, index) => (
            <div key={index} className="tech-user__card">
              <div className="tech-user__card-icon">{ICONS[index]}</div>
              <h3 className="tech-user__card-title">{feature.title}</h3>
              <p className="tech-user__card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="tech-user__tagline">
          <p>💡 Non devi capire la blockchain. Devi solo <strong>{t('technology.egizzare')}</strong>.</p>
        </div>
      </div>

      <style>{`
        .tech-user {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .tech-user__container { max-width: 800px; margin: 0 auto; }
        .tech-user__header { text-align: center; margin-bottom: 3rem; }
        .tech-user__badge {
          display: inline-block;
          background: rgba(74, 222, 128, 0.15);
          color: #4ade80;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .tech-user__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #4ade80;
          margin: 0 0 0.5rem 0;
          letter-spacing: 2px;
        }
        .tech-user__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .tech-user__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .tech-user__card {
          background: rgba(74, 222, 128, 0.05);
          border: 1px solid rgba(74, 222, 128, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .tech-user__card:hover {
          border-color: rgba(74, 222, 128, 0.5);
          transform: translateY(-4px);
        }
        .tech-user__card-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .tech-user__card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .tech-user__card-desc {
          font-size: 0.85rem;
          color: #888;
          margin: 0;
        }
        .tech-user__tagline {
          text-align: center;
          padding: 1.5rem;
          background: rgba(74, 222, 128, 0.1);
          border-radius: 12px;
        }
        .tech-user__tagline p {
          margin: 0;
          font-size: 1.1rem;
          color: #ccc;
        }
        .tech-user__tagline strong {
          color: #4ade80;
        }
      `}</style>
    </section>
  );
};

export default TechUser;
