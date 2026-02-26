/**
 * Mattoncino #38: Fee Distribuzione Primaria
 * 
 * Mostra come si distribuisce il ricavato su una vendita primaria (prima vendita).
 * Chiave JSON: pricing.distribution
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

// ============================================================================
// CONSTANTS
// ============================================================================

const COLORS = {
  creator: '#4ade80',    // Verde - Creator (68%)
  epp: '#60a5fa',        // Blu - EPP (20%)
  platform: '#a78bfa',   // Viola - Platform (10%)
  association: '#d4af37', // Oro - Associazione (2%)
};

const SLICES = [
  { key: 'creator', percent: 68, color: COLORS.creator, glossaryId: 'creator' },
  { key: 'epp', percent: 20, color: COLORS.epp, glossaryId: 'epp' },
  { key: 'platform', percent: 10, color: COLORS.platform, glossaryId: 'florenceegi-core' },
  { key: 'association', percent: 2, color: COLORS.association, glossaryId: 'frangette-aps' },
];

// ============================================================================
// COMPONENT
// ============================================================================

const PricingPrimary: React.FC = () => {
  const { t } = useTranslation('florence');

  // Calcola offset per il donut chart
  const calculateOffset = (index: number): number => {
    return SLICES.slice(0, index).reduce((acc, s) => acc + s.percent, 0);
  };

  return (
    <section className="pricing-primary">
      <div className="pricing-primary__container">
        {/* Header */}
        <header className="pricing-primary__header">
          <span className="pricing-primary__badge">{t('pricing.distribution.badge')}</span>
          <h2 className="pricing-primary__title">
            {t('pricing.distribution.title', 'Distribuzione su €1000 vendita primaria')}
          </h2>
          <p className="pricing-primary__subtitle">
            {t('pricing.subtitle', 'Più vendi, meno paghi.')}
          </p>
        </header>

        {/* Main Content */}
        <div className="pricing-primary__content">
          {/* Donut Chart */}
          <div className="pricing-primary__chart">
            <svg viewBox="0 0 100 100" className="pricing-primary__donut">
              {SLICES.map((slice, index) => {
                const offset = calculateOffset(index);
                const circumference = 2 * Math.PI * 35; // r=35
                const strokeLength = (slice.percent / 100) * circumference;
                const strokeOffset = (offset / 100) * circumference;

                return (
                  <circle
                    key={slice.key}
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke={slice.color}
                    strokeWidth="12"
                    strokeDasharray={`${strokeLength} ${circumference}`}
                    strokeDashoffset={-strokeOffset}
                    transform="rotate(-90 50 50)"
                    className="pricing-primary__slice"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  />
                );
              })}
              {/* Center text */}
              <text x="50" y="47" textAnchor="middle" className="pricing-primary__center-amount">
                {t('pricing.distribution.exampleAmount')}
              </text>
              <text x="50" y="58" textAnchor="middle" className="pricing-primary__center-label">
                {t('pricing.distribution.exampleLabel')}
              </text>
            </svg>
          </div>

          {/* Distribution Cards */}
          <div className="pricing-primary__cards">
            {SLICES.map((slice) => {
              const data = t(`pricing.distribution.${slice.key}`, { returnObjects: true }) as {
                label: string;
                value: string;
                percent: string;
              };

              return (
                <div
                  key={slice.key}
                  className="pricing-primary__card"
                  style={{ '--accent-color': slice.color } as React.CSSProperties}
                >
                  <div className="pricing-primary__card-header">
                    <GlossaryTerm termId={slice.glossaryId}>
                      <span className="pricing-primary__card-label">{data.label}</span>
                    </GlossaryTerm>
                    <span className="pricing-primary__card-percent">{data.percent}</span>
                  </div>
                  <div className="pricing-primary__card-value">{data.value}</div>
                  <div
                    className="pricing-primary__card-bar"
                    style={{ width: `${slice.percent}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Points */}
        <div className="pricing-primary__points">
          <div className="pricing-primary__point">
            <span className="pricing-primary__point-icon">✅</span>
            <span>{t('pricing.point1')}</span>
          </div>
          <div className="pricing-primary__point">
            <span className="pricing-primary__point-icon">🌱</span>
            <span>
              <GlossaryTerm termId="epp">{t('pricing.point2.eppLabel')}</GlossaryTerm>
              {' '}{t('pricing.point2.suffix')}
            </span>
          </div>
          <div className="pricing-primary__point">
            <span className="pricing-primary__point-icon">🔄</span>
            <span>
              <GlossaryTerm termId="royalty">{t('pricing.point3.royaltyLabel')}</GlossaryTerm>
              {' '}{t('pricing.point3.suffix')}
            </span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .pricing-primary {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }

        .pricing-primary__container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header */
        .pricing-primary__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .pricing-primary__badge {
          display: inline-block;
          background: rgba(74, 222, 128, 0.15);
          color: #4ade80;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .pricing-primary__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .pricing-primary__subtitle {
          color: #888;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Content Layout */
        .pricing-primary__content {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .pricing-primary__content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Donut Chart */
        .pricing-primary__chart {
          display: flex;
          justify-content: center;
        }

        .pricing-primary__donut {
          width: 100%;
          max-width: 250px;
        }

        .pricing-primary__slice {
          opacity: 0;
          animation: sliceAppear 0.5s ease forwards;
        }

        @keyframes sliceAppear {
          to { opacity: 1; }
        }

        .pricing-primary__center-amount {
          font-size: 12px;
          font-weight: 700;
          fill: #d4af37;
        }

        .pricing-primary__center-label {
          font-size: 6px;
          fill: #888;
        }

        /* Cards */
        .pricing-primary__cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pricing-primary__card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid var(--accent-color);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          position: relative;
          overflow: hidden;
        }

        .pricing-primary__card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.25rem;
        }

        .pricing-primary__card-label {
          font-weight: 600;
          color: var(--accent-color);
          cursor: help;
        }

        .pricing-primary__card-percent {
          font-size: 0.85rem;
          color: #888;
        }

        .pricing-primary__card-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .pricing-primary__card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: var(--accent-color);
          opacity: 0.5;
        }

        /* Points */
        .pricing-primary__points {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pricing-primary__point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }

        .pricing-primary__point-icon {
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};

export default PricingPrimary;
