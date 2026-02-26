/**
 * Mattoncino: Cos'è FlorenceEGI (What We Do)
 * 
 * Spiega cosa fa FlorenceEGI: blockchain + AI invisibile
 * 
 * Chiave JSON: florence.hero.whatWeDo
 * Rotta test: /info/florence/what-we-do
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const GOLD = '#d4af37';
const GREEN = '#4ade80';
const PURPLE = '#a855f7';

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation('florence');

  const cardStyle: React.CSSProperties = {
    background: 'rgba(74, 222, 128, 0.08)',
    border: '1px solid rgba(74, 222, 128, 0.25)',
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'center' as const
  };

  return (
    <section 
      style={{
        minHeight: '100vh',
        padding: '80px 20px',
        background: '#0a0a0a'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: 'rgba(168, 85, 247, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            borderRadius: '50px',
            color: PURPLE,
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '24px'
          }}>
            🔮 Tecnologia Invisibile
          </span>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            Cos'è <span style={{ color: GOLD }}>FlorenceEGI</span>?
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            La complessità della tecnologia resa invisibile
          </p>
        </div>

        {/* Contenuto principale */}
        <div style={{
          background: 'rgba(30, 30, 40, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '50px',
          marginBottom: '50px'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.9,
            marginBottom: '28px'
          }}>
            Siamo i primi al mondo ad aver fuso{' '}
            <GlossaryTerm termId="blockchain">{t('whatWeDo.chainLabel')}</GlossaryTerm> e{' '}
            <GlossaryTerm termId="natan">{t('whatWeDo.aiLabel')}</GlossaryTerm> in un 
            sistema così semplice che chiunque può usarlo.
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.9,
            marginBottom: '28px'
          }}>
            Dietro c'è <GlossaryTerm termId="algorand">{t('whatWeDo.algorandLabel')}</GlossaryTerm> (la blockchain 
            a zero emissioni CO₂ usata dalla SIAE per i diritti d'autore),{' '}
            <GlossaryTerm termId="natan">{t('whatWeDo.natanLabel')}</GlossaryTerm> che ti suggerisce prezzi 
            e descrizioni analizzando il mercato reale,{' '}
            <GlossaryTerm termId="smart-contract">smart contract</GlossaryTerm> automatici 
            per le <GlossaryTerm termId="royalty-piattaforma">royalty perpetue</GlossaryTerm>.
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.9
          }}>
            Ma tu non vedi nulla di tutto questo: carichi un'opera come su Instagram, 
            clicchi <span style={{ color: GOLD, fontWeight: 700 }}>EGIZZA</span>, e in 5 secondi hai un{' '}
            <GlossaryTerm termId="coa">certificato blockchain</GlossaryTerm> riconosciuto 
            dalla legge italiana come prova di paternità.
          </p>
        </div>

        {/* Zero Complessità - 3 cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          <div style={cardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚫</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: GREEN, marginBottom: '12px' }}>
              Zero Wallet Crypto
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
              Niente <GlossaryTerm termId="wallet">wallet</GlossaryTerm> da configurare, 
              nessuna app esterna da installare
            </p>
          </div>
          
          <div style={cardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔐</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: GREEN, marginBottom: '12px' }}>
              Zero Seed Phrase
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
              Nessuna <GlossaryTerm termId="seed-phrase">seed phrase</GlossaryTerm> da 
              scrivere o ricordare per sempre
            </p>
          </div>
          
          <div style={cardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💰</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: GREEN, marginBottom: '12px' }}>
              Zero Gas Fee
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
              Niente <GlossaryTerm termId="gas-fee">gas fee</GlossaryTerm> incomprensibili, 
              paghi solo sul venduto
            </p>
          </div>
        </div>

        {/* Sotto il cofano */}
        <div style={{
          background: `linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)`,
          border: `1px solid rgba(212, 175, 55, 0.3)`,
          borderRadius: '24px',
          padding: '40px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '1.75rem' }}>⚙️</span>
            Sotto il cofano
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {[
              { term: 'algorand', text: 'Algorand', desc: 'Blockchain carbon-negative' },
              { term: 'natan', text: 'NATAN', desc: 'AI per valutazione e suggerimenti' },
              { term: 'smart-contract', text: 'Smart Contract', desc: 'Royalty automatiche per sempre' },
              { term: 'ipfs', text: 'IPFS', desc: 'Storage decentralizzato permanente' },
              { term: 'gdpr', text: 'GDPR', desc: 'by design - Privacy garantita' },
              { term: 'mica', text: 'MiCA', desc: '-safe - Compliance normativa' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: GOLD, fontSize: '1.25rem' }}>✓</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem' }}>
                  <GlossaryTerm termId={item.term}>{item.text}</GlossaryTerm>
                  {' - '}{item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
