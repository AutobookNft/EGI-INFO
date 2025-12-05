/**
 * Mattoncino: PaymentPlatformRole - Cosa fa (e non fa) la piattaforma
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
  emeraldBorder: 'rgba(16, 185, 129, 0.4)',
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

const PaymentPlatformRole: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="platform-role-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.emeraldLight, border: `1px solid ${COLORS.emeraldBorder}`, borderRadius: '50px', color: COLORS.emerald, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            🏛️ {t('platformRole.badge', 'Ruolo della Piattaforma')}
          </span>
          <h1 id="platform-role-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            Cosa fa (e non fa) la piattaforma
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '700px', margin: '0 auto' }}>
            FlorenceEGI è un'infrastruttura di registrazione su <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>, non un intermediario finanziario.
          </p>
        </header>

        {/* MAIN CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          
          {/* COSA FA */}
          <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>✅</span>
              Cosa FA FlorenceEGI
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>✓</span>
                <span>Accetta pagamenti <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> tramite <GlossaryTerm termId="psp">PSP</GlossaryTerm> autorizzati.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>✓</span>
                <span>Crea e registra <GlossaryTerm termId="egi">EGI</GlossaryTerm> univoci su <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>✓</span>
                <span>Registra l'<GlossaryTerm termId="anchor-hash">anchor-hash</GlossaryTerm> su <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>✓</span>
                <span>Notifica a Brand Holder e titolare i dati delle <GlossaryTerm termId="royalties">royalties</GlossaryTerm> dovute.</span>
              </li>
              <li style={{ ...listItemStyle, marginBottom: 0 }}>
                <span style={{ color: COLORS.emerald }}>✓</span>
                <span>Mantiene l'<GlossaryTerm termId="egi">EGI</GlossaryTerm> nell'inventario virtuale fino al riscatto.</span>
              </li>
            </ul>
          </div>

          {/* COSA NON FA */}
          <div style={{ padding: '32px', background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: COLORS.red, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>❌</span>
              Cosa NON FA FlorenceEGI
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.red }}>✗</span>
                <span>Non offre strumenti di pagamento crypto.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.red }}>✗</span>
                <span>Non emette moneta elettronica.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.red }}>✗</span>
                <span>Non gestisce valute virtuali.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.red }}>✗</span>
                <span>Non promette rendimenti.</span>
              </li>
              <li style={{ ...listItemStyle, marginBottom: 0 }}>
                <span style={{ color: COLORS.red }}>✗</span>
                <span>Non custodisce chiavi private.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CONFORMITÀ BOX */}
        <div style={{ marginTop: '32px', padding: '28px', background: COLORS.emeraldLight, border: `1px solid ${COLORS.emeraldBorder}`, borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🛡️</span>
            Conformità Normativa <GlossaryTerm termId="mica-safe">MiCA-safe</GlossaryTerm>
          </h3>
          <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, margin: 0 }}>
            FlorenceEGI opera come infrastruttura di registrazione su <GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>, completamente fuori dal perimetro <GlossaryTerm termId="mica">MiCA</GlossaryTerm>. Ogni eventuale operazione crypto è delegata esclusivamente a <GlossaryTerm termId="psp">PSP</GlossaryTerm> partner conformi (<GlossaryTerm termId="casp">CASP</GlossaryTerm>/<GlossaryTerm termId="emi">EMI</GlossaryTerm>).
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlatformRole;
