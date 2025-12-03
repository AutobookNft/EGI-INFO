import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FileText, Leaf, Building, Users, AlertTriangle, HelpCircle, BookOpen } from 'lucide-react';

/**
 * ApprofondimentiHome - Sub-home per la sezione Approfondimenti
 * Tutti i testi da i18n (info namespace)
 */

const ApprofondimentiHome: React.FC = () => {
  const { t } = useTranslation('info');

  const sections = [
    {
      path: '/approfondimenti/egi',
      key: 'egi',
      icon: FileText,
      color: 'from-gold to-gold-dark',
    },
    {
      path: '/approfondimenti/epp',
      key: 'epp',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
    },
    {
      path: '/approfondimenti/florence-egi',
      key: 'florenceEgi',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      path: '/approfondimenti/co-create',
      key: 'coCreate',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
    },
    {
      path: '/approfondimenti/disclaimer',
      key: 'disclaimer',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-600',
    },
    {
      path: '/approfondimenti/why-cannot-buy',
      key: 'whyCannotBuy',
      icon: HelpCircle,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      path: '/approfondimenti/source-truth',
      key: 'sourceTruth',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <div className="container">
      {/* Header */}
      <div className="text-center mb-[var(--space-xl)]">
        <h1 className="heading-1 mb-[var(--space-sm)]">
          {t('approfondimenti.title')}
        </h1>
        <p className="text-body-large max-w-[700px] mx-auto">
          {t('approfondimenti.subtitle')}
        </p>
      </div>

      {/* Grid of sections */}
      <div className="grid-thirds">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="card group hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-[var(--space-sm)] group-hover:scale-110 transition-transform`}>
              <section.icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <h2 className="text-xl font-semibold text-white mb-[var(--space-xs)] group-hover:text-gold transition-colors">
              {t(`approfondimenti.sections.${section.key}.title`)}
            </h2>
            <p className="text-body text-sm leading-relaxed">
              {t(`approfondimenti.sections.${section.key}.description`)}
            </p>

            {/* Arrow */}
            <div className="mt-[var(--space-sm)] flex items-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium">{t('approfondimenti.discoverMore')}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-[var(--space-xxl)] text-center p-[var(--space-lg)] rounded-2xl bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20">
        <h3 className="heading-3 mb-[var(--space-sm)]">
          {t('approfondimenti.bottomCta.title')}
        </h3>
        <p className="text-body mb-[var(--space-md)] max-w-[600px] mx-auto">
          {t('approfondimenti.bottomCta.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-[var(--space-sm)]">
          <Link to="/per-artisti" className="btn btn--primary">
            {t('approfondimenti.bottomCta.artistCta')}
          </Link>
          <Link to="/per-imprenditori" className="btn btn--secondary">
            {t('approfondimenti.bottomCta.entrepreneurCta')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApprofondimentiHome;
