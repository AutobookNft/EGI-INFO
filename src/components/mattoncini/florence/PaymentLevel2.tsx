/**
 * Mattoncino: PaymentLevel2 - Livello 2: Ho un wallet, pago in FIAT
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

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

const listItemStyle: React.CSSProperties = {
  marginBottom: '12px',
  paddingLeft: '20px',
  position: 'relative',
  lineHeight: 1.6,
};

const bulletStyle = (color: string): React.CSSProperties => ({
  position: 'absolute',
  left: 0,
  color,
});

const PaymentLevel2: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="level2-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.greenLight, border: `1px solid ${COLORS.greenBorder}`, borderRadius: '50px', color: COLORS.green, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            👛 {t('paymentLevel2.badge', 'Livello 2')}
          </span>
          <h1 id="level2-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Ho un wallet, pago in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            Gli utenti più esperti possono usare il proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm> per ricevere il certificato, senza imporre la cripto come pagamento.
          </p>
        </header>

        {/* MAIN CARD */}
        <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* PER IL CLIENTE */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
                🛒 Per il Cliente
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Paga sempre in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Sceglie dove ricevere l'<GlossaryTerm termId="egi">EGI</GlossaryTerm>: nel <GlossaryTerm termId="wallet">wallet</GlossaryTerm> personale (<GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>) o in uno <GlossaryTerm termId="custodial">custodial</GlossaryTerm> della piattaforma.
                </li>
              </ul>
            </div>

            {/* PER IL MERCHANT */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
                🏪 Per il Merchant
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Incassa sempre in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> viene trasferito con tracciabilità <GlossaryTerm termId="on-chain">on-chain</GlossaryTerm>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE */}
        <div style={{ marginTop: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>🔐</span>
            <span style={{ flex: 1 }}>Gestione Wallet – Modello <GlossaryTerm termId="non-custodial">Non-Custodial</GlossaryTerm> <GlossaryTerm termId="fiat">FIAT</GlossaryTerm></span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                Quando l'utente decide di utilizzare un proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm> Algorand, la gestione passa in modalità <GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.green)}>•</span>L'utente esporta la frase segreta (<GlossaryTerm termId="mnemonic">mnemonic</GlossaryTerm>) e la importa in Pera Wallet o altro client compatibile.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.green)}>•</span>Da quel momento FlorenceEGI non detiene più alcuna chiave privata né può accedere ai suoi asset.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.green)}>•</span>Durante un nuovo acquisto in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>, l'utente inserisce l'indirizzo del proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm>.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.green)}>•</span>Il <GlossaryTerm termId="mint">mint</GlossaryTerm> dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm> (<GlossaryTerm termId="asa">ASA</GlossaryTerm> supply = 1) avviene con sender = wallet dell'utente.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.green)}>•</span>FlorenceEGI paga le micro-fee di rete come fee-payer tecnico.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.green)}>•</span>Nessun fondo in criptovaluta transita tra le parti; il pagamento rimane in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> tramite <GlossaryTerm termId="psp">PSP</GlossaryTerm>.</li>
              </ul>
              
              <div style={{ padding: '20px', background: COLORS.greenLight, borderLeft: `4px solid ${COLORS.green}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h4 style={{ color: COLORS.green, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  FlorenceEGI non svolge funzioni di <GlossaryTerm termId="custodial">custodia</GlossaryTerm>, intermediazione o scambio di asset digitali. Questa modalità è pienamente fuori dal perimetro <GlossaryTerm termId="mica">MiCA</GlossaryTerm>, trattandosi di semplice emissione di NFT unici verso un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> di proprietà dell'utente, con pagamento in valuta tradizionale.
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
