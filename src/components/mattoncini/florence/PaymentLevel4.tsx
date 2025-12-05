/**
 * Mattoncino: PaymentLevel4 - Livello 4: Pagamento con EGILI (Token Interno)
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  gold: '#d4af37',
  goldLight: 'rgba(212, 175, 55, 0.1)',
  goldBorder: 'rgba(212, 175, 55, 0.4)',
  orange: '#f97316',
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

const PaymentLevel4: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="level4-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.goldLight, border: `1px solid ${COLORS.goldBorder}`, borderRadius: '50px', color: COLORS.gold, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            🪙 {t('paymentLevel4.badge', 'Livello 4')}
          </span>
          <h1 id="level4-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Pagamento con <GlossaryTerm termId="egili">EGILI</GlossaryTerm> (Token Interno)
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            Gli <GlossaryTerm termId="egili">EGILI</GlossaryTerm> sono crediti interni convertiti 1:1 in <GlossaryTerm termId="egi">EGI</GlossaryTerm>. Non sono crypto e non hanno valore di mercato.
          </p>
        </header>

        {/* MAIN CARD */}
        <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* COSA SONO */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.gold, marginBottom: '16px' }}>
                🔸 Cosa sono gli EGILI
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.gold)}>•</span>
                  Crediti interni convertiti 1:1 in <GlossaryTerm termId="egi">EGI</GlossaryTerm>.
                </li>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.gold)}>•</span>
                  Utilizzabili solo per acquisti nel marketplace.
                </li>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.gold)}>•</span>
                  Non trasferibili né rimborsabili.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.gold)}>•</span>
                  Non sono criptovalute.
                </li>
              </ul>
            </div>

            {/* COME USARLI */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.gold, marginBottom: '16px' }}>
                💳 Come Usarli
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.gold)}>•</span>
                  Seleziona "Usa <GlossaryTerm termId="egili">EGILI</GlossaryTerm>" nel checkout.
                </li>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.gold)}>•</span>
                  Nessun <GlossaryTerm termId="wallet">wallet</GlossaryTerm> esterno richiesto.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.gold)}>•</span>
                  Il <GlossaryTerm termId="mint">mint</GlossaryTerm> dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm> avviene automaticamente.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE */}
        <div style={{ marginTop: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>🪙</span>
            <span style={{ flex: 1 }}>Pagamento con <GlossaryTerm termId="egili">EGILI</GlossaryTerm> (token interno) - Dettaglio Tecnico</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                L'utente può acquistare <GlossaryTerm termId="egi">EGI</GlossaryTerm> utilizzando i crediti interni "<GlossaryTerm termId="egili">EGILI</GlossaryTerm>". Questi crediti sono denominati in euro ma non rappresentano moneta elettronica né crypto asset.
              </p>
              
              <div style={{ padding: '20px', background: COLORS.goldLight, borderLeft: `4px solid ${COLORS.gold}`, borderRadius: '0 12px 12px 0', marginTop: '20px' }}>
                <h4 style={{ color: COLORS.gold, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  📖 Natura degli <GlossaryTerm termId="egili">EGILI</GlossaryTerm>
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary, fontSize: '0.9rem' }}>
                  <li style={listItemStyle}><span style={bulletStyle(COLORS.gold)}>•</span>Acquistabili via <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>, oppure ottenuti da loyalty program, referral, voucher, etc.</li>
                  <li style={listItemStyle}><span style={bulletStyle(COLORS.gold)}>•</span>Convertibili 1:1 in <GlossaryTerm termId="egi">EGI</GlossaryTerm> (es. 10 <GlossaryTerm termId="egili">EGILI</GlossaryTerm> → 1 <GlossaryTerm termId="egi">EGI</GlossaryTerm> da 10€).</li>
                  <li style={listItemStyle}><span style={bulletStyle(COLORS.gold)}>•</span>Non cedibili né riscattabili in denaro.</li>
                  <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={bulletStyle(COLORS.gold)}>•</span>Utilizzabili esclusivamente per acquisti sul marketplace EGI.</li>
                </ul>
              </div>
              
              <h4 style={{ color: COLORS.gold, fontWeight: 700, margin: '28px 0 16px', fontSize: '1rem' }}>
                🔄 Processo di Acquisto con EGILI
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.gold)}>1.</span>L'utente seleziona "Acquista con <GlossaryTerm termId="egili">EGILI</GlossaryTerm>" nel form d'ordine.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.gold)}>2.</span>Il sistema verifica il saldo disponibile dell'utente.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.gold)}>3.</span>L'importo viene scalato dal conto interno.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.gold)}>4.</span>L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> viene mintato e associato all'utente.</li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={bulletStyle(COLORS.gold)}>5.</span>L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> viene aggiunto all'inventario virtuale dell'account.</li>
              </ul>
              
              <div style={{ padding: '20px', background: 'rgba(16, 185, 129, 0.1)', borderLeft: `4px solid ${COLORS.emerald}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h4 style={{ color: COLORS.emerald, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary, fontSize: '0.9rem' }}>
                  <li style={listItemStyle}><span style={bulletStyle(COLORS.emerald)}>•</span>Gli <GlossaryTerm termId="egili">EGILI</GlossaryTerm> non sono moneta elettronica (<GlossaryTerm termId="emi">EMI</GlossaryTerm>).</li>
                  <li style={listItemStyle}><span style={bulletStyle(COLORS.emerald)}>•</span>Non sono token regolamentati (<GlossaryTerm termId="casp">CASP</GlossaryTerm>).</li>
                  <li style={listItemStyle}><span style={bulletStyle(COLORS.emerald)}>•</span>Sono crediti interni non trasferibili, simili ai "buoni spesa" o "gift card".</li>
                  <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={bulletStyle(COLORS.emerald)}>•</span>L'utente ottiene <GlossaryTerm termId="egi">EGI</GlossaryTerm> come prodotto finale, senza transitare da strumenti finanziari.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentLevel4;
