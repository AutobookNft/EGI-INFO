/**
 * SourceTruth.tsx
 * 
 * Sezione documentazione tecnica (Fonte di Verità)
 * - Architettura
 * - Glossario completo
 * - API Reference
 * 
 * SEO: TechArticleSchema + breadcrumbs
 * ARIA: navigation landmark per docs
 * i18n: info.sourceTruth
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark, JsonLd } from '../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface SourceTruthProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const SourceTruth: React.FC<SourceTruthProps> = ({
  id = 'source-truth',
  className = ''
}) => {
  const { t } = useTranslation('info');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const sections = [
    {
      key: 'architecture',
      icon: '🏗️',
      title: t('sourceTruth.sections.architecture.title'),
      description: t('sourceTruth.sections.architecture.description'),
      links: [
        { label: 'System Overview', url: '/docs/architecture/overview' },
        { label: 'Component Diagram', url: '/docs/architecture/components' },
        { label: 'Data Flow', url: '/docs/architecture/data-flow' }
      ]
    },
    {
      key: 'glossary',
      icon: '📖',
      title: t('sourceTruth.sections.glossary.title'),
      description: t('sourceTruth.sections.glossary.description'),
      links: [
        { label: 'Glossario Generale', url: '/glossary' },
        { label: 'Glossario Artistico', url: '/glossary/art' },
        { label: 'Glossario Blockchain', url: '/glossary/blockchain' }
      ]
    },
    {
      key: 'api',
      icon: '⚙️',
      title: t('sourceTruth.sections.api.title'),
      description: t('sourceTruth.sections.api.description'),
      links: [
        { label: 'REST API', url: '/docs/api/rest' },
        { label: 'GraphQL API', url: '/docs/api/graphql' },
        { label: 'SDK Documentation', url: '/docs/sdk' }
      ]
    }
  ];

  // Schema.org: TechArticle
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: t('sourceTruth.title'),
    description: t('sourceTruth.subtitle'),
    proficiencyLevel: 'Beginner',
    dependencies: 'Node.js, Algorand SDK',
    articleSection: 'Documentation',
    publisher: {
      '@type': 'Organization',
      name: 'FlorenceEGI',
      url: 'https://florenceegi.com'
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: TechArticle */}
      <JsonLd data={techArticleSchema} />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`source-truth ${className}`.trim()}
      >
        <div className="source-truth__container">
          {/* Header */}
          <header className="source-truth__header">
            <span className="source-truth__badge">
              {t('sourceTruth.badge')}
            </span>
            <h2 id={`${id}-title`} className="source-truth__title">
              {t('sourceTruth.title')}
            </h2>
            <p className="source-truth__subtitle">
              {t('sourceTruth.subtitle')}
            </p>
          </header>

          {/* Documentation Sections */}
          <div className="source-truth__grid">
            {sections.map((section) => (
              <article key={section.key} className="source-truth__card">
                <div className="source-truth__card-header">
                  <span className="source-truth__card-icon" aria-hidden="true">
                    {section.icon}
                  </span>
                  <h3 className="source-truth__card-title">
                    {section.title}
                  </h3>
                </div>
                <p className="source-truth__card-description">
                  {section.description}
                </p>
                <nav 
                  className="source-truth__card-links"
                  aria-label={`${section.title} links`}
                >
                  <ul>
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url}
                          className="source-truth__link"
                        >
                          <span>{link.label}</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </article>
            ))}
          </div>

          {/* Quick Search */}
          <div className="source-truth__search">
            <label htmlFor="docs-search" className="source-truth__search-label">
              Cerca nella documentazione
            </label>
            <div className="source-truth__search-wrapper">
              <input
                type="search"
                id="docs-search"
                placeholder="Es: come creare un EGI..."
                className="source-truth__search-input"
              />
              <button 
                type="submit"
                className="source-truth__search-button"
                aria-label="Cerca"
              >
                🔍
              </button>
            </div>
          </div>

          {/* Related Terms */}
          <footer className="source-truth__footer">
            <p className="source-truth__footer-text">
              La documentazione è in costante aggiornamento. 
              Per contribuire, visita il nostro{' '}
              <a href="https://github.com/florenceegi" target="_blank" rel="noopener noreferrer">
                repository GitHub
              </a>.
            </p>
          </footer>
        </div>
      </AriaLandmark>
    </>
  );
};

export default SourceTruth;
