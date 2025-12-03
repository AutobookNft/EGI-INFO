/**
 * Mattoncino: Ecosystem - 4 Ruoli nel Circolo Virtuoso
 * 
 * Mostra i 4 ruoli: Creator, Co-Creator, Collector, EPP
 * e come interagiscono nel circolo virtuoso
 * 
 * Chiave JSON i18n: florence.ecosystem
 * Rotta test: /info/florence/ecosystem
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

// ============================================
// TYPES
// ============================================
interface EcosystemRole {
  name: string;
  desc: string;
}

// ============================================
// CONSTANTS (Design Tokens)
// ============================================
const COLORS = {
  gold: '#d4af37',
  blue: '#60a5fa',
  green: '#4ade80',
  purple: '#a78bfa',
} as const;

const ROLE_ICONS = ['🎨', '🤝', '💎', '🌍'] as const;
const ROLE_COLORS = [COLORS.gold, COLORS.blue, COLORS.purple, COLORS.green] as const;
const ROLE_TERMS = ['creator', 'co-creatore', 'collector', 'epp'] as const;

// ============================================
// COMPONENT
// ============================================
const Ecosystem: React.FC = () => {
  const { t } = useTranslation('florence');
  
  // Estrai dati da i18n
  const roles = t('ecosystem.roles', { returnObjects: true }) as EcosystemRole[];

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: '#0a0a0a'
      }}
      aria-labelledby="ecosystem-title"
      role="region"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '50px',
              color: COLORS.gold,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px'
            }}
          >
            🔄 {t('ecosystem.badge', 'Ecosistema')}
          </span>
          
          <h1
            id="ecosystem-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px'
            }}
          >
            {t('ecosystem.title')}
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {t('ecosystem.subtitle', 'Un sistema dove tutti vincono: creatori, sostenitori e pianeta')}
          </p>
        </header>

        {/* CIRCOLO VIRTUOSO VISUAL */}
        <div
          style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto 60px'
          }}
        >
          {/* 4 RUOLI in griglia */}
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
            aria-label={t('ecosystem.rolesLabel', 'I 4 ruoli dell\'ecosistema')}
          >
            {roles.map((role, i) => (
              <li
                key={i}
                style={{
                  background: `linear-gradient(135deg, ${ROLE_COLORS[i]}08 0%, ${ROLE_COLORS[i]}02 100%)`,
                  border: `2px solid ${ROLE_COLORS[i]}30`,
                  borderRadius: '24px',
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '100%',
                    height: '100%',
                    background: `radial-gradient(circle, ${ROLE_COLORS[i]}10 0%, transparent 70%)`,
                    pointerEvents: 'none'
                  }}
                  aria-hidden="true"
                />
                
                {/* Icona */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: `${ROLE_COLORS[i]}20`,
                    border: `2px solid ${ROLE_COLORS[i]}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '2rem'
                  }}
                  aria-hidden="true"
                >
                  {ROLE_ICONS[i]}
                </div>
                
                {/* Nome Ruolo con GlossaryTerm */}
                <h2
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: ROLE_COLORS[i],
                    marginBottom: '12px'
                  }}
                >
                  <GlossaryTerm termId={ROLE_TERMS[i]}>{role.name}</GlossaryTerm>
                </h2>
                
                {/* Descrizione */}
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {role.desc}
                </p>
              </li>
            ))}
          </ul>

          {/* Freccia centrale che indica il circolo */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              zIndex: 10
            }}
            aria-hidden="true"
          >
            <span style={{ fontSize: '2rem' }}>🔄</span>
          </div>
        </div>

        {/* FLUSSO DEL VALORE */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '32px',
            marginBottom: '40px'
          }}
        >
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: COLORS.gold,
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            {t('ecosystem.flowTitle', 'Come Fluisce il Valore')}
          </h3>
          
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}
            role="group"
            aria-label={t('ecosystem.flowLabel', 'Flusso del valore nell\'ecosistema')}
          >
            {/* Step 1 */}
            <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
              <span style={{ fontSize: '2rem' }} aria-hidden="true">🎨</span>
              <p style={{ fontSize: '0.85rem', color: COLORS.gold, margin: '4px 0 0' }}>
                {t('ecosystem.flow1', 'Creator crea')}
              </p>
            </div>
            
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }} aria-hidden="true">→</span>
            
            {/* Step 2 */}
            <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
              <span style={{ fontSize: '2rem' }} aria-hidden="true">🤝</span>
              <p style={{ fontSize: '0.85rem', color: COLORS.blue, margin: '4px 0 0' }}>
                {t('ecosystem.flow2', 'Co-Creator attiva')}
              </p>
            </div>
            
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }} aria-hidden="true">→</span>
            
            {/* Step 3 */}
            <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
              <span style={{ fontSize: '2rem' }} aria-hidden="true">💰</span>
              <p style={{ fontSize: '0.85rem', color: '#ffffff', margin: '4px 0 0' }}>
                {t('ecosystem.flow3', 'Valore generato')}
              </p>
            </div>
            
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }} aria-hidden="true">→</span>
            
            {/* Step 4 */}
            <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
              <span style={{ fontSize: '2rem' }} aria-hidden="true">🌍</span>
              <p style={{ fontSize: '0.85rem', color: COLORS.green, margin: '4px 0 0' }}>
                {t('ecosystem.flow4', '20% a EPP')}
              </p>
            </div>
            
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }} aria-hidden="true">→</span>
            
            {/* Step 5 */}
            <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
              <span style={{ fontSize: '2rem' }} aria-hidden="true">💎</span>
              <p style={{ fontSize: '0.85rem', color: COLORS.purple, margin: '4px 0 0' }}>
                {t('ecosystem.flow5', 'Collector custodisce')}
              </p>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}
          aria-label={t('ecosystem.highlightsLabel', 'Vantaggi dell\'ecosistema')}
        >
          {[
            { icon: '♾️', text: t('ecosystem.h1', 'Royalty perpetue per i Creator') },
            { icon: '🏆', text: t('ecosystem.h2', 'Riconoscimento eterno per Co-Creator') },
            { icon: '📈', text: t('ecosystem.h3', 'Valore che cresce nel tempo') },
            { icon: '🌱', text: t('ecosystem.h4', 'Impatto ambientale automatico') },
          ].map((item, i) => (
            <li
              key={i}
              style={{
                padding: '16px 20px',
                background: 'rgba(212, 175, 55, 0.06)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
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
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Ecosystem;
