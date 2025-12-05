/**
 * Mattoncino: PaymentLevel2 - Livello 2: Ho un wallet, pago in FIAT
 * Card principale + Collapsible Gestione Wallet Non-Custodial FIAT
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
  emeraldBorder: 'rgba(16, 185, 129, 0.4)',
  green: '#22c55e',
  greenLight: 'rgba(34, 197, 94, 0.1)',
  white: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  cardBg: 'rgba(255, 255, 255, 0.03)',
  cardBorder: 'rgba(255, 255, 255, 0.1)',
} as const;

const listItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  marginBottom: '10px',
  lineHeight: 1.6,
};

const PaymentLevel2: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="level2-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.emeraldLight, border: `1px solid ${COLORS.emeraldBorder}`, borderRadius: '50px', color: COLORS.emerald, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            👛 Livello 2
          </span>
          <h1 id="level2-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Ho un wallet, pago in FIAT
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            Gli utenti più esperti possono usare il proprio wallet per ricevere il certificato, senza imporre la cripto come pagamento.
          </p>
        </header>

        {/* MAIN CARD - GRIGLIA CLIENTE/MERCHANT */}
        <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* PER IL CLIENTE */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
                🛒 Per il Cliente
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Paga sempre in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Sceglie dove ricevere l'<GlossaryTerm termId="egi">EGI</GlossaryTerm>: nel <GlossaryTerm termId="wallet">wallet</GlossaryTerm> personale (<GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>) o in uno <GlossaryTerm termId="custodial">custodial</GlossaryTerm> della piattaforma.</span>
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
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Incassa sempre in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> viene trasferito con tracciabilità <GlossaryTerm termId="on-chain">on-chain</GlossaryTerm>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE - GESTIONE WALLET NON-CUSTODIAL FIAT */}
        <div style={{ marginTop: '24px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>🔑</span>
            <span style={{ flex: 1 }}>Gestione Wallet Utenti Livello 2 – Modello Non-Custodial FIAT</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                Quando l'utente decide di utilizzare un proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm> Algorand, la gestione passa in modalità <GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>L'utente esporta la frase segreta dal <GlossaryTerm termId="wallet">wallet</GlossaryTerm> generato in precedenza, la importa in Pera Wallet (o altro client compatibile) e richiede la cancellazione definitiva dal database FlorenceEGI.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Da quel momento FlorenceEGI <strong>non detiene più alcuna chiave privata</strong> né può accedere ai suoi asset.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Durante un nuovo acquisto in valuta <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>, l'utente inserisce l'indirizzo del proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm>.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Il <GlossaryTerm termId="mint">mint</GlossaryTerm> dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm> (<GlossaryTerm termId="asa">ASA</GlossaryTerm> supply = 1) viene eseguito direttamente con <strong>sender = wallet dell'utente</strong>, senza alcuna transazione di trasferimento successiva.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>FlorenceEGI paga le micro-fee di rete come <strong>fee-payer tecnico</strong>.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span><strong>Nessun fondo in criptovaluta</strong> transita tra le parti; il pagamento rimane interamente in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> tramite <GlossaryTerm termId="psp">PSP</GlossaryTerm>.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> appartiene e resta sotto il <strong>controllo esclusivo dell'utente</strong>.</span>
                </li>
              </ul>
              
              {/* BOX CONFORMITÀ MiCA */}
              <div style={{ padding: '20px', background: COLORS.greenLight, borderLeft: `4px solid ${COLORS.green}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h4 style={{ color: COLORS.green, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  FlorenceEGI <strong>non svolge funzioni di custodia, intermediazione o scambio</strong> di asset digitali. Questa modalità è <strong>pienamente fuori dal perimetro <GlossaryTerm termId="mica">MiCA</GlossaryTerm></strong>, trattandosi di semplice <strong>emissione di NFT unici</strong> verso un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> di proprietà dell'utente, con pagamento in valuta tradizionale.
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
