/**
 * @component Unicum
 * @description Perché ogni EGI è unico e irripetibile: DNA creativo, timestamp, CoA e provenance chain.
 * @i18nKey florence.unicum
 */

import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

interface Factor {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Comparison {
  headers: string[];
  rows: string[][];
}

interface UnicumTranslations {
  badge: string;
  title: string;
  subtitle: string;
  definition: string;
  intro: string;
  whatMakesTitle: string;
  factors: Factor[];
  comparisonTitle: string;
  comparison: Comparison;
}

const COLORS = {
  gold: '#d4af37',
  emerald: '#10b981',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  amber: '#f59e0b',
  red: '#ef4444',
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
  blue: COLORS.blue,
  purple: COLORS.purple,
  emerald: COLORS.emerald,
  amber: COLORS.amber,
  gold: COLORS.gold,
  green: COLORS.green,
};

export function Unicum(): JSX.Element {
  const { t } = useTranslation('florence');
  const data = t('unicum', { returnObjects: true }) as UnicumTranslations;

  return (
    <section
      role="region"
      aria-labelledby="unicum-title"
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
            background: COLORS.amber,
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
          id="unicum-title"
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

      {/* Definition */}
      <div
        style={{
          background: COLORS.gold,
          color: COLORS.gray[800],
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontStyle: 'italic',
          fontWeight: 500,
        }}
      >
        📜 {data.definition}
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
          {data.intro.split('EGI')[0]}
          <GlossaryTerm termId="EGI">EGI</GlossaryTerm>
          {data.intro.split('EGI')[1]}
        </span>
      </p>

      {/* What Makes Title */}
      <h3
        style={{
          fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
          fontWeight: 600,
          color: COLORS.gray[800],
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        <span>
          {data.whatMakesTitle.split('EGI')[0]}
          <GlossaryTerm termId="EGI">EGI</GlossaryTerm>
          {data.whatMakesTitle.split('EGI')[1]}
        </span>
      </h3>

      {/* Factors Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        {data.factors.map((factor, index) => {
          const factorColor = COLOR_MAP[factor.color] || COLORS.gray[600];
          return (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                borderLeft: `4px solid ${factorColor}`,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: '0.75rem',
                }}
              >
                {factor.icon}
              </div>
              <h4
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  fontWeight: 600,
                  color: factorColor,
                  marginBottom: '0.5rem',
                }}
              >
                {factor.title}
              </h4>
              <p style={{ color: COLORS.gray[700], fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {factor.description.includes('Oracode') ? (
                  <span>
                    {factor.description.split('Oracode')[0]}
                    <GlossaryTerm termId="Oracode">{t('unicum.oracodeLabel')}</GlossaryTerm>
                    {factor.description.split('Oracode')[1]}
                  </span>
                ) : factor.description.includes('Algorand') ? (
                  <span>
                    {factor.description.split('Algorand')[0]}
                    <GlossaryTerm termId="Algorand">{t('unicum.algorandLabel')}</GlossaryTerm>
                    {factor.description.split('Algorand')[1]}
                  </span>
                ) : factor.description.includes('minting') ? (
                  <span>
                    {factor.description.split('minting')[0]}
                    <GlossaryTerm termId="minting">{t('unicum.mintingLabel')}</GlossaryTerm>
                    {factor.description.split('minting')[1]}
                  </span>
                ) : factor.description.includes('CoA') ? (
                  <span>
                    {factor.description.split('CoA')[0]}
                    <GlossaryTerm termId="CoA">{t('unicum.coaLabel')}</GlossaryTerm>
                    {factor.description.split('CoA')[1]}
                  </span>
                ) : (
                  factor.description
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* Comparison Title */}
      <h3
        style={{
          fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
          fontWeight: 600,
          color: COLORS.gray[800],
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        {data.comparisonTitle}
      </h3>

      {/* Comparison Table */}
      <div
        style={{
          background: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
          }}
          aria-label={data.comparisonTitle}
        >
          <thead>
            <tr
              style={{
                background: COLORS.gray[100],
              }}
            >
              {data.comparison.headers.map((header, index) => (
                <th
                  key={index}
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: COLORS.gray[800],
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    borderBottom: `2px solid ${COLORS.gray[200]}`,
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.comparison.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={{
                  borderBottom: rowIndex < data.comparison.rows.length - 1 ? `1px solid ${COLORS.gray[200]}` : 'none',
                }}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{
                      padding: '0.875rem 1rem',
                      color: cellIndex === 0 ? COLORS.gray[800] : COLORS.gray[700],
                      fontWeight: cellIndex === 0 ? 500 : 400,
                      fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
                      background: cellIndex === 2 ? `${COLORS.emerald}08` : 'transparent',
                    }}
                  >
                    {cellIndex === 1 && (cell === 'Infinita' || cell === 'Non verificabile' || cell === 'Nessuno' || cell === 'Copia & incolla' || cell === 'Zero') ? (
                      <span style={{ color: COLORS.red }}>❌ {cell}</span>
                    ) : cellIndex === 2 ? (
                      <span style={{ color: COLORS.emerald }}>
                        ✅ {cell.includes('EPP') ? (
                          <>
                            {cell.split('EPP')[0]}
                            <GlossaryTerm termId="EPP">EPP</GlossaryTerm>
                            {cell.split('EPP')[1]}
                          </>
                        ) : (
                          cell
                        )}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
