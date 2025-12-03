/**
 * Mattoncino: AMMk - Asset Market Maker
 * Chiave JSON: florence.ammk
 * Rotta: /info/florence/ammk
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const GOLD = '#d4af37';
const CYAN = '#22d3ee';

const AMMk: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section style={{ minHeight: '100vh', padding: '80px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block', padding: '10px 20px',
            background: 'rgba(34, 211, 238, 0.15)', border: '1px solid rgba(34, 211, 238, 0.35)',
            borderRadius: '50px', color: CYAN, fontSize: '14px', fontWeight: 600, marginBottom: '24px'
          }}>🏭 Core Concept</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            {t('ammk.titleLine1')}
          </h1>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, color: CYAN, marginBottom: '24px' }}>
            {t('ammk.titleLine2')}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            {t('ammk.subtitle')}
          </p>
        </div>

        {/* Chi può usare */}
        <div style={{
          background: 'rgba(30, 30, 40, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: CYAN, marginBottom: '24px' }}>
            {t('ammk.usersTitle')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {(t('ammk.users', { returnObjects: true }) as Array<{title: string, desc: string}>).map((user, i) => (
              <div key={i} style={{
                padding: '16px',
                background: 'rgba(34, 211, 238, 0.05)',
                borderRadius: '12px',
                borderLeft: `3px solid ${CYAN}`
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{user.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.4 }}>{user.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Engine */}
        <div style={{
          background: 'rgba(212, 175, 55, 0.06)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: GOLD, marginBottom: '24px' }}>
            {t('ammk.enginesTitle')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(t('ammk.engines', { returnObjects: true }) as Array<{name: string, desc: string}>).map((engine, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px'
              }}>
                <span style={{ 
                  fontSize: '1.5rem', fontWeight: 700, color: GOLD,
                  minWidth: '32px', textAlign: 'center'
                }}>
                  {i + 1}
                </span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: GOLD, marginBottom: '4px' }}>{engine.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{engine.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customization */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {(t('ammk.customization', { returnObjects: true }) as Array<{title: string, desc: string}>).map((item, i) => (
            <div key={i} style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: GOLD, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMMk;
