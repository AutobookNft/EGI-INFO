/**
 * Mattoncino: Il Motto
 * 
 * "Se Esiste, EGIZZALO. Se lo EGIZZI, Vale."
 * 
 * Chiave JSON: florence.motto
 * Rotta test: /info/florence/motto
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const GOLD = '#d4af37';

interface Meaning {
  icon: string;
  title: string;
  description: string;
}

interface Highlight {
  icon: string;
  text: string;
}

const Motto: React.FC = () => {
  const { t } = useTranslation('florence');
  const meanings = t('motto.meanings', { returnObjects: true }) as Meaning[];
  const highlights = t('motto.highlights', { returnObjects: true }) as Highlight[];

  return (
    <section 
      style={{
        minHeight: '100vh',
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Badge */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '50px',
            color: GOLD,
            fontSize: '14px',
            fontWeight: 600
          }}>
            {t('motto.badge')}
          </span>
        </div>

        {/* Il Motto principale */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '40px',
          lineHeight: 1.2
        }}>
          <span style={{ color: '#ffffff' }}>Se Esiste, </span>
          <span style={{
            background: 'linear-gradient(90deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            EGIZZALO
          </span>
          <span style={{ color: '#ffffff' }}>.</span>
          <br />
          <span style={{ color: '#ffffff' }}>Se lo </span>
          <span style={{
            background: 'linear-gradient(90deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            EGIZZI
          </span>
          <span style={{ color: '#ffffff' }}>, </span>
          <span style={{
            background: 'linear-gradient(90deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Vale
          </span>
          <span style={{ color: '#ffffff' }}>.</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
          color: GOLD,
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '60px',
          lineHeight: 1.6
        }}>
          {t('hero.subheadline')}
        </p>

        {/* Spiegazione */}
        <div style={{
          background: 'rgba(30, 30, 40, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '20px',
          padding: '40px',
          marginBottom: '50px'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '24px'
          }}>
            {t('motto.ui.meaningTitle')}
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            {t('motto.ui.meaningSubtitle')}
          </p>

          {/* Meanings Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {meanings.map((item, i) => (
              <div key={i} style={{
                padding: '20px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: GOLD, marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          {highlights.map((item, i) => (
            <div key={i} style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <a
            href="/register"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: 'linear-gradient(90deg, #d4af37, #b8960c)',
              color: '#0a0a0a',
              fontWeight: 700,
              fontSize: '1.125rem',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            {t('hero.ctaPrimary')}
            <span>→</span>
          </a>
          
          <a
            href="#how-it-works"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: 'transparent',
              border: '2px solid rgba(212, 175, 55, 0.6)',
              color: '#d4af37',
              fontWeight: 600,
              fontSize: '1.125rem',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Motto;
