/**
 * Mattoncino: HowItWorks Step 3 - Mint (Co-Creator)
 * Chiave JSON: florence.howItWorks.steps[2]
 * Rotta: /info/florence/how-3
 * 
 * FLUSSO CORRETTO:
 * - Il MINTING è la tokenizzazione su blockchain
 * - Avviene quando il Co-Creator acquista l'EGI
 * - Il Co-Creator paga → avviene il mint → token su Algorand
 * - Da quel momento: royalty 4.5% perpetue
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

const GREEN = '#4ade80';
const GOLD = '#d4af37';

interface Highlight {
  icon: string;
  text: string;
}

const HowItWorks3: React.FC = () => {
  const { t } = useTranslation('florence');
  const highlights = t('howItWorks.highlights.step3', { returnObjects: true }) as Highlight[];

  return (
    <section style={{ minHeight: '100vh', padding: '80px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block', padding: '10px 20px',
            background: 'rgba(74, 222, 128, 0.15)', border: '1px solid rgba(74, 222, 128, 0.35)',
            borderRadius: '50px', color: GREEN, fontSize: '14px', fontWeight: 600, marginBottom: '24px'
          }}>{t('howItWorks.ui.step3Icon')} {t('howItWorks.ui.stepBadge', { n: 3, total: 3 })}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            {t('howItWorks.steps.2.title')}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            {t('howItWorks.ui.step3Subtitle')}
          </p>
        </div>

        {/* Big Number */}
        <div style={{ 
          display: 'flex', justifyContent: 'center', alignItems: 'center', 
          marginBottom: '50px' 
        }}>
          <div style={{
            width: '120px', height: '120px',
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0.05))',
            border: '3px solid rgba(74, 222, 128, 0.5)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '4rem', fontWeight: 800, color: GREEN
          }}>
            3
          </div>
        </div>

        {/* Definizione chiara */}
        <div style={{
          background: 'rgba(74, 222, 128, 0.1)',
          border: '2px solid rgba(74, 222, 128, 0.3)',
          borderRadius: '20px',
          padding: '24px 32px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.2rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: GREEN }}>MINTING</strong> = {t('howItWorks.ui.mintingDefinition')}
          </p>
        </div>

        {/* Steps List */}
        <div style={{
          background: 'rgba(30, 30, 40, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: GREEN, marginBottom: '24px' }}>
            {t('howItWorks.ui.whatHappensMint')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(t('howItWorks.steps.2.items', { returnObjects: true }) as string[]).map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                padding: '16px',
                background: 'rgba(74, 222, 128, 0.05)',
                borderRadius: '12px',
                borderLeft: `3px solid ${GREEN}`
              }}>
                <span style={{ 
                  fontSize: '1.5rem', fontWeight: 700, color: GREEN,
                  minWidth: '32px'
                }}>
                  {i + 1}.
                </span>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, margin: 0 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Split Visualization */}
        <div style={{
          background: 'rgba(74, 222, 128, 0.06)',
          border: '1px solid rgba(74, 222, 128, 0.2)',
          borderRadius: '24px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: GREEN, marginBottom: '20px', textAlign: 'center' }}>
            📊 {t('howItWorks.ui.splitTitle')}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {[
              { label: t('howItWorks.ui.splitCreator'), value: '€680', percent: '68%', color: GOLD },
              { label: t('howItWorks.ui.splitEpp'), value: '€200', percent: '20%', color: '#4ade80' },
              { label: t('howItWorks.ui.splitPlatform'), value: '€100', percent: '10%', color: '#60a5fa' },
              { label: t('howItWorks.ui.splitAssociation'), value: '€20', percent: '2%', color: '#a78bfa' }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '16px 24px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                borderBottom: `3px solid ${item.color}`,
                textAlign: 'center',
                minWidth: '140px'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: item.color }}>{item.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.percent}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            {t('howItWorks.ui.royaltyNote')}
          </p>
        </div>

        {/* Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {highlights.map((item, i) => (
            <div key={i} style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks3;
