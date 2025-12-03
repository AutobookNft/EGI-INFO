/**
 * Mattoncino: Intro - Non Siamo un Marketplace NFT
 * 
 * Spiega la differenza fondamentale di FlorenceEGI
 * 
 * Chiave JSON: florence.intro
 * Rotta test: /info/florence/intro
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const GOLD = '#d4af37';
const PURPLE = '#a855f7';
const GREEN = '#4ade80';
const RED = '#f87171';

interface Step {
  number: string;
  title: string;
  description: string;
}

const Intro: React.FC = () => {
  const { t } = useTranslation('florence');
  const others = t('intro.others', { returnObjects: true }) as string[];
  const florence = t('intro.florence', { returnObjects: true }) as string[];
  const steps = t('intro.steps', { returnObjects: true }) as Step[];
  const listItems = t('intro.list', { returnObjects: true }) as string[];

  return (
    <section 
      style={{
        minHeight: '100vh',
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #12121a 100%)'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: 'rgba(168, 85, 247, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            borderRadius: '50px',
            color: PURPLE,
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '24px'
          }}>
            {t('intro.badge')}
          </span>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            {t('intro.title')}
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
            color: GOLD,
            fontWeight: 600,
            marginBottom: '20px'
          }}>
            {t('intro.subtitle')}
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {t('intro.description')}
          </p>
        </div>

        {/* Il Concept */}
        <div style={{
          background: 'rgba(30, 30, 40, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '50px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '1.75rem' }}>💡</span>
            {t('intro.conceptTitle')}
          </h2>
          
          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            {t('intro.conceptDesc')}
          </p>

          {/* Lista cosa puoi EGIZZARE */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {listItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px'
              }}>
                <span style={{ color: GOLD, fontSize: '1.25rem' }}>✓</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* La Differenza Chiave - Confronto */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {/* VECCHIO MODO */}
          <div style={{
            background: 'rgba(248, 113, 113, 0.08)',
            border: '1px solid rgba(248, 113, 113, 0.25)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '2rem' }}>❌</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: RED, margin: 0 }}>
                {t('intro.ui.othersTitle')}
              </h3>
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              {t('intro.differenceOld')}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {others.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ color: RED }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NUOVO MODO */}
          <div style={{
            background: 'rgba(74, 222, 128, 0.08)',
            border: '1px solid rgba(74, 222, 128, 0.25)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '2rem' }}>✓</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: GREEN, margin: 0 }}>
                {t('intro.ui.florenceTitle')}
              </h3>
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              {t('intro.differenceNew')}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {florence.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ color: GREEN }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zero Tecnicismi */}
        <div style={{
          background: `linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)`,
          border: `1px solid rgba(212, 175, 55, 0.3)`,
          borderRadius: '24px',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            {t('intro.ui.zeroTechTitle')}
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.7,
            marginBottom: '30px'
          }}>
            {t('intro.ui.zeroTechSubtitle')}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{
                  width: '40px',
                  height: '40px',
                  background: GOLD,
                  color: '#0a0a0a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.1rem'
                }}>
                  {step.number}
                </span>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#ffffff'
                }}>
                  {step.title}
                </span>
                {i < steps.length - 1 && (
                  <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '1.5rem', marginLeft: '8px' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
