/**
 * CoCreatorRole.tsx
 * 
 * La figura del Co-Creatore
 * - Legame permanente
 * - Visibilità mondiale
 * - Identità personalizzata
 * - Profilo e vantaggi esclusivi
 * 
 * SEO: PersonSchema + ItemListSchema
 * ARIA: region + cards
 * i18n: cocreate.cocreator
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AriaLandmark, JsonLd } from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface CoCreatorRoleProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

interface ProfileItem {
  icon: string;
  title: string;
  description: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const CoCreatorRole: React.FC<CoCreatorRoleProps> = ({
  id = 'cocreator-role',
  className = ''
}) => {
  const { t } = useTranslation('cocreate');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const coreFeatures = [
    {
      key: 'permanentBond',
      icon: t('cocreator.permanentBond.icon'),
      title: t('cocreator.permanentBond.title'),
      content: t('cocreator.permanentBond.content'),
      details: t('cocreator.permanentBond.details')
    },
    {
      key: 'globalVisibility',
      icon: t('cocreator.globalVisibility.icon'),
      title: t('cocreator.globalVisibility.title'),
      content: t('cocreator.globalVisibility.content'),
      details: t('cocreator.globalVisibility.details')
    },
    {
      key: 'personalizedIdentity',
      icon: t('cocreator.personalizedIdentity.icon'),
      title: t('cocreator.personalizedIdentity.title'),
      content: t('cocreator.personalizedIdentity.content'),
      details: t('cocreator.personalizedIdentity.details')
    }
  ];

  const customizationItems = t('cocreator.profile.customization.items', {
    returnObjects: true
  }) as ProfileItem[];

  const benefitItems = t('cocreator.profile.exclusiveBenefits.items', {
    returnObjects: true
  }) as ProfileItem[];

  // Schema.org: ItemList
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('cocreator.title'),
    description: t('cocreator.subtitle'),
    itemListElement: coreFeatures.map((feature, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: feature.title,
        description: feature.content
      }
    }))
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: ItemList */}
      <JsonLd data={itemListSchema} />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`cocreator-role ${className}`.trim()}
      >
        <div className="cocreator-role__container">
          {/* Header */}
          <header className="cocreator-role__header">
            <h2 id={`${id}-title`} className="cocreator-role__title">
              {t('cocreator.title')}
            </h2>
            <p className="cocreator-role__subtitle">
              {t('cocreator.subtitle')}
            </p>
          </header>

          {/* Core Features */}
          <div className="cocreator-role__features">
            {coreFeatures.map((feature) => (
              <article key={feature.key} className="cocreator-role__feature">
                <div className="cocreator-role__feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <div className="cocreator-role__feature-content">
                  <h3 className="cocreator-role__feature-title">
                    {feature.title}
                  </h3>
                  <p className="cocreator-role__feature-text">
                    {feature.content}
                  </p>
                  <p className="cocreator-role__feature-details">
                    {feature.details}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Profile Section */}
          <div className="cocreator-role__profile">
            <h3 className="cocreator-role__profile-title">
              {t('cocreator.profile.title')}
            </h3>

            <div className="cocreator-role__profile-grid">
              {/* Customization */}
              <div className="cocreator-role__profile-section">
                <h4 className="cocreator-role__profile-section-title">
                  {t('cocreator.profile.customization.title')}
                </h4>
                <ul className="cocreator-role__profile-list">
                  {customizationItems.map((item, index) => (
                    <li key={index} className="cocreator-role__profile-item">
                      <span className="cocreator-role__profile-item-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="cocreator-role__profile-section">
                <h4 className="cocreator-role__profile-section-title">
                  {t('cocreator.profile.exclusiveBenefits.title')}
                </h4>
                <ul className="cocreator-role__profile-list">
                  {benefitItems.map((item, index) => (
                    <li key={index} className="cocreator-role__profile-item">
                      <span className="cocreator-role__profile-item-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cofounder Message */}
          <blockquote className="cocreator-role__message">
            <span className="cocreator-role__message-icon" aria-hidden="true">💎</span>
            <p>{t('cocreator.cofounderMessage')}</p>
          </blockquote>
        </div>
      </AriaLandmark>
    </>
  );
};

export default CoCreatorRole;
