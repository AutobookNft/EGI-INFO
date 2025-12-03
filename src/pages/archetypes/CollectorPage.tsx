import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../components/common';

/**
 * CollectorPage - Pagina per Collezionisti
 * Tutti i testi da i18n (audiences namespace)
 */

const CollectorPage: React.FC = () => {
  const { t } = useTranslation('audiences');

  const benefitCards: Array<{ key: string; glossaryTerms: Record<string, string> }> = [
    { key: 'authenticity', glossaryTerms: { coa: 'coa', blockchain: 'blockchain' } },
    { key: 'coCreation', glossaryTerms: { coCreator: 'co-creatore' } },
    { key: 'impact', glossaryTerms: { epp: 'epp' } },
    { key: 'security', glossaryTerms: { nonCustodial: 'non-custodial', encryption: 'envelope-encryption' } },
    { key: 'tokens', glossaryTerms: { equilibrium: 'equilibrium', egili: 'egili' } },
    { key: 'value', glossaryTerms: {} },
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section--hero bg-gradient-to-b from-amber-900/20 via-dark to-dark">
        <div className="container text-center animate-fade-in">
          <span className="text-6xl mb-[var(--space-md)] block">{t('collectors.hero.badge')}</span>
          <h1 className="heading-hero mb-[var(--space-md)]">
            <span className="text-white">{t('collectors.hero.title')} </span>
            <span className="text-gold">{t('collectors.hero.titleHighlight')}</span>
          </h1>
          <p className="text-body-large max-w-[700px] mx-auto mb-[var(--space-lg)]">
            {t('collectors.hero.description')}
          </p>
          
          <div className="flex gap-[var(--space-sm)] justify-center flex-wrap">
            <a href="#benefici" className="btn btn--primary btn--large">
              {t('collectors.cta.primary')}
            </a>
            <Link to="/approfondimenti/co-create" className="btn btn--secondary btn--large">
              {t('collectors.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefici" className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-[var(--space-xl)]">
            {t('collectors.benefits.sectionTitle')}
          </h2>

          <div className="grid-thirds">
            {benefitCards.map((card) => (
              <div key={card.key} className="card">
                <div className="text-4xl mb-[var(--space-sm)]">
                  {t(`collectors.benefits.cards.${card.key}.icon`)}
                </div>
                <h3 className="text-xl font-semibold text-white mb-[var(--space-xs)]">
                  {t(`collectors.benefits.cards.${card.key}.title`)}
                </h3>
                <p className="text-body">
                  <CardDescription 
                    descriptionKey={`collectors.benefits.cards.${card.key}.description`}
                    glossaryTerms={card.glossaryTerms}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-r from-gold/10 to-amber-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-[var(--space-md)]">
            {t('collectors.finalCta.title')}
          </h2>
          <p className="text-body-large max-w-[600px] mx-auto mb-[var(--space-lg)]">
            {t('collectors.finalCta.description')}
          </p>
          <a href="https://florence-egi.com/collections" className="btn btn--primary btn--large">
            {t('collectors.finalCta.primary')}
          </a>
        </div>
      </section>
    </div>
  );
};

interface CardDescriptionProps {
  descriptionKey: string;
  glossaryTerms: Record<string, string>;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ descriptionKey, glossaryTerms }) => {
  const { t } = useTranslation('audiences');
  const { t: tGlossary } = useTranslation('glossary');
  
  let description = t(descriptionKey);
  
  // Se non ci sono termini, ritorna la descrizione così com'è
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

export default CollectorPage;
