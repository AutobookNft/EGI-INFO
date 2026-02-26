/**
 * Mattoncino #32: Tech Performance - Performance Garantite
 * 
 * Metriche di performance della piattaforma.
 * Chiave JSON: technology.performance
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const TechPerformance: React.FC = () => {
  const { t } = useTranslation('florence');

  const performanceData = t('technology.performance', { returnObjects: true }) as Array<{
    label: string;
    value: string;
    desc: string;
  }>;

  const performance = performanceData || [
    { label: 'Minting', value: '< 5s', desc: 'Certificazione istantanea' },
    { label: 'Uptime SLA', value: '99.9%', desc: 'Disponibilità garantita' },
    { label: 'Sicurezza', value: 'SOC 2', desc: 'GDPR by design' },
    { label: 'Utenti concurrent', value: '100k+', desc: 'Scalabilità enterprise' },
  ];

  const COLORS = ['#4ade80', '#60a5fa', '#f87171', '#fbbf24'];

  return (
    <section className="tech-performance">
      <div className="tech-performance__container">
        <header className="tech-performance__header">
          <span className="tech-performance__badge">📈 Performance</span>
          <h2 className="tech-performance__title">
            {t('technology.performanceTitle', 'PERFORMANCE GARANTITE')}
          </h2>
        </header>

        <div className="tech-performance__grid">
          {performance.map((item, index) => (
            <div 
              key={index} 
              className="tech-performance__card"
              style={{ '--accent-color': COLORS[index] } as React.CSSProperties}
            >
              <div className="tech-performance__card-value">{item.value}</div>
              <div className="tech-performance__card-label">{item.label}</div>
              <div className="tech-performance__card-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="tech-performance__cta">
          <p>{t('technology.ctaTitle', 'Tecnologia invisibile, risultati visibili.')}</p>
          <span>{t('technology.ctaSubtitle', 'Non devi capire la blockchain. Devi solo EGIZZARE.')}</span>
        </div>
      </div>

      <style>{`
        .tech-performance {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .tech-performance__container { max-width: 900px; margin: 0 auto; }
        .tech-performance__header { text-align: center; margin-bottom: 3rem; }
        .tech-performance__badge {
          display: inline-block;
          background: rgba(74, 222, 128, 0.15);
          color: #4ade80;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .tech-performance__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 2px;
        }
        .tech-performance__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .tech-performance__card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--accent-color);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .tech-performance__card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }
        .tech-performance__card-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }
        .tech-performance__card-label {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.25rem;
        }
        .tech-performance__card-desc {
          font-size: 0.8rem;
          color: #888;
        }
        .tech-performance__cta {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%);
          border-radius: 16px;
        }
        .tech-performance__cta p {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .tech-performance__cta span {
          font-size: 0.95rem;
          color: #888;
        }
      `}</style>
    </section>
  );
};

export default TechPerformance;
