/**
 * Mattoncino: PaymentLevel3 - Livello 3: Accetto pagamenti Crypto (opzionale)
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

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

const PaymentLevel3: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="level3-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.purpleLight, border: `1px solid ${COLORS.purpleBorder}`, borderRadius: '50px', color: COLORS.purple, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            ₿ {t('paymentLevel3.badge', 'Livello 3')}
          </span>
          <h1 id="level3-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Accetto pagamenti Crypto (opzionale)
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            Questo livello è facoltativo e gestito da partner esterni per mantenere la piattaforma <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>.
          </p>
        </header>

        {/* MAIN CARD */}
        <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* PER IL MERCHANT */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
                🏪 Per il Merchant
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Si affida a un <GlossaryTerm termId="partner-autorizzato">Partner autorizzato</GlossaryTerm> (<GlossaryTerm termId="casp">CASP</GlossaryTerm>/<GlossaryTerm termId="emi">EMI</GlossaryTerm>).
                </li>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  I clienti pagano sul checkout del Partner.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Il <GlossaryTerm termId="settlement">settlement</GlossaryTerm> è gestito dal Partner.
                </li>
              </ul>
            </div>

            {/* PER IL CLIENTE */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
                🛒 Per il Cliente
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Paga in crypto sul checkout del Partner.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Riceve l'<GlossaryTerm termId="egi">EGI</GlossaryTerm> come sempre.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE */}
        <div style={{ marginTop: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>💰</span>
            <span style={{ flex: 1 }}>Pagamenti <GlossaryTerm termId="stablecoin">Stablecoin</GlossaryTerm> via <GlossaryTerm termId="psp">PSP</GlossaryTerm> Partner – Wallet-to-Wallet</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                L'utente esperto che possiede un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> Algorand può effettuare acquisti utilizzando <GlossaryTerm termId="stablecoin">stablecoin</GlossaryTerm> al posto della valuta <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.purple)}>•</span>L'utente mantiene il controllo esclusivo del proprio <GlossaryTerm termId="wallet">wallet</GlossaryTerm> (<GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>).</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.purple)}>•</span>Nel form di acquisto seleziona "Pagamento in <GlossaryTerm termId="stablecoin">stablecoin</GlossaryTerm>" e inserisce l'indirizzo <GlossaryTerm termId="wallet">wallet</GlossaryTerm>.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.purple)}>•</span>Il <GlossaryTerm termId="mint">mint</GlossaryTerm> dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm> (<GlossaryTerm termId="asa">ASA</GlossaryTerm> univoco) avviene con sender = wallet utente.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.purple)}>•</span>Il pagamento è eseguito wallet-to-wallet tra utente e <GlossaryTerm termId="psp">PSP</GlossaryTerm> partner.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.purple)}>•</span>FlorenceEGI non gestisce conversioni <GlossaryTerm termId="fiat">FIAT</GlossaryTerm>↔crypto, non detiene fondi, non custodisce chiavi.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.purple)}>•</span>Le <GlossaryTerm termId="stablecoin">stablecoin</GlossaryTerm> accettate devono essere emesse da soggetti conformi <GlossaryTerm termId="mica">MiCA</GlossaryTerm>.</li>
              </ul>
              
              <div style={{ padding: '20px', background: COLORS.purpleLight, borderLeft: `4px solid ${COLORS.purple}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h4 style={{ color: COLORS.purple, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  In questa modalità FlorenceEGI opera unicamente come infrastruttura di registrazione su <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>, senza alcun ruolo finanziario o di intermediazione. La gestione rientra fuori dal perimetro <GlossaryTerm termId="mica">MiCA</GlossaryTerm>, poiché i pagamenti crypto sono gestiti esclusivamente da <GlossaryTerm termId="psp">PSP</GlossaryTerm> partner conformi (<GlossaryTerm termId="casp">CASP</GlossaryTerm>/<GlossaryTerm termId="emi">EMI</GlossaryTerm>).
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
