/**
 * @component HowHero
 * @description Hero della sezione "Come Funziona il Protocollo EGI".
 *              Badge label + Titolo principale + Sottotitolo descrittivo.
 * @i18nKey florence.how.hero
 * @usedIn FlorenceEGIPage
 */

import { useTranslation } from 'react-i18next';

const COLORS = {
    primary: '#a78bfa',
    muted: 'rgba(255,255,255,0.55)',
} as const;

export function HowHero(): JSX.Element {
    const { t } = useTranslation('florence');

    return (
        <header style={{ marginBottom: '2.5rem' }}>
            {/* Badge label */}
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

            {/* Titolo */}
            <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 800,
                marginBottom: '0.75rem',
                lineHeight: 1.1,
                color: '#fff',
            }}>
                {t('how.hero.title')}
            </h1>

            {/* Sottotitolo */}
            <p style={{
                color: COLORS.muted,
                lineHeight: 1.7,
                maxWidth: '640px',
                fontSize: '1rem',
            }}>
                {t('how.hero.subtitle')}
            </p>
        </header>
    );
}

export default HowHero;
