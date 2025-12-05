/**
 * Mattoncino: WalletRedemption - Riscatto Wallet: Trasferimento EGI al Wallet Personale
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  gold: '#d4af37',
  goldLight: 'rgba(212, 175, 55, 0.1)',
  goldBorder: 'rgba(212, 175, 55, 0.4)',
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
  blue: '#3b82f6',
  blueLight: 'rgba(59, 130, 246, 0.1)',
  orange: '#f97316',
  orangeLight: 'rgba(249, 115, 22, 0.1)',
  red: '#ef4444',
  redLight: 'rgba(239, 68, 68, 0.1)',
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
  marginBottom: '12px',
  lineHeight: 1.6,
};

const WalletRedemption: React.FC = () => {
  const { t } = useTranslation('florence');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="wallet-redemption-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.goldLight, border: `1px solid ${COLORS.goldBorder}`, borderRadius: '50px', color: COLORS.gold, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            💎 {t('walletRedemption.badge', 'Riscatto EGI')}
          </span>
          <h1 id="wallet-redemption-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Riscatto <GlossaryTerm termId="wallet">Wallet</GlossaryTerm>: Trasferimento <GlossaryTerm termId="egi">EGI</GlossaryTerm>
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            Trasferisci i tuoi <GlossaryTerm termId="egi">EGI</GlossaryTerm> dal custody virtuale al tuo <GlossaryTerm termId="wallet">wallet</GlossaryTerm> Algorand personale.
          </p>
        </header>

        {/* MAIN CARD - PASSAGGI */}
        <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: COLORS.gold, marginBottom: '24px' }}>
            📋 Passaggi per il Riscatto
          </h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary, counterReset: 'step' }}>
            <li style={{ ...listItemStyle, marginBottom: '16px' }}>
              <span style={{ color: COLORS.gold, fontWeight: 700, minWidth: '24px' }}>1.</span>
              <span>Crea o collega un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> Algorand con <GlossaryTerm termId="opt-in">opt-in</GlossaryTerm> sull'<GlossaryTerm termId="asa">ASA</GlossaryTerm> dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm>.</span>
            </li>
            <li style={{ ...listItemStyle, marginBottom: '16px' }}>
              <span style={{ color: COLORS.gold, fontWeight: 700, minWidth: '24px' }}>2.</span>
              <span>Dalla <GlossaryTerm termId="dashboard">dashboard</GlossaryTerm>, seleziona l'<GlossaryTerm termId="egi">EGI</GlossaryTerm> e clicca su "Riscatta su <GlossaryTerm termId="wallet">wallet</GlossaryTerm>".</span>
            </li>
            <li style={{ ...listItemStyle, marginBottom: '16px' }}>
              <span style={{ color: COLORS.gold, fontWeight: 700, minWidth: '24px' }}>3.</span>
              <span>Conferma l'indirizzo <GlossaryTerm termId="wallet">wallet</GlossaryTerm> (verifica accuratamente!).</span>
            </li>
            <li style={listItemStyle}>
              <span style={{ color: COLORS.gold, fontWeight: 700, minWidth: '24px' }}>4.</span>
              <span>L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> viene trasferito on-chain e diventa di tua proprietà esclusiva.</span>
            </li>
          </ol>
        </div>

        {/* COLLAPSIBLE SECTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* PREREQUISITI */}
          <div style={{ background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
            <button onClick={() => toggleSection('prereq')} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={expandedSection === 'prereq'}>
              <span>📌</span>
              <span style={{ flex: 1 }}>Prerequisiti per il Riscatto</span>
              <span style={{ transform: expandedSection === 'prereq' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
            </button>
            {expandedSection === 'prereq' && (
              <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', color: COLORS.textPrimary }}>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.blue }}>✓</span>
                    <span>Un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> Algorand <GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm> (Pera, Defly, etc.).</span>
                  </li>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.blue }}>✓</span>
                    <span>L'<GlossaryTerm termId="opt-in">opt-in</GlossaryTerm> sull'<GlossaryTerm termId="asa">ASA</GlossaryTerm> dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm> (serve una piccola quantità di <GlossaryTerm termId="algo">ALGO</GlossaryTerm>).</span>
                  </li>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.blue }}>✓</span>
                    <span>La custodia sicura del <GlossaryTerm termId="mnemonic">mnemonic</GlossaryTerm> (24 parole).</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* COSA SUCCEDE */}
          <div style={{ background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
            <button onClick={() => toggleSection('after')} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={expandedSection === 'after'}>
              <span>🔄</span>
              <span style={{ flex: 1 }}>Cosa Succede Dopo il Riscatto</span>
              <span style={{ transform: expandedSection === 'after' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
            </button>
            {expandedSection === 'after' && (
              <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', color: COLORS.textPrimary }}>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.emerald }}>✓</span>
                    <span>L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> è nel tuo <GlossaryTerm termId="wallet">wallet</GlossaryTerm>, visibile su <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>.</span>
                  </li>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.emerald }}>✓</span>
                    <span>Mantieni tutti i benefici (<GlossaryTerm termId="royalties">royalties</GlossaryTerm>, <GlossaryTerm termId="egili">EGILI</GlossaryTerm>, eventi).</span>
                  </li>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.emerald }}>✓</span>
                    <span>Puoi trasferirlo a terzi (wallet-to-wallet).</span>
                  </li>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.emerald }}>✓</span>
                    <span>La piattaforma continua a tracciare proprietà per le <GlossaryTerm termId="royalties">royalties</GlossaryTerm>.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* DIRITTO ALL'OBLIO */}
          <div style={{ background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
            <button onClick={() => toggleSection('gdpr')} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={expandedSection === 'gdpr'}>
              <span>🔒</span>
              <span style={{ flex: 1 }}>Diritto all'Oblio (<GlossaryTerm termId="gdpr">GDPR</GlossaryTerm>)</span>
              <span style={{ transform: expandedSection === 'gdpr' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
            </button>
            {expandedSection === 'gdpr' && (
              <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
                <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginTop: '20px' }}>
                  L'utente può richiedere la cancellazione dei propri dati personali dal database FlorenceEGI.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0', color: COLORS.textPrimary }}>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.orange }}>•</span>
                    <span>La registrazione su <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm> (hash, ID <GlossaryTerm termId="asa">ASA</GlossaryTerm>) rimane immutabile.</span>
                  </li>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.orange }}>•</span>
                    <span>I dati anagrafici e sensibili vengono cancellati.</span>
                  </li>
                  <li style={listItemStyle}>
                    <span style={{ color: COLORS.orange }}>•</span>
                    <span>L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> riscattato rimane nel <GlossaryTerm termId="wallet">wallet</GlossaryTerm> dell'utente, ma non più associato a un profilo.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* AVVERTENZE */}
          <div style={{ background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
            <button onClick={() => toggleSection('warnings')} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={expandedSection === 'warnings'}>
              <span>⚠️</span>
              <span style={{ flex: 1 }}>Avvertenze Importanti</span>
              <span style={{ transform: expandedSection === 'warnings' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
            </button>
            {expandedSection === 'warnings' && (
              <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
                <div style={{ padding: '20px', background: COLORS.redLight, borderLeft: `4px solid ${COLORS.red}`, borderRadius: '0 12px 12px 0', marginTop: '20px' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                    <li style={listItemStyle}>
                      <span style={{ color: COLORS.red }}>⚠️</span>
                      <span>Il trasferimento è IRREVERSIBILE.</span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={{ color: COLORS.red }}>⚠️</span>
                      <span>Se perdi il <GlossaryTerm termId="mnemonic">mnemonic</GlossaryTerm>, perdi l'<GlossaryTerm termId="egi">EGI</GlossaryTerm>.</span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={{ color: COLORS.red }}>⚠️</span>
                      <span>FlorenceEGI NON può recuperare asset da <GlossaryTerm termId="wallet">wallet</GlossaryTerm> <GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>.</span>
                    </li>
                    <li style={{ ...listItemStyle, marginBottom: 0 }}>
                      <span style={{ color: COLORS.red }}>⚠️</span>
                      <span>Verifica TRE VOLTE l'indirizzo prima di confermare.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletRedemption;
