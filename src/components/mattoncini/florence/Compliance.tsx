/**
 * Mattoncino: Compliance - 4 Pilastri di Conformità
 * 
 * Mostra i 4 pilastri di compliance: GDPR, MiCA, Fiscale, Copyright
 * 
 * Chiave JSON i18n: florence.compliance
 * Rotta test: /info/florence/compliance
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

// ============================================
// TYPES
// ============================================
interface ComplianceItem {
  title: string;
  desc: string;
}

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  blue: '#60a5fa',
  green: '#4ade80',
  purple: '#a78bfa',
} as const;

const PILLAR_ICONS = ['🛡️', '⚖️', '📄', '©️'] as const;
const PILLAR_COLORS = [COLORS.blue, COLORS.purple, COLORS.green, COLORS.gold] as const;
const PILLAR_TERMS = ['gdpr', 'mica', 'fatturazione', 'diritti-morali'] as const;

// ============================================
// COMPONENT
// ============================================
const Compliance: React.FC = () => {
  const { t } = useTranslation('florence');

  // Estrai dati da i18n
  const items = t('compliance.items', { returnObjects: true }) as ComplianceItem[];

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d12 100%)'
      }}
      aria-labelledby="compliance-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(96, 165, 250, 0.15)',
              border: '1px solid rgba(96, 165, 250, 0.35)',
              borderRadius: '50px',
              color: COLORS.blue,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px'
            }}
          >
            ✅ {t('compliance.badge')}
          </span>

          <h1
            id="compliance-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px'
            }}
          >
            {t('compliance.title')}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {t('compliance.subtitle')}
          </p>
        </header>

        {/* 4 PILASTRI */}
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}
          aria-label={t('compliance.pillarsLabel')}
        >
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${PILLAR_COLORS[i]}30`,
                borderRadius: '20px',
                padding: '32px 24px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorazione superiore */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${PILLAR_COLORS[i]}, ${PILLAR_COLORS[i]}50)`
                }}
                aria-hidden="true"
              />

              {/* Icona */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: `${PILLAR_COLORS[i]}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  fontSize: '1.8rem'
                }}
                aria-hidden="true"
              >
                {PILLAR_ICONS[i]}
              </div>

              {/* Titolo con GlossaryTerm */}
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: PILLAR_COLORS[i],
                  marginBottom: '12px'
                }}
              >
                {PILLAR_TERMS[i] ? (
                  <GlossaryTerm termId={PILLAR_TERMS[i]}>{item.title}</GlossaryTerm>
                ) : (
                  item.title
                )}
              </h2>

              {/* Descrizione */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                {item.desc}
              </p>
            </li>
          ))}
        </ul>

        {/* MESSAGGIO RASSICURANTE */}
        <div
          style={{
            marginTop: '60px',
            padding: '32px',
            background: 'rgba(74, 222, 128, 0.05)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            borderRadius: '20px',
            textAlign: 'center'
          }}
        >
          <span
            style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}
            aria-hidden="true"
          >
            🎯
          </span>

          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: COLORS.green,
              marginBottom: '12px'
            }}
          >
            {t('compliance.messageTitle')}

          </h3>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            {t('compliance.messageDesc')}
          </p>
        </div>

        {/* CHECKLIST VISIVA */}
        <div
          style={{
            marginTop: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px'
          }}
          role="group"
          aria-label={t('compliance.checklistLabel')}
        >
          {[
            { icon: '✓', text: t('compliance.check1') },
            { icon: '✓', text: t('compliance.check2') },
            { icon: '✓', text: t('compliance.check3') },
            { icon: '✓', text: t('compliance.check4', 'Diritti d\'autore tutelati') },
            { icon: '✓', text: t('compliance.check5') },
            { icon: '✓', text: t('compliance.check6') },
          ].map((check, i) => (
            <div
              key={i}
              style={{
                padding: '12px 16px',
                background: 'rgba(74, 222, 128, 0.08)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span
                style={{
                  color: COLORS.green,
                  fontWeight: 700,
                  fontSize: '1.2rem'
                }}
                aria-hidden="true"
              >
                {check.icon}
              </span>
              <span
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}
              >
                {check.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Compliance;
