/**
 * @component HowManipulators
 * @description Aggregatore: titolo sezione + 3 card ManipulatorCard
 *              (Florence ART, NATAN LOC, Florence PT).
 *              Legge i18n internamente e costruisce l'array dati.
 * @i18nKey florence.how.manipulators + how.art + how.natan + how.pt
 * @usedIn FlorenceEGIPage
 */

import { useTranslation } from 'react-i18next';
import { ManipulatorCard, type ManipulatorCardProps } from './ManipulatorCard';

const COLORS = {
    muted: 'rgba(255,255,255,0.55)',
} as const;

export function HowManipulators(): JSX.Element {
    const { t } = useTranslation('florence');

    const earnLabel = t('how.earn.label');
    const visitLabel = t('how.visit.platform');

    const manipulators: ManipulatorCardProps[] = [
        {
            accentColor: '#a78bfa',
            borderColor: 'rgba(167,139,250,0.30)',
            bgColor: 'rgba(167,139,250,0.06)',
            icon: '🎨',
            tag: t('how.art.tag'),
            title: t('how.art.title'),
            desc: t('how.art.desc'),
            features: [
                t('how.art.f1'),
                t('how.art.f2'),
                t('how.art.f3'),
                t('how.art.f4'),
                t('how.art.f5'),
            ],
            earn: t('how.art.earn'),
            earnLabel,
            link: 'https://art.florenceegi.com',
            linkLabel: `${visitLabel} →`,
        },
        {
            accentColor: '#60a5fa',
            borderColor: 'rgba(96,165,250,0.30)',
            bgColor: 'rgba(96,165,250,0.06)',
            icon: '📄',
            tag: t('how.natan.tag'),
            title: t('how.natan.title'),
            desc: t('how.natan.desc'),
            features: [
                t('how.natan.f1'),
                t('how.natan.f2'),
                t('how.natan.f3'),
                t('how.natan.f4'),
            ],
            earn: t('how.natan.earn'),
            earnLabel,
            link: 'https://natan-loc.florenceegi.com',
            linkLabel: `${visitLabel} →`,
        },
        {
            accentColor: '#d4af37',
            borderColor: 'rgba(212,175,55,0.30)',
            bgColor: 'rgba(212,175,55,0.06)',
            icon: '📈',
            tag: t('how.pt.tag'),
            title: t('how.pt.title'),
            desc: t('how.pt.desc'),
            features: [
                t('how.pt.f1'),
                t('how.pt.f2'),
                t('how.pt.f3'),
                t('how.pt.f4'),
            ],
            earn: t('how.pt.earn'),
            earnLabel,
        },
    ];

    return (
        <section aria-labelledby="how-manipulators-title">
            {/* Titolo sezione */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h2
                    id="how-manipulators-title"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '0.25rem', color: '#fff' }}
                >
                    {t('how.manipulators.title')}
                </h2>
                <p style={{ color: COLORS.muted, fontSize: '0.9rem' }}>
                    {t('how.manipulators.subtitle')}
                </p>
            </div>

            {/* Le 3 card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2.5rem' }}>
                {manipulators.map((m, idx) => (
                    <ManipulatorCard key={idx} {...m} />
                ))}
            </div>
        </section>
    );
}

export default HowManipulators;
