/**
 * @component HowCTA
 * @description CTA finale della sezione "Come Funziona".
 *              Gradient card con titolo e testo di invito all'azione.
 * @i18nKey florence.how.cta
 * @usedIn FlorenceEGIPage, ArtistPage, CollectorPage, PublicAdminPage
 */

import { useTranslation } from 'react-i18next';

const COLORS = {
    border: 'rgba(255,255,255,0.08)',
    muted: 'rgba(255,255,255,0.55)',
} as const;

export function HowCTA(): JSX.Element {
    const { t } = useTranslation('florence');

    return (
        <div
            role="complementary"
            aria-label={t('how.cta.title')}
            style={{
                padding: '1.75rem',
                background: 'linear-gradient(135deg, rgba(167,139,250,0.10), rgba(96,165,250,0.10))',
                borderRadius: '14px',
                border: `1px solid ${COLORS.border}`,
                textAlign: 'center',
            }}
        >
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                {t('how.cta.title')}
            </p>
            <p style={{ fontSize: '0.875rem', color: COLORS.muted, lineHeight: 1.6 }}>
                {t('how.cta.body')}
            </p>
        </div>
    );
}

export default HowCTA;
