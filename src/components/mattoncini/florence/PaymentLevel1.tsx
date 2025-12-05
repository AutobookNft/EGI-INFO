/**
 * Mattoncino: PaymentLevel1 - Livello 1: Nessun Wallet (100% tradizionale)
 * 
 * Card principale con griglia Cliente/Merchant + sezione collapsible
 * sul wallet auto-generato con custodia tecnica limitata.
 * 
 * Chiave JSON i18n: florence.paymentLevel1
 * Rotta: /info/florence/payment-level-1
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  blue: '#60a5fa',
  blueLight: 'rgba(96, 165, 250, 0.1)',
  blueBorder: 'rgba(96, 165, 250, 0.4)',
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
const PaymentLevel1: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a',
      }}
      aria-labelledby="level1-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: COLORS.blueLight,
              border: `1px solid ${COLORS.blueBorder}`,
              borderRadius: '50px',
              color: COLORS.blue,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
            }}
          >
            💳 {t('paymentLevel1.badge', 'Livello 1')}
          </span>
          
          <h1
            id="level1-title"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.white,
              marginBottom: '16px',
            }}
          >
            {t('paymentLevel1.title', 'Nessun wallet (100% tradizionale)')}
          </h1>
          
          <p style={{
            fontSize: '1.15rem',
            color: COLORS.textSecondary,
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {t('paymentLevel1.subtitle', "L'esperienza d'uso è identica a un normale e-commerce. Zero cripto, zero complessità.")}
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
          {/* GRID CLIENTE / MERCHANT */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
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
                {t('paymentLevel1.clientTitle', 'Per il Cliente')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Paga in euro (<GlossaryTerm termId="fiat">FIAT</GlossaryTerm>) su pagina sicura del <GlossaryTerm termId="psp">PSP</GlossaryTerm>.
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Riceve l'<GlossaryTerm termId="egi">EGI</GlossaryTerm>: la piattaforma esegue <GlossaryTerm termId="mint">mint</GlossaryTerm> e <GlossaryTerm termId="transfer">transfer</GlossaryTerm> e salva l'<GlossaryTerm termId="anchor-hash">anchor hash</GlossaryTerm>.
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Verifica pubblica con QR.
                </li>
              </ul>
            </div>

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
                {t('paymentLevel1.merchantTitle', 'Per il Merchant')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Riceve denaro in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> dal <GlossaryTerm termId="psp">PSP</GlossaryTerm> (<GlossaryTerm termId="payout">payout</GlossaryTerm>).
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Vede l'<GlossaryTerm termId="egi">EGI</GlossaryTerm> emesso e i report.
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  <GlossaryTerm termId="royalties">Royalties</GlossaryTerm> e ripartizioni sono gestite dal <GlossaryTerm termId="psp">PSP</GlossaryTerm> (<GlossaryTerm termId="off-chain">off-chain</GlossaryTerm>).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE: WALLET AUTO-GENERATO */}
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
            aria-controls="wallet-auto-content"
          >
            <span style={{ fontSize: '1.25rem' }} aria-hidden="true">👛</span>
            <span style={{ flex: 1 }}>
              {t('paymentLevel1.walletAutoTitle', 'Wallet Auto-Generato per Utenti FIAT (Custodia Tecnica Limitata)')}
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
              id="wallet-auto-content"
              style={{
                padding: '0 24px 24px',
                borderTop: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                Per gli utenti che acquistano in valuta <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> e non possiedono competenze <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>, FlorenceEGI genera automaticamente un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> dedicato su Algorand.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                <li
                  style={{
                    display: 'flex',
                    gap: '10px',
                    color: COLORS.textPrimary,
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ color: COLORS.blue }} aria-hidden="true">•</span>
                  Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> è creato al momento della registrazione o del primo acquisto.
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '10px',
                    color: COLORS.textPrimary,
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ color: COLORS.blue }} aria-hidden="true">•</span>
                  Contiene esclusivamente NFT unici (<GlossaryTerm termId="egi">EGI</GlossaryTerm>), senza alcun token fungibile o criptovaluta.
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '10px',
                    color: COLORS.textPrimary,
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ color: COLORS.blue }} aria-hidden="true">•</span>
                  Le chiavi private sono cifrate con algoritmo AES-256 a livello server e archiviate in modo sicuro nel database conforme <GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>.
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '10px',
                    color: COLORS.textPrimary,
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ color: COLORS.blue }} aria-hidden="true">•</span>
                  L'utente può in qualunque momento accedere alla propria area personale, scaricare la frase segreta per importarla in Pera Wallet o in altro client compatibile e richiederne la cancellazione definitiva dai sistemi FlorenceEGI.
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '10px',
                    color: COLORS.textPrimary,
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ color: COLORS.blue }} aria-hidden="true">•</span>
                  Finché non effettua questa operazione, il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> rimane invisibile e inattivo per l'utente.
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '10px',
                    color: COLORS.textPrimary,
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ color: COLORS.blue }} aria-hidden="true">•</span>
                  Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> non è utilizzabile per detenere o trasferire <GlossaryTerm termId="algo">ALGO</GlossaryTerm>, <GlossaryTerm termId="stablecoin">stablecoin</GlossaryTerm> o altri asset di valore monetario.
                </li>
              </ul>
              
              {/* COMPLIANCE BOX */}
              <div
                style={{
                  padding: '20px',
                  background: COLORS.blueLight,
                  borderLeft: `4px solid ${COLORS.blue}`,
                  borderRadius: '0 12px 12px 0',
                  marginTop: '24px',
                }}
              >
                <h4 style={{ color: COLORS.blue, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ {t('paymentLevel1.complianceTitle', 'Conformità Normativa MiCA-safe')}
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  FlorenceEGI non esegue operazioni di cambio, non custodisce fondi, né intermedia transazioni tra utenti. 
                  Questa gestione costituisce <GlossaryTerm termId="custodial">custodia</GlossaryTerm> tecnica limitata di asset digitali non finanziari e non configura 
                  attività di <GlossaryTerm termId="casp">CASP</GlossaryTerm> (Crypto-Asset Service Provider) ai sensi del Regolamento <GlossaryTerm termId="mica">MiCA</GlossaryTerm>. La piattaforma opera quindi 
                  fuori dal perimetro <GlossaryTerm termId="mica">MiCA</GlossaryTerm> (<GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>), soggetta esclusivamente agli obblighi di sicurezza informatica e protezione dei 
                  dati personali previsti dal <GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default PaymentLevel1;
