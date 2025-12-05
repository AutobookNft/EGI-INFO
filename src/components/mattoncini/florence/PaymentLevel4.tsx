/**
 * Mattoncino: PaymentLevel4 - Livello 4: Pagamento con EGILI (Token Interno)
 * Card principale Buyer/Creator + Collapsible Flusso Completo EGILI
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

const PaymentLevel4: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="level4-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.goldLight, border: `1px solid ${COLORS.goldBorder}`, borderRadius: '50px', color: COLORS.gold, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            ⭐ Livello 4
          </span>
          <h1 id="level4-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Pagamento con <GlossaryTerm termId="egili">EGILI</GlossaryTerm> (Token Interno)
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            Un sistema di ricompensa interno che premia l'attività meritevole sulla piattaforma. I Creator possono accettare <GlossaryTerm termId="egili">EGILI</GlossaryTerm> come forma di pagamento per i propri <GlossaryTerm termId="egi">EGI</GlossaryTerm>.
          </p>
        </header>

        {/* MAIN CARD - GRIGLIA BUYER/CREATOR */}
        <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* PER IL BUYER */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.gold, marginBottom: '16px' }}>
                🛒 Per il Buyer
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span>Accumula <GlossaryTerm termId="egili">EGILI</GlossaryTerm> attraverso attività meritevoli (vendite, referral, partecipazione community).</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span>Al checkout vede l'opzione "Paga con EGILI" (solo se abilitata dal Creator).</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span>Il sistema verifica il saldo: se sufficiente, l'opzione è disponibile.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span>Gli <GlossaryTerm termId="egili">EGILI</GlossaryTerm> vengono <strong>bruciati</strong> (rimossi definitivamente dalla circolazione).</span>
                </li>
              </ul>
            </div>

            {/* PER IL CREATOR */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.gold, marginBottom: '16px' }}>
                🎨 Per il Creator
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span>Abilita l'opzione "Accetta pagamento EGILI" nel pannello di configurazione dell'<GlossaryTerm termId="egi">EGI</GlossaryTerm>.</span>
                </li>
                <li style={listItemStyle}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span>Riceve un <strong>regalo in EGILI Gift</strong> dalla piattaforma, equivalente agli EGILI bruciati al Buyer.</span>
                </li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span>Gli EGILI Gift ricevuti sono spendibili sulla piattaforma per servizi e funzionalità.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE - FLUSSO COMPLETO EGILI */}
        <div style={{ marginTop: '24px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>⭐</span>
            <span style={{ flex: 1 }}>Il Flusso Completo del Pagamento EGILI</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              
              {/* COS'È EGILI */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '24px', marginBottom: '12px', fontSize: '1.05rem' }}>
                Cos'è EGILI?
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                <strong><GlossaryTerm termId="egili">EGILI</GlossaryTerm></strong> è il <strong>token utility interno</strong> di FlorenceEGI con caratteristiche distintive:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Non trasferibile:</strong> Non può essere scambiato tra utenti.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Non quotato:</strong> Nessuna quotazione su exchange esterni.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Account-bound:</strong> Legato all'account utente, non a un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> crypto.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Merit-based:</strong> Si guadagna attraverso attività meritevoli, non si compra direttamente.</span></li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={{ color: COLORS.gold }}>•</span><span><strong>Tasso di conversione:</strong> 1 EGILO = €0,01 (valore percepito interno).</span></li>
              </ul>

              {/* COME SI GUADAGNANO */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '24px', marginBottom: '12px', fontSize: '1.05rem' }}>
                Come si Guadagnano EGILI?
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Volume vendite:</strong> Il Creator guadagna EGILI proporzionali alle vendite generate.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Referral verificati:</strong> Bonus per nuovi utenti portati che completano il KYC.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Donazioni EPP volontarie:</strong> Bonus aggiuntivo per donazioni oltre il 20% standard.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Partecipazione community:</strong> Eventi, feedback costruttivi, contributi.</span></li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={{ color: COLORS.gold }}>•</span><span><strong>Fondo distribuzione:</strong> 1% delle fee piattaforma → Pool EGILI distribuito secondo merito.</span></li>
              </ul>

              {/* IL MECCANISMO DI PAGAMENTO */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '24px', marginBottom: '12px', fontSize: '1.05rem' }}>
                Il Meccanismo di Pagamento
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                Quando un Buyer paga con EGILI, <strong>non avviene alcun trasferimento diretto</strong> dal Buyer al Creator. Il flusso è gestito internamente dalla piattaforma:
              </p>
              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>1.</span><span><strong>Verifica saldo:</strong> Il sistema controlla che il Buyer abbia EGILI sufficienti (es. EGI a €25 richiede 2.500 EGILI).</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>2.</span><span><strong>Bruciatura (Burn):</strong> Gli EGILI del Buyer vengono <strong>rimossi definitivamente</strong> dalla circolazione (meccanismo deflazionario).</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>3.</span><span><strong>Regalo al Creator:</strong> La piattaforma <strong>regala EGILI Gift</strong> al Creator in quantità equivalente a quelli bruciati.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold, fontWeight: 700 }}>4.</span><span><strong>Mint EGI:</strong> L'<GlossaryTerm termId="egi">EGI</GlossaryTerm> viene mintato e trasferito al Buyer normalmente.</span></li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={{ color: COLORS.gold, fontWeight: 700 }}>5.</span><span><strong>Tracciabilità:</strong> Ogni transazione è registrata con audit trail completo.</span></li>
              </ol>

              {/* ESEMPIO PRATICO */}
              <div style={{ padding: '20px', background: COLORS.amberLight, borderLeft: `4px solid ${COLORS.amber}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h5 style={{ color: COLORS.amber, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  📖 Esempio Pratico
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  <strong>Scenario:</strong> Un EGI è in vendita a €25,00. Il Buyer ha 5.000 EGILI nel proprio saldo.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary, fontSize: '0.9rem' }}>
                  <li style={{ ...listItemStyle, marginBottom: '6px' }}><span style={{ color: COLORS.amber }}>•</span><span>EGILI richiesti: 2.500 (€25,00 ÷ €0,01)</span></li>
                  <li style={{ ...listItemStyle, marginBottom: '6px' }}><span style={{ color: COLORS.amber }}>•</span><span>Saldo Buyer prima: 5.000 EGILI</span></li>
                  <li style={{ ...listItemStyle, marginBottom: '6px' }}><span style={{ color: COLORS.amber }}>•</span><span>Dopo acquisto: 5.000 - 2.500 = <strong>2.500 EGILI rimanenti</strong></span></li>
                  <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={{ color: COLORS.amber }}>•</span><span>Creator riceve: <strong>2.500 EGILI Gift</strong> dalla piattaforma</span></li>
                </ul>
              </div>

              {/* TIPOLOGIE DI EGILI - TABELLA */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '28px', marginBottom: '16px', fontSize: '1.05rem' }}>
                Tipologie di EGILI
              </h4>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: COLORS.textPrimary }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: `1px solid ${COLORS.cardBorder}` }}>Tipo</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: `1px solid ${COLORS.cardBorder}` }}>Acquisizione</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: `1px solid ${COLORS.cardBorder}` }}>Scadenza</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: `1px solid ${COLORS.cardBorder}` }}>Priorità Consumo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '12px', borderBottom: `1px solid ${COLORS.cardBorder}`, fontWeight: 600 }}>Gift</td>
                      <td style={{ padding: '12px', borderBottom: `1px solid ${COLORS.cardBorder}` }}>Donati dalla piattaforma</td>
                      <td style={{ padding: '12px', borderBottom: `1px solid ${COLORS.cardBorder}` }}>⏰ N giorni</td>
                      <td style={{ padding: '12px', borderBottom: `1px solid ${COLORS.cardBorder}` }}>🔴 Prima (scadenza più vicina)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontWeight: 600 }}>Lifetime</td>
                      <td style={{ padding: '12px' }}>Acquistati dall'utente</td>
                      <td style={{ padding: '12px' }}>♾️ Mai</td>
                      <td style={{ padding: '12px' }}>🟢 Dopo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ color: COLORS.textSecondary, fontSize: '0.85rem', marginTop: '12px', lineHeight: 1.5 }}>
                Quando si spendono EGILI, il sistema consuma <strong>prima i Gift</strong> (ordinati per data di scadenza, quelli in scadenza prima), <strong>poi i Lifetime</strong> (che non scadono mai). Questo garantisce che gli EGILI con scadenza vengano utilizzati prima di perderli.
              </p>

              {/* LIMITAZIONI */}
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '28px', marginBottom: '12px', fontSize: '1.05rem' }}>
                Limitazioni
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', color: COLORS.textPrimary }}>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Opt-in Creator:</strong> Il Creator deve abilitare esplicitamente l'opzione per ogni EGI.</span></li>
                <li style={listItemStyle}><span style={{ color: COLORS.gold }}>•</span><span><strong>Irreversibile:</strong> Gli EGILI spesi sono bruciati definitivamente (no refund).</span></li>
                <li style={{ ...listItemStyle, marginBottom: 0 }}><span style={{ color: COLORS.gold }}>•</span><span><strong>Non cumulabile:</strong> Non si può pagare "metà EGILI + metà FIAT" — è tutto o niente.</span></li>
              </ul>

              {/* BOX CONFORMITÀ MiCA */}
              <div style={{ padding: '20px', background: COLORS.emeraldLight, borderLeft: `4px solid ${COLORS.emerald}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h4 style={{ color: COLORS.emerald, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Gli <GlossaryTerm termId="egili">EGILI</GlossaryTerm> <strong>NON sono crypto-asset</strong> ai sensi del Regolamento <GlossaryTerm termId="mica">MiCA</GlossaryTerm> perché: non sono trasferibili, non sono convertibili in denaro, hanno utilizzo esclusivo interno alla piattaforma. Sono classificati come <strong>punti fedeltà</strong>, analoghi ai programmi loyalty tradizionali. FlorenceEGI opera pertanto <strong>fuori dal perimetro MiCA</strong> per questa funzionalità, senza necessità di licenza CASP/EMI.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentLevel4;
