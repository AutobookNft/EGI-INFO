/**
 * Mattoncino #43: CTA Finale
 * 
 * Call to action finale con statistiche obiettivo.
 * Chiave JSON: ctaFinal
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

const CTAFinal: React.FC = () => {
  const { t } = useTranslation('florence');

  const ctaData = t('ctaFinal', { returnObjects: true }) as {
    title: string;
    stats: string;
    buttons: {
      creator: string;
      collector: string;
      company: string;
    };
  };

  const cta = ctaData || {
    title: 'Il Rinascimento Digitale Inizia Qui',
    stats: 'Obiettivi Anno 1: 1200+ Creator • €450k+ Donati • 100% Trasparenza',
    buttons: {
      creator: 'Sono un Creator',
      collector: 'Sono un Collector',
      company: 'Sono un\'Azienda',
    },
  };

  return (
    <section className="cta-final">
      <div className="cta-final__container">
        {/* Background decoration */}
        <div className="cta-final__bg-pattern" />
        
        {/* Main content */}
        <div className="cta-final__content">
          <div className="cta-final__icon">🏛️</div>
          <h2 className="cta-final__title">{cta.title}</h2>
          
          <div className="cta-final__stats">
            <div className="cta-final__stat">
              <span className="cta-final__stat-value">1200+</span>
              <span className="cta-final__stat-label">
                <GlossaryTerm termId="creator">Creator</GlossaryTerm>
              </span>
            </div>
            <div className="cta-final__stat-divider">•</div>
            <div className="cta-final__stat">
              <span className="cta-final__stat-value">€450k+</span>
              <span className="cta-final__stat-label">
                Donati via <GlossaryTerm termId="epp">EPP</GlossaryTerm>
              </span>
            </div>
            <div className="cta-final__stat-divider">•</div>
            <div className="cta-final__stat">
              <span className="cta-final__stat-value">100%</span>
              <span className="cta-final__stat-label">Trasparenza</span>
            </div>
          </div>

          <p className="cta-final__disclaimer">
            📊 Obiettivi Anno 1 - La piattaforma è in sviluppo
          </p>

          <div className="cta-final__buttons">
            <button className="cta-final__btn cta-final__btn--creator">
              <span className="cta-final__btn-icon">👨‍🎨</span>
              <span>{cta.buttons.creator}</span>
            </button>
            <button className="cta-final__btn cta-final__btn--collector">
              <span className="cta-final__btn-icon">🎭</span>
              <span>{cta.buttons.collector}</span>
            </button>
            <button className="cta-final__btn cta-final__btn--company">
              <span className="cta-final__btn-icon">🏢</span>
              <span>{cta.buttons.company}</span>
            </button>
          </div>

          <div className="cta-final__footer">
            <p>
              Powered by <GlossaryTerm termId="algorand">Algorand</GlossaryTerm> • 
              Made in Italy 🇮🇹 • 
              <GlossaryTerm termId="mica">MiCA Compliant</GlossaryTerm>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .cta-final {
          background: linear-gradient(135deg, #1a1510 0%, #2e251a 50%, #1a1510 100%);
          padding: 5rem 1.5rem;
          color: #e0e0e0;
          position: relative;
          overflow: hidden;
        }
        .cta-final__bg-pattern {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 40%);
          pointer-events: none;
        }
        .cta-final__container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .cta-final__content { text-align: center; }
        .cta-final__icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-final__title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #d4af37;
          margin: 0 0 2rem 0;
          text-shadow: 0 2px 20px rgba(212, 175, 55, 0.3);
        }
        .cta-final__stats {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem 2rem;
          margin-bottom: 1rem;
        }
        .cta-final__stat { text-align: center; }
        .cta-final__stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
        }
        .cta-final__stat-label {
          font-size: 0.85rem;
          color: #888;
        }
        .cta-final__stat-divider {
          color: #d4af37;
          font-size: 1.5rem;
        }
        .cta-final__disclaimer {
          color: #fbbf24;
          font-size: 0.85rem;
          margin: 0 0 2.5rem 0;
          padding: 0.5rem 1rem;
          background: rgba(251, 191, 36, 0.1);
          border-radius: 8px;
          display: inline-block;
        }
        .cta-final__buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .cta-final__btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border: 2px solid;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(0, 0, 0, 0.3);
        }
        .cta-final__btn-icon { font-size: 1.25rem; }
        .cta-final__btn--creator {
          border-color: #4ade80;
          color: #4ade80;
        }
        .cta-final__btn--creator:hover {
          background: rgba(74, 222, 128, 0.2);
          transform: translateY(-2px);
        }
        .cta-final__btn--collector {
          border-color: #60a5fa;
          color: #60a5fa;
        }
        .cta-final__btn--collector:hover {
          background: rgba(96, 165, 250, 0.2);
          transform: translateY(-2px);
        }
        .cta-final__btn--company {
          border-color: #d4af37;
          color: #d4af37;
        }
        .cta-final__btn--company:hover {
          background: rgba(212, 175, 55, 0.2);
          transform: translateY(-2px);
        }
        .cta-final__footer {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .cta-final__footer p {
          margin: 0;
          font-size: 0.85rem;
          color: #666;
        }
        @media (max-width: 600px) {
          .cta-final__stat-divider { display: none; }
          .cta-final__stats { gap: 1.5rem; }
          .cta-final__buttons { flex-direction: column; align-items: center; }
          .cta-final__btn { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default CTAFinal;
