/**
 * pages.ts — Registro delle pagine di EGI-INFO
 *
 * FONTE UNICA DI VERITÀ per la lista delle pagine del sito.
 * Ogni pagina ha un id univoco usato in assemblies.ts per comporre
 * la lista di mattoncini da montare.
 *
 * Aggiungere una pagina = aggiungere un oggetto qui + entry in assemblies.ts.
 */

export interface PageDefinition {
    /** ID univoco della pagina — usato come chiave in assemblies.ts */
    id: string;
    /** Route React Router associata */
    route: string;
    /** Label human-readable (per MattonciniIndexPage e tag usedIn) */
    label: string;
    /** Audience primaria */
    audience: string;
    /** Badge colore per i tag usedIn (classe CSS o hex) */
    badgeColor: string;
}

export const PAGES: PageDefinition[] = [
    // ── Info generali ──────────────────────────────────────────────────────────
    {
        id: 'platform',
        route: '/info/platform',
        label: 'pages.howItWorks.title',
        audience: 'Tutti',
        badgeColor: '#d4af37', // oro
    },
    {
        id: 'florence',
        route: '/info/florence',
        label: 'pages.florenceEgi.title',
        audience: 'Tutti',
        badgeColor: '#6b7280', // grigio
    },

    // ── Audience / Archetypes ──────────────────────────────────────────────────
    {
        id: 'artist',
        route: '/archetypes/artist',
        label: 'pages.artists.title',
        audience: 'Creator',
        badgeColor: '#7c3aed', // viola
    },
    {
        id: 'collector',
        route: '/archetypes/collector',
        label: 'pages.collectors.title',
        audience: 'Collector',
        badgeColor: '#1d4ed8', // blu
    },
    {
        id: 'entrepreneur',
        route: '/archetypes/entrepreneur',
        label: 'pages.entrepreneurs.title',
        audience: 'Company',
        badgeColor: '#059669', // verde
    },
    {
        id: 'public-admin',
        route: '/archetypes/public-admin',
        label: 'Per la PA',
        audience: 'PA_ENTITY',
        badgeColor: '#ea580c', // arancio
    },
];

/** Mappa id → PageDefinition per lookup O(1) */
export const PAGE_MAP: Record<string, PageDefinition> = Object.fromEntries(
    PAGES.map((p) => [p.id, p])
);
