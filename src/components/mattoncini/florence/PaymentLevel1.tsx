/**
 * Mattoncino: PaymentLevel1 - Livello 1: Nessun Wallet (100% tradizionale)
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

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

const PaymentLevel1: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="level1-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.blueLight, border: `1px solid ${COLORS.blueBorder}`, borderRadius: '50px', color: COLORS.blue, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            💳 {t('paymentLevel1.badge', 'Livello 1')}
          </span>
          <h1 id="level1-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            {t('paymentLevel1.title', 'Nessun wallet (100% tradizionale)')}
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            L'esperienza d'uso è identica a un normale e-commerce. Zero cripto, zero complessità.
          </p>
        </header>

        {/* MAIN CARD */}
        <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* PER IL CLIENTE */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
                🛒 {t('paymentLevel1.clientTitle', 'Per il Cliente')}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Paga in euro (<GlossaryTerm termId="fiat">FIAT</GlossaryTerm>) su pagina sicura del <GlossaryTerm termId="psp">PSP</GlossaryTerm>.
                </li>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Riceve l'<GlossaryTerm termId="egi">EGI</GlossaryTerm>: la piattaforma esegue <GlossaryTerm termId="mint">mint</GlossaryTerm> e <GlossaryTerm termId="transfer">transfer</GlossaryTerm> e salva l'<GlossaryTerm termId="anchor-hash">anchor hash</GlossaryTerm>.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Verifica pubblica con QR.
                </li>
              </ul>
            </div>

            {/* PER IL MERCHANT */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
                🏪 {t('paymentLevel1.merchantTitle', 'Per il Merchant')}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Riceve denaro in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> dal <GlossaryTerm termId="psp">PSP</GlossaryTerm> (<GlossaryTerm termId="payout">payout</GlossaryTerm>).
                </li>
                <li style={listItemStyle}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  Vede l'<GlossaryTerm termId="egi">EGI</GlossaryTerm> emesso e i report.
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={bulletStyle(COLORS.emerald)}>•</span>
                  <GlossaryTerm termId="royalties">Royalties</GlossaryTerm> e ripartizioni gestite dal <GlossaryTerm termId="psp">PSP</GlossaryTerm> (<GlossaryTerm termId="off-chain">off-chain</GlossaryTerm>).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE */}
        <div style={{ marginTop: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>👛</span>
            <span style={{ flex: 1 }}>Wallet Auto-Generato (Custodia Tecnica Limitata)</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                Per gli utenti che acquistano in valuta <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> e non possiedono competenze <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>, FlorenceEGI genera automaticamente un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> dedicato su Algorand.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.blue)}>•</span>Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> è creato al momento della registrazione o del primo acquisto.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.blue)}>•</span>Contiene esclusivamente NFT unici (<GlossaryTerm termId="egi">EGI</GlossaryTerm>), senza token fungibili o criptovaluta.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.blue)}>•</span>Le chiavi private sono cifrate con AES-256 e archiviate in modo sicuro conforme <GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.blue)}>•</span>L'utente può scaricare la frase segreta e importarla in Pera Wallet o richiederne la cancellazione.</li>
                <li style={listItemStyle}><span style={bulletStyle(COLORS.blue)}>•</span>Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> non è utilizzabile per detenere <GlossaryTerm termId="algo">ALGO</GlossaryTerm>, <GlossaryTerm termId="stablecoin">stablecoin</GlossaryTerm> o altri asset monetari.</li>
              </ul>
              
              <div style={{ padding: '20px', background: COLORS.blueLight, borderLeft: `4px solid ${COLORS.blue}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h4 style={{ color: COLORS.blue, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  FlorenceEGI non esegue operazioni di cambio, non custodisce fondi, né intermedia transazioni tra utenti. Questa gestione costituisce <GlossaryTerm termId="custodial">custodia</GlossaryTerm> tecnica limitata di asset digitali non finanziari e non configura attività di <GlossaryTerm termId="casp">CASP</GlossaryTerm> ai sensi del Regolamento <GlossaryTerm termId="mica">MiCA</GlossaryTerm>. La piattaforma opera fuori dal perimetro MiCA, soggetta solo agli obblighi di sicurezza informatica e protezione dati <GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>.
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
