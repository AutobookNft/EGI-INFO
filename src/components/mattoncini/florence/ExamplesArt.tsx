/**
 * Mattoncino #17: Esempi Arte & Creatività
 * 
 * Showcase di come l'arte può diventare EGI.
 * Chiave JSON: examples.tabs[0]
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

// ============================================================================
// COMPONENT
// ============================================================================

const ExamplesArt: React.FC = () => {
  const { t } = useTranslation('florence');

  const tabData = t('examples.tabs', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  }>;

  const artTab = tabData?.find(tab => tab.id === 'art') || {
    name: 'Arte & Creatività',
    description: 'Quadri fisici, sculture, murales georeferenziati.',
    items: [
      { title: 'Quadro fisico', desc: 'EGI + certificato + royalty perpetua' },
      { title: 'Fotografia', desc: 'Serie limitata tokenizzata' },
      { title: 'Scultura', desc: 'Gemello digitale 3D + proprietà fisica' },
      { title: 'Murales', desc: 'Opera georeferenziata + NFT' },
      { title: 'Installazione', desc: 'Documentazione immersiva + accesso esclusivo' },
    ],
  };

  const ICONS = ['🎨', '📸', '🗿', '🖼️', '🎭'];

  return (
    <section className="examples-art">
      <div className="examples-art__container">
        {/* Header */}
        <header className="examples-art__header">
          <span className="examples-art__badge">🎨 {artTab.name}</span>
          <h2 className="examples-art__title">
            {t('examples.title', 'Qualsiasi Cosa Esista, Può Diventare un EGI')}
          </h2>
          <p className="examples-art__subtitle">{artTab.description}</p>
        </header>

        {/* Items Grid */}
        <div className="examples-art__grid">
          {artTab.items.map((item, index) => (
            <div key={index} className="examples-art__card">
              <div className="examples-art__card-icon">{ICONS[index] || '🎨'}</div>
              <h3 className="examples-art__card-title">{item.title}</h3>
              <p className="examples-art__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="examples-art__features">
          <div className="examples-art__feature">
            <span className="examples-art__feature-icon">✓</span>
            <span>
              <GlossaryTerm termId="coa">Certificato di Autenticità</GlossaryTerm> per ogni opera
            </span>
          </div>
          <div className="examples-art__feature">
            <span className="examples-art__feature-icon">✓</span>
            <span>
              <GlossaryTerm termId="royalty">Royalty 4.5%</GlossaryTerm> perpetue su rivendite
            </span>
          </div>
          <div className="examples-art__feature">
            <span className="examples-art__feature-icon">✓</span>
            <span>
              <GlossaryTerm termId="gdpr">GDPR compliant</GlossaryTerm> con diritto all'oblio
            </span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .examples-art {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }

        .examples-art__container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header */
        .examples-art__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .examples-art__badge {
          display: inline-block;
          background: rgba(248, 113, 113, 0.15);
          color: #f87171;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .examples-art__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .examples-art__subtitle {
          color: #888;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Grid */
        .examples-art__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .examples-art__card {
          background: rgba(248, 113, 113, 0.05);
          border: 1px solid rgba(248, 113, 113, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .examples-art__card:hover {
          transform: translateY(-4px);
          border-color: rgba(248, 113, 113, 0.5);
          box-shadow: 0 8px 30px rgba(248, 113, 113, 0.15);
        }

        .examples-art__card-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .examples-art__card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .examples-art__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }

        /* Features */
        .examples-art__features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .examples-art__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }

        .examples-art__feature-icon {
          color: #4ade80;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default ExamplesArt;
