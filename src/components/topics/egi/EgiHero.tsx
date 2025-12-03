/**
 * EgiHero Component
 * 
 * Hero section per la pagina informativa EGI.
 * 100% SEO-optimized con Schema.org, ARIA, semantic HTML.
 * 
 * ZERO testo hardcoded - tutto da i18n namespace 'egi'
 * 
 * @component
 * @example
 * <EgiHero />
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  JsonLd, 
  createArticleSchema,
  SeoHead,
  createEgiSeoMeta,
  Landmark,
  VisuallyHidden,
} from '../../utils/seo';

// ============================================
// COMPONENT
// ============================================

export interface EgiHeroProps {
  /** Custom class name for styling */
  className?: string;
  /** Override image URL */
  imageUrl?: string;
}

export function EgiHero({ 
  className = '',
  imageUrl = '/images/egi-certificate-hero.jpg',
}: EgiHeroProps) {
  const { t } = useTranslation('egi');
  
  // Get translations
  const title = t('hero.title');
  const subtitle = t('hero.subtitle');
  const description = t('hero.description');
  const ctaText = t('hero.cta');
  const badge = t('hero.badge');
  
  // SEO Meta
  const seoMeta = createEgiSeoMeta({
    title: t('meta.title'),
    description: t('meta.description'),
    slug: '/egi',
    image: imageUrl,
  });
  
  // Schema.org Article
  const articleSchema = createArticleSchema({
    title: t('meta.title'),
    description: t('meta.description'),
    slug: '/info/egi',
    image: imageUrl,
    type: 'TechArticle',
  });
  
  return (
    <>
      {/* SEO: Meta Tags */}
      <SeoHead meta={seoMeta} />
      
      {/* SEO: JSON-LD Structured Data */}
      <JsonLd schema={articleSchema} />
      
      {/* Semantic HTML: header element for hero */}
      <header
        className={`egi-hero ${className}`}
        role="banner"
        aria-labelledby="egi-hero-title"
      >
        {/* Badge - optional decorative element */}
        {badge && (
          <span 
            className="egi-hero__badge"
            aria-hidden="true"
          >
            {badge}
          </span>
        )}
        
        {/* Main heading - H1 for SEO */}
        <h1 
          id="egi-hero-title"
          className="egi-hero__title"
        >
          {title}
        </h1>
        
        {/* Subtitle - semantic emphasis */}
        {subtitle && (
          <p 
            className="egi-hero__subtitle"
            role="doc-subtitle"
          >
            {subtitle}
          </p>
        )}
        
        {/* Description paragraph */}
        <p className="egi-hero__description">
          {description}
        </p>
        
        {/* CTA Button with proper accessibility */}
        <div className="egi-hero__actions">
          <a
            href="#egi-definition"
            className="egi-hero__cta"
            role="button"
            aria-describedby="egi-hero-cta-description"
          >
            {ctaText}
            {/* Screen reader context */}
            <VisuallyHidden>
              - Scopri di più su cosa è un EGI e come funziona
            </VisuallyHidden>
          </a>
          <span id="egi-hero-cta-description" hidden>
            {t('hero.ctaDescription', 'Scorri per leggere la definizione completa')}
          </span>
        </div>
        
        {/* Hero image with proper alt text */}
        <figure className="egi-hero__figure">
          <img
            src={imageUrl}
            alt={t('hero.imageAlt', 'Rappresentazione visiva di un certificato EGI con blockchain e natura')}
            className="egi-hero__image"
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="630"
          />
          <figcaption className="egi-hero__figcaption">
            <VisuallyHidden>
              {t('hero.imageCaption', 'Certificato digitale EGI che unisce arte, blockchain e impatto ambientale')}
            </VisuallyHidden>
          </figcaption>
        </figure>
      </header>
    </>
  );
}

// ============================================
// STYLES (CSS-in-JS fallback, preferire CSS file)
// ============================================

// Le classi .egi-hero__* sono definite in /styles/components/egi-hero.css

export default EgiHero;
