/**
 * @component HowFuture
 * @description "I Prossimi Manipolatori" — griglia 6 settori futuri del
 *              protocollo EGI (Real Estate, Ricerca, Governance, Identità,
 *              Supply Chain, Welfare) + nota finale.
 * @i18nKey florence.how.future
 * @usedIn FlorenceEGIPage
 */

import { useTranslation } from 'react-i18next';

const COLORS = {
    dark: '#0a0a0f',
    border: 'rgba(255,255,255,0.08)',
    muted: 'rgba(255,255,255,0.55)',
} as const;

export function HowFuture(): JSX.Element {
    const { t } = useTranslation('florence');

    const items = [
        t('how.future.item1'),
        t('how.future.item2'),
        t('how.future.item3'),
        t('how.future.item4'),
        t('how.future.item5'),
        t('how.future.item6'),
    ];

    return (
        <section
            aria-labelledby="how-future-title"
            style={{
                marginBottom: '2.5rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(17,17,24,1), rgba(10,10,15,1))',
                borderRadius: '14px',
                border: `1px solid ${COLORS.border}`,
            }}
        >
            <h2
                id="how-future-title"
                style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}
            >
                {t('how.future.title')}
            </h2>

            <p style={{ color: COLORS.muted, fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {t('how.future.body')}
            </p>

            <ul
                aria-label={t('how.future.title')}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.75rem',
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1rem',
                }}
            >
                {items.map((item, i) => (
                    <li
                        key={i}
                        style={{
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
                        }}
                    >
                        <span aria-hidden="true">🔮</span>
                        {item}
                    </li>
                ))}
            </ul>

            <p style={{ fontSize: '0.78rem', color: COLORS.muted, fontStyle: 'italic' }}>
                {t('how.future.note')}
            </p>
        </section>
    );
}

export default HowFuture;
