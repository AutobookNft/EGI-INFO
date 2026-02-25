/**
 * @component HowProtocol
 * @description Card "EGI è un protocollo, non un prodotto".
 *              Spiega il concetto di contenitore neutro su Algorand +
 *              flowchart visuale con i chip (ART → NATAN → PT → Futuri).
 * @i18nKey florence.how.protocol
 * @usedIn FlorenceEGIPage
 */

import { useTranslation } from 'react-i18next';

const COLORS = {
    primary: '#a78bfa',
    dark: '#0a0a0f',
    darkCard: '#111118',
    border: 'rgba(255,255,255,0.08)',
    muted: 'rgba(255,255,255,0.55)',
} as const;

export function HowProtocol(): JSX.Element {
    const { t } = useTranslation('florence');

    const chips = [
        t('how.protocol.chip1'),
        t('how.protocol.chip2'),
        t('how.protocol.chip3'),
    ];

    return (
        <section
            aria-labelledby="how-protocol-title"
            style={{
                marginBottom: '2.5rem',
                padding: '1.5rem',
                background: COLORS.darkCard,
                borderRadius: '14px',
                border: `1px solid ${COLORS.border}`,
            }}
        >
            <h2
                id="how-protocol-title"
                style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: COLORS.primary,
                    marginBottom: '0.75rem',
                }}
            >
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
                {/* Nodo radice */}
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

                <span style={{ color: COLORS.muted, fontSize: '1rem' }} aria-hidden="true">→</span>

                {/* Chip progetti */}
                {chips.map((chip, i) => (
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

                {/* Chip futuri (opacizzato) */}
                <span style={{
                    padding: '0.3rem 0.9rem',
                    background: COLORS.dark,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: COLORS.muted,
                    opacity: 0.65,
                }}>
                    {t('how.protocol.chip4')}
                </span>
            </div>
        </section>
    );
}

export default HowProtocol;
