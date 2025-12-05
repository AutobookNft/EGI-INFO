/**
 * Mattoncino: PaymentLevel3 - Livello 3: Accetto pagamenti Crypto (opzionale)
 * 
 * Card principale con griglia Merchant/Cliente + sezione collapsible
 * su pagamenti stablecoin via PSP partner.
 * 
 * Chiave JSON i18n: florence.paymentLevel3
 * Rotta: /info/florence/payment-level-3
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  purple: '#a78bfa',
  purpleLight: 'rgba(167, 139, 250, 0.1)',
  purpleBorder: 'rgba(167, 139, 250, 0.4)',
  emerald: '#10b981',
  white: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  cardBg: 'rgba(255, 255, 255, 0.03)',
  cardBorder: 'rgba(255, 255, 255, 0.1)',
} as const;

// ============================================
// COMPONENT
// ============================================
const PaymentLevel3: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a',
      }}
      aria-labelledby="level3-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: COLORS.purpleLight,
              border: `1px solid ${COLORS.purpleBorder}`,
              borderRadius: '50px',
              color: COLORS.purple,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
            }}
          >
            ₿ {t('paymentLevel3.badge', 'Livello 3')}
          </span>
          
          <h1
            id="level3-title"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.white,
              marginBottom: '16px',
            }}
          >
            {t('paymentLevel3.title', 'Accetto pagamenti Crypto (opzionale)')}
          </h1>
          
          <p style={{
            fontSize: '1.15rem',
            color: COLORS.textSecondary,
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {t('paymentLevel3.subtitle', 'Questo livello è facoltativo e gestito da partner esterni per mantenere la piattaforma MiCA-safe.')}
          </p>
        </header>

        {/* MAIN CARD */}
        <div
          style={{
            padding: '32px',
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: '16px',
          }}
        >
          {/* GRID MERCHANT / CLIENTE */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {/* PER IL MERCHANT */}
            <div>
              <h2
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: COLORS.emerald,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span aria-hidden="true">🏪</span>
                {t('paymentLevel3.merchantTitle', 'Per il Merchant')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel3.merchant1', 'Si affida a un Partner autorizzato (CASP/EMI).')}
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel3.merchant2', 'I clienti pagano sul checkout del Partner.')}
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel3.merchant3', 'Il settlement è gestito dal Partner.')}
                </li>
              </ul>
            </div>

            {/* PER IL CLIENTE */}
            <div>
              <h2
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: COLORS.emerald,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span aria-hidden="true">🛒</span>
                {t('paymentLevel3.clientTitle', 'Per il Cliente')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel3.client1', 'Paga in crypto sul checkout del Partner.')}
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel3.client2', "Riceve l'EGI come sempre.")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE: STABLECOIN VIA PSP PARTNER */}
        <div
          style={{
            marginTop: '32px',
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              width: '100%',
              padding: '20px 24px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: COLORS.white,
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'left',
            }}
            aria-expanded={isExpanded}
            aria-controls="stablecoin-content"
          >
            <span style={{ fontSize: '1.25rem' }} aria-hidden="true">💰</span>
            <span style={{ flex: 1 }}>
              {t('paymentLevel3.stablecoinTitle', 'Pagamenti Stablecoin via PSP Partner – Wallet-to-Wallet Direct')}
            </span>
            <span
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                fontSize: '1.25rem',
              }}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          
          {isExpanded && (
            <div
              id="stablecoin-content"
              style={{
                padding: '0 24px 24px',
                borderTop: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                {t('paymentLevel3.stablecoinIntro', 
                  "L'utente esperto che possiede un wallet Algorand può effettuare acquisti utilizzando stablecoin al posto della valuta FIAT."
                )}
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                {[
                  "L'utente mantiene il controllo esclusivo del proprio wallet (non-custodial).",
                  'Nel form di acquisto seleziona "Pagamento in stablecoin" e inserisce l\'indirizzo del wallet.',
                  "Il mint dell'EGI (ASA univoco) avviene con sender = wallet dell'utente.",
                  "Il pagamento è eseguito direttamente wallet-to-wallet tra l'utente e un Payment Service Provider (PSP) partner della piattaforma, scelto e sottoscritto dall'utente tramite accordo privato.",
                  'FlorenceEGI non gestisce conversioni FIAT↔crypto, non detiene fondi, non partecipa alla transazione in stablecoin e non custodisce chiavi private.',
                  'Le stablecoin accettate devono essere emesse da soggetti conformi MiCA e riconosciuti dalla piattaforma come PSP autorizzati.',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      color: COLORS.textPrimary,
                      lineHeight: 1.6,
                      marginBottom: '10px',
                    }}
                  >
                    <span style={{ color: COLORS.purple }} aria-hidden="true">•</span>
                    {t(`paymentLevel3.stablecoinItem${idx + 1}`, item)}
                  </li>
                ))}
              </ul>
              
              {/* COMPLIANCE BOX */}
              <div
                style={{
                  padding: '20px',
                  background: COLORS.purpleLight,
                  borderLeft: `4px solid ${COLORS.purple}`,
                  borderRadius: '0 12px 12px 0',
                  marginTop: '24px',
                }}
              >
                <h4 style={{ color: COLORS.purple, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ {t('paymentLevel3.complianceTitle', 'Conformità Normativa MiCA-safe')}
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {t('paymentLevel3.complianceDesc', 
                    `In questa modalità FlorenceEGI opera unicamente come infrastruttura di registrazione su blockchain, 
                    senza alcun ruolo finanziario o di intermediazione. La gestione rientra pienamente fuori dal perimetro MiCA, 
                    poiché i pagamenti crypto sono gestiti esclusivamente da PSP partner conformi (CASP/EMI), 
                    con cui l'utente ha un rapporto contrattuale diretto.`
                  )}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default PaymentLevel3;
