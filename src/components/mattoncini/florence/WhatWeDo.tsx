/**
 * Mattoncino: Chi è FlorenceEGI — What We Do
 *
 * Identità principale: FlorenceEGI è un Asset Market Maker.
 * Come Shopify per i prodotti, FlorenceEGI per gli asset.
 *
 * Fonti ufficiali:
 *   - FlorenceEGI_White_Paper_VERIFIED.md
 *   - 02_Architettura_Tecnica.md
 *   - 01_Fondamenti_e_Visione.md
 *   - EGI-HUB-HOME-REACT / mobile/data/homepage.ts
 *
 * Chiave JSON: florence.whatWeDo
 * Rotta test: /info/florence/what-we-do
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const GOLD = '#d4af37';
const GREEN = '#4ade80';
const PURPLE = '#a78bfa';
const BLUE = '#60a5fa';
const RED = '#f87171';

interface Pillar {
  icon: string;
  title: string;
  desc: string;
}

interface Highlight {
  value: string;
  label: string;
}

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation('florence');
  const pillars = t('whatWeDo.pillars', { returnObjects: true }) as Pillar[];
  const highlights = t('whatWeDo.highlights', { returnObjects: true }) as Highlight[];

  return (
    <section style={{ minHeight: '100vh', padding: '80px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* ── 1. IDENTITÀ: AMMk ────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>

          {/* Badge */}
          <span style={{
            display: 'inline-block',
            padding: '8px 22px',
            background: `${GOLD}18`,
            border: `1px solid ${GOLD}55`,
            borderRadius: '50px',
            color: GOLD,
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            marginBottom: '28px'
          }}>
            {t('whatWeDo.badge')}
          </span>

          {/* Titolo principale — GOLD */}
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: 800,
            color: GOLD,
            marginBottom: '28px',
            lineHeight: 1.25,
            maxWidth: '820px',
            margin: '0 auto 28px'
          }}>
            {t('whatWeDo.title')}
          </h1>

          {/* Analogia Shopify */}
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.75,
            maxWidth: '740px',
            margin: '0 auto'
          }}>
            {t('whatWeDo.ammkAnalogy')}
          </p>
        </div>

        {/* ── 2. PRODOTTO vs ASSET ─────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}>
          {/* Prodotto */}
          <div style={{
            background: `${RED}0d`,
            border: `1px solid ${RED}40`,
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📦</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: RED, marginBottom: '10px' }}>
              {t('whatWeDo.diffProduct')}
            </h3>
          </div>

          {/* Asset */}
          <div style={{
            background: `${GREEN}0d`,
            border: `2px solid ${GREEN}55`,
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💎</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: GREEN, marginBottom: '10px' }}>
              {t('whatWeDo.diffAsset')}
            </h3>
          </div>
        </div>

        {/* Nota sull'asset */}
        <p style={{
          textAlign: 'center',
          fontSize: '1rem',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.7,
          maxWidth: '700px',
          margin: '0 auto 60px',
          fontStyle: 'italic'
        }}>
          {t('whatWeDo.diffNote')}
        </p>

        {/* ── 3. I TRE PILASTRI DELL'EGI ───────────────────────────────── */}
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '28px'
        }}>
          {t('whatWeDo.pillarsTitle')}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {pillars.map((pillar, i) => (
            <div key={i} style={{
              background: 'rgba(30,30,40,0.6)',
              border: `1px solid ${[PURPLE, GOLD, GREEN][i]}40`,
              borderRadius: '20px',
              padding: '32px 28px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{pillar.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: [PURPLE, GOLD, GREEN][i], marginBottom: '12px' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── 4. CO-CREAZIONE ──────────────────────────────────────────── */}
        <div style={{
          background: `${BLUE}0a`,
          border: `1px solid ${BLUE}30`,
          borderRadius: '20px',
          padding: '40px',
          marginBottom: '50px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
            {t('whatWeDo.coTitle')}
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto' }}>
            {t('whatWeDo.coBody')}
          </p>
        </div>

        {/* ── 5. HIGHLIGHTS NUMERICI ───────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {highlights.map((h, i) => (
            <div key={i} style={{
              background: `${GOLD}08`,
              border: `1px solid ${GOLD}25`,
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: GOLD, lineHeight: 1, marginBottom: '8px' }}>
                {h.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── NOTA ─────────────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
            {t('whatWeDo.note')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
