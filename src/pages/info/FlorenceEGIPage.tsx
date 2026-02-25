/**
 * FlorenceEGIPage - La Piattaforma / Come Funziona il Protocollo EGI
 *
 * Mostra i 3 "manipolatori" del protocollo EGI:
 *   1. Florence ART  — arte & marketplace
 *   2. NATAN LOC     — documenti & PA
 *   3. Florence PT   — pure trading
 *
 * Contenuto fedele a https://florenceegi.com/how-it-works
 * Chiavi i18n: florence.how.*
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SeoHead } from '../../utils/seo/SeoHead';

// ─── COLORS ─────────────────────────────────────────────────────────────────
const COLORS = {
  gold: '#d4af37',
  primary: '#a78bfa',   // viola — Florence ART
  secondary: '#60a5fa',  // blu  — NATAN LOC
  green: '#4ade80',   // verde — Florence PT / EPP
  dark: '#0a0a0f',
  darkCard: '#111118',
  border: 'rgba(255,255,255,0.08)',
  muted: 'rgba(255,255,255,0.55)',
} as const;

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface Feature { text: string }

interface Manipulator {
  accentColor: string;
  borderColor: string;
  bgColor: string;
  icon: string;
  tag: string;
  title: string;
  desc: string;
  features: Feature[];
  earn: string;
  link?: string;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const FlorenceEGIPage: React.FC = () => {
  const { t } = useTranslation('florence');

  const manipulators: Manipulator[] = [
    {
      accentColor: COLORS.primary,
      borderColor: 'rgba(167,139,250,0.30)',
      bgColor: 'rgba(167,139,250,0.06)',
      icon: '🎨',
      tag: t('how.art.tag'),
      title: t('how.art.title'),
      desc: t('how.art.desc'),
      features: [
        { text: t('how.art.f1') },
        { text: t('how.art.f2') },
        { text: t('how.art.f3') },
        { text: t('how.art.f4') },
        { text: t('how.art.f5') },
      ],
      earn: t('how.art.earn'),
      link: 'https://art.florenceegi.com',
    },
    {
      accentColor: COLORS.secondary,
      borderColor: 'rgba(96,165,250,0.30)',
      bgColor: 'rgba(96,165,250,0.06)',
      icon: '📄',
      tag: t('how.natan.tag'),
      title: t('how.natan.title'),
      desc: t('how.natan.desc'),
      features: [
        { text: t('how.natan.f1') },
        { text: t('how.natan.f2') },
        { text: t('how.natan.f3') },
        { text: t('how.natan.f4') },
      ],
      earn: t('how.natan.earn'),
      link: 'https://natan-loc.florenceegi.com',
    },
    {
      accentColor: COLORS.gold,
      borderColor: 'rgba(212,175,55,0.30)',
      bgColor: 'rgba(212,175,55,0.06)',
      icon: '📈',
      tag: t('how.pt.tag'),
      title: t('how.pt.title'),
      desc: t('how.pt.desc'),
      features: [
        { text: t('how.pt.f1') },
        { text: t('how.pt.f2') },
        { text: t('how.pt.f3') },
        { text: t('how.pt.f4') },
      ],
      earn: t('how.pt.earn'),
    },
  ];

  const futureItems = [
    t('how.future.item1'),
    t('how.future.item2'),
    t('how.future.item3'),
    t('how.future.item4'),
    t('how.future.item5'),
    t('how.future.item6'),
  ];

  const threadItems = [
    t('how.thread.item1'),
    t('how.thread.item2'),
    t('how.thread.item3'),
    t('how.thread.item4'),
  ];

  return (
    <article style={{ color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      {/* SEO */}
      <SeoHead
        meta={{
          title: t('how.page_title'),
          description: t('how.hero.subtitle'),
          url: '/info/platform',
          type: 'article',
        }}
      />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <header style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: COLORS.primary,
          fontWeight: 700,
          marginBottom: '0.5rem',
        }}>
          {t('how.hero.label')}
        </p>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          marginBottom: '0.75rem',
          lineHeight: 1.1,
        }}>
          {t('how.hero.title')}
        </h1>
        <p style={{ color: COLORS.muted, lineHeight: 1.7, maxWidth: '640px' }}>
          {t('how.hero.subtitle')}
        </p>
      </header>

      {/* ── IL PROTOCOLLO ──────────────────────────────────────────── */}
      <section
        aria-labelledby="protocol-title"
        style={{
          marginBottom: '2.5rem',
          padding: '1.5rem',
          background: COLORS.darkCard,
          borderRadius: '14px',
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <h2 id="protocol-title" style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          color: COLORS.primary,
          marginBottom: '0.75rem',
        }}>
          {t('how.protocol.title')}
        </h2>
        <p style={{ color: COLORS.muted, fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
          {t('how.protocol.body1')}
        </p>
        <p style={{ color: COLORS.muted, fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          {t('how.protocol.body2')}
        </p>

        {/* Flowchart chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            padding: '0.3rem 0.9rem',
            background: 'rgba(167,139,250,0.15)',
            border: '1px solid rgba(167,139,250,0.35)',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: COLORS.primary,
          }}>
            EGI Protocol
          </span>
          <span style={{ color: COLORS.muted, fontSize: '1rem' }}>→</span>
          {[t('how.protocol.chip1'), t('how.protocol.chip2'), t('how.protocol.chip3')].map((chip, i) => (
            <span key={i} style={{
              padding: '0.3rem 0.9rem',
              background: COLORS.dark,
              border: `1px solid ${COLORS.border}`,
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#fff',
            }}>
              {chip}
            </span>
          ))}
          <span style={{
            padding: '0.3rem 0.9rem',
            background: COLORS.dark,
            border: `1px solid ${COLORS.border}`,
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: COLORS.muted,
            opacity: 0.7,
          }}>
            {t('how.protocol.chip4')}
          </span>
        </div>
      </section>

      {/* ── TITOLO SEZIONE MANIPOLATORI ────────────────────────────── */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '0.25rem' }}>
          {t('how.manipulators.title')}
        </h2>
        <p style={{ color: COLORS.muted, fontSize: '0.9rem' }}>
          {t('how.manipulators.subtitle')}
        </p>
      </div>

      {/* ── CARD MANIPOLATORI ──────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2.5rem' }}>
        {manipulators.map((m, idx) => (
          <article
            key={idx}
            style={{
              padding: '1.5rem',
              background: m.bgColor,
              borderRadius: '14px',
              border: `1px solid ${m.borderColor}`,
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '44px', height: '44px',
                borderRadius: '10px',
                background: m.bgColor,
                border: `1px solid ${m.borderColor}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', flexShrink: 0,
              }} aria-hidden="true">
                {m.icon}
              </div>
              <div>
                <p style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  color: m.accentColor,
                  marginBottom: '0.2rem',
                }}>
                  {m.tag}
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: m.accentColor }}>
                  {m.title}
                </h3>
              </div>
            </div>

            {/* Descrizione */}
            <p style={{ color: COLORS.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              {m.desc}
            </p>

            {/* Features */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {m.features.map((f, fi) => (
                <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                  <span style={{ color: m.accentColor, flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#fff', lineHeight: 1.5 }}>{f.text}</span>
                </li>
              ))}
            </ul>

            {/* Chi guadagna */}
            <div style={{
              paddingTop: '1rem',
              borderTop: `1px solid ${COLORS.border}`,
              display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
            }}>
              <span style={{ color: m.accentColor, flexShrink: 0, fontSize: '1rem' }}>💰</span>
              <p style={{ fontSize: '0.82rem', color: COLORS.muted, lineHeight: 1.5 }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>{t('how.earn.label')} </span>
                {m.earn}
              </p>
            </div>

            {/* Link piattaforma */}
            {m.link && (
              <a
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '1rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: m.accentColor,
                  textDecoration: 'none',
                }}
              >
                {t('how.visit.platform')} →
              </a>
            )}
          </article>
        ))}
      </div>

      {/* ── IL FILO ROSSO ──────────────────────────────────────────── */}
      <section aria-labelledby="thread-title" style={{ marginBottom: '2.5rem' }}>
        <h2 id="thread-title" style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: `1px solid ${COLORS.border}`,
        }}>
          {t('how.thread.title')}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {threadItems.map((item, i) => (
            <div key={i} style={{
              padding: '1rem 1.25rem',
              background: COLORS.darkCard,
              borderRadius: '10px',
              border: `1px solid ${COLORS.border}`,
              fontSize: '0.9rem',
              color: COLORS.muted,
              lineHeight: 1.6,
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── FUTURI MANIPOLATORI ────────────────────────────────────── */}
      <section
        aria-labelledby="future-title"
        style={{
          marginBottom: '2.5rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(17,17,24,1), rgba(10,10,15,1))',
          borderRadius: '14px',
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <h2 id="future-title" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {t('how.future.title')}
        </h2>
        <p style={{ color: COLORS.muted, fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {t('how.future.body')}
        </p>
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0.75rem',
          listStyle: 'none',
          padding: 0,
          margin: '0 0 1rem',
        }}
          aria-label={t('how.future.title')}
        >
          {futureItems.map((item, i) => (
            <li key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1rem',
              background: COLORS.dark,
              borderRadius: '8px',
              border: `1px solid ${COLORS.border}`,
              opacity: 0.75,
              fontSize: '0.82rem',
              color: COLORS.muted,
            }}>
              <span aria-hidden="true">🔮</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '0.78rem', color: COLORS.muted, fontStyle: 'italic' }}>
          {t('how.future.note')}
        </p>
      </section>

      {/* ── CTA FINALE ─────────────────────────────────────────────── */}
      <div style={{
        padding: '1.75rem',
        background: 'linear-gradient(135deg, rgba(167,139,250,0.10), rgba(96,165,250,0.10))',
        borderRadius: '14px',
        border: `1px solid ${COLORS.border}`,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {t('how.cta.title')}
        </p>
        <p style={{ fontSize: '0.875rem', color: COLORS.muted, lineHeight: 1.6 }}>
          {t('how.cta.body')}
        </p>
      </div>
    </article>
  );
};

export default FlorenceEGIPage;
