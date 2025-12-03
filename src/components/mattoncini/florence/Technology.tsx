/**
 * Mattoncino: Technology Stack
 * Chiave JSON: florence.technology
 * Rotta: /info/florence/tech
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const GOLD = '#d4af37';
const PURPLE = '#a78bfa';
const GREEN = '#4ade80';

const Technology: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section style={{ minHeight: '100vh', padding: '80px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block', padding: '10px 20px',
            background: 'rgba(167, 139, 250, 0.15)', border: '1px solid rgba(167, 139, 250, 0.35)',
            borderRadius: '50px', color: PURPLE, fontSize: '14px', fontWeight: 600, marginBottom: '24px'
          }}>⚙️ Under the Hood</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            {t('technology.titleLine1')}
          </h1>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, color: PURPLE, marginBottom: '24px' }}>
            {t('technology.titleLine2')}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            {t('technology.subtitle')}
          </p>
        </div>

        {/* Two Columns: User vs System */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          {/* TU VEDI */}
          <div style={{
            background: 'rgba(74, 222, 128, 0.06)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            borderRadius: '24px',
            padding: '32px'
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: GREEN, marginBottom: '20px', textAlign: 'center' }}>
              👤 {t('technology.userColumnTitle')}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(t('technology.userFeatures', { returnObjects: true }) as Array<{title: string, desc: string}>).map((feat, i) => (
                <div key={i} style={{
                  padding: '12px 16px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '10px',
                  borderLeft: `3px solid ${GREEN}`
                }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{feat.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SISTEMA FA */}
          <div style={{
            background: 'rgba(167, 139, 250, 0.06)',
            border: '1px solid rgba(167, 139, 250, 0.2)',
            borderRadius: '24px',
            padding: '32px'
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: PURPLE, marginBottom: '20px', textAlign: 'center' }}>
              🤖 {t('technology.systemColumnTitle')}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(t('technology.systemFeatures', { returnObjects: true }) as Array<{title: string, desc: string}>).map((feat, i) => (
                <div key={i} style={{
                  padding: '12px 16px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '10px',
                  borderLeft: `3px solid ${PURPLE}`
                }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{feat.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
          {(t('technology.performance', { returnObjects: true }) as Array<{label: string, value: string, desc: string}>).map((perf, i) => (
            <div key={i} style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: GOLD, marginBottom: '8px' }}>{perf.value}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{perf.label}</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.4 }}>{perf.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
