/**
 * Mattoncino: PaymentPhilosophy - Filosofia Inclusione Progressiva
 * 
 * Sezione introduttiva della Gestione Pagamenti & Blockchain.
 * Spiega la filosofia di inclusione per tutti i livelli di utenti.
 * 
 * Chiave JSON i18n: florence.paymentPhilosophy
 * Rotta: /info/florence/payment-philosophy
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
  emeraldBorder: 'rgba(16, 185, 129, 0.5)',
  gold: '#d4af37',
  white: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
} as const;

// ============================================
// COMPONENT
// ============================================
const PaymentPhilosophy: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      aria-labelledby="philosophy-title"
      role="region"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* BADGE */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
            }}
          >
            💡 {t('paymentPhilosophy.badge', 'Filosofia')}
          </span>
        </div>

        {/* MAIN CARD */}
        <div
          style={{
            padding: '40px',
            background: COLORS.emeraldLight,
            borderLeft: `4px solid ${COLORS.emerald}`,
            borderRadius: '0 16px 16px 0',
          }}
        >
          <h1
            id="philosophy-title"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 800,
              color: COLORS.emerald,
              marginBottom: '24px',
            }}
          >
            {t('paymentPhilosophy.title', 'Filosofia: Inclusione Progressiva')}
          </h1>
          
          <p
            style={{
              fontSize: '1.15rem',
              color: COLORS.textPrimary,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {t('paymentPhilosophy.description', 
              `Il nostro sistema è progettato per tutti. Chi non conosce il mondo crypto usa la moneta 
              FIAT e i metodi di pagamento tradizionali. Chi possiede un wallet può ricevere il certificato 
              digitale EGI direttamente lì. Chi vuole accettare pagamenti in criptovalute può farlo tramite 
              partner esterni autorizzati, senza imporre alcuna complessità agli altri utenti.`
            )}
          </p>
        </div>

        {/* 3 PILASTRI */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {/* Pillar 1: FIAT */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(96, 165, 250, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.75rem',
              }}
              aria-hidden="true"
            >
              💳
            </div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#60a5fa',
                marginBottom: '8px',
              }}
            >
              {t('paymentPhilosophy.pillar1Title', 'Zero Crypto')}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: COLORS.textSecondary,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t('paymentPhilosophy.pillar1Desc', 'Paga in euro come in qualsiasi e-commerce tradizionale')}
            </p>
          </div>

          {/* Pillar 2: Wallet */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(74, 222, 128, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.75rem',
              }}
              aria-hidden="true"
            >
              👛
            </div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#4ade80',
                marginBottom: '8px',
              }}
            >
              {t('paymentPhilosophy.pillar2Title', 'Ho un Wallet')}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: COLORS.textSecondary,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t('paymentPhilosophy.pillar2Desc', 'Ricevi gli EGI direttamente nel tuo wallet personale')}
            </p>
          </div>

          {/* Pillar 3: Crypto */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(167, 139, 250, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.75rem',
              }}
              aria-hidden="true"
            >
              ₿
            </div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#a78bfa',
                marginBottom: '8px',
              }}
            >
              {t('paymentPhilosophy.pillar3Title', 'Accetto Crypto')}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: COLORS.textSecondary,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t('paymentPhilosophy.pillar3Desc', 'Pagamenti crypto tramite partner esterni autorizzati')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PaymentPhilosophy;
