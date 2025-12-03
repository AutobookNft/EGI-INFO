/**
 * Mattoncino: Problema 6 - Royalty Fantasma
 * Chiave JSON: florence.problems.items[5]
 * Rotta: /info/florence/problem-6
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

const GOLD = '#d4af37';
const RED = '#f87171';
const GREEN = '#4ade80';

const Problem6: React.FC = () => {
  const { t } = useTranslation('florence');
  const highlights = t('problems.items.5.highlights', { returnObjects: true }) as Array<{ icon: string; title: string; desc: string }>;

  return (
    <section style={{ minHeight: '100vh', padding: '80px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block', padding: '10px 20px',
            background: 'rgba(248, 113, 113, 0.15)', border: '1px solid rgba(248, 113, 113, 0.35)',
            borderRadius: '50px', color: RED, fontSize: '14px', fontWeight: 600, marginBottom: '24px'
          }}>{t('problems.ui.badge')} #6</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            {t('problems.items.5.title')}
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
          <div style={{ background: 'rgba(248, 113, 113, 0.08)', border: '2px solid rgba(248, 113, 113, 0.3)', borderRadius: '20px', padding: '32px', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-14px', left: '24px', background: RED, color: '#0a0a0a', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>{t('problems.ui.before')}</span>
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '16px' }}>{t('problems.items.5.old')}</p>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{t('problems.items.5.oldValue')}</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>{t('problems.items.5.oldCaption')}</p>
            </div>
          </div>
          <div style={{ background: 'rgba(74, 222, 128, 0.08)', border: '2px solid rgba(74, 222, 128, 0.3)', borderRadius: '20px', padding: '32px', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-14px', left: '24px', background: GREEN, color: '#0a0a0a', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>{t('problems.ui.after')}</span>
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}>{t('problems.items.5.new')}</p>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{t('problems.items.5.newValue')}</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>{t('problems.items.5.newCaption')}</p>
            </div>
          </div>
        </div>

        <div style={{ background: 'rgba(30, 30, 40, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px', padding: '40px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: RED, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>😤</span> {t('problems.ui.problemTitle')}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8 }}>{t('problems.items.5.detailProblem')}</p>
        </div>

        <div style={{ background: 'rgba(74, 222, 128, 0.06)', border: '1px solid rgba(74, 222, 128, 0.2)', borderRadius: '24px', padding: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: GREEN, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>✨</span> {t('problems.ui.solutionTitle')}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8 }}>
            {t('problems.items.5.detailSolution')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {highlights.map((item, i) => (
            <div key={i} style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: GOLD, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem6;
