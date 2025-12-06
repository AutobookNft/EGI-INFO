/**
 * @component Cocreazione
 * @description Il principio di co-creazione: i tre ruoli e il flusso di guarigione digitale.
 * @i18nKey florence.cocreazione
 */

import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

interface Role {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface FlowStep {
  icon: string;
  label: string;
  desc: string;
}

interface Need {
  title: string;
  text: string;
}

interface CocreazioneTranslations {
  badge: string;
  title: string;
  subtitle: string;
  need: Need;
  intro: string;
  rolesTitle: string;
  roles: Role[];
  flowTitle: string;
  flow: FlowStep[];
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

const COLOR_MAP: Record<string, string> = {
  emerald: COLORS.emerald,
  blue: COLORS.blue,
  purple: COLORS.purple,
  gold: COLORS.gold,
  amber: COLORS.amber,
};

export function Cocreazione(): JSX.Element {
  const { t } = useTranslation('florence');
  const data = t('cocreazione', { returnObjects: true }) as CocreazioneTranslations;

  return (
    <section
      role="region"
      aria-labelledby="cocreazione-title"
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
            background: COLORS.blue,
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
          id="cocreazione-title"
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

      {/* Need Card */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.amber}15 0%, ${COLORS.amber}05 100%)`,
          border: `2px solid ${COLORS.amber}40`,
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <h3
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            fontWeight: 600,
            color: COLORS.amber,
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>🔍</span> {data.need.title}
        </h3>
        <p style={{ color: COLORS.gray[700], lineHeight: 1.6 }}>
          {data.need.text}
        </p>
      </div>

      {/* Intro */}
      <p
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          color: COLORS.gray[700],
          marginBottom: '2rem',
          lineHeight: 1.7,
        }}
      >
        <span>
          {data.intro.split('FlorenceEGI')[0]}
          <GlossaryTerm term="FlorenceEGI">FlorenceEGI</GlossaryTerm>
          {data.intro.split('FlorenceEGI')[1]}
        </span>
      </p>

      {/* Roles Title */}
      <h3
        style={{
          fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
          fontWeight: 600,
          color: COLORS.gray[800],
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        {data.rolesTitle}
      </h3>

      {/* Role Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        {data.roles.map((role, index) => {
          const roleColor = COLOR_MAP[role.color] || COLORS.gray[600];
          return (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                borderTop: `4px solid ${roleColor}`,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                {role.icon}
              </div>
              <h4
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  fontWeight: 600,
                  color: roleColor,
                  marginBottom: '0.5rem',
                }}
              >
                {role.title}
              </h4>
              <p style={{ color: COLORS.gray[700], fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {role.description.includes('EGI') ? (
                  <span>
                    {role.description.split('EGI')[0]}
                    <GlossaryTerm term="EGI">EGI</GlossaryTerm>
                    {role.description.split('EGI')[1]}
                  </span>
                ) : role.description.includes('minting') ? (
                  <span>
                    {role.description.split('minting')[0]}
                    <GlossaryTerm term="minting">minting</GlossaryTerm>
                    {role.description.split('minting')[1]}
                  </span>
                ) : (
                  role.description
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* Flow Title */}
      <h3
        style={{
          fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
          fontWeight: 600,
          color: COLORS.gray[800],
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        {data.flowTitle}
      </h3>

      {/* Flow Visualization */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
        }}
        role="list"
        aria-label={data.flowTitle}
      >
        {data.flow.map((step, index) => (
          <div
            key={index}
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                background: COLORS.gray[50],
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
                minWidth: '100px',
              }}
            >
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.25rem' }}>
                {step.icon}
              </span>
              <strong
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  color: COLORS.gray[800],
                  display: 'block',
                }}
              >
                {step.label}
              </strong>
              <span style={{ fontSize: '0.75rem', color: COLORS.gray[600] }}>
                {step.desc}
              </span>
            </div>
            {index < data.flow.length - 1 && (
              <span
                style={{
                  fontSize: '1.5rem',
                  color: COLORS.gold,
                }}
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
