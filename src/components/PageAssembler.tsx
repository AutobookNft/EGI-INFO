/**
 * PageAssembler.tsx
 *
 * Componente che, dato un pageId, legge assemblies.ts e monta
 * i mattoncini corretti nell'ordine corretto.
 *
 * USO:
 *   <PageAssembler pageId="artist" />
 *
 * Aggiungere un mattoncino a una pagina = una riga in assemblies.ts.
 * Zero modifica a questo componente.
 */

import React, { Suspense, lazy } from 'react';
import type { ComponentType } from 'react';
import type { MattonciniSlug } from '@/config/assemblies';
import { ASSEMBLIES } from '@/config/assemblies';

// --- Tipi ----------------------------------------------------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyModule = Record<string, any>;

/** Tipo per un componente React che accetta qualsiasi prop */
type LazyComponent = ComponentType<Record<string, unknown>>;

// ManipulatorCard NON è nel REGISTRY: richiede props obbligatorie specifiche
// e viene montato internamente da HowManipulators.
type RegistrySlug = Exclude<MattonciniSlug, 'ManipulatorCard'>;

// --- Normalizzazione export -----------------------------------------------
// Alcuni mattoncini usano `export function Foo()` (named export),
// altri `export default function Foo()` (default export).
// React.lazy richiede `{ default: Component }`.
// normalizeModule() garantisce che entrambi i formati funzionino.
function normalizeModule(slug: string) {
    return (mod: AnyModule): { default: LazyComponent } => {
        if (mod.default) return mod as { default: LazyComponent };
        // named export con stesso nome del slug (es. "Premessa" → mod.Premessa)
        if (mod[slug]) return { default: mod[slug] as LazyComponent };
        // fallback: primo export trovato
        const firstKey = Object.keys(mod)[0];
        return { default: mod[firstKey] as LazyComponent };
    };
}


const REGISTRY: Record<RegistrySlug, () => Promise<{ default: LazyComponent }>> = {
    Motto: () => import('@/components/mattoncini/florence/Motto'),
    WhatWeDo: () => import('@/components/mattoncini/florence/WhatWeDo'),
    Impact: () => import('@/components/mattoncini/florence/Impact'),
    Intro: () => import('@/components/mattoncini/florence/Intro'),
    Problem1: () => import('@/components/mattoncini/florence/Problem1'),
    Problem2: () => import('@/components/mattoncini/florence/Problem2'),
    Problem3: () => import('@/components/mattoncini/florence/Problem3'),
    Problem4: () => import('@/components/mattoncini/florence/Problem4'),
    Problem5: () => import('@/components/mattoncini/florence/Problem5'),
    Problem6: () => import('@/components/mattoncini/florence/Problem6'),
    Problem7: () => import('@/components/mattoncini/florence/Problem7'),
    Problem8: () => import('@/components/mattoncini/florence/Problem8'),
    Problem9: () => import('@/components/mattoncini/florence/Problem9'),
    Problem10: () => import('@/components/mattoncini/florence/Problem10'),
    Problem11: () => import('@/components/mattoncini/florence/Problem11'),
    Problem12: () => import('@/components/mattoncini/florence/Problem12'),
    HowItWorks1: () => import('@/components/mattoncini/florence/HowItWorks1'),
    HowItWorks2: () => import('@/components/mattoncini/florence/HowItWorks2'),
    HowItWorks3: () => import('@/components/mattoncini/florence/HowItWorks3'),
    AMMk: () => import('@/components/mattoncini/florence/AMMk'),
    AMMkUsers: () => import('@/components/mattoncini/florence/AMMkUsers'),
    AMMkEngines: () => import('@/components/mattoncini/florence/AMMkEngines'),
    AMMkCustom: () => import('@/components/mattoncini/florence/AMMkCustom'),
    Technology: () => import('@/components/mattoncini/florence/Technology'),
    TechUser: () => import('@/components/mattoncini/florence/TechUser'),
    TechSystem: () => import('@/components/mattoncini/florence/TechSystem'),
    TechPerformance: () => import('@/components/mattoncini/florence/TechPerformance'),
    Payments: () => import('@/components/mattoncini/florence/Payments'),
    PaymentPhilosophy: () => import('@/components/mattoncini/florence/PaymentPhilosophy'),
    PaymentPlatformRole: () => import('@/components/mattoncini/florence/PaymentPlatformRole'),
    PaymentLevel1: () => import('@/components/mattoncini/florence/PaymentLevel1'),
    PaymentLevel2: () => import('@/components/mattoncini/florence/PaymentLevel2'),
    PaymentLevel3: () => import('@/components/mattoncini/florence/PaymentLevel3'),
    PaymentLevel4: () => import('@/components/mattoncini/florence/PaymentLevel4'),
    WalletRedemption: () => import('@/components/mattoncini/florence/WalletRedemption'),
    Compliance: () => import('@/components/mattoncini/florence/Compliance'),
    Ecosystem: () => import('@/components/mattoncini/florence/Ecosystem'),
    NATAN: () => import('@/components/mattoncini/florence/NATAN'),
    Governance: () => import('@/components/mattoncini/florence/Governance'),
    PricingPrimary: () => import('@/components/mattoncini/florence/PricingPrimary'),
    PricingSecondary: () => import('@/components/mattoncini/florence/PricingSecondary'),
    ExamplesArt: () => import('@/components/mattoncini/florence/ExamplesArt'),
    ExamplesMusic: () => import('@/components/mattoncini/florence/ExamplesMusic'),
    ExamplesBooks: () => import('@/components/mattoncini/florence/ExamplesBooks'),
    ExamplesEco: () => import('@/components/mattoncini/florence/ExamplesEco'),
    ExamplesSport: () => import('@/components/mattoncini/florence/ExamplesSport'),
    ExamplesFashion: () => import('@/components/mattoncini/florence/ExamplesFashion'),
    ExamplesHeritage: () => import('@/components/mattoncini/florence/ExamplesHeritage'),
    Cases: () => import('@/components/mattoncini/florence/Cases'),
    Roadmap: () => import('@/components/mattoncini/florence/Roadmap'),
    FAQ: () => import('@/components/mattoncini/florence/FAQ'),
    CTAFinal: () => import('@/components/mattoncini/florence/CTAFinal'),
    // Named exports — normalizzati con normalizeModule()
    Premessa: () => import('@/components/mattoncini/florence/Premessa').then(normalizeModule('Premessa')),
    PrincipioFondo: () => import('@/components/mattoncini/florence/PrincipioFondo').then(normalizeModule('PrincipioFondo')),
    Cocreazione: () => import('@/components/mattoncini/florence/Cocreazione').then(normalizeModule('Cocreazione')),
    Visione: () => import('@/components/mattoncini/florence/Visione').then(normalizeModule('Visione')),
    Unicum: () => import('@/components/mattoncini/florence/Unicum').then(normalizeModule('Unicum')),
    HowHero: () => import('@/components/mattoncini/florence/HowHero').then(normalizeModule('HowHero')),
    HowProtocol: () => import('@/components/mattoncini/florence/HowProtocol').then(normalizeModule('HowProtocol')),
    HowManipulators: () => import('@/components/mattoncini/florence/HowManipulators').then(normalizeModule('HowManipulators')),
    HowThread: () => import('@/components/mattoncini/florence/HowThread').then(normalizeModule('HowThread')),
    HowFuture: () => import('@/components/mattoncini/florence/HowFuture').then(normalizeModule('HowFuture')),
    HowCTA: () => import('@/components/mattoncini/florence/HowCTA').then(normalizeModule('HowCTA')),
};


// --- Props ---------------------------------------------------------------

interface PageAssemblerProps {
    /** ID della pagina (deve esistere in assemblies.ts ASSEMBLIES) */
    pageId: string;
    /** Props extra da passare a ogni mattoncino (es. variant, className) */
    mattonciniProps?: Record<string, unknown>;
}

// --- Componente ----------------------------------------------------------

const PageAssembler: React.FC<PageAssemblerProps> = ({ pageId, mattonciniProps = {} }) => {
    const slugs = ASSEMBLIES[pageId];

    if (!slugs || slugs.length === 0) {
        if (import.meta.env.DEV) {
            console.warn(`[PageAssembler] pageId "${pageId}" non trovato in assemblies.ts`);
        }
        return null;
    }

    return (
        <>
            {slugs.map((slug) => {
                // ManipulatorCard non è nel REGISTRY (richiede props specifiche)
                // e viene montato internamente da HowManipulators.
                if (slug === 'ManipulatorCard') return null;

                const importFn = REGISTRY[slug as RegistrySlug];
                if (!importFn) {
                    if (import.meta.env.DEV) {
                        console.warn(`[PageAssembler] Slug "${slug}" non trovato nel REGISTRY`);
                    }
                    return null;
                }

                const LazyComp = lazy(importFn as Parameters<typeof lazy>[0]);

                return (
                    <Suspense key={slug} fallback={null}>
                        <LazyComp {...mattonciniProps} />
                    </Suspense>
                );
            })}
        </>
    );
};

export default PageAssembler;
