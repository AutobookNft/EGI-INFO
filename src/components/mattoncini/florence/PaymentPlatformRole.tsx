/**
 * Mattoncino: PaymentPlatformRole - Cosa fa (e non fa) la piattaforma
 * 
 * Riepilogo delle responsabilità della piattaforma nella gestione pagamenti.
 * Griglia Fa/Non Fa per chiarezza immediata.
 * 
 * Chiave JSON i18n: florence.paymentPlatformRole
 * Rotta: /info/florence/payment-platform-role
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  green: '#22c55e',
  greenLight: 'rgba(34, 197, 94, 0.1)',
  greenBorder: '#16a34a',
  red: '#ef4444',
  redLight: 'rgba(239, 68, 68, 0.1)',
  redBorder: '#dc2626',
  white: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
} as const;

// ============================================
// COMPONENT
// ============================================
const PaymentPlatformRole: React.FC = () => {
  const { t } = useTranslation('florence');

  const listItemStyle = (isLast: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: isLast ? 0 : '12px',
    color: COLORS.textPrimary,
    fontSize: '1rem',
    lineHeight: 1.5,
  });

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a',
      }}
      aria-labelledby="platform-role-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
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
              marginBottom: '24px',
            }}
          >
            ⚖️ {t('paymentPlatformRole.badge', 'Responsabilità')}
          </span>
          
          <h1
            id="platform-role-title"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.white,
              marginBottom: '16px',
            }}
          >
            {t('paymentPlatformRole.title', 'Cosa fa (e non fa) la piattaforma')}
          </h1>
        </header>

        {/* GRID FA / NON FA */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {/* COSA FA */}
          <div
            style={{
              padding: '32px',
              background: COLORS.greenLight,
              borderLeft: `4px solid ${COLORS.greenBorder}`,
              borderRadius: '0 16px 16px 0',
            }}
          >
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: COLORS.green,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span aria-hidden="true">✓</span>
              {t('paymentPlatformRole.doesTitle', 'Cosa Fa')}
            </h2>
            
            <ul
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
              aria-label={t('paymentPlatformRole.doesAriaLabel', 'Lista funzionalità della piattaforma')}
            >
              <li style={listItemStyle(false)}>
                <span style={{ color: COLORS.green, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Incassa <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> tramite <GlossaryTerm termId="psp">PSP</GlossaryTerm>.
              </li>
              <li style={listItemStyle(false)}>
                <span style={{ color: COLORS.green, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Emette e trasferisce <GlossaryTerm termId="egi">EGI</GlossaryTerm>.
              </li>
              <li style={listItemStyle(false)}>
                <span style={{ color: COLORS.green, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Scrive <GlossaryTerm termId="anchor-hash">anchor hash</GlossaryTerm>.
              </li>
              <li style={listItemStyle(false)}>
                <span style={{ color: COLORS.green, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Gestisce QR e verifica pubblica.
              </li>
              <li style={listItemStyle(true)}>
                <span style={{ color: COLORS.green, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Calcola <GlossaryTerm termId="royalties">royalties</GlossaryTerm> per il <GlossaryTerm termId="psp">PSP</GlossaryTerm>.
              </li>
            </ul>
          </div>

          {/* COSA NON FA */}
          <div
            style={{
              padding: '32px',
              background: COLORS.redLight,
              borderLeft: `4px solid ${COLORS.redBorder}`,
              borderRadius: '0 16px 16px 0',
            }}
          >
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: COLORS.red,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span aria-hidden="true">✗</span>
              {t('paymentPlatformRole.doesNotTitle', 'Cosa NON Fa')}
            </h2>
            
            <ul
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
              aria-label={t('paymentPlatformRole.doesNotAriaLabel', 'Lista limitazioni della piattaforma')}
            >
              <li style={listItemStyle(false)}>
                <span style={{ color: COLORS.red, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Custodire criptovalute per terzi.
              </li>
              <li style={listItemStyle(false)}>
                <span style={{ color: COLORS.red, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Fare da exchange crypto/<GlossaryTerm termId="fiat">fiat</GlossaryTerm>.
              </li>
              <li style={listItemStyle(true)}>
                <span style={{ color: COLORS.red, fontWeight: 600, flexShrink: 0 }} aria-hidden="true">•</span>
                Processare pagamenti crypto.
              </li>
            </ul>
          </div>
        </div>

        {/* NOTA MiCA */}
        <div
          style={{
            marginTop: '48px',
            padding: '24px 32px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              color: COLORS.textPrimary,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: COLORS.gold, fontWeight: 600 }}>
              🛡️ <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm> by design:
            </span>{' '}
            FlorenceEGI non è un exchange, non custodisce crypto per terzi e non processa pagamenti in criptovaluta. 
            Opera completamente fuori dal perimetro del Regolamento <GlossaryTerm termId="mica">MiCA</GlossaryTerm>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PaymentPlatformRole;
