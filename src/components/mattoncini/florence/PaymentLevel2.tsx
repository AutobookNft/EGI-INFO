/**
 * Mattoncino: PaymentLevel2 - Livello 2: Ho un wallet, pago in FIAT
 * 
 * Card principale con griglia Cliente/Merchant + sezione collapsible
 * sulla gestione wallet non-custodial FIAT.
 * 
 * Chiave JSON i18n: florence.paymentLevel2
 * Rotta: /info/florence/payment-level-2
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  green: '#4ade80',
  greenLight: 'rgba(74, 222, 128, 0.1)',
  greenBorder: 'rgba(74, 222, 128, 0.4)',
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
const PaymentLevel2: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a',
      }}
      aria-labelledby="level2-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: COLORS.greenLight,
              border: `1px solid ${COLORS.greenBorder}`,
              borderRadius: '50px',
              color: COLORS.green,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
            }}
          >
            👛 {t('paymentLevel2.badge', 'Livello 2')}
          </span>
          
          <h1
            id="level2-title"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.white,
              marginBottom: '16px',
            }}
          >
            {t('paymentLevel2.title', 'Ho un wallet, pago in FIAT')}
          </h1>
          
          <p style={{
            fontSize: '1.15rem',
            color: COLORS.textSecondary,
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            Gli utenti più esperti possono usare il proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm> per ricevere il certificato, senza imporre la cripto come pagamento.
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
                {t('paymentLevel2.clientTitle', 'Per il Cliente')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Paga sempre in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>.
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Sceglie dove ricevere l'<GlossaryTerm termId="egi">EGI</GlossaryTerm>: nel <GlossaryTerm termId="wallet">wallet</GlossaryTerm> personale (<GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>) o in uno <GlossaryTerm termId="custodial">custodial</GlossaryTerm> della piattaforma.
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
                {t('paymentLevel2.merchantTitle', 'Per il Merchant')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  Incassa sempre in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>.
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> viene trasferito con tracciabilità <GlossaryTerm termId="on-chain">on-chain</GlossaryTerm>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE: GESTIONE WALLET NON-CUSTODIAL */}
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
            aria-controls="wallet-noncustodial-content"
          >
            <span style={{ fontSize: '1.25rem' }} aria-hidden="true">🔐</span>
            <span style={{ flex: 1 }}>
              {t('paymentLevel2.nonCustodialTitle', 'Gestione Wallet Utenti Livello 2 – Modello Non-Custodial FIAT')}
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
              id="wallet-noncustodial-content"
              style={{
                padding: '0 24px 24px',
                borderTop: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                Quando l'utente decide di utilizzare un proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm> Algorand, la gestione passa in modalità <GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>.
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
                  <span style={{ color: COLORS.green }} aria-hidden="true">•</span>
                  L'utente esporta la frase segreta (<GlossaryTerm termId="mnemonic">mnemonic</GlossaryTerm>) dal <GlossaryTerm termId="wallet">wallet</GlossaryTerm> generato in precedenza, la importa in Pera Wallet (o altro client compatibile) e richiede la cancellazione definitiva dal database FlorenceEGI.
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
                  <span style={{ color: COLORS.green }} aria-hidden="true">•</span>
                  Da quel momento FlorenceEGI non detiene più alcuna chiave privata né può accedere ai suoi asset.
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
                  <span style={{ color: COLORS.green }} aria-hidden="true">•</span>
                  Durante un nuovo acquisto in valuta <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>, l'utente inserisce l'indirizzo del proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm>.
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
                  <span style={{ color: COLORS.green }} aria-hidden="true">•</span>
                  Il <GlossaryTerm termId="mint">mint</GlossaryTerm> dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm> (<GlossaryTerm termId="asa">ASA</GlossaryTerm> supply = 1) viene eseguito direttamente con sender = <GlossaryTerm termId="wallet">wallet</GlossaryTerm> dell'utente, senza alcuna transazione di trasferimento successiva.
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
                  <span style={{ color: COLORS.green }} aria-hidden="true">•</span>
                  FlorenceEGI paga le micro-fee di rete come fee-payer tecnico.
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
                  <span style={{ color: COLORS.green }} aria-hidden="true">•</span>
                  Nessun fondo in criptovaluta transita tra le parti; il pagamento rimane interamente in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> tramite <GlossaryTerm termId="psp">PSP</GlossaryTerm>.
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
                  <span style={{ color: COLORS.green }} aria-hidden="true">•</span>
                  Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> appartiene e resta sotto il controllo esclusivo dell'utente.
                </li>
              </ul>
              
              {/* COMPLIANCE BOX */}
              <div
                style={{
                  padding: '20px',
                  background: COLORS.greenLight,
                  borderLeft: `4px solid ${COLORS.green}`,
                  borderRadius: '0 12px 12px 0',
                  marginTop: '24px',
                }}
              >
                <h4 style={{ color: COLORS.green, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ {t('paymentLevel2.complianceTitle', 'Conformità Normativa MiCA-safe')}
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  FlorenceEGI non svolge funzioni di <GlossaryTerm termId="custodial">custodia</GlossaryTerm>, intermediazione o scambio di asset digitali. 
                  Questa modalità è pienamente fuori dal perimetro <GlossaryTerm termId="mica">MiCA</GlossaryTerm> (<GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>), trattandosi di semplice emissione di NFT unici 
                  verso un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> di proprietà dell'utente, con pagamento in valuta tradizionale.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default PaymentLevel2;
