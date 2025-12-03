/**
 * FlorenceTech.tsx
 * 
 * Specifiche tecniche di FlorenceEGI con tre viste:
 * - User View (semplice)
 * - Developer View (API/SDK)
 * - Performance Metrics
 * 
 * SEO: SoftwareApplicationSchema + metrics
 * ARIA: tabs pattern per le viste
 * i18n: florence.tech
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  SoftwareApplicationSchema, 
  AriaLandmark,
  AriaTabList,
  AriaTabPanel
} from '../../../utils/seo';

// =============================================================================
// TYPES
// =============================================================================

interface FlorenceTechProps {
  /** ID sezione per navigation */
  id?: string;
  /** Classe CSS aggiuntiva */
  className?: string;
}

type TechView = 'user' | 'developer' | 'performance';

// =============================================================================
// COMPONENT
// =============================================================================

export const FlorenceTech: React.FC<FlorenceTechProps> = ({
  id = 'florence-tech',
  className = ''
}) => {
  const { t } = useTranslation('florence');
  const [activeView, setActiveView] = useState<TechView>('user');

  // ---------------------------------------------------------------------------
  // DATA
  // ---------------------------------------------------------------------------

  const views: { key: TechView; icon: string; label: string }[] = [
    { key: 'user', icon: '👤', label: t('technology.userColumnTitle') },
    { key: 'developer', icon: '👨‍💻', label: t('technology.systemColumnTitle') },
    { key: 'performance', icon: '📊', label: t('technology.performanceTitle') }
  ];

  const userFeatures = t('technology.userFeatures', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  const systemFeatures = t('technology.systemFeatures', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  const performanceMetrics = t('technology.performance', { returnObjects: true }) as Array<{
    label: string;
    value: string;
    desc: string;
  }>;

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Schema.org: SoftwareApplication */}
      <SoftwareApplicationSchema
        name="FlorenceEGI Platform"
        description={t('technology.subtitle')}
        applicationCategory="Blockchain Platform"
        operatingSystem="Web, iOS, Android"
        offers={{
          price: "0",
          priceCurrency: "EUR"
        }}
      />

      <AriaLandmark
        as="section"
        role="region"
        labelledBy={`${id}-title`}
        id={id}
        className={`florence-tech ${className}`.trim()}
      >
        <div className="florence-tech__container">
          {/* Header */}
          <header className="florence-tech__header">
            <h2 id={`${id}-title`} className="florence-tech__title">
              {t('technology.titleLine1')} {t('technology.titleLine2')}
            </h2>
            <p className="florence-tech__subtitle">
              {t('technology.subtitle')}
            </p>
          </header>

          {/* View Tabs */}
          <AriaTabList
            label={t('technology.titleLine1')}
            className="florence-tech__tabs"
          >
            {views.map((view) => (
              <button
                key={view.key}
                role="tab"
                id={`${id}-tab-${view.key}`}
                aria-controls={`${id}-panel-${view.key}`}
                aria-selected={activeView === view.key}
                onClick={() => setActiveView(view.key)}
                className={`florence-tech__tab ${
                  activeView === view.key ? 'florence-tech__tab--active' : ''
                }`}
              >
                <span className="florence-tech__tab-icon" aria-hidden="true">
                  {view.icon}
                </span>
                <span className="florence-tech__tab-label">{view.label}</span>
              </button>
            ))}
          </AriaTabList>

          {/* Panels */}
          <div className="florence-tech__panels">
            {/* User View Panel */}
            <AriaTabPanel
              id={`${id}-panel-user`}
              labelledBy={`${id}-tab-user`}
              hidden={activeView !== 'user'}
              className="florence-tech__panel"
            >
              <div className="florence-tech__view florence-tech__view--user">
                <ul className="florence-tech__features">
                  {Array.isArray(userFeatures) && userFeatures.map((feature, index) => (
                    <li key={index} className="florence-tech__feature">
                      <span className="florence-tech__feature-icon" aria-hidden="true">✓</span>
                      <div>
                        <strong>{feature.title}</strong>
                        <span className="florence-tech__feature-desc"> - {feature.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AriaTabPanel>

            {/* Developer View Panel */}
            <AriaTabPanel
              id={`${id}-panel-developer`}
              labelledBy={`${id}-tab-developer`}
              hidden={activeView !== 'developer'}
              className="florence-tech__panel"
            >
              <div className="florence-tech__view florence-tech__view--developer">
                <ul className="florence-tech__features">
                  {Array.isArray(systemFeatures) && systemFeatures.map((feature, index) => (
                    <li key={index} className="florence-tech__feature">
                      <span className="florence-tech__feature-icon" aria-hidden="true">⚡</span>
                      <div>
                        <strong>{feature.title}</strong>
                        <span className="florence-tech__feature-desc"> - {feature.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Code Example */}
                <div className="florence-tech__code-example">
                  <pre>
                    <code>
{`// Esempio SDK FlorenceEGI
import { FlorenceEGI } from '@florenceegi/sdk';

const client = new FlorenceEGI({ apiKey: 'YOUR_KEY' });

// Mint un nuovo EGI
const egi = await client.mint({
  name: 'Opera d\\'Arte',
  creator: 'artista.algo',
  royalty: 0.1,
  eppContribution: 0.05
});`}
                    </code>
                  </pre>
                </div>
              </div>
            </AriaTabPanel>

            {/* Performance Panel */}
            <AriaTabPanel
              id={`${id}-panel-performance`}
              labelledBy={`${id}-tab-performance`}
              hidden={activeView !== 'performance'}
              className="florence-tech__panel"
            >
              <div className="florence-tech__view florence-tech__view--performance">
                <div className="florence-tech__metrics">
                  {Array.isArray(performanceMetrics) && performanceMetrics.map((metric, index) => (
                    <div key={index} className="florence-tech__metric">
                      <span className="florence-tech__metric-value">
                        {metric.value}
                      </span>
                      <span className="florence-tech__metric-label">
                        {metric.label}
                      </span>
                      <span className="florence-tech__metric-desc">
                        {metric.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AriaTabPanel>
          </div>
        </div>
      </AriaLandmark>
    </>
  );
};

export default FlorenceTech;
