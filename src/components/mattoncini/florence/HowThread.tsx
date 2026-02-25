/**
 * @component HowThread
 * @description "Il Filo Rosso: cosa accomuna tutto" — 4 item con testo
 *              che descrivono i denominatori comuni di tutti i manipolatori EGI:
 *              Algorand, EPP, autenticità on-chain, trasparenza.
 * @i18nKey florence.how.thread
 * @usedIn FlorenceEGIPage, ArtistPage, CollectorPage, PublicAdminPage
 */

import { useTranslation } from 'react-i18next';

const COLORS = {
    darkCard: '#111118',
    border: 'rgba(255,255,255,0.08)',
    muted: 'rgba(255,255,255,0.55)',
} as const;

export function HowThread(): JSX.Element {
    const { t } = useTranslation('florence');

    const items = [
        t('how.thread.item1'),
        t('how.thread.item2'),
        t('how.thread.item3'),
        t('how.thread.item4'),
    ];

    return (
        <section
            aria-labelledby="how-thread-title"
            style={{ marginBottom: '2.5rem' }}
        >
            <h2
                id="how-thread-title"
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: `1px solid ${COLORS.border}`,
                }}
            >
                {t('how.thread.title')}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {items.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '1rem 1.25rem',
                            background: COLORS.darkCard,
                            borderRadius: '10px',
                            border: `1px solid ${COLORS.border}`,
                            fontSize: '0.9rem',
                            color: COLORS.muted,
                            lineHeight: 1.6,
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HowThread;
