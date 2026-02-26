/**
 * Mattoncino: HowItWorks Step 1 - Crea Collection
 * Chiave JSON: florence.howItWorks.steps[0]
 * Rotta: /info/florence/how-1
 * 
 * FLUSSO CORRETTO:
 * - Collection = contenitore per EGI
 * - EPP collegato alla Collection (non al singolo EGI)
 * - Senza EPP = abbonamento €4-19/mese
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

const BLUE = '#60a5fa';
const GREEN = '#4ade80';

interface Highlight {
  icon: string;
  text: string;
}

const HowItWorks1: React.FC = () => {
  const { t } = useTranslation('florence');
  const highlights = t('howItWorks.highlights.step1', { returnObjects: true }) as Highlight[];

  return (
    <section 
      style={{ minHeight: '100vh', padding: '80px 20px', background: '#0a0a0a' }}
      aria-labelledby="how-it-works-1-title"
      role="region"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span 
            style={{
              display: 'inline-block', padding: '10px 20px',
              background: 'rgba(96, 165, 250, 0.15)', border: '1px solid rgba(96, 165, 250, 0.35)',
              borderRadius: '50px', color: BLUE, fontSize: '14px', fontWeight: 600, marginBottom: '24px'
            }}
            aria-label={`${t('howItWorks.ui.stepBadge', { n: 1, total: 3 })}`}
          >
            {t('howItWorks.ui.step1Icon')} {t('howItWorks.ui.stepBadge', { n: 1, total: 3 })}
          </span>
          <h1 
            id="how-it-works-1-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}
          >
            {t('howItWorks.steps.0.title')}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            {t('howItWorks.ui.step1Subtitle')}
          </p>
        </header>

        {/* Big Number */}
        <div 
          style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            marginBottom: '50px' 
          }}
          aria-hidden="true"
        >
          <div style={{
            width: '120px', height: '120px',
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(96, 165, 250, 0.05))',
            border: '3px solid rgba(96, 165, 250, 0.5)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '4rem', fontWeight: 800, color: BLUE
          }}>
            1
          </div>
        </div>

        {/* Steps List */}
        <article 
          style={{
            background: 'rgba(30, 30, 40, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '40px',
            marginBottom: '30px'
          }}
          aria-labelledby="action-title-1"
        >
          <h2 
            id="action-title-1"
            style={{ fontSize: '1.3rem', fontWeight: 700, color: BLUE, marginBottom: '24px' }}
          >
            {t('howItWorks.ui.actionTitle')}
          </h2>
          <ol 
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0, margin: 0 }}
            aria-label="Lista dei passaggi"
          >
            {(t('howItWorks.steps.0.items', { returnObjects: true }) as string[]).map((item, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                padding: '16px',
                background: 'rgba(96, 165, 250, 0.05)',
                borderRadius: '12px',
                borderLeft: `3px solid ${BLUE}`
              }}>
                <span 
                  style={{ 
                    fontSize: '1.5rem', fontWeight: 700, color: BLUE,
                    minWidth: '32px'
                  }}
                  aria-hidden="true"
                >
                  {i + 1}.
                </span>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, margin: 0 }}>
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </article>

        {/* EPP vs Abbonamento - Comparison Cards */}
        <div 
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px',
            marginBottom: '40px'
          }}
          role="group"
          aria-label="Confronto opzioni Collection"
        >
          <article 
            style={{
              background: 'rgba(74, 222, 128, 0.08)',
              border: '2px solid rgba(74, 222, 128, 0.3)',
              borderRadius: '20px',
              padding: '28px',
              position: 'relative'
            }}
            aria-labelledby="epp-option-title"
          >
            <span 
              style={{
                position: 'absolute', top: '-14px', left: '24px',
                background: GREEN, color: '#0a0a0a',
                padding: '6px 16px', borderRadius: '20px',
                fontSize: '0.8rem', fontWeight: 700
              }}
              role="status"
            >
              {t('howItWorks.ui.recommended')}
            </span>
            <h3 
              id="epp-option-title"
              style={{ fontSize: '1.2rem', fontWeight: 700, color: GREEN, marginTop: '10px', marginBottom: '12px' }}
            >
              {t('howItWorks.ui.withEpp')}
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              {t('howItWorks.ui.withEppDesc')}
            </p>
          </article>

          <article 
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '28px'
            }}
            aria-labelledby="no-epp-option-title"
          >
            <h3 
              id="no-epp-option-title"
              style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}
            >
              {t('howItWorks.ui.withoutEpp')}
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              {t('howItWorks.ui.withoutEppDesc')}
            </p>
          </article>
        </div>

        {/* Highlights */}
        <ul 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', listStyle: 'none', padding: 0, margin: 0 }}
          aria-label="Punti chiave"
        >
          {highlights.map((item, i) => (
            <li 
              key={i} 
              style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}
            >
              <span style={{ fontSize: '2.5rem', marginBottom: '12px', display: 'block' }} aria-hidden="true">{item.icon}</span>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks1;
