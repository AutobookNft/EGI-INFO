/**
 * @component PrincipioFondo
 * @description La visione fondamentale: l'arte non è completa fino all'incontro con il destinatario.
 * @i18nKey florence.principioFondo
 */

import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

interface Pillar {
  icon: string;
  title: string;
  description: string;
}

interface Cause {
  name: string;
  desc: string;
  highlight?: boolean;
}

interface Philosophy {
  title: string;
  intro: string;
  causes: Cause[];
}

interface PrincipioFondoTranslations {
  badge: string;
  title: string;
  subtitle: string;
  quote: string;
  intro: string;
  transformTitle: string;
  transformDesc: string;
  pillars: Pillar[];
  philosophy: Philosophy;
  insight: string;
}

const COLORS = {
  gold: '#d4af37',
  emerald: '#10b981',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  amber: '#f59e0b',
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

export function PrincipioFondo(): JSX.Element {
  const { t } = useTranslation('florence');
  const data = t('principioFondo', { returnObjects: true }) as PrincipioFondoTranslations;

  return (
    <section
      role="region"
      aria-labelledby="principio-fondo-title"
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
            background: COLORS.emerald,
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
          id="principio-fondo-title"
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

      {/* Quote */}
      <blockquote
        style={{
          background: 'white',
          borderLeft: `4px solid ${COLORS.emerald}`,
          padding: '1.5rem',
          borderRadius: '0 12px 12px 0',
          marginBottom: '2rem',
          fontStyle: 'italic',
          color: COLORS.gray[700],
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
        }}
      >
        "{data.quote}"
      </blockquote>

      {/* Intro */}
      <p
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          color: COLORS.gray[700],
          marginBottom: '2rem',
          lineHeight: 1.7,
        }}
      >
        {data.intro}
      </p>

      {/* Transformation Section */}
      <div
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
            fontWeight: 600,
            color: COLORS.gray[800],
            marginBottom: '0.75rem',
          }}
        >
          {data.transformTitle}
        </h3>
        <p style={{ color: COLORS.gray[700], marginBottom: '1.5rem' }}>
          <span>
            {data.transformDesc.split('EGI')[0]}
            <GlossaryTerm term="EGI">EGI – Eco Goods Invent</GlossaryTerm>
            {data.transformDesc.split('EGI')[1]}
          </span>
        </p>

        {/* Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {data.pillars.map((pillar, index) => (
            <div
              key={index}
              style={{
                background: COLORS.gray[50],
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>
                {pillar.icon}
              </span>
              <h4
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: 600,
                  color: COLORS.gray[800],
                  marginBottom: '0.25rem',
                }}
              >
                {pillar.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: COLORS.gray[600] }}>
                {pillar.description.includes('Algorand') ? (
                  <span>
                    {pillar.description.split('Algorand')[0]}
                    <GlossaryTerm term="Algorand">Algorand</GlossaryTerm>
                    {pillar.description.split('Algorand')[1]}
                  </span>
                ) : pillar.description.includes('EPP') ? (
                  <span>
                    {pillar.description.split('EPP')[0]}
                    <GlossaryTerm term="EPP">EPP</GlossaryTerm>
                    {pillar.description.split('EPP')[1]}
                  </span>
                ) : (
                  pillar.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.purple}10 0%, ${COLORS.purple}05 100%)`,
          border: `2px solid ${COLORS.purple}30`,
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <h3
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
            fontWeight: 600,
            color: COLORS.purple,
            marginBottom: '0.75rem',
          }}
        >
          {data.philosophy.title}
        </h3>
        <p style={{ color: COLORS.gray[700], marginBottom: '1rem' }}>
          {data.philosophy.intro}
        </p>
        <ul
          aria-label={data.philosophy.title}
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {data.philosophy.causes.map((cause, index) => (
            <li
              key={index}
              style={{
                background: cause.highlight ? COLORS.gold : 'white',
                color: cause.highlight ? COLORS.gray[800] : COLORS.gray[700],
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: cause.highlight ? 600 : 400,
                boxShadow: cause.highlight ? '0 4px 12px rgba(212, 175, 55, 0.3)' : 'none',
              }}
            >
              <strong>{cause.name}:</strong> {cause.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* Insight */}
      <div
        style={{
          background: COLORS.gold,
          color: COLORS.gray[800],
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          textAlign: 'center',
          fontWeight: 500,
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
        }}
      >
        💡 {data.insight}
      </div>
    </section>
  );
}
