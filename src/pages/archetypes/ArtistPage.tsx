import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../components/common';

/**
 * ArtistPage - Pagina per artisti
 * 
 * Assembla content-blocks rilevanti per il pubblico artista.
 * Tutti i testi da i18n (audiences namespace)
 */

const ArtistPage: React.FC = () => {
  const { t } = useTranslation('audiences');

  // Benefit cards configuration
  const benefitCards: Array<{ key: string; glossaryTerms: Record<string, string> }> = [
    { key: 'protection', glossaryTerms: { blockchain: 'blockchain', coa: 'coa' } },
    { key: 'royalties', glossaryTerms: { royalty: 'royalty-piattaforma', diritto: 'diritto-seguito' } },
    { key: 'rights', glossaryTerms: { morali: 'diritti-morali', patrimoniali: 'diritti-patrimoniali' } },
    { key: 'environment', glossaryTerms: { epp: 'epp' } },
    { key: 'ai', glossaryTerms: { natan: 'natan' } },
    { key: 'drops', glossaryTerms: { drops: 'drops', serata: 'serata-memorabile' } },
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section--hero bg-gradient-to-b from-purple-900/20 via-dark to-dark">
        <div className="container text-center animate-fade-in">
          <span className="text-6xl mb-[var(--space-md)] block">{t('artists.hero.badge')}</span>
          <h1 className="heading-hero mb-[var(--space-md)]">
            <span className="text-white">{t('artists.hero.title')} </span>
            <span className="text-gold">{t('artists.hero.titleHighlight')}</span>
            <span className="text-white">{t('artists.hero.titleEnd')}</span>
          </h1>
          <p className="text-body-large max-w-[700px] mx-auto mb-[var(--space-lg)]">
            {t('artists.hero.description')}
          </p>
          
          <div className="flex gap-[var(--space-sm)] justify-center flex-wrap">
            <a href="#vantaggi" className="btn btn--primary btn--large">
              {t('artists.cta.primary')}
            </a>
            <Link to="/approfondimenti/egi" className="btn btn--secondary btn--large">
              {t('artists.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="vantaggi" className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-[var(--space-xl)]">
            {t('artists.benefits.sectionTitle')}
          </h2>

          <div className="grid-thirds">
            {benefitCards.map((card) => (
              <div key={card.key} className="card">
                <div className="text-4xl mb-[var(--space-sm)]">
                  {t(`artists.benefits.cards.${card.key}.icon`)}
                </div>
                <h3 className="text-xl font-semibold text-white mb-[var(--space-xs)]">
                  {t(`artists.benefits.cards.${card.key}.title`)}
                </h3>
                <p className="text-body">
                  <BenefitDescription 
                    descriptionKey={`artists.benefits.cards.${card.key}.description`}
                    glossaryTerms={card.glossaryTerms}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-r from-gold/10 to-purple-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-[var(--space-md)]">
            {t('artists.finalCta.title')}
          </h2>
          <p className="text-body-large max-w-[600px] mx-auto mb-[var(--space-lg)]">
            {t('artists.finalCta.description')}
          </p>
          <div className="flex gap-[var(--space-sm)] justify-center flex-wrap">
            <a href="https://florence-egi.com/register" className="btn btn--primary btn--large">
              {t('artists.finalCta.primary')}
            </a>
            <Link to="/approfondimenti" className="btn btn--secondary btn--large">
              {t('artists.finalCta.secondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Helper component to render benefit descriptions with glossary terms
 */
interface BenefitDescriptionProps {
  descriptionKey: string;
  glossaryTerms: Record<string, string>;
}

const BenefitDescription: React.FC<BenefitDescriptionProps> = ({ descriptionKey, glossaryTerms }) => {
  const { t } = useTranslation('audiences');
  const { t: tGlossary } = useTranslation('glossary');
  
  let description = t(descriptionKey);
  
  // Replace placeholders with glossary terms
  Object.entries(glossaryTerms).forEach(([placeholder, termId]) => {
    const termName = tGlossary(`terms.${termId}.term`).split('(')[0].trim();
    description = description.replace(
      `{{${placeholder}}}`,
      `<glossary data-term="${termId}">${termName}</glossary>`
    );
  });

  // Parse and render with GlossaryTerm components
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

export default ArtistPage;
