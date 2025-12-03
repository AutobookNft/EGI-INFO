/**
 * SEO Components - Componenti wrapper semplificati
 * 
 * Questi sono componenti React che wrappano le funzioni di SchemaOrg
 * per un uso più diretto nei componenti di sezione.
 */

import React, { type ReactNode } from 'react';
import { JsonLd as JsonLdBase } from './JsonLd';

// =============================================================================
// ARIA LANDMARK
// =============================================================================

interface AriaLandmarkProps {
  as?: keyof React.JSX.IntrinsicElements;
  role?: string;
  labelledBy?: string;
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Wrapper semantico per sezioni accessibili
 */
export const AriaLandmark: React.FC<AriaLandmarkProps> = ({
  as: Component = 'section',
  role = 'region',
  labelledBy,
  id,
  className,
  children
}) => {
  return React.createElement(
    Component,
    {
      role,
      'aria-labelledby': labelledBy,
      id,
      className
    },
    children
  );
};

// =============================================================================
// ARIA TABS
// =============================================================================

interface AriaTabListProps {
  label: string;
  className?: string;
  children: ReactNode;
}

export const AriaTabList: React.FC<AriaTabListProps> = ({
  label,
  className,
  children
}) => {
  return (
    <div role="tablist" aria-label={label} className={className}>
      {children}
    </div>
  );
};

interface AriaTabPanelProps {
  id: string;
  labelledBy: string;
  hidden?: boolean;
  className?: string;
  children: ReactNode;
}

export const AriaTabPanel: React.FC<AriaTabPanelProps> = ({
  id,
  labelledBy,
  hidden = false,
  className,
  children
}) => {
  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={labelledBy}
      hidden={hidden}
      className={className}
    >
      {!hidden && children}
    </div>
  );
};

// =============================================================================
// SCHEMA COMPONENTS
// =============================================================================

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  image?: string;
}

/**
 * Componente per meta tag SEO (usa document.title per ora)
 */
export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description
}) => {
  React.useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [title, description]);

  return null;
};

// =============================================================================
// SCHEMA ORG WRAPPER COMPONENTS
// =============================================================================

interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = (props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: props.name,
    description: props.description,
    url: props.url,
    logo: props.logo,
    sameAs: props.sameAs
  };

  return <JsonLdBase data={schema} />;
};

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export const SoftwareApplicationSchema: React.FC<SoftwareApplicationSchemaProps> = (props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: props.name,
    description: props.description,
    applicationCategory: props.applicationCategory,
    operatingSystem: props.operatingSystem,
    offers: props.offers ? {
      '@type': 'Offer',
      ...props.offers
    } : undefined
  };

  return <JsonLdBase data={schema} />;
};

interface DefinedTermSchemaProps {
  name: string;
  description: string;
  inDefinedTermSet?: string;
}

export const DefinedTermSchema: React.FC<DefinedTermSchemaProps> = (props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: props.name,
    description: props.description,
    inDefinedTermSet: props.inDefinedTermSet
  };

  return <JsonLdBase data={schema} />;
};

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}

export const HowToSchema: React.FC<HowToSchemaProps> = (props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    step: props.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };

  return <JsonLdBase data={schema} />;
};

interface FAQPageSchemaProps {
  name?: string;
  items: Array<{ question: string; answer: string }>;
}

export const FAQPageSchema: React.FC<FAQPageSchemaProps> = (props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: props.name,
    mainEntity: props.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return <JsonLdBase data={schema} />;
};

interface ItemListSchemaProps {
  name: string;
  description?: string;
  items: Array<{ name: string; description?: string; position?: number }>;
}

export const ItemListSchema: React.FC<ItemListSchemaProps> = (props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: props.name,
    description: props.description,
    itemListElement: props.items.map((item, index) => ({
      '@type': 'ListItem',
      position: item.position ?? index + 1,
      item: {
        '@type': 'Thing',
        name: item.name,
        description: item.description
      }
    }))
  };

  return <JsonLdBase data={schema} />;
};

// =============================================================================
// HOOKS
// =============================================================================

/**
 * Hook per annunciare cambiamenti agli screen reader
 */
export const useAnnounce = () => {
  const announce = React.useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;';
    announcer.textContent = message;
    
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }, []);

  return announce;
};
