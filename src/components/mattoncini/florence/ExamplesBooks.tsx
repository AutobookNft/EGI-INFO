/**
 * Mattoncino #19: Esempi Libri & Content
 * 
 * Showcase di come libri e contenuti possono diventare EGI.
 * Chiave JSON: examples.tabs[2]
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import GlossaryTerm from '../../common/GlossaryTerm';

// ============================================================================
// COMPONENT
// ============================================================================

const ExamplesBooks: React.FC = () => {
  const { t } = useTranslation('florence');

  const tabData = t('examples.tabs', { returnObjects: true }) as Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  }>;

  const booksTab = tabData?.find(tab => tab.id === 'books') || {
    name: 'Libri & Content',
    description: 'Libri, e-book firmati, articoli esclusivi.',
    items: [
      { title: 'Libro', desc: 'Capitoli vendibili singolarmente' },
      { title: 'E-book', desc: 'Edizioni limitate firmate' },
      { title: 'Articolo', desc: 'Accesso esclusivo + archivio storico' },
      { title: 'Ricetta segreta', desc: 'IP protetto + licenze uso' },
    ],
  };

  const ICONS = ['📚', '📱', '📰', '🍳'];

  return (
    <section className="examples-books">
      <div className="examples-books__container">
        {/* Header */}
        <header className="examples-books__header">
          <span className="examples-books__badge">📚 {booksTab.name}</span>
          <h2 className="examples-books__title">
            {t('examples.title', 'Qualsiasi Cosa Esista, Può Diventare un EGI')}
          </h2>
          <p className="examples-books__subtitle">{booksTab.description}</p>
        </header>

        {/* Book Shelf Layout */}
        <div className="examples-books__shelf">
          {booksTab.items.map((item, index) => (
            <div key={index} className="examples-books__book">
              <div className="examples-books__book-spine">
                <span className="examples-books__book-icon">{ICONS[index] || '📚'}</span>
              </div>
              <div className="examples-books__book-content">
                <h3 className="examples-books__book-title">{item.title}</h3>
                <p className="examples-books__book-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Feature - Chapter Selling */}
        <div className="examples-books__highlight">
          <div className="examples-books__highlight-visual">
            <div className="examples-books__chapter">Cap. 1</div>
            <div className="examples-books__chapter">Cap. 2</div>
            <div className="examples-books__chapter examples-books__chapter--locked">Cap. 3</div>
            <div className="examples-books__chapter examples-books__chapter--locked">Cap. 4</div>
          </div>
          <div className="examples-books__highlight-content">
            <h4>💡 Vendita a Capitoli</h4>
            <p>
              Gli autori possono vendere i capitoli singolarmente, permettendo ai lettori di 
              acquistare solo ciò che interessa. Ogni capitolo è un{' '}
              <GlossaryTerm termId="egi">EGI</GlossaryTerm> separato con{' '}
              <GlossaryTerm termId="royalty">royalty</GlossaryTerm> proprie.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="examples-books__features">
          <div className="examples-books__feature">
            <span className="examples-books__feature-icon">✍️</span>
            <span>Firma digitale dell'autore</span>
          </div>
          <div className="examples-books__feature">
            <span className="examples-books__feature-icon">📖</span>
            <span>Edizioni numerate limitate</span>
          </div>
          <div className="examples-books__feature">
            <span className="examples-books__feature-icon">🔐</span>
            <span>
              <GlossaryTerm termId="copyright">IP protetto</GlossaryTerm> su blockchain
            </span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .examples-books {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }

        .examples-books__container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header */
        .examples-books__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .examples-books__badge {
          display: inline-block;
          background: rgba(96, 165, 250, 0.15);
          color: #60a5fa;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .examples-books__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }

        .examples-books__subtitle {
          color: #888;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Shelf */
        .examples-books__shelf {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: linear-gradient(180deg, rgba(139, 90, 43, 0.1) 0%, rgba(139, 90, 43, 0.05) 100%);
          border-radius: 12px;
          border-bottom: 4px solid rgba(139, 90, 43, 0.3);
        }

        .examples-books__book {
          display: flex;
          gap: 0.75rem;
          background: rgba(96, 165, 250, 0.05);
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 8px;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .examples-books__book:hover {
          transform: translateY(-4px) rotate(-1deg);
          border-color: rgba(96, 165, 250, 0.5);
          box-shadow: 0 8px 30px rgba(96, 165, 250, 0.15);
        }

        .examples-books__book-spine {
          width: 40px;
          min-height: 60px;
          background: linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .examples-books__book-icon {
          font-size: 1.25rem;
        }

        .examples-books__book-content {
          flex: 1;
        }

        .examples-books__book-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.25rem 0;
        }

        .examples-books__book-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }

        /* Highlight */
        .examples-books__highlight {
          display: flex;
          gap: 2rem;
          align-items: center;
          background: rgba(96, 165, 250, 0.1);
          border: 1px solid rgba(96, 165, 250, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .examples-books__highlight-visual {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .examples-books__chapter {
          width: 50px;
          height: 70px;
          background: linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 600;
          color: #fff;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .examples-books__chapter--locked {
          background: linear-gradient(180deg, #4b5563 0%, #374151 100%);
          position: relative;
        }

        .examples-books__chapter--locked::after {
          content: '🔒';
          position: absolute;
          font-size: 0.8rem;
          writing-mode: horizontal-tb;
        }

        .examples-books__highlight-content h4 {
          margin: 0 0 0.5rem 0;
          color: #60a5fa;
          font-size: 1rem;
        }

        .examples-books__highlight-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #ccc;
          line-height: 1.5;
        }

        /* Features */
        .examples-books__features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .examples-books__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          .examples-books__highlight {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default ExamplesBooks;
