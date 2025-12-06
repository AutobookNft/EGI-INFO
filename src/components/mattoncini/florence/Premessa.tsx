/**
 * @component Premessa
 * @description Il contesto che ha dato origine a FlorenceEGI: un'epoca di connessione senza autenticità.
 * @i18nKey florence.premessa
 */

import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

interface ProblemSolution {
  title: string;
  items: string[];
}

interface NotIsSection {
  title: string;
  text: string;
}

interface PremessaTranslations {
  badge: string;
  title: string;
  subtitle: string;
  quote: string;
  intro: string;
  notIs: NotIsSection;
  is: NotIsSection;
  problem: ProblemSolution;
  solution: ProblemSolution;
}

const COLORS = {
  gold: '#d4af37',
  emerald: '#10b981',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  amber: '#f59e0b',
  red: '#ef4444',
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

export function Premessa(): JSX.Element {
  const { t } = useTranslation('florence');
  const data = t('premessa', { returnObjects: true }) as PremessaTranslations;

  return (
    <section
      role="region"
      aria-labelledby="premessa-title"
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
            background: COLORS.gold,
            color: COLORS.gray[800],
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
          id="premessa-title"
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
          borderLeft: `4px solid ${COLORS.gold}`,
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

      {/* NOT IS / IS Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        {/* NON È */}
        <div
          style={{
            background: `linear-gradient(135deg, ${COLORS.red}10 0%, ${COLORS.red}05 100%)`,
            border: `2px solid ${COLORS.red}30`,
            borderRadius: '12px',
            padding: '1.5rem',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
              fontWeight: 600,
              color: COLORS.red,
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>❌</span> {data.notIs.title}
          </h3>
          <p style={{ color: COLORS.gray[700], lineHeight: 1.6 }}>
            {data.notIs.text}
          </p>
        </div>

        {/* È */}
        <div
          style={{
            background: `linear-gradient(135deg, ${COLORS.emerald}10 0%, ${COLORS.emerald}05 100%)`,
            border: `2px solid ${COLORS.emerald}30`,
            borderRadius: '12px',
            padding: '1.5rem',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
              fontWeight: 600,
              color: COLORS.emerald,
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>✅</span> {data.is.title}
          </h3>
          <p style={{ color: COLORS.gray[700], lineHeight: 1.6 }}>
            <span>
              {data.is.text.split('EGI')[0]}
              <GlossaryTerm term="EGI">EGI</GlossaryTerm>
              {data.is.text.split('EGI')[1]?.split('blockchain')[0]}
              <GlossaryTerm term="blockchain">blockchain</GlossaryTerm>
              {data.is.text.split('blockchain')[1]}
            </span>
          </p>
        </div>
      </div>

      {/* Problem / Solution Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {/* Problema */}
        <div
          style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
              fontWeight: 600,
              color: COLORS.gray[800],
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>⚠️</span> {data.problem.title}
          </h3>
          <ul
            aria-label={data.problem.title}
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {data.problem.items.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: COLORS.gray[700],
                }}
              >
                <span style={{ color: COLORS.red, fontWeight: 600 }}>✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soluzione */}
        <div
          style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
              fontWeight: 600,
              color: COLORS.gray[800],
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>💡</span> {data.solution.title}
          </h3>
          <ul
            aria-label={data.solution.title}
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {data.solution.items.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: COLORS.gray[700],
                }}
              >
                <span style={{ color: COLORS.emerald, fontWeight: 600 }}>✓</span>
                <span>
                  {item.includes('blockchain') ? (
                    <>
                      {item.split('blockchain')[0]}
                      <GlossaryTerm term="blockchain">blockchain</GlossaryTerm>
                      {item.split('blockchain')[1]}
                    </>
                  ) : item.includes('Royalty') ? (
                    <>
                      <GlossaryTerm term="Royalty">Royalty</GlossaryTerm>
                      {item.split('Royalty')[1]}
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
    </section>
  );
}
