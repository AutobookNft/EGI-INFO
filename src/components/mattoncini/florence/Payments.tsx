/**
 * Mattoncino: Payments - 4 Livelli di Inclusione Finanziaria
 * 
 * Mostra i 4 livelli di pagamento disponibili su FlorenceEGI:
 * Zero Crypto, Ho un Wallet, Crypto Native, Egili
 * 
 * Chiave JSON i18n: florence.payments
 * Rotta test: /info/florence/payments
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

// ============================================
// TYPES
// ============================================
interface PaymentLevel {
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

const LEVEL_ICONS = ['💳', '👛', '₿', '✨'] as const;
const LEVEL_COLORS = [COLORS.blue, COLORS.green, COLORS.purple, COLORS.gold] as const;

// ============================================
// COMPONENT
// ============================================
const Payments: React.FC = () => {
  const { t } = useTranslation('florence');
  
  // Estrai dati da i18n
  const levels = t('payments.levels', { returnObjects: true }) as PaymentLevel[];

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a'
      }}
      aria-labelledby="payments-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '50px',
              color: COLORS.gold,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px'
            }}
          >
            💰 {t('payments.badge')}
          </span>
          
          <h1
            id="payments-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px'
            }}
          >
            {t('payments.title')}
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {t('payments.subtitle')}
          </p>
        </header>

        {/* 4 LIVELLI */}
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}
          aria-label={t('payments.levelsLabel')}
        >
          {levels.map((level, i) => (
            <li
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${LEVEL_COLORS[i]}40`,
                borderRadius: '20px',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'transform 0.2s, border-color 0.2s'
              }}
            >
              {/* Numero Livello */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `${LEVEL_COLORS[i]}20`,
                  border: `2px solid ${LEVEL_COLORS[i]}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '1.5rem'
                }}
                aria-hidden="true"
              >
                {LEVEL_ICONS[i]}
              </div>
              
              {/* Livello Badge */}
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: `${LEVEL_COLORS[i]}15`,
                  borderRadius: '20px',
                  color: LEVEL_COLORS[i],
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {t('payments.levelLabel')} {i + 1}
              </span>
              
              {/* Titolo */}
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px'
                }}
              >
                {level.title}
              </h2>
              
              {/* Descrizione */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.5,
                  margin: 0
                }}
              >
                {level.desc}
              </p>
            </li>
          ))}
        </ul>

        {/* NOTA INCLUSIVITÀ */}
        <div
          style={{
            marginTop: '48px',
            padding: '24px 32px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '16px',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              lineHeight: 1.6
            }}
          >
            <span style={{ color: COLORS.gold, fontWeight: 600 }}>
              {t('payments.inclusionTitle')}:
            </span>{' '}
            {t('payments.inclusionDesc')}
          </p>
        </div>

        {/* DETTAGLI TECNICI */}
        <div
          style={{
            marginTop: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}
          role="group"
          aria-label={t('payments.techDetailsLabel')}
        >
          <div
            style={{
              padding: '20px',
              background: 'rgba(96, 165, 250, 0.08)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }} aria-hidden="true">
              🏦
            </span>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
              <GlossaryTerm termId="psp">PSP</GlossaryTerm> {t('payments.pspNote')}
            </p>
          </div>
          
          <div
            style={{
              padding: '20px',
              background: 'rgba(74, 222, 128, 0.08)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }} aria-hidden="true">
              ⚡
            </span>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
              {t('payments.settlementNote')}
            </p>
          </div>
          
          <div
            style={{
              padding: '20px',
              background: 'rgba(167, 139, 250, 0.08)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }} aria-hidden="true">
              🔐
            </span>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
              <GlossaryTerm termId="mica-safe">{t('payments.micaSafe')}</GlossaryTerm> {t('payments.micaNote')}
            </p>
          </div>
          
          <div
            style={{
              padding: '20px',
              background: 'rgba(212, 175, 55, 0.08)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }} aria-hidden="true">
              🌍
            </span>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
              {t('payments.globalNote')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Payments;
