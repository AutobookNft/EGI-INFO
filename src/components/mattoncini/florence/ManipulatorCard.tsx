/**
 * @component ManipulatorCard
 * @description Card atomica per un singolo "manipolatore" del protocollo EGI.
 *              Riceve TUTTO il testo già tradotto come props — zero i18n interno.
 *              Questo la rende assemblabile su qualsiasi pagina audience
 *              (es. solo la card ART per la pagina Artisti).
 *
 * @usedIn HowManipulators, ArtistPage, CollectorPage, PublicAdminPage, ...
 */

import React from 'react';

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface ManipulatorCardProps {
    /** Colore accent (hex) — es. '#a78bfa' per ART, '#60a5fa' per NATAN, '#d4af37' per PT */
    accentColor: string;
    /** Colore bordo card (rgba con opacità) */
    borderColor: string;
    /** Colore sfondo card (rgba con opacità) */
    bgColor: string;
    /** Emoji icona */
    icon: string;
    /** Label tag sopra al titolo — es. "ARTE & MARKETPLACE" */
    tag: string;
    /** Titolo mattoncino — es. "Florence ART" */
    title: string;
    /** Paragrafo descrittivo */
    desc: string;
    /** Lista feature con testo già tradotto */
    features: string[];
    /** Testo "Chi guadagna" */
    earn: string;
    /** Label fisso "Chi guadagna:" (tradotto dal chiamante) */
    earnLabel: string;
    /** URL piattaforma (opzionale) */
    link?: string;
    /** Label link (opzionale) */
    linkLabel?: string;
}

// ─── COLORS ──────────────────────────────────────────────────────────────────

const COLORS = {
    border: 'rgba(255,255,255,0.08)',
    muted: 'rgba(255,255,255,0.55)',
} as const;

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export function ManipulatorCard({
    accentColor,
    borderColor,
    bgColor,
    icon,
    tag,
    title,
    desc,
    features,
    earn,
    earnLabel,
    link,
    linkLabel = '→',
}: ManipulatorCardProps): JSX.Element {
    return (
        <article
            style={{
                padding: '1.5rem',
                background: bgColor,
                borderRadius: '14px',
                border: `1px solid ${borderColor}`,
            }}
        >
            {/* ── Header ─────────────────────────────────────────────── */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                {/* Icona */}
                <div
                    style={{
                        width: '44px', height: '44px',
                        borderRadius: '10px',
                        background: bgColor,
                        border: `1px solid ${borderColor}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.4rem', flexShrink: 0,
                    }}
                    aria-hidden="true"
                >
                    {icon}
                </div>

                {/* Tag + Titolo */}
                <div>
                    <p style={{
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700,
                        color: accentColor,
                        marginBottom: '0.2rem',
                    }}>
                        {tag}
                    </p>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: accentColor }}>
                        {title}
                    </h3>
                </div>
            </div>

            {/* ── Descrizione ────────────────────────────────────────── */}
            <p style={{ color: COLORS.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                {desc}
            </p>

            {/* ── Features ───────────────────────────────────────────── */}
            <ul
                aria-label={title}
                style={{
                    listStyle: 'none', padding: 0, margin: '0 0 1rem',
                    display: 'flex', flexDirection: 'column', gap: '0.5rem',
                }}
            >
                {features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                        <span style={{ color: accentColor, flexShrink: 0, marginTop: '2px' }} aria-hidden="true">✓</span>
                        <span style={{ color: '#fff', lineHeight: 1.5 }}>{f}</span>
                    </li>
                ))}
            </ul>

            {/* ── Chi guadagna ───────────────────────────────────────── */}
            <div style={{
                paddingTop: '1rem',
                borderTop: `1px solid ${COLORS.border}`,
                display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
            }}>
                <span style={{ color: accentColor, flexShrink: 0, fontSize: '1rem' }} aria-hidden="true">💰</span>
                <p style={{ fontSize: '0.82rem', color: COLORS.muted, lineHeight: 1.5 }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{earnLabel} </span>
                    {earn}
                </p>
            </div>

            {/* ── Link piattaforma ───────────────────────────────────── */}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginTop: '1rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: accentColor,
                        textDecoration: 'none',
                    }}
                >
                    {linkLabel}
                </a>
            )}
        </article>
    );
}

export default ManipulatorCard;
