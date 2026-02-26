/**
 * Mattoncino: WalletRedemption - Riscatto Wallet: Trasferimento EGI al Wallet Personale
 * Chiave JSON: florence.walletRedemption
 * Rotta test: /info/florence/wallet-redemption
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
  amber: '#f59e0b',
  amberLight: 'rgba(245, 158, 11, 0.1)',
  white: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  cardBg: 'rgba(255, 255, 255, 0.03)',
  cardBorder: 'rgba(255, 255, 255, 0.1)',
} as const;

const listItemStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'flex-start', gap: '10px',
  marginBottom: '10px', lineHeight: 1.6,
};

const WalletRedemption: React.FC = () => {
  const { t } = useTranslation('florence');
  const [isExpanded, setIsExpanded] = useState(false);
  const steps = [
    t('walletRedemption.step1'), t('walletRedemption.step2'),
    t('walletRedemption.step3'), t('walletRedemption.step4'),
    t('walletRedemption.step5'), t('walletRedemption.step6'),
    t('walletRedemption.step7'),
  ];

  return (
    <section style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="redemption-title">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '10px 20px', background: COLORS.goldLight, border: `1px solid ${COLORS.goldBorder}`, borderRadius: '50px', color: COLORS.gold, fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            {t('walletRedemption.badge')}
          </span>
          <h1 id="redemption-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            {t('walletRedemption.title')}
          </h1>
          <p style={{ fontSize: '1.15rem', color: COLORS.textSecondary, maxWidth: '800px', margin: '0 auto' }}>
            {t('walletRedemption.subtitle')}
          </p>
        </header>

        <div style={{ background: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '16px', overflow: 'hidden' }}>
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: COLORS.white, fontSize: '1rem', fontWeight: 600, textAlign: 'left' }} aria-expanded={isExpanded}>
            <span>🔓</span>
            <span style={{ flex: 1 }}>{t('walletRedemption.detailsButton')}</span>
            <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
          </button>

          {isExpanded && (
            <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '24px', marginBottom: '12px', fontSize: '1.05rem' }}>
                {t('walletRedemption.whyPayTitle')}
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                {t('walletRedemption.whyPayDesc')}
              </p>

              <div style={{ padding: '20px', background: COLORS.amberLight, borderLeft: `4px solid ${COLORS.amber}`, borderRadius: '0 12px 12px 0', marginTop: '20px' }}>
                <h5 style={{ color: COLORS.amber, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  {t('walletRedemption.formulaTitle')}
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  {t('walletRedemption.formulaDesc')}
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '1rem', color: COLORS.amber, fontWeight: 700, marginBottom: '12px', padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                  {t('walletRedemption.formula')}
                </p>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  {t('walletRedemption.formulaNote')}
                </p>
              </div>

              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '28px', marginBottom: '12px', fontSize: '1.05rem' }}>
                {t('walletRedemption.exampleTitle')}
              </h4>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, marginBottom: '16px' }}>
                {t('walletRedemption.exampleDesc')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', color: COLORS.textPrimary }}>
                {[
                  t('walletRedemption.exampleItem1'),
                  t('walletRedemption.exampleItem2'),
                  t('walletRedemption.exampleItem3'),
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: COLORS.gold }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
                <li style={{ ...listItemStyle, marginBottom: 0 }}>
                  <span style={{ color: COLORS.gold }}>•</span>
                  <span><strong>{t('walletRedemption.exampleTotal')}</strong></span>
                </li>
              </ul>
              <p style={{ color: COLORS.textPrimary, lineHeight: 1.7 }}>
                {t('walletRedemption.exampleNote')}
              </p>

              <h4 style={{ color: COLORS.gold, fontWeight: 700, marginTop: '28px', marginBottom: '12px', fontSize: '1.05rem' }}>
                {t('walletRedemption.flowTitle')}
              </h4>
              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', color: COLORS.textPrimary }}>
                {steps.map((step, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: COLORS.gold, fontWeight: 700 }}>{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div style={{ padding: '20px', background: COLORS.blueLight, borderLeft: `4px solid ${COLORS.blue}`, borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                <h5 style={{ color: COLORS.blue, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  {t('walletRedemption.zeroProfitTitle')}
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {t('walletRedemption.zeroProfitDesc')}
                </p>
              </div>

              <div style={{ padding: '20px', background: COLORS.emeraldLight, borderLeft: `4px solid ${COLORS.emerald}`, borderRadius: '0 12px 12px 0', marginTop: '16px' }}>
                <h5 style={{ color: COLORS.emerald, fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>
                  {t('walletRedemption.afterTitle')}
                </h5>
                <p style={{ color: COLORS.textPrimary, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {t('walletRedemption.afterDesc')} (<GlossaryTerm termId="non-custodial">non-custodial</GlossaryTerm>,{' '}
                  <GlossaryTerm termId="wallet">wallet</GlossaryTerm>, <GlossaryTerm termId="algorand">Algorand</GlossaryTerm>)
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
