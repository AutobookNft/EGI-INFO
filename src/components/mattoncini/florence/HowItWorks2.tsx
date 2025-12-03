/**
 * Mattoncino: HowItWorks Step 2 - Egizza
 * Chiave JSON: florence.howItWorks.steps[1]
 * Rotta: /info/florence/how-2
 * 
 * FLUSSO CORRETTO:
 * - EGIZZARE = importare nella piattaforma (DB)
 * - NON è la tokenizzazione (quella è il minting)
 * - Aggiunge: CoA, Traits, Utility, AI info
 * - L'EGI è listato ma NON ancora su blockchain
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

const PURPLE = '#a78bfa';

interface Highlight {
  icon: string;
  text: string;
}

const HowItWorks2: React.FC = () => {
  const { t } = useTranslation('florence');
  const highlights = t('howItWorks.highlights.step2', { returnObjects: true }) as Highlight[];

  return (
    <section style={{ minHeight: '100vh', padding: '80px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block', padding: '10px 20px',
            background: 'rgba(167, 139, 250, 0.15)', border: '1px solid rgba(167, 139, 250, 0.35)',
            borderRadius: '50px', color: PURPLE, fontSize: '14px', fontWeight: 600, marginBottom: '24px'
          }}>{t('howItWorks.ui.step2Icon')} {t('howItWorks.ui.stepBadge', { n: 2, total: 3 })}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            {t('howItWorks.steps.1.title')}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            {t('howItWorks.ui.step2Subtitle')}
          </p>
        </div>

        {/* Big Number + Timing */}
        <div style={{ 
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px',
          marginBottom: '50px' 
        }}>
          <div style={{
            width: '120px', height: '120px',
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(167, 139, 250, 0.05))',
            border: '3px solid rgba(167, 139, 250, 0.5)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '4rem', fontWeight: 800, color: PURPLE
          }}>
            2
          </div>
          <div style={{
            padding: '20px 32px',
            background: 'rgba(167, 139, 250, 0.15)',
            border: '2px solid rgba(167, 139, 250, 0.4)',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: PURPLE }}>{t('howItWorks.steps.1.timing')}</div>
            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>tempo totale</div>
          </div>
        </div>

        {/* Definizione chiara */}
        <div style={{
          background: 'rgba(167, 139, 250, 0.1)',
          border: '2px solid rgba(167, 139, 250, 0.3)',
          borderRadius: '20px',
          padding: '24px 32px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.2rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: PURPLE }}>EGIZZARE</strong> = {t('howItWorks.ui.egizzareDefinition')}
          </p>
        </div>

        {/* Steps List */}
        <div style={{
          background: 'rgba(30, 30, 40, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: PURPLE, marginBottom: '24px' }}>
            {t('howItWorks.ui.whatHappens')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(t('howItWorks.steps.1.items', { returnObjects: true }) as string[]).map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                padding: '16px',
                background: 'rgba(167, 139, 250, 0.05)',
                borderRadius: '12px',
                borderLeft: `3px solid ${PURPLE}`
              }}>
                <span style={{ 
                  fontSize: '1.5rem', fontWeight: 700, color: PURPLE,
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

export default HowItWorks2;
