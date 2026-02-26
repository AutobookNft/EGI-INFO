/**
 * assemblies.ts — Mappa pageId → lista ordinata di slug mattoncini
 *
 * QUESTA È LA TABELLA DI JOIN tra pagine e mattoncini.
 * Aggiungere un mattoncino a una pagina = aggiungere il suo slug qui.
 * Zero codice React da modificare.
 *
 * Gli slug devono corrispondere ESATTAMENTE ai nomi dei componenti
 * in src/components/mattoncini/florence/index.ts
 */

export type MattonciniSlug =
    // Hero & Intro
    | 'Motto'
    | 'WhatWeDo'
    | 'Impact'
    | 'Intro'
    // 12 Problemi
    | 'Problem1'
    | 'Problem2'
    | 'Problem3'
    | 'Problem4'
    | 'Problem5'
    | 'Problem6'
    | 'Problem7'
    | 'Problem8'
    | 'Problem9'
    | 'Problem10'
    | 'Problem11'
    | 'Problem12'
    // HowItWorks classic
    | 'HowItWorks1'
    | 'HowItWorks2'
    | 'HowItWorks3'
    // AMMk
    | 'AMMk'
    | 'AMMkUsers'
    | 'AMMkEngines'
    | 'AMMkCustom'
    // Technology
    | 'Technology'
    | 'TechUser'
    | 'TechSystem'
    | 'TechPerformance'
    // Core Info
    | 'Payments'
    | 'PaymentPhilosophy'
    | 'PaymentPlatformRole'
    | 'PaymentLevel1'
    | 'PaymentLevel2'
    | 'PaymentLevel3'
    | 'PaymentLevel4'
    | 'WalletRedemption'
    | 'Compliance'
    | 'Ecosystem'
    | 'NATAN'
    | 'Governance'
    // Pricing
    | 'PricingPrimary'
    | 'PricingSecondary'
    // Examples
    | 'ExamplesArt'
    | 'ExamplesMusic'
    | 'ExamplesBooks'
    | 'ExamplesEco'
    | 'ExamplesSport'
    | 'ExamplesFashion'
    | 'ExamplesHeritage'
    // Closing
    | 'Cases'
    | 'Roadmap'
    | 'FAQ'
    | 'CTAFinal'
    // Fondamenti
    | 'Premessa'
    | 'PrincipioFondo'
    | 'Cocreazione'
    | 'Visione'
    | 'Unicum'
    // How Protocol (Fase 3)
    | 'HowHero'
    | 'HowProtocol'
    | 'HowManipulators'
    | 'ManipulatorCard'
    | 'HowThread'
    | 'HowFuture'
    | 'HowCTA';

/**
 * La mappa pageId → mattoncini ordinati.
 * L'ordine dell'array è l'ordine di rendering sulla pagina.
 */
export const ASSEMBLIES: Record<string, MattonciniSlug[]> = {
    // ── /info/platform ─────────────────────────────────────────────────────────
    platform: [
        'HowHero',
        'HowProtocol',
        'HowManipulators',
        'HowThread',
        'HowFuture',
        'HowCTA',
    ],

    // ── /info/florence (pagina generale FlorenceEGI) ───────────────────────────
    florence: [
        'Motto',
        'WhatWeDo',
        'Intro',
        'Premessa',
        'PrincipioFondo',
        'Cocreazione',
        'Problem1',
        'Problem2',
        'Problem3',
        'Problem4',
        'Problem5',
        'Problem6',
        'Problem7',
        'Problem8',
        'Problem9',
        'Problem10',
        'Problem11',
        'Problem12',
        'HowItWorks1',
        'HowItWorks2',
        'HowItWorks3',
        'AMMk',
        'Payments',
        'PricingPrimary',
        'PricingSecondary',
        'Compliance',
        'Ecosystem',
        'NATAN',
        'Governance',
        'Visione',
        'Unicum',
        'Cases',
        'CTAFinal',
    ],

    // ── /archetypes/artist ─────────────────────────────────────────────────────
    // Fonte: EGI/docs/FlorenceEGI/Implementation/Attori/FlorenceEGI per Creator.md
    // (da configurare dopo lettura doc)
    artist: [
        'HowHero',
        'WhatWeDo',
        'Problem1',  // Commissioni alte
        'Problem2',  // Autenticità
        'Problem6',  // Royalty
        'Problem10', // Valore ignoto
        'Problem11', // Sei un numero
        'HowItWorks1',
        'HowItWorks2',
        'HowItWorks3',
        'NATAN',
        'PricingPrimary',
        'ExamplesArt',
        'ExamplesMusic',
        'HowCTA',
    ],

    // ── /archetypes/collector ─────────────────────────────────────────────────
    // Fonte: FlorenceEGI per Collezionisti e Acquirenti.md
    collector: [
        'HowHero',
        'WhatWeDo',
        'Problem3',  // Wallet complesso
        'Problem4',  // Speculazione
        'Problem5',  // Furto
        'HowItWorks1',
        'HowItWorks2',
        'HowItWorks3',
        'Ecosystem',
        'PricingSecondary',
        'Cases',
        'HowCTA',
    ],

    // ── /archetypes/entrepreneur ──────────────────────────────────────────────
    // Fonte: FlorenceEGI per Futuri Mecenati.md
    entrepreneur: [
        'HowHero',
        'Intro',
        'AMMk',
        'AMMkUsers',
        'AMMkEngines',
        'AMMkCustom',
        'Payments',
        'PaymentPhilosophy',
        'PricingPrimary',
        'PricingSecondary',
        'Compliance',
        'Governance',
        'HowCTA',
    ],

    // ── /archetypes/public-admin ──────────────────────────────────────────────
    // Fonte: natan.md + 07_NATAN §Tenant Specializzati §RAG per PA
    'public-admin': [
        'HowHero',
        'NATAN',
        'Problem7',  // GDPR
        'Problem8',  // MiCA
        'Compliance',
        'TechSystem',
        'HowThread',
        'HowCTA',
    ],
};

/**
 * Utility: data una lista di slug mattoncini, restituisce i pageId
 * in cui quel mattoncino è usato.
 *
 * Usata da MattonciniIndexPage per derivare i tag usedIn AUTOMATICAMENTE
 * senza hardcoding su ogni mattoncino.
 *
 * @example
 * getUsedInPages('HowCTA')
 * // → ['platform', 'artist', 'collector', 'entrepreneur', 'public-admin']
 */
export function getUsedInPages(slug: MattonciniSlug): string[] {
    return Object.entries(ASSEMBLIES)
        .filter(([, slugs]) => slugs.includes(slug))
        .map(([pageId]) => pageId);
}
