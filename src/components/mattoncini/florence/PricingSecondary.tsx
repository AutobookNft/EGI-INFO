/**
 * Mattoncino #39: Fee Distribuzione Secondaria
 * 
 * Mostra come si distribuisce il ricavato su una rivendita (mercato secondario).
 * Chiave JSON: pricing.secondary
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

// ============================================================================
// CONSTANTS
// ============================================================================

const COLORS = {
  seller: '#facc15',     // Giallo - Venditore (93%)
  royalty: '#4ade80',    // Verde - Royalty Creator (4.5%)
  epp: '#60a5fa',        // Blu - EPP (1%)
  platform: '#a78bfa',   // Viola - Platform (1.5%)
};

const SLICES = [
  { key: 'seller', percent: 93, color: COLORS.seller, glossaryId: 'co-creator' },
  { key: 'royalty', percent: 4.5, color: COLORS.royalty, glossaryId: 'royalty' },
  { key: 'platform', percent: 1.5, color: COLORS.platform, glossaryId: 'florenceegi-core' },
  { key: 'epp', percent: 1, color: COLORS.epp, glossaryId: 'epp' },
];

// ============================================================================
// COMPONENT
// ============================================================================

const PricingSecondary: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section className="pricing-secondary">
      <div className="pricing-secondary__container">
        {/* Header */}
        <header className="pricing-secondary__header">
          <span className="pricing-secondary__badge">🔄 Mercato Secondario</span>
          <h2 className="pricing-secondary__title">
            {t('pricing.secondary.title', 'Distribuzione rivendita (secondaria)')}
          </h2>
          <p className="pricing-secondary__subtitle">
            Quando un Co-Creator rivende il suo EGI
          </p>
        </header>

        {/* Flow Visualization */}
        <div className="pricing-secondary__flow">
          {/* Seller gets most */}
          <div className="pricing-secondary__seller-block">
            <div className="pricing-secondary__seller-icon">👤</div>
            <div className="pricing-secondary__seller-info">
              <GlossaryTerm termId="co-creator">
                <span className="pricing-secondary__seller-label">Venditore</span>
              </GlossaryTerm>
              <span className="pricing-secondary__seller-value">93%</span>
            </div>
            <div className="pricing-secondary__seller-note">
              Riceve quasi tutto il ricavato
            </div>
          </div>

          {/* Arrow */}
          <div className="pricing-secondary__arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            <span>7% distribuito</span>
          </div>

          {/* Distribution to others */}
          <div className="pricing-secondary__distribution">
            {SLICES.filter(s => s.key !== 'seller').map((slice) => (
              <div 
                key={slice.key}
                className="pricing-secondary__dist-card"
                style={{ '--accent-color': slice.color } as React.CSSProperties}
              >
                <div className="pricing-secondary__dist-percent">{slice.percent}%</div>
                <GlossaryTerm termId={slice.glossaryId}>
                  <span className="pricing-secondary__dist-label">
                    {slice.key === 'royalty' && '👨‍🎨 Royalty Creator'}
                    {slice.key === 'platform' && '🏛️ Platform'}
                    {slice.key === 'epp' && '🌱 EPP'}
                  </span>
                </GlossaryTerm>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Bar Visualization */}
        <div className="pricing-secondary__bar-container">
          <div className="pricing-secondary__bar">
            {SLICES.map((slice) => (
              <div
                key={slice.key}
                className="pricing-secondary__bar-segment"
                style={{ 
                  width: `${slice.percent}%`,
                  backgroundColor: slice.color,
                }}
                title={`${slice.key}: ${slice.percent}%`}
              />
            ))}
          </div>
          <div className="pricing-secondary__bar-labels">
            {SLICES.map((slice) => (
              <span 
                key={slice.key}
                style={{ 
                  width: `${slice.percent}%`,
                  color: slice.color,
                }}
              >
                {slice.percent >= 5 ? `${slice.percent}%` : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Key Difference */}
        <div className="pricing-secondary__comparison">
          <div className="pricing-secondary__compare-item pricing-secondary__compare-item--primary">
            <h4>Vendita Primaria</h4>
            <p>Creator riceve <strong>68%</strong></p>
            <p>EPP riceve <strong>20%</strong></p>
          </div>
          <div className="pricing-secondary__compare-vs">VS</div>
          <div className="pricing-secondary__compare-item pricing-secondary__compare-item--secondary">
            <h4>Rivendita</h4>
            <p>Venditore riceve <strong>93%</strong></p>
            <p>Creator riceve <GlossaryTerm termId="royalty"><strong>4.5% royalty</strong></GlossaryTerm> per sempre</p>
          </div>
        </div>

        {/* Key Point */}
        <div className="pricing-secondary__highlight">
          <span className="pricing-secondary__highlight-icon">💎</span>
          <div className="pricing-secondary__highlight-text">
            <strong>Royalty Perpetue Garantite</strong>
            <p>
              Grazie allo <GlossaryTerm termId="smart-contract">smart contract trustless</GlossaryTerm>, 
              il Creator originale riceve automaticamente il 4.5% su OGNI rivendita futura, per sempre.
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .pricing-secondary {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }

        .pricing-secondary__container {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Header */
        .pricing-secondary__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .pricing-secondary__badge {
          display: inline-block;
          background: rgba(250, 204, 21, 0.15);
          color: #facc15;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .pricing-secondary__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .pricing-secondary__subtitle {
          color: #888;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Flow */
        .pricing-secondary__flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .pricing-secondary__seller-block {
          background: rgba(250, 204, 21, 0.1);
          border: 2px solid rgba(250, 204, 21, 0.3);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          text-align: center;
          min-width: 250px;
        }

        .pricing-secondary__seller-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .pricing-secondary__seller-info {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.75rem;
        }

        .pricing-secondary__seller-label {
          font-size: 1.1rem;
          color: #facc15;
          cursor: help;
        }

        .pricing-secondary__seller-value {
          font-size: 2rem;
          font-weight: 700;
          color: #facc15;
        }

        .pricing-secondary__seller-note {
          font-size: 0.85rem;
          color: #888;
          margin-top: 0.5rem;
        }

        .pricing-secondary__arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #666;
        }

        .pricing-secondary__arrow svg {
          width: 24px;
          height: 24px;
        }

        .pricing-secondary__arrow span {
          font-size: 0.8rem;
          margin-top: 0.25rem;
        }

        .pricing-secondary__distribution {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pricing-secondary__dist-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--accent-color);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          text-align: center;
          min-width: 140px;
        }

        .pricing-secondary__dist-percent {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
        }

        .pricing-secondary__dist-label {
          font-size: 0.85rem;
          color: #ccc;
          cursor: help;
        }

        /* Bar */
        .pricing-secondary__bar-container {
          margin: 2rem 0;
        }

        .pricing-secondary__bar {
          display: flex;
          height: 24px;
          border-radius: 12px;
          overflow: hidden;
        }

        .pricing-secondary__bar-segment {
          transition: opacity 0.2s;
        }

        .pricing-secondary__bar-segment:hover {
          opacity: 0.8;
        }

        .pricing-secondary__bar-labels {
          display: flex;
          margin-top: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .pricing-secondary__bar-labels span {
          text-align: center;
        }

        /* Comparison */
        .pricing-secondary__comparison {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .pricing-secondary__compare-item {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          text-align: center;
          flex: 1;
          min-width: 200px;
          max-width: 280px;
        }

        .pricing-secondary__compare-item h4 {
          margin: 0 0 0.75rem 0;
          font-size: 1rem;
        }

        .pricing-secondary__compare-item p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: #aaa;
        }

        .pricing-secondary__compare-item strong {
          color: #fff;
        }

        .pricing-secondary__compare-item--primary {
          border: 1px solid rgba(74, 222, 128, 0.3);
        }

        .pricing-secondary__compare-item--primary h4 {
          color: #4ade80;
        }

        .pricing-secondary__compare-item--secondary {
          border: 1px solid rgba(250, 204, 21, 0.3);
        }

        .pricing-secondary__compare-item--secondary h4 {
          color: #facc15;
        }

        .pricing-secondary__compare-vs {
          font-weight: 700;
          color: #666;
          font-size: 0.9rem;
        }

        /* Highlight */
        .pricing-secondary__highlight {
          display: flex;
          gap: 1rem;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 12px;
          padding: 1.25rem;
          margin-top: 2rem;
        }

        .pricing-secondary__highlight-icon {
          font-size: 2rem;
        }

        .pricing-secondary__highlight-text strong {
          color: #d4af37;
          display: block;
          margin-bottom: 0.5rem;
        }

        .pricing-secondary__highlight-text p {
          margin: 0;
          font-size: 0.9rem;
          color: #aaa;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .pricing-secondary__comparison {
            flex-direction: column;
          }

          .pricing-secondary__compare-vs {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  );
};

export default PricingSecondary;
