/**
 * Mattoncino: PaymentLevel4 - Livello 4: Pagamento con EGILI (Token Interno)
 * 
 * Card principale con griglia Buyer/Creator + sezione collapsible
 * sul flusso completo del pagamento EGILI.
 * 
 * Chiave JSON i18n: florence.paymentLevel4
 * Rotta: /info/florence/payment-level-4
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  goldLight: 'rgba(212, 175, 55, 0.1)',
  goldBorder: 'rgba(212, 175, 55, 0.4)',
  emerald: '#10b981',
  amber: '#f59e0b',
  amberLight: 'rgba(245, 158, 11, 0.1)',
  green: '#22c55e',
  greenLight: 'rgba(34, 197, 94, 0.1)',
  white: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  cardBg: 'rgba(255, 255, 255, 0.03)',
  cardBorder: 'rgba(255, 255, 255, 0.1)',
} as const;

// ============================================
// COMPONENT
// ============================================
const PaymentLevel4: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a',
      }}
      aria-labelledby="level4-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: COLORS.goldLight,
              border: `1px solid ${COLORS.goldBorder}`,
              borderRadius: '50px',
              color: COLORS.gold,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
            }}
          >
            ✨ {t('paymentLevel4.badge', 'Livello 4')}
          </span>
          
          <h1
            id="level4-title"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.white,
              marginBottom: '16px',
            }}
          >
            {t('paymentLevel4.title', 'Pagamento con EGILI (Token Interno)')}
          </h1>
          
          <p style={{
            fontSize: '1.15rem',
            color: COLORS.textSecondary,
            maxWidth: '750px',
            margin: '0 auto',
          }}>
            {t('paymentLevel4.subtitle', "Un sistema di ricompensa interno che premia l'attività meritevole sulla piattaforma. I Creator possono accettare EGILI come forma di pagamento per i propri EGI.")}
          </p>
        </header>

        {/* MAIN CARD */}
        <div
          style={{
            padding: '32px',
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: '16px',
          }}
        >
          {/* GRID BUYER / CREATOR */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {/* PER IL BUYER */}
            <div>
              <h2
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: COLORS.emerald,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span aria-hidden="true">🛒</span>
                {t('paymentLevel4.buyerTitle', 'Per il Buyer')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel4.buyer1', 'Accumula EGILI attraverso attività meritevoli (vendite, referral, partecipazione community).')}
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel4.buyer2', 'Al checkout vede l\'opzione "Paga con EGILI" (solo se abilitata dal Creator).')}
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel4.buyer3', "Il sistema verifica il saldo: se sufficiente, l'opzione è disponibile.")}
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel4.buyer4', 'Gli EGILI vengono bruciati (rimossi definitivamente dalla circolazione).')}
                </li>
              </ul>
            </div>

            {/* PER IL CREATOR */}
            <div>
              <h2
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: COLORS.emerald,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span aria-hidden="true">🎨</span>
                {t('paymentLevel4.creatorTitle', 'Per il Creator')}
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel4.creator1', 'Abilita l\'opzione "Accetta pagamento EGILI" nel pannello di configurazione dell\'EGI.')}
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel4.creator2', 'Riceve un regalo in EGILI Gift dalla piattaforma, equivalente agli EGILI bruciati al Buyer.')}
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6 }}>
                  <span style={{ color: COLORS.emerald }} aria-hidden="true">•</span>
                  {t('paymentLevel4.creator3', 'Gli EGILI Gift ricevuti sono spendibili sulla piattaforma per servizi e funzionalità.')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE: FLUSSO COMPLETO EGILI */}
        <div
          style={{
            marginTop: '32px',
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              width: '100%',
              padding: '20px 24px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: COLORS.white,
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'left',
            }}
            aria-expanded={isExpanded}
            aria-controls="egili-flow-content"
          >
            <span style={{ fontSize: '1.25rem' }} aria-hidden="true">⭐</span>
            <span style={{ flex: 1 }}>
              {t('paymentLevel4.flowTitle', 'Il Flusso Completo del Pagamento EGILI')}
            </span>
            <span
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                fontSize: '1.25rem',
              }}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          
          {isExpanded && (
            <div
              id="egili-flow-content"
              style={{
                padding: '0 24px 24px',
                borderTop: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              {/* COS'È EGILI */}
              <h4 style={{ color: COLORS.white, fontWeight: 700, marginTop: '24px', marginBottom: '12px' }}>
                {t('paymentLevel4.whatIsEgiliTitle', "Cos'è EGILI?")}
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                {t('paymentLevel4.whatIsEgiliDesc', 
                  'EGILI è il token utility interno di FlorenceEGI con caratteristiche distintive:'
                )}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {[
                  { key: 'nonTrasferibile', text: 'Non trasferibile: Non può essere scambiato tra utenti.' },
                  { key: 'nonQuotato', text: 'Non quotato: Nessuna quotazione su exchange esterni.' },
                  { key: 'accountBound', text: 'Account-bound: Legato all\'account utente, non a un wallet crypto.' },
                  { key: 'meritBased', text: 'Merit-based: Si guadagna attraverso attività meritevoli, non si compra direttamente.' },
                  { key: 'tassoConversione', text: 'Tasso di conversione: 1 EGILO = €0,01 (valore percepito interno).' },
                ].map((item, idx) => (
                  <li
                    key={item.key}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      color: COLORS.textPrimary,
                      lineHeight: 1.6,
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ color: COLORS.gold }} aria-hidden="true">•</span>
                    <span>
                      <strong>{t(`paymentLevel4.egiliFeature${idx + 1}Label`, item.text.split(':')[0])}:</strong>{' '}
                      {t(`paymentLevel4.egiliFeature${idx + 1}Desc`, item.text.split(':').slice(1).join(':').trim())}
                    </span>
                  </li>
                ))}
              </ul>

              {/* COME SI GUADAGNANO */}
              <h4 style={{ color: COLORS.white, fontWeight: 700, marginBottom: '12px' }}>
                {t('paymentLevel4.howToEarnTitle', 'Come si Guadagnano EGILI?')}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {[
                  'Volume vendite: Il Creator guadagna EGILI proporzionali alle vendite generate.',
                  'Referral verificati: Bonus per nuovi utenti portati che completano il KYC.',
                  'Donazioni EPP volontarie: Bonus aggiuntivo per donazioni oltre il 20% standard.',
                  'Partecipazione community: Eventi, feedback costruttivi, contributi.',
                  'Fondo distribuzione: 1% delle fee piattaforma → Pool EGILI distribuito secondo merito.',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      color: COLORS.textPrimary,
                      lineHeight: 1.6,
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ color: COLORS.gold }} aria-hidden="true">•</span>
                    {t(`paymentLevel4.earnMethod${idx + 1}`, item)}
                  </li>
                ))}
              </ul>

              {/* MECCANISMO DI PAGAMENTO */}
              <h4 style={{ color: COLORS.white, fontWeight: 700, marginBottom: '12px' }}>
                {t('paymentLevel4.mechanismTitle', 'Il Meccanismo di Pagamento')}
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                {t('paymentLevel4.mechanismDesc', 
                  'Quando un Buyer paga con EGILI, non avviene alcun trasferimento diretto dal Buyer al Creator. Il flusso è gestito internamente dalla piattaforma:'
                )}
              </p>
              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', counterReset: 'step' }}>
                {[
                  'Verifica saldo: Il sistema controlla che il Buyer abbia EGILI sufficienti (es. EGI a €25 richiede 2.500 EGILI).',
                  'Bruciatura (Burn): Gli EGILI del Buyer vengono rimossi definitivamente dalla circolazione (meccanismo deflazionario).',
                  'Regalo al Creator: La piattaforma regala EGILI Gift al Creator in quantità equivalente a quelli bruciati.',
                  "Mint EGI: L'EGI viene mintato e trasferito al Buyer normalmente.",
                  'Tracciabilità: Ogni transazione è registrata con audit trail completo.',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      color: COLORS.textPrimary,
                      lineHeight: 1.6,
                      marginBottom: '10px',
                    }}
                  >
                    <span
                      style={{
                        background: COLORS.goldLight,
                        color: COLORS.gold,
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                    {t(`paymentLevel4.step${idx + 1}`, item)}
                  </li>
                ))}
              </ol>

              {/* ESEMPIO PRATICO */}
              <div
                style={{
                  padding: '20px',
                  background: COLORS.amberLight,
                  borderLeft: `4px solid ${COLORS.amber}`,
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '24px',
                }}
              >
                <h5 style={{ color: COLORS.amber, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  📌 {t('paymentLevel4.exampleTitle', 'Esempio Pratico')}
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  <strong>{t('paymentLevel4.exampleScenario', 'Scenario')}:</strong>{' '}
                  {t('paymentLevel4.exampleScenarioDesc', 'Un EGI è in vendita a €25,00. Il Buyer ha 5.000 EGILI nel proprio saldo.')}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: COLORS.textPrimary, fontSize: '0.9rem', marginBottom: '4px' }}>
                    • {t('paymentLevel4.exampleLine1', 'EGILI richiesti: 2.500 (€25,00 ÷ €0,01)')}
                  </li>
                  <li style={{ color: COLORS.textPrimary, fontSize: '0.9rem', marginBottom: '4px' }}>
                    • {t('paymentLevel4.exampleLine2', 'Saldo Buyer prima: 5.000 EGILI')}
                  </li>
                  <li style={{ color: COLORS.textPrimary, fontSize: '0.9rem', marginBottom: '4px' }}>
                    • {t('paymentLevel4.exampleLine3', 'Dopo acquisto: 5.000 - 2.500 = 2.500 EGILI rimanenti')}
                  </li>
                  <li style={{ color: COLORS.textPrimary, fontSize: '0.9rem' }}>
                    • {t('paymentLevel4.exampleLine4', 'Creator riceve: 2.500 EGILI Gift dalla piattaforma')}
                  </li>
                </ul>
              </div>

              {/* TIPOLOGIE EGILI - TABLE */}
              <h4 style={{ color: COLORS.white, fontWeight: 700, marginBottom: '12px' }}>
                {t('paymentLevel4.typesTitle', 'Tipologie di EGILI')}
              </h4>
              <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '0.9rem',
                  }}
                >
                  <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                        {t('paymentLevel4.tableType', 'Tipo')}
                      </th>
                      <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                        {t('paymentLevel4.tableAcquisition', 'Acquisizione')}
                      </th>
                      <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                        {t('paymentLevel4.tableExpiry', 'Scadenza')}
                      </th>
                      <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                        {t('paymentLevel4.tablePriority', 'Priorità Consumo')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '12px', color: COLORS.textPrimary, borderBottom: `1px solid ${COLORS.cardBorder}`, fontWeight: 600 }}>Gift</td>
                      <td style={{ padding: '12px', color: COLORS.textPrimary, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                        {t('paymentLevel4.giftAcquisition', 'Donati dalla piattaforma')}
                      </td>
                      <td style={{ padding: '12px', color: COLORS.textPrimary, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                        ⏰ {t('paymentLevel4.giftExpiry', 'N giorni')}
                      </td>
                      <td style={{ padding: '12px', color: COLORS.textPrimary, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                        🔴 {t('paymentLevel4.giftPriority', 'Prima (scadenza più vicina)')}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', color: COLORS.textPrimary, fontWeight: 600 }}>Lifetime</td>
                      <td style={{ padding: '12px', color: COLORS.textPrimary }}>
                        {t('paymentLevel4.lifetimeAcquisition', "Acquistati dall'utente")}
                      </td>
                      <td style={{ padding: '12px', color: COLORS.textPrimary }}>
                        ♾️ {t('paymentLevel4.lifetimeExpiry', 'Mai')}
                      </td>
                      <td style={{ padding: '12px', color: COLORS.textPrimary }}>
                        🟢 {t('paymentLevel4.lifetimePriority', 'Dopo')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ color: COLORS.textSecondary, fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {t('paymentLevel4.typesNote', 
                  'Quando si spendono EGILI, il sistema consuma prima i Gift (ordinati per data di scadenza, quelli in scadenza prima), poi i Lifetime (che non scadono mai). Questo garantisce che gli EGILI con scadenza vengano utilizzati prima di perderli.'
                )}
              </p>

              {/* LIMITAZIONI */}
              <h4 style={{ color: COLORS.white, fontWeight: 700, marginBottom: '12px' }}>
                {t('paymentLevel4.limitationsTitle', 'Limitazioni')}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {[
                  "Opt-in Creator: Il Creator deve abilitare esplicitamente l'opzione per ogni EGI.",
                  'Irreversibile: Gli EGILI spesi sono bruciati definitivamente (no refund).',
                  'Non cumulabile: Non si può pagare "metà EGILI + metà FIAT" — è tutto o niente.',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      color: COLORS.textPrimary,
                      lineHeight: 1.6,
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ color: '#ef4444' }} aria-hidden="true">⚠</span>
                    {t(`paymentLevel4.limitation${idx + 1}`, item)}
                  </li>
                ))}
              </ul>

              {/* COMPLIANCE BOX */}
              <div
                style={{
                  padding: '20px',
                  background: COLORS.greenLight,
                  borderLeft: `4px solid ${COLORS.green}`,
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <h4 style={{ color: COLORS.green, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  🛡️ {t('paymentLevel4.complianceTitle', 'Conformità Normativa MiCA-safe')}
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {t('paymentLevel4.complianceDesc', 
                    `Gli EGILI NON sono crypto-asset ai sensi del Regolamento MiCA perché: non sono trasferibili, 
                    non sono convertibili in denaro, hanno utilizzo esclusivo interno alla piattaforma. 
                    Sono classificati come punti fedeltà, analoghi ai programmi loyalty tradizionali. 
                    FlorenceEGI opera pertanto fuori dal perimetro MiCA per questa funzionalità, senza necessità di licenza CASP/EMI.`
                  )}
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
