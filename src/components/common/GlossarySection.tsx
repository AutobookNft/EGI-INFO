import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * GlossarySection - Sezione glossario inline per pagine informative
 * 
 * UX Design:
 * - Titolo proporzionato (non gigantesco)
 * - Card compatte per i termini
 * - Ricerca opzionale
 */

interface GlossarySectionProps {
  filterTerms?: string[];
  title?: string;
  showSearch?: boolean;
  className?: string;
}

export const GlossarySection: React.FC<GlossarySectionProps> = ({
  filterTerms = [],
  title,
  showSearch = false,
  className = '',
}) => {
  const { t } = useTranslation('glossary');
  const [searchQuery, setSearchQuery] = React.useState('');

  const allTerms = t('terms', { returnObjects: true }) as Record<
    string,
    { term: string; definition: string }
  >;

  const filteredTerms = React.useMemo(() => {
    let terms = Object.entries(allTerms);

    if (filterTerms.length > 0) {
      terms = terms.filter(([key]) => filterTerms.includes(key));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      terms = terms.filter(
        ([, value]) =>
          value.term?.toLowerCase().includes(query) ||
          value.definition?.toLowerCase().includes(query)
      );
    }

    return terms.sort((a, b) => (a[1].term || '').localeCompare(b[1].term || ''));
  }, [allTerms, filterTerms, searchQuery]);

  // Non renderizzare se non ci sono termini
  if (filteredTerms.length === 0 && !searchQuery) {
    return null;
  }

  return (
    <section className={`glossary-section ${className}`}>
      {/* Header - proporzionato */}
      <div className="glossary-section__header">
        <h3 className="glossary-section__title">
          {title || t('title', 'Glossario')}
        </h3>
        <div className="glossary-section__divider" />
      </div>

      {/* Search */}
      {showSearch && (
        <div className="glossary-section__search">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cerca..."
            className="glossary-section__input"
          />
        </div>
      )}

      {/* Terms */}
      <dl className="glossary-section__list">
        {filteredTerms.map(([key, data]) => (
          <div key={key} id={`glossary-${key}`} className="glossary-section__item">
            <dt className="glossary-section__term">{data.term}</dt>
            <dd className="glossary-section__def">{data.definition}</dd>
          </div>
        ))}
      </dl>

      <style>{`
        .glossary-section {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glossary-section__header {
          margin-bottom: 24px;
        }

        .glossary-section__title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #d4af37;
          margin: 0 0 12px 0;
        }

        .glossary-section__divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, transparent);
          border-radius: 2px;
        }

        .glossary-section__search {
          margin-bottom: 20px;
        }

        .glossary-section__input {
          width: 100%;
          max-width: 300px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.9rem;
        }

        .glossary-section__input:focus {
          outline: none;
          border-color: #d4af37;
        }

        .glossary-section__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .glossary-section__item {
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .glossary-section__item:hover {
          background: rgba(212, 175, 55, 0.04);
          border-color: rgba(212, 175, 55, 0.15);
        }

        .glossary-section__term {
          font-size: 1rem;
          font-weight: 600;
          color: #d4af37;
          margin-bottom: 6px;
        }

        .glossary-section__def {
          font-size: 0.9rem;
          color: #a0a0a8;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default GlossarySection;
