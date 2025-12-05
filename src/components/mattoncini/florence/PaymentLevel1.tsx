/**
 * Mattoncino: PaymentLevel1 - Livello 1: Nessun Wallet (100% tradizionale)
 * Card principale + Collapsible Wallet Auto-Generato
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
  emeraldBorder: 'rgba(16, 185, 129, 0.4)',
  blue: '#3b82f6',
  blueLight: 'rgba(59, 130, 246, 0.1)',
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

const PaymentLevel1: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="level1-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.emeraldLight, border: `1px solid ${COLORS.emeraldBorder}`, borderRadius: '50px', color: COLORS.emerald, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            💳 Livello 1
          </span>
          <h1 id="level1-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Nessun wallet (100% tradizionale)
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            L'esperienza d'uso è identica a un normale e-commerce. Zero cripto, zero complessità.
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
                  <span>Paga in euro (<GlossaryTerm termId="fiat">FIAT</GlossaryTerm>) su pagina sicura del <GlossaryTerm termId="psp">PSP</GlossaryTerm>.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Riceve l'<GlossaryTerm termId="egi">EGI</GlossaryTerm>: la piattaforma esegue <GlossaryTerm termId="mint">mint</GlossaryTerm> e <GlossaryTerm termId="transfer">transfer</GlossaryTerm> e salva l'<GlossaryTerm termId="anchor-hash">anchor hash</GlossaryTerm>.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Verifica pubblica con QR.</span>
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
                  <span>Riceve denaro in <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> dal <GlossaryTerm termId="psp">PSP</GlossaryTerm> (<GlossaryTerm termId="payout">payout</GlossaryTerm>).</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Vede l'<GlossaryTerm termId="egi">EGI</GlossaryTerm> emesso e i report.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span><GlossaryTerm termId="royalties">Royalties</GlossaryTerm> e ripartizioni sono gestite dal <GlossaryTerm termId="psp">PSP</GlossaryTerm> (<GlossaryTerm termId="off-chain">off-chain</GlossaryTerm>).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE - WALLET AUTO-GENERATO */}
        <div style={{ marginTop: '24px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>👛</span>
            <span style={{ flex: 1 }}>Wallet Auto-Generato per Utenti FIAT (Custodia Tecnica Limitata)</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                Per gli utenti che acquistano in valuta <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> e non possiedono competenze blockchain, FlorenceEGI genera automaticamente un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> dedicato su Algorand.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> è creato al momento della registrazione o del primo acquisto.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Contiene esclusivamente NFT unici (<GlossaryTerm termId="egi">EGI</GlossaryTerm>), senza alcun token fungibile o criptovaluta.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Le chiavi private sono cifrate con algoritmo AES-256 a livello server e archiviate in modo sicuro nel database conforme <GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>L'utente può in qualunque momento accedere alla propria area personale, scaricare la frase segreta per importarla in Pera Wallet o in altro client compatibile e richiederne la cancellazione definitiva dai sistemi FlorenceEGI.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Finché non effettua questa operazione, il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> rimane invisibile e inattivo per l'utente.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.emerald }}>•</span>
                  <span>Il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> <strong>non è utilizzabile</strong> per detenere o trasferire ALGO, stablecoin o altri asset di valore monetario.</span>
                </li>
              </ul>
              
              {/* BOX CONFORMITÀ MiCA */}
              <div style={{ padding: '20px', background: COLORS.blueLight, borderLeft: `4px solid ${COLORS.blue}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h4 style={{ color: COLORS.blue, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  FlorenceEGI <strong>non esegue operazioni di cambio</strong>, <strong>non custodisce fondi</strong>, né intermedia transazioni tra utenti. Questa gestione costituisce <strong>custodia tecnica limitata di asset digitali non finanziari</strong> e non configura attività di CASP (Crypto-Asset Service Provider) ai sensi del Regolamento <GlossaryTerm termId="mica">MiCA</GlossaryTerm>. La piattaforma opera quindi <strong>fuori dal perimetro MiCA</strong>, soggetta esclusivamente agli obblighi di sicurezza informatica e protezione dei dati personali previsti dal <GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>.
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
