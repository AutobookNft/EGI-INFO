/**
 * Mattoncino #18: Esempi Musica & Show
 * 
 * Showcase di come la musica può diventare EGI.
 * Chiave JSON: examples.tabs[1]
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

// ============================================================================
// COMPONENT
// ============================================================================

const ExamplesMusic: React.FC = () => {
  const { t } = useTranslation('florence');

  const tabData = t('examples.tabs', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  }>;

  const musicTab = tabData?.find(tab => tab.id === 'music') || {
    name: 'Musica & Show',
    description: 'Canzoni, album, ticket concerti, backstage pass.',
    items: [
      { title: 'Canzone', desc: 'Music NFT + split royalty con band' },
      { title: 'Album', desc: 'Tracce vendibili separatamente' },
      { title: 'Concerto', desc: 'Ticket + backstage access token' },
      { title: 'Podcast', desc: 'Episodi premium tokenizzati' },
    ],
  };

  const ICONS = ['🎵', '💿', '🎤', '🎙️'];

  return (
    <section className="examples-music">
      <div className="examples-music__container">
        {/* Header */}
        <header className="examples-music__header">
          <span className="examples-music__badge">🎵 {musicTab.name}</span>
          <h2 className="examples-music__title">
            {t('examples.title', 'Qualsiasi Cosa Esista, Può Diventare un EGI')}
          </h2>
          <p className="examples-music__subtitle">{musicTab.description}</p>
        </header>

        {/* Items - Horizontal Scroll */}
        <div className="examples-music__scroll">
          {musicTab.items.map((item, index) => (
            <div key={index} className="examples-music__card">
              <div className="examples-music__card-vinyl">
                <div className="examples-music__card-icon">{ICONS[index] || '🎵'}</div>
              </div>
              <h3 className="examples-music__card-title">{item.title}</h3>
              <p className="examples-music__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Use Case Highlight */}
        <div className="examples-music__usecase">
          <div className="examples-music__usecase-icon">💡</div>
          <div className="examples-music__usecase-content">
            <h4>Caso d'uso: Band Emergente</h4>
            <p>
              Una band può tokenizzare il nuovo album, permettendo ai fan di acquistare singole tracce.
              Ogni membro riceve automaticamente la sua quota grazie allo{' '}
              <GlossaryTerm termId="smart-contract">smart contract</GlossaryTerm> con split royalty.
            </p>
            <div className="examples-music__usecase-stats">
              <div className="examples-music__usecase-stat">
                <span className="examples-music__stat-value">4.5%</span>
                <span className="examples-music__stat-label">
                  <GlossaryTerm termId="royalty">Royalty</GlossaryTerm> su ogni rivendita
                </span>
              </div>
              <div className="examples-music__usecase-stat">
                <span className="examples-music__stat-value">∞</span>
                <span className="examples-music__stat-label">Per sempre</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="examples-music__features">
          <div className="examples-music__feature">
            <span className="examples-music__feature-icon">🎭</span>
            <span>Backstage pass tokenizzati</span>
          </div>
          <div className="examples-music__feature">
            <span className="examples-music__feature-icon">👥</span>
            <span>Split automatico tra membri</span>
          </div>
          <div className="examples-music__feature">
            <span className="examples-music__feature-icon">🎫</span>
            <span>Ticket anti-bagarinaggio</span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .examples-music {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }

        .examples-music__container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header */
        .examples-music__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .examples-music__badge {
          display: inline-block;
          background: rgba(167, 139, 250, 0.15);
          color: #a78bfa;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .examples-music__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .examples-music__subtitle {
          color: #888;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Scroll */
        .examples-music__scroll {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding: 1rem 0;
          margin-bottom: 2rem;
          scrollbar-width: thin;
          scrollbar-color: #a78bfa transparent;
        }

        .examples-music__scroll::-webkit-scrollbar {
          height: 6px;
        }

        .examples-music__scroll::-webkit-scrollbar-thumb {
          background: #a78bfa;
          border-radius: 3px;
        }

        .examples-music__card {
          flex: 0 0 180px;
          background: rgba(167, 139, 250, 0.05);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .examples-music__card:hover {
          transform: translateY(-4px);
          border-color: rgba(167, 139, 250, 0.5);
        }

        .examples-music__card-vinyl {
          width: 70px;
          height: 70px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #a78bfa;
          animation: spin 8s linear infinite;
          animation-play-state: paused;
        }

        .examples-music__card:hover .examples-music__card-vinyl {
          animation-play-state: running;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .examples-music__card-icon {
          font-size: 1.75rem;
        }

        .examples-music__card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .examples-music__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }

        /* Use Case */
        .examples-music__usecase {
          display: flex;
          gap: 1.25rem;
          background: rgba(167, 139, 250, 0.1);
          border: 1px solid rgba(167, 139, 250, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .examples-music__usecase-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .examples-music__usecase-content h4 {
          margin: 0 0 0.5rem 0;
          color: #a78bfa;
          font-size: 1rem;
        }

        .examples-music__usecase-content p {
          margin: 0 0 1rem 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }

        .examples-music__usecase-stats {
          display: flex;
          gap: 2rem;
        }

        .examples-music__usecase-stat {
          text-align: center;
        }

        .examples-music__stat-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #d4af37;
        }

        .examples-music__stat-label {
          font-size: 0.75rem;
          color: #888;
        }

        /* Features */
        .examples-music__features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .examples-music__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          .examples-music__usecase {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default ExamplesMusic;
