/**
 * Mattoncino: NATAN AI - L'Assistente Intelligente
 * 
 * Mostra le funzionalità di NATAN AI e l'approccio etico
 * 
 * Chiave JSON i18n: florence.natan
 * Rotta test: /info/florence/natan
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  blue: '#60a5fa',
  green: '#4ade80',
  purple: '#a78bfa',
  cyan: '#22d3ee',
} as const;

const FEATURE_ICONS = ['💰', '✍️', '📊', '🎯'] as const;
const FEATURE_COLORS = [COLORS.green, COLORS.blue, COLORS.purple, COLORS.gold] as const;

// ============================================
// COMPONENT
// ============================================
const NATAN: React.FC = () => {
  const { t } = useTranslation('florence');
  
  // Estrai dati da i18n
  const features = t('natan.features', { returnObjects: true }) as string[];

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0a0a12 100%)'
      }}
      aria-labelledby="natan-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(34, 211, 238, 0.15)',
              border: '1px solid rgba(34, 211, 238, 0.35)',
              borderRadius: '50px',
              color: COLORS.cyan,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px'
            }}
          >
            🤖 {t('natan.badge')}
          </span>
          
          <h1
            id="natan-title"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '8px'
            }}
          >
            <GlossaryTerm termId="natan">{t('natan.title')}</GlossaryTerm>
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            color: COLORS.cyan,
            fontWeight: 500,
            marginBottom: '16px'
          }}>
            {t('natan.subtitle')}
          </p>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {t('natan.description', 'L\'assistente AI che ti aiuta a valorizzare le tue creazioni senza mai sostituire il tuo talento')}
          </p>
        </header>

        {/* VISUAL AI */}
        <div
          style={{
            position: 'relative',
            padding: '48px 32px',
            background: 'rgba(34, 211, 238, 0.03)',
            border: '1px solid rgba(34, 211, 238, 0.15)',
            borderRadius: '32px',
            marginBottom: '48px',
            overflow: 'hidden'
          }}
        >
          {/* Gradient glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          
          {/* Central Icon */}
          <div
            style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(167, 139, 250, 0.2))',
              border: '2px solid rgba(34, 211, 238, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              position: 'relative'
            }}
            aria-hidden="true"
          >
            🧠
            {/* Pulse animation */}
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '2px solid rgba(34, 211, 238, 0.3)',
                animation: 'pulse 2s infinite'
              }}
            />
          </div>

          {/* 4 FEATURES */}
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}
            aria-label={t('natan.featuresLabel')}
          >
            {features.map((feature, i) => (
              <li
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${FEATURE_COLORS[i]}40`,
                  borderRadius: '16px',
                  padding: '24px 20px',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${FEATURE_COLORS[i]}15`,
                    marginBottom: '12px',
                    fontSize: '1.5rem'
                  }}
                  aria-hidden="true"
                >
                  {FEATURE_ICONS[i]}
                </span>
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: FEATURE_COLORS[i],
                    margin: 0
                  }}
                >
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* SEZIONE ETICA */}
        <div
          style={{
            background: 'rgba(74, 222, 128, 0.05)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            borderRadius: '24px',
            padding: '40px 32px',
            marginBottom: '40px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span
              style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}
              aria-hidden="true"
            >
              ⚖️
            </span>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: COLORS.green,
                marginBottom: '8px'
              }}
            >
              {t('natan.ethics')}
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              {t('natan.ethicsDesc')}
            </p>
          </div>

          {/* Principi etici */}
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
            aria-label={t('natan.principlesLabel')}
          >
            {[
              { icon: '🔍', title: t('natan.p1Title'), desc: t('natan.p1Desc') },
              { icon: '🎨', title: t('natan.p2Title'), desc: t('natan.p2Desc') },
              { icon: '📊', title: t('natan.p3Title'), desc: t('natan.p3Desc') },
              { icon: '🔒', title: t('natan.p4Title'), desc: t('natan.p4Desc') },
            ].map((principle, i) => (
              <li
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}
                  aria-hidden="true"
                >
                  {principle.icon}
                </span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>
                    {principle.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                    {principle.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* COSA PUÒ FARE NATAN */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}
          role="group"
          aria-label={t('natan.capabilitiesLabel')}
        >
          {/* RAG */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(96, 165, 250, 0.08)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '16px'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }} aria-hidden="true">
              📚
            </span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: COLORS.blue, marginBottom: '8px' }}>
              <GlossaryTerm termId="rag">RAG</GlossaryTerm> {t('natan.ragTitle')}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              {t('natan.ragDesc')}
            </p>
          </div>

          {/* Valuation */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '16px'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }} aria-hidden="true">
              💎
            </span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: COLORS.gold, marginBottom: '8px' }}>
              <GlossaryTerm termId="valuation">Valuation</GlossaryTerm> {t('natan.valuationTitle')}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              {t('natan.valuationDesc')}
            </p>
          </div>

          {/* Market Engine */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(167, 139, 250, 0.08)',
              border: '1px solid rgba(167, 139, 250, 0.2)',
              borderRadius: '16px'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }} aria-hidden="true">
              🚀
            </span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: COLORS.purple, marginBottom: '8px' }}>
              <GlossaryTerm termId="natan-market-engine">Market Engine</GlossaryTerm>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              {t('natan.marketDesc')}
            </p>
          </div>
        </div>

      </div>
      
      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default NATAN;
