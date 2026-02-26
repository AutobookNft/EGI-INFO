/**
 * @component Visione
 * @description Il futuro di FlorenceEGI: roadmap di sviluppo e visione a lungo termine.
 * @i18nKey florence.visione
 */

import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

interface Phase {
  status: string;
  title: string;
  color: string;
  items: string[];
}

interface VisioneTranslations {
  badge: string;
  title: string;
  subtitle: string;
  statement: string;
  roadmapTitle: string;
  phases: Phase[];
}

const COLORS = {
  gold: '#d4af37',
  emerald: '#10b981',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  amber: '#f59e0b',
  green: '#22c55e',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
  },
};

const COLOR_MAP: Record<string, string> = {
  green: COLORS.green,
  blue: COLORS.blue,
  purple: COLORS.purple,
  amber: COLORS.amber,
  gold: COLORS.gold,
  emerald: COLORS.emerald,
};

export function Visione(): JSX.Element {
  const { t } = useTranslation('florence');
  const data = t('visione', { returnObjects: true }) as VisioneTranslations;

  return (
    <section
      role="region"
      aria-labelledby="visione-title"
      style={{
        background: `linear-gradient(135deg, ${COLORS.gray[50]} 0%, ${COLORS.gray[100]} 100%)`,
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        marginBottom: '2rem',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span
          style={{
            display: 'inline-block',
            background: COLORS.purple,
            color: 'white',
            padding: '0.25rem 1rem',
            borderRadius: '9999px',
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
            fontWeight: 600,
            marginBottom: '1rem',
          }}
        >
          {data.badge}
        </span>
        <h2
          id="visione-title"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 700,
            color: COLORS.gray[800],
            marginBottom: '0.5rem',
          }}
        >
          {data.title}
        </h2>
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: COLORS.gray[600],
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          {data.subtitle}
        </p>
      </header>

      {/* Vision Statement */}
      <blockquote
        style={{
          background: `linear-gradient(135deg, ${COLORS.gold}20 0%, ${COLORS.gold}10 100%)`,
          border: `2px solid ${COLORS.gold}40`,
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          fontWeight: 500,
          color: COLORS.gray[800],
          lineHeight: 1.7,
        }}
      >
        🌟 {data.statement}
      </blockquote>

      {/* Roadmap Title */}
      <h3
        style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          fontWeight: 600,
          color: COLORS.gray[800],
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        {data.roadmapTitle}
      </h3>

      {/* Phases Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {data.phases.map((phase, index) => {
          const phaseColor = COLOR_MAP[phase.color] || COLORS.gray[600];
          return (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Phase Header */}
              <div
                style={{
                  background: phaseColor,
                  color: 'white',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    fontWeight: 700,
                    background: 'rgba(255,255,255,0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                  }}
                >
                  {phase.status}
                </span>
              </div>

              {/* Phase Content */}
              <div style={{ padding: '1.25rem' }}>
                <h4
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                    fontWeight: 600,
                    color: COLORS.gray[800],
                    marginBottom: '1rem',
                  }}
                >
                  {phase.title}
                </h4>
                <ul
                  aria-label={phase.title}
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.9375rem',
                        color: COLORS.gray[700],
                      }}
                    >
                      <span style={{ color: phaseColor }}>•</span>
                      <span>
                        {item.includes('Algorand') ? (
                          <>
                            {item.split('Algorand')[0]}
                            <GlossaryTerm termId="Algorand">{t('visione.algorandLabel')}</GlossaryTerm>
                            {item.split('Algorand')[1]}
                          </>
                        ) : item.includes('EGI') ? (
                          <>
                            {item.split('EGI')[0]}
                            <GlossaryTerm termId="EGI">EGI</GlossaryTerm>
                            {item.split('EGI')[1]}
                          </>
                        ) : item.includes('CoA') ? (
                          <>
                            {item.split('CoA')[0]}
                            <GlossaryTerm termId="CoA">CoA</GlossaryTerm>
                            {item.split('CoA')[1]}
                          </>
                        ) : item.includes('Oracode') ? (
                          <>
                            {item.split('Oracode')[0]}
                            <GlossaryTerm termId="Oracode">{t('visione.oracodeLabel')}</GlossaryTerm>
                            {item.split('Oracode')[1]}
                          </>
                        ) : item.includes('EPP') ? (
                          <>
                            {item.split('EPP')[0]}
                            <GlossaryTerm termId="EPP">EPP</GlossaryTerm>
                            {item.split('EPP')[1]}
                          </>
                        ) : item.includes('DAO') ? (
                          <>
                            {item.split('DAO')[0]}
                            <GlossaryTerm termId="DAO">DAO</GlossaryTerm>
                            {item.split('DAO')[1]}
                          </>
                        ) : item.includes('NATAN') ? (
                          <>
                            {item.split('NATAN')[0]}
                            <GlossaryTerm termId="NATAN">NATAN</GlossaryTerm>
                            {item.split('NATAN')[1]}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
