/**
 * Mattoncino: WalletRedemption - Riscatto Wallet: Trasferimento EGI al Wallet Personale
 * Include formula costo ALGO, flusso operativo, politica zero-profitto
 */

import React, { useState } from 'react';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  gold: '#d4af37',
  goldLight: 'rgba(212, 175, 55, 0.1)',
  goldBorder: 'rgba(212, 175, 55, 0.4)',
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
  blue: '#3b82f6',
  blueLight: 'rgba(59, 130, 246, 0.1)',

  amber: '#f59e0b',
  amberLight: 'rgba(245, 158, 11, 0.1)',
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

const WalletRedemption: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="redemption-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.goldLight, border: `1px solid ${COLORS.goldBorder}`, borderRadius: '50px', color: COLORS.gold, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            💎 Riscatto EGI
          </span>
          <h1 id="redemption-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Riscatto Wallet — Trasferimento <GlossaryTerm termId="egi">EGI</GlossaryTerm> al Wallet Personale
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '800px', margin: '0 auto' }}>
            L'utente che desidera ottenere la <strong>piena proprietà</strong> dei propri <GlossaryTerm termId="egi">EGI</GlossaryTerm> può richiedere il <strong>riscatto del wallet</strong>. Questa operazione trasferisce gli <GlossaryTerm termId="asa">ASA</GlossaryTerm> (Algorand Standard Asset) dal <GlossaryTerm termId="wallet">wallet</GlossaryTerm> <GlossaryTerm termId="custodial">custodiale</GlossaryTerm> della piattaforma al wallet personale dell'utente, consegnandogli contestualmente la <GlossaryTerm termId="mnemonic">frase segreta (seed phrase)</GlossaryTerm>.
          </p>
        </header>

        {/* COLLAPSIBLE - DETTAGLIO RISCATTO */}
        <div style={{ background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>🔓</span>
            <span style={{ flex: 1 }}>Riscatto Wallet — Dettaglio Completo</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>

          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>

              {/* PERCHÉ È RICHIESTO UN PAGAMENTO */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '24px', marginBottom: '12px', fontSize: '1.05rem' }}>
                Perché è richiesto un pagamento?
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                La <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm> Algorand richiede che ogni <GlossaryTerm termId="wallet">wallet</GlossaryTerm> che intende ricevere un <GlossaryTerm termId="asa">ASA</GlossaryTerm> effettui preventivamente un'operazione chiamata <strong><GlossaryTerm termId="opt-in">opt-in</GlossaryTerm></strong>. Questa operazione blocca temporaneamente <strong>0,1 <GlossaryTerm termId="algo">ALGO</GlossaryTerm></strong> per ogni ASA che il wallet intende detenere. Tale importo non viene speso ma resta vincolato come requisito di bilancio minimo imposto dal protocollo Algorand, e viene liberato qualora l'utente decida in futuro di rimuovere l'ASA dal proprio wallet (operazione di <strong>opt-out</strong>).
              </p>

              {/* FORMULA DI CALCOLO */}
              <div style={{ padding: '20px', background: COLORS.amberLight, borderLeft: `4px solid ${COLORS.amber}`, borderRadius: '0 12px 12px 0', marginTop: '20px' }}>
                <h5 style={{ color: COLORS.amber, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  📊 Formula di calcolo del costo
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  Il costo totale del riscatto è determinato dalla seguente formula:
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '1rem', color: COLORS.amber, fontWeight: 700, marginBottom: '12px', padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                  Costo = (N × 0,1 ALGO) + 0,1 ALGO + fee di rete
                </p>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  Dove <strong>N</strong> è il numero di <GlossaryTerm termId="egi">EGI</GlossaryTerm> posseduti dall'utente. Il secondo addendo (0,1 ALGO) rappresenta il bilancio minimo richiesto per mantenere attivo l'account Algorand, mentre le fee di rete coprono le transazioni di opt-in e trasferimento (circa 0,001 ALGO ciascuna).
                </p>
              </div>

              {/* ESEMPIO PRATICO */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '28px', marginBottom: '12px', fontSize: '1.05rem' }}>
                Esempio pratico
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                Un utente che possiede <strong>50 EGI</strong> dovrà sostenere un costo di circa:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span>50 × 0,1 ALGO = <strong>5 ALGO</strong> (per gli opt-in)</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span>0,1 ALGO (bilancio minimo account)</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span>~0,1 ALGO (fee di rete per ~100 transazioni)</span></li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={{ color: COLORS.gold }}>•</span><span><strong>Totale: ~5,2 ALGO</strong></span></li>
              </ul>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7 }}>
                Il costo effettivo in euro dipende dal valore di mercato di ALGO al momento del riscatto. L'importo in <GlossaryTerm termId="egili">EGILI</GlossaryTerm> viene calcolato al tasso di conversione vigente al momento della richiesta.
              </p>

              {/* FLUSSO OPERATIVO */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '28px', marginBottom: '12px', fontSize: '1.05rem' }}>
                Flusso operativo del riscatto
              </h4>
              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>1.</span><span><strong>Richiesta:</strong> L'utente avvia la procedura di riscatto dalla propria <GlossaryTerm termId="dashboard">dashboard</GlossaryTerm> e visualizza il costo calcolato.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>2.</span><span><strong>Pagamento:</strong> L'importo in <GlossaryTerm termId="egili">EGILI</GlossaryTerm> viene scalato dal saldo dell'utente.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>3.</span><span><strong>Funding:</strong> La piattaforma trasferisce gli <GlossaryTerm termId="algo">ALGO</GlossaryTerm> necessari dal <GlossaryTerm termId="treasury">Treasury</GlossaryTerm> al <GlossaryTerm termId="wallet">wallet</GlossaryTerm> dell'utente.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>4.</span><span><strong>Opt-in automatico:</strong> Il sistema esegue automaticamente l'<GlossaryTerm termId="opt-in">opt-in</GlossaryTerm> per ogni <GlossaryTerm termId="asa">ASA</GlossaryTerm> di proprietà dell'utente, firmando le transazioni con la chiave privata ancora in custodia.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>5.</span><span><strong>Trasferimento ASA:</strong> Gli <GlossaryTerm termId="egi">EGI</GlossaryTerm> vengono trasferiti dal Treasury al <GlossaryTerm termId="wallet">wallet</GlossaryTerm> personale dell'utente.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>6.</span><span><strong>Consegna seed phrase:</strong> L'utente visualizza la propria <GlossaryTerm termId="mnemonic">frase segreta</GlossaryTerm> (25 parole) e conferma di averla salvata in modo sicuro.</span></li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={{ color: COLORS.gold, fontWeight: 700 }}>7.</span><span><strong>Cancellazione:</strong> La frase segreta cifrata viene <strong>eliminata definitivamente</strong> dal database di FlorenceEGI.</span></li>
              </ol>

              {/* BOX POLITICA ZERO-PROFITTO */}
              <div style={{ padding: '20px', background: COLORS.blueLight, borderLeft: `4px solid ${COLORS.blue}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h5 style={{ color: COLORS.blue, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  💰 Politica Zero-Profitto
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  FlorenceEGI <strong>non applica alcun margine o commissione</strong> sull'operazione di riscatto. Il costo addebitato all'utente copre esclusivamente le spese imposte dalla <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm> Algorand (requisiti di bilancio minimo e fee di transazione). Questa politica è coerente con la missione della piattaforma di facilitare l'accesso alla certificazione digitale senza barriere economiche aggiuntive.
                </p>
              </div>

              {/* BOX DOPO IL RISCATTO */}
              <div style={{ padding: '20px', background: COLORS.emeraldLight, borderLeft: `4px solid ${COLORS.emerald}`, borderRadius: '0 12px 12px 0', marginTop: '16px' }}>
                <h5 style={{ color: COLORS.emerald, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  ✅ Dopo il riscatto
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Una volta completato il riscatto, il <GlossaryTerm termId="wallet">wallet</GlossaryTerm> diventa <strong>completamente <GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm></strong>. L'utente è l'unico detentore delle chiavi private e può gestire i propri <GlossaryTerm termId="egi">EGI</GlossaryTerm> tramite qualsiasi client Algorand compatibile (Pera Wallet, Defly, etc.). FlorenceEGI non ha più alcun controllo né visibilità sugli asset trasferiti, se non per quanto riguarda la registrazione storica delle transazioni sulla <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm> pubblica.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletRedemption;
