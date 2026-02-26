/**
 * FlorenceFaq - Sezione FAQ
 * 
 * Accordion con domande frequenti
 * 
 * SEO Features:
 * - Schema.org FAQPage
 * - ARIA accordion pattern
 * - Semantic HTML
 * - i18n da namespace 'florence'
 * 
 * @module components/topics/florence/FlorenceFaq
 */

import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FAQPageSchema, AriaLandmark, useAnnounce } from '../../../utils/seo';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionItemProps {
  item: FaqItem;
  isExpanded: boolean;
  onToggle: () => void;
}

/**
 * Singolo item FAQ accordion
 */
const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  item,
  isExpanded,
  onToggle
}) => {
  return (
    <div className={`
      faq-item
      border border-gold/10
      rounded-xl
      overflow-hidden
      transition-all duration-300
      ${isExpanded ? 'bg-dark-lighter/40 border-gold/30' : 'bg-dark/40'}
    `}>
      {/* Question/Header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
        className="
          w-full
          flex items-center justify-between gap-4
          p-6
          text-left
          hover:bg-gold/5
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold/50
        "
      >
        <span className={`
          text-lg font-medium
          ${isExpanded ? 'text-gold' : 'text-white'}
        `}>
          {item.question}
        </span>
        
        <span 
          className={`
            flex-shrink-0
            w-8 h-8
            flex items-center justify-center
            rounded-full
            ${isExpanded ? 'bg-gold text-dark' : 'bg-gold/10 text-gold'}
            transition-all duration-300
          `}
          aria-hidden="true"
        >
          <svg 
            className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      {/* Answer/Content */}
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        hidden={!isExpanded}
        className={`
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-4" />
          <p className="text-white/70 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * FlorenceFaq - Sezione completa
 */
const FlorenceFaq: React.FC = () => {
  const { t } = useTranslation('florence');
  const announce = useAnnounce();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // FAQ items dal JSON
  const faqItems = t('faq.items', { returnObjects: true }) as FaqItem[];
  
  // Build items for Schema.org
  const schemaItems = Array.isArray(faqItems) 
    ? faqItems.map(item => ({
        question: item.question,
        answer: item.answer
      }))
    : [];
  
  const handleToggle = useCallback((id: string) => {
    setExpandedId(prev => {
      const newValue = prev === id ? null : id;
      
      if (newValue) {
        const item = Array.isArray(faqItems) ? faqItems.find(i => i.id === id) : null;
        if (item) {
          announce(t('faq.expanded', { question: item.question }), 'polite');
        }
      }
      
      return newValue;
    });
  }, [announce, t, faqItems]);
  
  // Expand all / Collapse all
  const [allExpanded, setAllExpanded] = useState(false);
  
  const handleExpandAll = useCallback(() => {
    setAllExpanded(prev => !prev);
    if (!allExpanded && Array.isArray(faqItems) && faqItems.length > 0) {
      setExpandedId(faqItems[0].id);
    } else {
      setExpandedId(null);
    }
  }, [allExpanded, faqItems]);
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('faq.ariaLabel')}
      className="florence-faq py-16 lg:py-24 bg-gradient-to-b from-transparent via-dark-lighter/10 to-transparent"
    >
      {/* Schema.org FAQPage */}
      <FAQPageSchema items={schemaItems} />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <span className="
            inline-block
            px-4 py-1.5
            bg-gold/10 border border-gold/30
            rounded-full
            text-gold text-sm font-medium
            mb-4
          ">
            ❓ {t('faq.badge', 'FAQ')}
          </span>
          
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('faq.title')}
          </h2>
          
          <p className="
            text-lg text-white/70
            max-w-2xl mx-auto
          ">
            {t('faq.subtitle')}
          </p>
        </header>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          {Array.isArray(faqItems) && faqItems.length > 0 ? (
            <div className="space-y-4" role="group" aria-label={t('faq.groupLabel')}>
              {faqItems.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  item={item}
                  isExpanded={expandedId === item.id || allExpanded}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>
          ) : (
            <p className="text-white/50 text-center">
              {t('faq.noItems')}
            </p>
          )}
        </div>
        
        {/* Contact CTA */}
        <div className="
          mt-12
          max-w-2xl mx-auto
          p-6
          bg-dark-lighter/30
          border border-gold/20
          rounded-xl
          text-center
        ">
          <p className="text-white/70 mb-4">
            {t('faq.notFound')}
          </p>
          <a
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              bg-gold/10 border border-gold/30
              text-gold font-medium
              rounded-full
              hover:bg-gold/20
              transition-all duration-300
            "
          >
            {t('faq.contactUs')}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </AriaLandmark>
  );
};

export default FlorenceFaq;
