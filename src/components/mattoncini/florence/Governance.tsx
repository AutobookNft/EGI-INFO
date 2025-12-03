/**
 * Mattoncino: Governance - Governance Duale SRL + APS
 * 
 * Mostra la struttura di governance: SRL operativa + APS valoriale
 * 
 * Chiave JSON i18n: florence.governance
 * Rotta test: /info/florence/governance
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
} as const;

// ============================================
// COMPONENT
// ============================================
const Governance: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a'
      }}
      aria-labelledby="governance-title"
      role="region"
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(167, 139, 250, 0.15)',
              border: '1px solid rgba(167, 139, 250, 0.35)',
              borderRadius: '50px',
              color: COLORS.purple,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px'
            }}
          >
            🏛️ {t('governance.badge', 'Governance')}
          </span>
          
          <h1
            id="governance-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px'
            }}
          >
            <GlossaryTerm termId="governance-duale">{t('governance.title')}</GlossaryTerm>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {t('governance.subtitle', 'Equilibrio tra innovazione commerciale e missione etica')}
          </p>
        </header>

        {/* DUE COLONNE: SRL + APS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}
          role="group"
          aria-label={t('governance.structureLabel', 'Struttura governance duale')}
        >
          {/* SRL */}
          <article
            style={{
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(96, 165, 250, 0.02) 100%)',
              border: '2px solid rgba(96, 165, 250, 0.25)',
              borderRadius: '24px',
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden'
            }}
            aria-labelledby="srl-title"
          >
            {/* Top glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.blue}50)`
              }}
              aria-hidden="true"
            />
            
            {/* Icon */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                background: 'rgba(96, 165, 250, 0.15)',
                border: '2px solid rgba(96, 165, 250, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                fontSize: '2.5rem'
              }}
              aria-hidden="true"
            >
              🚀
            </div>
            
            {/* Title */}
            <h2
              id="srl-title"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: COLORS.blue,
                marginBottom: '12px'
              }}
            >
              <GlossaryTerm termId="florenceegi-core">{t('governance.srl.title')}</GlossaryTerm>
            </h2>
            
            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}
            >
              {t('governance.srl.desc')}
            </p>
            
            {/* Features */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {[
                t('governance.srl.f1', 'Sviluppo tecnologico'),
                t('governance.srl.f2', 'Operazioni commerciali'),
                t('governance.srl.f3', 'Scaling e crescita'),
                t('governance.srl.f4', 'Partnership strategiche'),
              ].map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.75)'
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: 'rgba(96, 165, 250, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      color: COLORS.blue
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          {/* APS */}
          <article
            style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.08) 0%, rgba(74, 222, 128, 0.02) 100%)',
              border: '2px solid rgba(74, 222, 128, 0.25)',
              borderRadius: '24px',
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden'
            }}
            aria-labelledby="aps-title"
          >
            {/* Top glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.green}50)`
              }}
              aria-hidden="true"
            />
            
            {/* Icon */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                background: 'rgba(74, 222, 128, 0.15)',
                border: '2px solid rgba(74, 222, 128, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                fontSize: '2.5rem'
              }}
              aria-hidden="true"
            >
              🛡️
            </div>
            
            {/* Title */}
            <h2
              id="aps-title"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: COLORS.green,
                marginBottom: '12px'
              }}
            >
              <GlossaryTerm termId="frangette-aps">{t('governance.aps.title')}</GlossaryTerm>
            </h2>
            
            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}
            >
              {t('governance.aps.desc')}
            </p>
            
            {/* Features */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {[
                t('governance.aps.f1', 'Custode della missione'),
                t('governance.aps.f2', 'Potere di veto etico'),
                t('governance.aps.f3', 'Verifica EPP'),
                t('governance.aps.f4', 'Tutela community'),
              ].map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.75)'
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: 'rgba(74, 222, 128, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      color: COLORS.green
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* EQUILIBRIO CENTRALE */}
        <div
          style={{
            background: 'rgba(212, 175, 55, 0.06)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '24px',
            padding: '40px 32px',
            textAlign: 'center',
            marginBottom: '48px'
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '2.5rem'
            }}
            aria-hidden="true"
          >
            ⚖️
          </div>
          
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: COLORS.gold,
              marginBottom: '16px'
            }}
          >
            {t('governance.balanceTitle', 'Equilibrio Perfetto')}
          </h3>
          
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            {t('governance.balanceDesc', 'La SRL può innovare e crescere liberamente, ma l\'APS ha il potere di intervenire se le decisioni commerciali compromettono la missione etica, ambientale o culturale di FlorenceEGI.')}
          </p>
        </div>

        {/* PERCHÉ FUNZIONA */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}
          role="group"
          aria-label={t('governance.whyWorksLabel', 'Perché funziona')}
        >
          {[
            { icon: '🎯', text: t('governance.w1', 'Profitto allineato ai valori') },
            { icon: '🔒', text: t('governance.w2', 'Trasparenza garantita') },
            { icon: '🌱', text: t('governance.w3', 'Impatto ambientale protetto') },
            { icon: '👥', text: t('governance.w4', 'Community al centro') },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '1.5rem' }} aria-hidden="true">{item.icon}</span>
              <span style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Governance;
