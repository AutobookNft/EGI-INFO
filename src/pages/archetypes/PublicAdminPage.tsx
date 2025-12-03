import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../components/common';

/**
 * PublicAdminPage - Pagina per Pubblica Amministrazione
 * Tutti i testi da i18n (audiences namespace)
 */

const PublicAdminPage: React.FC = () => {
  const { t } = useTranslation('audiences');

  const serviceCards: Array<{ key: string; glossaryTerms: Record<string, string> }> = [
    { key: 'heritage', glossaryTerms: { blockchain: 'blockchain' } },
    { key: 'notarization', glossaryTerms: { auditTrail: 'audit-trail' } },
    { key: 'transparency', glossaryTerms: { gdpr: 'gdpr', ulm: 'ulm' } },
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section--hero bg-gradient-to-b from-emerald-900/20 via-dark to-dark">
        <div className="container text-center animate-fade-in">
          <span className="text-6xl mb-[var(--space-md)] block">{t('publicAdmin.hero.badge')}</span>
          <h1 className="heading-hero mb-[var(--space-md)]">
            <span className="text-white">{t('publicAdmin.hero.title')} </span>
            <span className="text-gold">{t('publicAdmin.hero.titleHighlight')}</span>
          </h1>
          <p className="text-body-large max-w-[700px] mx-auto mb-[var(--space-lg)]">
            {t('publicAdmin.hero.description')}
          </p>
          
          <div className="flex gap-[var(--space-sm)] justify-center flex-wrap">
            <a href="#servizi" className="btn btn--primary btn--large">
              {t('publicAdmin.cta.primary')}
            </a>
            <Link to="/approfondimenti/source-truth" className="btn btn--secondary btn--large">
              {t('publicAdmin.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="section bg-section">
        <div className="container">
          <h2 className="heading-2 text-center mb-[var(--space-xl)]">
            {t('publicAdmin.services.sectionTitle')}
          </h2>

          <div className="grid-thirds">
            {serviceCards.map((card) => (
              <div key={card.key} className="card">
                <div className="text-4xl mb-[var(--space-sm)]">
                  {t(`publicAdmin.services.cards.${card.key}.icon`)}
                </div>
                <h3 className="text-xl font-semibold text-white mb-[var(--space-xs)]">
                  {t(`publicAdmin.services.cards.${card.key}.title`)}
                </h3>
                <p className="text-body">
                  <CardDescription 
                    descriptionKey={`publicAdmin.services.cards.${card.key}.description`}
                    glossaryTerms={card.glossaryTerms}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-r from-gold/10 to-emerald-900/10">
        <div className="container text-center">
          <h2 className="heading-2 mb-[var(--space-md)]">
            {t('publicAdmin.finalCta.title')}
          </h2>
          <p className="text-body-large max-w-[600px] mx-auto mb-[var(--space-lg)]">
            {t('publicAdmin.finalCta.description')}
          </p>
          <a href="mailto:pa@florence-egi.com" className="btn btn--primary btn--large">
            {t('publicAdmin.finalCta.primary')}
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

export default PublicAdminPage;
