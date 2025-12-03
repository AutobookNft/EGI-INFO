/**
 * EGI Topic Components - Barrel Export
 * 
 * Componenti "mattoncini LEGO" per la sezione EGI
 * Tutti 100% SEO-oriented con Schema.org, ARIA, Open Graph
 * 
 * @module components/topics/egi
 */

// Hero & Intro
export { default as EgiHero } from './EgiHero';
export { default as EgiDefinition } from './EgiDefinition';

// Core Content
export { default as EgiComponents } from './EgiComponents';
export { default as EgiFunctions } from './EgiFunctions';
export { default as EgiAdvantages } from './EgiAdvantages';

// Three Pillars
export { default as EgiComponentCard, EgiThreeComponents } from './EgiComponentCard';
export type { ComponentType } from './EgiComponentCard';

// Traits & Utilities
export { default as EgiTraitsUtilities } from './EgiTraitsUtilities';

// CTA
export { default as EgiCta } from './EgiCta';

// Re-export types if needed
export type { } from './EgiHero';
export type { } from './EgiDefinition';
