import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../components/common';

/**
 * EntrepreneurPage - Pagina per imprenditori
 * Tutti i testi da i18n (audiences namespace)
 */

const EntrepreneurPage: React.FC = () => {
  const { t } = useTranslation('audiences');

  const solutionCards: Array<{ key: string; glossaryTerms: Record<string, string> }> = [
    { key: 'certification', glossaryTerms: { blockchain: 'blockchain', qrnfc: 'qr-nfc-binding' } },
    { key: 'tokens', glossaryTerms: {} },
    { key: 'notarization', glossaryTerms: { natan: 'natan' } },
    { key: 'compliance', glossaryTerms: { gdpr: 'gdpr', mica: 'mica' } },
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section--hero bg-gradient-to-b from-blue-900/20 via-dark to-dark">
        <div className="container text-center animate-fade-in">
          <span className="text-6xl mb-[var(--space-md)] block">{t('entrepreneurs.hero.badge')}</span>
          <h1 className="heading-hero mb-[var(--space-md)]">
            <span className="text-white">{t('entrepreneurs.hero.title')} </span>
            <span className="text-gold">{t('entrepreneurs.hero.titleHighlight')}</span>
            <span className="text-white">{t('entrepreneurs.hero.titleEnd')}</span>
          </h1>
          <p className="text-body-large max-w-[700px] mx-auto mb-[var(--space-lg)]">
            {t('entrepreneurs.hero.description')}
          </p>
          
          <div className="flex gap-[var(--space-sm)] justify-center flex-wrap">
            <a href="#soluzioni" className="btn btn--primary btn--large">
              {t('entrepreneurs.cta.primary')}
            </a>
            <Link to="/approfondimenti/florence-egi" className="btn btn--secondary btn--large">
              {t('entrepreneurs.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluzioni" className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-[var(--space-xl)]">
            {t('entrepreneurs.solutions.sectionTitle')}
          </h2>

          <div className="grid-halves">
            {solutionCards.map((card) => (
              <div key={card.key} className="card">
                <div className="text-4xl mb-[var(--space-sm)]">
                  {t(`entrepreneurs.solutions.cards.${card.key}.icon`)}
                </div>
                <h3 className="text-xl font-semibold text-white mb-[var(--space-xs)]">
                  {t(`entrepreneurs.solutions.cards.${card.key}.title`)}
                </h3>
                <p className="text-body">
                  <CardDescription 
                    descriptionKey={`entrepreneurs.solutions.cards.${card.key}.description`}
                    glossaryTerms={card.glossaryTerms}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-r from-gold/10 to-blue-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-[var(--space-md)]">
            {t('entrepreneurs.finalCta.title')}
          </h2>
          <p className="text-body-large max-w-[600px] mx-auto mb-[var(--space-lg)]">
            {t('entrepreneurs.finalCta.description')}
          </p>
          <a href="mailto:business@florence-egi.com" className="btn btn--primary btn--large">
            {t('entrepreneurs.finalCta.primary')}
          </a>
        </div>
      </section>
    </div>
  );
};

/**
 * Helper component to render descriptions with glossary terms
 */
interface CardDescriptionProps {
  descriptionKey: string;
  glossaryTerms: Record<string, string>;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ descriptionKey, glossaryTerms }) => {
  const { t } = useTranslation('audiences');
  const { t: tGlossary } = useTranslation('glossary');
  
  let description = t(descriptionKey);
  
  if (Object.keys(glossaryTerms).length === 0) {
    return <>{description}</>;
  }
  
  Object.entries(glossaryTerms).forEach(([placeholder, termId]) => {
    const termName = tGlossary(`terms.${termId}.term`).split('(')[0].trim();
    description = description.replace(
      `{{${placeholder}}}`,
      `<glossary data-term="${termId}">${termName}</glossary>`
    );
  });

  const parts = description.split(/(<glossary[^>]*>[^<]*<\/glossary>)/);
  
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/<glossary data-term="([^"]+)">([^<]*)<\/glossary>/);
        if (match) {
          return (
            <GlossaryTerm key={index} termId={match[1]}>
              {match[2]}
            </GlossaryTerm>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default EntrepreneurPage;
