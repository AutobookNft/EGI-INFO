/**
 * Mattoncino: WalletRedemption - Riscatto Wallet
 * 
 * Trasferimento EGI al Wallet Personale.
 * Include formula costi, esempio pratico, flusso operativo completo.
 * 
 * Chiave JSON i18n: florence.walletRedemption
 * Rotta: /info/florence/wallet-redemption
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
  blue: '#60a5fa',
  blueLight: 'rgba(96, 165, 250, 0.1)',
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
const WalletRedemption: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a',
      }}
      aria-labelledby="redemption-title"
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
            🔑 {t('walletRedemption.badge', 'Riscatto')}
          </span>
          
          <h1
            id="redemption-title"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.white,
              marginBottom: '16px',
            }}
          >
            {t('walletRedemption.title', 'Riscatto Wallet — Trasferimento EGI al Wallet Personale')}
          </h1>
          
          <p style={{
            fontSize: '1.15rem',
            color: COLORS.textSecondary,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {t('walletRedemption.subtitle', 
              "L'utente che desidera ottenere la piena proprietà dei propri EGI può richiedere il riscatto del wallet. Questa operazione trasferisce gli ASA (Algorand Standard Asset) dal wallet custodiale della piattaforma al wallet personale dell'utente, consegnandogli contestualmente la frase segreta (seed phrase)."
            )}
          </p>
        </header>

        {/* COLLAPSIBLE CONTENT */}
        <div
          style={{
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
              fontSize: '1.1rem',
              fontWeight: 600,
              textAlign: 'left',
            }}
            aria-expanded={isExpanded}
            aria-controls="redemption-content"
          >
            <span style={{ fontSize: '1.25rem' }} aria-hidden="true">📋</span>
            <span style={{ flex: 1 }}>
              {t('walletRedemption.detailsTitle', 'Dettagli Completi del Riscatto')}
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
              id="redemption-content"
              style={{
                padding: '0 24px 32px',
                borderTop: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              {/* PERCHÉ PAGAMENTO */}
              <h3 style={{ color: COLORS.white, fontWeight: 700, marginTop: '28px', marginBottom: '16px', fontSize: '1.1rem' }}>
                {t('walletRedemption.whyPaymentTitle', 'Perché è richiesto un pagamento?')}
              </h3>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '20px' }}>
                {t('walletRedemption.whyPaymentDesc', 
                  `La blockchain Algorand richiede che ogni wallet che intende ricevere un ASA effettui preventivamente 
                  un'operazione chiamata opt-in. Questa operazione blocca temporaneamente 0,1 ALGO per ogni ASA che il wallet 
                  intende detenere. Tale importo non viene speso ma resta vincolato come requisito di bilancio minimo imposto 
                  dal protocollo Algorand, e viene liberato qualora l'utente decida in futuro di rimuovere l'ASA dal proprio 
                  wallet (operazione di opt-out).`
                )}
              </p>

              {/* FORMULA COSTO */}
              <div
                style={{
                  padding: '24px',
                  background: COLORS.amberLight,
                  borderLeft: `4px solid ${COLORS.amber}`,
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '28px',
                }}
              >
                <h4 style={{ color: COLORS.amber, fontWeight: 700, marginBottom: '12px', fontSize: '1rem' }}>
                  🧮 {t('walletRedemption.formulaTitle', 'Formula di calcolo del costo')}
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.95rem', marginBottom: '12px' }}>
                  {t('walletRedemption.formulaIntro', 'Il costo totale del riscatto è determinato dalla seguente formula:')}
                </p>
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    color: COLORS.amber,
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <strong>Costo = (N × 0,1 ALGO) + 0,1 ALGO + fee di rete</strong>
                </div>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {t('walletRedemption.formulaExplanation', 
                    `Dove N è il numero di EGI posseduti dall'utente. Il secondo addendo (0,1 ALGO) rappresenta il bilancio 
                    minimo richiesto per mantenere attivo l'account Algorand, mentre le fee di rete coprono le transazioni 
                    di opt-in e trasferimento (circa 0,001 ALGO ciascuna).`
                  )}
                </p>
              </div>

              {/* ESEMPIO PRATICO */}
              <h3 style={{ color: COLORS.white, fontWeight: 700, marginBottom: '16px', fontSize: '1.1rem' }}>
                {t('walletRedemption.exampleTitle', 'Esempio pratico')}
              </h3>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                {t('walletRedemption.exampleIntro', 'Un utente che possiede 50 EGI dovrà sostenere un costo di circa:')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6, marginBottom: '8px' }}>
                  <span style={{ color: COLORS.gold }} aria-hidden="true">•</span>
                  {t('walletRedemption.exampleLine1', '50 × 0,1 ALGO = 5 ALGO (per gli opt-in)')}
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6, marginBottom: '8px' }}>
                  <span style={{ color: COLORS.gold }} aria-hidden="true">•</span>
                  {t('walletRedemption.exampleLine2', '0,1 ALGO (bilancio minimo account)')}
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6, marginBottom: '8px' }}>
                  <span style={{ color: COLORS.gold }} aria-hidden="true">•</span>
                  {t('walletRedemption.exampleLine3', '~0,1 ALGO (fee di rete per ~100 transazioni)')}
                </li>
                <li style={{ display: 'flex', gap: '10px', color: COLORS.textPrimary, lineHeight: 1.6, fontWeight: 600 }}>
                  <span style={{ color: COLORS.gold }} aria-hidden="true">→</span>
                  {t('walletRedemption.exampleTotal', 'Totale: ~5,2 ALGO')}
                </li>
              </ul>
              <p style={{ color: COLORS.textSecondary, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '28px' }}>
                {t('walletRedemption.exampleNote', 
                  "Al cambio corrente (dicembre 2025: 1 ALGO ≈ 0,12 €), questo equivale a circa 0,62 €. L'importo viene addebitato in EGILI al tasso di conversione vigente al momento della richiesta."
                )}
              </p>

              {/* FLUSSO OPERATIVO */}
              <h3 style={{ color: COLORS.white, fontWeight: 700, marginBottom: '16px', fontSize: '1.1rem' }}>
                {t('walletRedemption.flowTitle', 'Flusso operativo del riscatto')}
              </h3>
              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                {[
                  { step: 'Richiesta', desc: "L'utente avvia la procedura di riscatto dalla propria dashboard e visualizza il costo calcolato." },
                  { step: 'Pagamento', desc: "L'importo in EGILI viene scalato dal saldo dell'utente." },
                  { step: 'Funding', desc: "La piattaforma trasferisce gli ALGO necessari dal Treasury al wallet dell'utente." },
                  { step: 'Opt-in automatico', desc: "Il sistema esegue automaticamente l'opt-in per ogni ASA di proprietà dell'utente, firmando le transazioni con la chiave privata ancora in custodia." },
                  { step: 'Trasferimento ASA', desc: "Gli EGI vengono trasferiti dal Treasury al wallet personale dell'utente." },
                  { step: 'Consegna seed phrase', desc: "L'utente visualizza la propria frase segreta (25 parole) e conferma di averla salvata in modo sicuro." },
                  { step: 'Cancellazione', desc: 'La frase segreta cifrata viene eliminata definitivamente dal database di FlorenceEGI.' },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      marginBottom: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        background: COLORS.goldLight,
                        color: COLORS.gold,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <strong style={{ color: COLORS.white }}>{t(`walletRedemption.step${idx + 1}Title`, item.step)}:</strong>{' '}
                      <span style={{ color: COLORS.textPrimary, lineHeight: 1.6 }}>
                        {t(`walletRedemption.step${idx + 1}Desc`, item.desc)}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>

              {/* POLITICA ZERO-PROFITTO */}
              <div
                style={{
                  padding: '20px',
                  background: COLORS.blueLight,
                  borderLeft: `4px solid ${COLORS.blue}`,
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '20px',
                }}
              >
                <h4 style={{ color: COLORS.blue, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  💎 {t('walletRedemption.zeroProfitTitle', 'Politica Zero-Profitto')}
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {t('walletRedemption.zeroProfitDesc', 
                    `FlorenceEGI non applica alcun margine o commissione sull'operazione di riscatto. 
                    Il costo addebitato all'utente copre esclusivamente le spese imposte dalla blockchain Algorand 
                    (requisiti di bilancio minimo e fee di transazione). Questa politica è coerente con la missione 
                    della piattaforma di facilitare l'accesso alla certificazione digitale senza barriere economiche aggiuntive.`
                  )}
                </p>
              </div>

              {/* DOPO IL RISCATTO */}
              <div
                style={{
                  padding: '20px',
                  background: COLORS.greenLight,
                  borderLeft: `4px solid ${COLORS.green}`,
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <h4 style={{ color: COLORS.green, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  ✅ {t('walletRedemption.afterRedemptionTitle', 'Dopo il riscatto')}
                </h4>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {t('walletRedemption.afterRedemptionDesc', 
                    `Una volta completato il riscatto, il wallet diventa completamente non-custodial. 
                    L'utente è l'unico detentore delle chiavi private e può gestire i propri EGI tramite qualsiasi client 
                    Algorand compatibile (Pera Wallet, Defly, etc.). FlorenceEGI non ha più alcun controllo né visibilità 
                    sugli asset trasferiti, se non per quanto riguarda la registrazione storica delle transazioni sulla 
                    blockchain pubblica.`
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

export default WalletRedemption;
