/**
 * Mattoncino #41: Roadmap
 * 
 * Mostra la roadmap di sviluppo futuro.
 * Chiave JSON: roadmap.items
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const Roadmap: React.FC = () => {
  const { t } = useTranslation('florence');

  const roadmapData = t('roadmap', { returnObjects: true }) as {
    title: string;
    items: string[];
  };

  const roadmap = roadmapData || {
    title: t('roadmap.title'),
    items: [
      'Q1 2026: Mobile App & AR',
      'Q2 2026: Social Features',
      'Q3 2026: AI Predictive',
      'Q4 2026: Global Expansion',
    ],
  };

  const ICONS = ['📱', '👥', '🤖', '🌍'];
  const COLORS = ['#60a5fa', '#a78bfa', '#4ade80', '#d4af37'];

  return (
    <section className="roadmap">
      <div className="roadmap__container">
        <header className="roadmap__header">
          <span className="roadmap__badge">🚀 Roadmap</span>
          <h2 className="roadmap__title">{roadmap.title}</h2>
        </header>

        <div className="roadmap__timeline">
          {roadmap.items.map((item, index) => {
            const [quarter, ...rest] = item.split(': ');
            const description = rest.join(': ');
            return (
              <div 
                key={index} 
                className="roadmap__item"
                style={{ '--accent-color': COLORS[index] } as React.CSSProperties}
              >
                <div className="roadmap__item-marker">
                  <span className="roadmap__item-icon">{ICONS[index]}</span>
                </div>
                <div className="roadmap__item-content">
                  <span className="roadmap__item-quarter">{quarter}</span>
                  <h3 className="roadmap__item-title">{description}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="roadmap__note">
          <p>{t('roadmap.disclaimer')}</p>
        </div>
      </div>

      <style>{`
        .roadmap {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .roadmap__container { max-width: 700px; margin: 0 auto; }
        .roadmap__header { text-align: center; margin-bottom: 3rem; }
        .roadmap__badge {
          display: inline-block;
          background: rgba(96, 165, 250, 0.15);
          color: #60a5fa;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .roadmap__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .roadmap__timeline {
          position: relative;
          padding-left: 60px;
        }
        .roadmap__timeline::before {
          content: '';
          position: absolute;
          left: 25px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #60a5fa, #a78bfa, #4ade80, #d4af37);
        }
        .roadmap__item {
          position: relative;
          margin-bottom: 2rem;
        }
        .roadmap__item:last-child { margin-bottom: 0; }
        .roadmap__item-marker {
          position: absolute;
          left: -60px;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .roadmap__item-icon { font-size: 1.5rem; }
        .roadmap__item-content {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 3px solid var(--accent-color);
          border-radius: 0 12px 12px 0;
          padding: 1.25rem 1.5rem;
          transition: all 0.3s ease;
        }
        .roadmap__item:hover .roadmap__item-content {
          border-color: var(--accent-color);
          transform: translateX(5px);
        }
        .roadmap__item-quarter {
          display: inline-block;
          background: var(--accent-color);
          color: #000;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .roadmap__item-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }
        .roadmap__note {
          margin-top: 2rem;
          padding: 1rem;
          background: rgba(100, 100, 100, 0.1);
          border-radius: 8px;
          text-align: center;
        }
        .roadmap__note p {
          margin: 0;
          font-size: 0.85rem;
          color: #888;
        }
        @media (max-width: 500px) {
          .roadmap__timeline { padding-left: 50px; }
          .roadmap__timeline::before { left: 20px; }
          .roadmap__item-marker {
            left: -50px;
            width: 40px;
            height: 40px;
          }
          .roadmap__item-icon { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;
