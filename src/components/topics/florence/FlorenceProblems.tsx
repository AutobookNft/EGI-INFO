/**
 * FlorenceProblems - Sezione Problemi e Soluzioni
 * 
 * Prima/Dopo con cards interattive
 * 
 * SEO Features:
 * - Schema.org FAQPage per problemi/soluzioni
 * - ARIA tabs per prima/dopo
 * - Semantic HTML
 * - i18n da namespace 'florence'
 * 
 * @module components/topics/florence/FlorenceProblems
 */

import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FAQPageSchema, AriaLandmark, useAnnounce } from '../../../utils/seo';

interface ProblemItem {
  id: string;
  icon: string;
  title: string;
  before: string;
  after: string;
}

interface ProblemCardProps {
  problem: ProblemItem;
  showSolution: boolean;
}

/**
 * Card singolo problema con flip
 */
const ProblemCard: React.FC<ProblemCardProps> = ({ problem, showSolution }) => {
  return (
    <div className={`
      problem-card
      relative
      h-64
      perspective-1000
    `}>
      <div className={`
        absolute inset-0
        transition-all duration-500
        transform-style-preserve-3d
        ${showSolution ? 'rotate-y-180' : ''}
      `}>
        {/* Front - Before */}
        <div className={`
          absolute inset-0
          backface-hidden
          p-6
          bg-gradient-to-br from-red-500/10 to-dark-lighter/60
          border border-red-500/20
          rounded-xl
          flex flex-col
        `}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl" aria-hidden="true">{problem.icon}</span>
            <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
          </div>
          
          <div className="flex-grow">
            <span className="
              inline-block px-2 py-1
              bg-red-500/20 text-red-400
              text-xs font-medium uppercase
              rounded mb-2
            ">
              ❌ Prima
            </span>
            <p className="text-white/70 text-sm leading-relaxed">
              {problem.before}
            </p>
          </div>
        </div>
        
        {/* Back - After */}
        <div className={`
          absolute inset-0
          backface-hidden
          rotate-y-180
          p-6
          bg-gradient-to-br from-green-500/10 to-dark-lighter/60
          border border-green-500/20
          rounded-xl
          flex flex-col
        `}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl" aria-hidden="true">{problem.icon}</span>
            <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
          </div>
          
          <div className="flex-grow">
            <span className="
              inline-block px-2 py-1
              bg-green-500/20 text-green-400
              text-xs font-medium uppercase
              rounded mb-2
            ">
              ✅ Con FlorenceEGI
            </span>
            <p className="text-white/70 text-sm leading-relaxed">
              {problem.after}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * FlorenceProblems - Sezione completa
 */
const FlorenceProblems: React.FC = () => {
  const { t } = useTranslation('florence');
  const announce = useAnnounce();
  const [showSolutions, setShowSolutions] = useState(false);
  
  // Problemi dal JSON
  const problems = t('problems.items', { returnObjects: true }) as ProblemItem[];
  
  // Build FAQ items for Schema.org
  const faqItems = Array.isArray(problems) ? problems.map(p => ({
    question: `${p.title}: ${p.before}`,
    answer: p.after
  })) : [];
  
  const handleToggle = useCallback(() => {
    setShowSolutions(prev => {
      const newValue = !prev;
      announce(
        newValue 
          ? t('problems.showingSolutions')
          : t('problems.showingProblems'),
        'polite'
      );
      return newValue;
    });
  }, [announce, t]);
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('problems.ariaLabel')}
      className="florence-problems py-16 lg:py-24"
    >
      {/* Schema.org FAQ */}
      <FAQPageSchema items={faqItems} />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('problems.title')}
          </h2>
          
          <p className="
            text-lg text-white/70
            max-w-2xl mx-auto
            mb-8
          ">
            {t('problems.subtitle')}
          </p>
          
          {/* Toggle button */}
          <button
            type="button"
            onClick={handleToggle}
            className={`
              inline-flex items-center gap-3
              px-8 py-4
              rounded-full
              font-semibold
              transition-all duration-300
              ${showSolutions
                ? 'bg-green-500 text-dark shadow-lg shadow-green-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }
            `}
            aria-pressed={showSolutions}
          >
            <span className="
              w-12 h-6
              bg-white/20
              rounded-full
              relative
            ">
              <span className={`
                absolute top-1 w-4 h-4
                bg-white rounded-full
                transition-all duration-300
                ${showSolutions ? 'left-7' : 'left-1'}
              `} />
            </span>
            {showSolutions 
              ? t('problems.toggle.solutions')
              : t('problems.toggle.problems')
            }
          </button>
        </header>
        
        {/* Problems grid */}
        {Array.isArray(problems) && (
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-6
          ">
            {problems.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                showSolution={showSolutions}
              />
            ))}
          </div>
        )}
        
        {/* Summary */}
        <div className="
          mt-12
          max-w-3xl mx-auto
          text-center
        ">
          <p className="text-white/50 text-sm">
            {showSolutions
              ? t('problems.summary.solutions')
              : t('problems.summary.problems')
            }
          </p>
        </div>
      </div>
      
      {/* CSS per il flip 3D */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </AriaLandmark>
  );
};

export default FlorenceProblems;
