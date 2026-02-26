/**
 * Mattoncino: PaymentPlatformRole - Cosa fa (e non fa) la piattaforma
 * Riepilogo delle responsabilità della piattaforma
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
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
  marginBottom: '10px',
  lineHeight: 1.6,
};

const PaymentPlatformRole: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section style={{ padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="platform-role-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 id="platform-role-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, color: COLORS.white }}>
            Cosa fa (e non fa) la piattaforma
          </h2>
        </header>

        {/* GRID 2 COLONNE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          {/* COSA FA */}
          <div style={{ padding: '24px', background: COLORS.emeraldLight, borderLeft: `4px solid ${COLORS.emerald}`, borderRadius: '0 12px 12px 0' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '16px' }}>
              ✅ Cosa Fa
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>•</span>
                <span>Incassa <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> tramite <GlossaryTerm termId="psp">PSP</GlossaryTerm>.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>•</span>
                <span>Emette e trasferisce <GlossaryTerm termId="egi">EGI</GlossaryTerm>.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>•</span>
                <span>Scrive <GlossaryTerm termId="anchor-hash">{t('payments.anchorHash')}</GlossaryTerm>.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.emerald }}>•</span>
                <span>{t('payments.qrVerifica')}</span>
              </li>
              <li style={{ ...listItemStyle, marginBottom: 0 }}>
                <span style={{ color: COLORS.emerald }}>•</span>
                <span>Calcola <GlossaryTerm termId="royalties">royalties</GlossaryTerm> per il <GlossaryTerm termId="psp">PSP</GlossaryTerm>.</span>
              </li>
            </ul>
          </div>

          {/* COSA NON FA */}
          <div style={{ padding: '24px', background: COLORS.redLight, borderLeft: `4px solid ${COLORS.red}`, borderRadius: '0 12px 12px 0' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: COLORS.red, marginBottom: '16px' }}>
              ❌ Cosa NON Fa
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textPrimary }}>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.red }}>•</span>
                <span>Custodire criptovalute per terzi.</span>
              </li>
              <li style={listItemStyle}>
                <span style={{ color: COLORS.red }}>•</span>
                <span>Fare da exchange crypto/<GlossaryTerm termId="fiat">fiat</GlossaryTerm>.</span>
              </li>
              <li style={{ ...listItemStyle, marginBottom: 0 }}>
                <span style={{ color: COLORS.red }}>•</span>
                <span>Processare pagamenti crypto.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlatformRole;
