# EGI-INFO - TODO Sviluppo

**Ultimo aggiornamento:** 2025-01-14  
**Stato:** Fase 4 COMPLETATA ✅ - Pronto per Fase 5 (Glossary System)

---

## LEGENDA

- ⬜ Da fare
- 🔄 In corso
- ✅ Completato
- ❌ Bloccato

---

## FASE 1: INVENTARIO DOCUMENTAZIONE ✅

### 1.1 Scansione File Laravel

| File Sorgente | Stato | Argomenti Identificati |
|---------------|-------|------------------------|
| `info_egi.php` | ✅ | ~200 keys: hero, definition, 3 components (EPP/GOODS/INVENT), functions (rebind, tokenization, multirole, interface, signature), traits_utilities, advantages, cta, accessibility |
| `info_epp.php` | ✅ | ~150 keys: hero, programs (ARF forestry, APR plastic, BPE bees), impact, participation, technical |
| `info_florence_egi.php` | ✅ | ~550 keys: hero, intro, 12 problems (before/after), 7 example tabs (art/music/books/eco/sport/fashion/culture), 3 steps (how), 5 AMMk engines, tech (user/system/performance), 4 payment levels, 4 compliance areas, 3 ecosystem roles, NATAN (4 features), governance, pricing, cases, roadmap, FAQ |
| `info_co_create.php` | ✅ | ~150 keys: meta, schema, header, hero, navigation, cocreate (shared creation, private-to-public, opportunity), cocreator (permanent bond, visibility, profile, benefits), trader (strategy, EGI PT system, benefits, economic structure, ecosystem impact) |
| `why_cant_buy_egis_info.php` | ✅ | ~30 keys: hero, MVP section, reservations, roadmap, CTA, NATAN integration, accessibility |
| `natan.php` | ✅ | ~200 keys: chat interface, web search, persona selector, 6 personas, quick actions, sources, history, config panel, intelligent chunking |
| `coa_vocabulary.php` | ✅ | ~737 lines: GLOSSARIO ARTISTICO COMPLETO - tecniche (pittura, disegno, scultura, stampa, foto, digitale, tessile, ceramica, vetro, legno, cuoio, gioielleria), materiali, supporti (tele, pannelli, carte, pietre, metalli) |
| `coa_traits.php` | ✅ | ~200 keys: gestione traits CoA, categorie, modal vocabolario, PDF certificate labels |

[...resto inventario invariato...]

---

## FASE 2: SETUP STRUTTURA ✅

[...invariato...]

---

## FASE 3: TRADUZIONI JSON ✅ COMPLETATO

[...invariato...]

---

## FASE 4: COMPONENTI ARGOMENTO 🔄 IN CORSO

### 4.0 Infrastruttura SEO ✅

| Componente | File | Stato | Note |
|------------|------|-------|------|
| ✅ SchemaOrg | `/src/utils/seo/SchemaOrg.tsx` | ✅ | JSON-LD per Organization, SoftwareApplication, DefinedTerm, FAQPage, HowTo, ItemList |
| ✅ SeoHead | `/src/utils/seo/SeoHead.tsx` | ✅ | Open Graph, Twitter Cards, canonical, robots |
| ✅ Aria | `/src/utils/seo/Aria.tsx` | ✅ | SkipLinks, LiveRegion, useFocusManagement, AriaLandmark |
| ✅ GlossaryTerm | `/src/components/common/GlossaryTerm.tsx` | ✅ | Supporto namespace 'glossary' e 'glossary-art', varianti, ArtTerm |

### 4.1 EGI

| Componente | File | JSON | SEO | Stato |
|------------|------|------|-----|-------|
| ✅ EgiHero | `/src/components/topics/egi/EgiHero.tsx` | ✅ | SeoHead + SoftwareApplicationSchema | ✅ |
| ✅ EgiDefinition | `/src/components/topics/egi/EgiDefinition.tsx` | ✅ | DefinedTermSchema | ✅ |
| ✅ EgiComponents | `/src/components/topics/egi/EgiComponents.tsx` | ✅ | SoftwareSourceCodeSchema + ItemListSchema | ✅ |
| ✅ EgiFunctions | `/src/components/topics/egi/EgiFunctions.tsx` | ✅ | HowToSchema | ✅ |
| ✅ EgiAdvantages | `/src/components/topics/egi/EgiAdvantages.tsx` | ✅ | ItemListSchema (per stakeholder) | ✅ |
| ✅ EgiComponentCard | `/src/components/topics/egi/EgiComponentCard.tsx` | ✅ | Product Schema | ✅ |
| ✅ EgiThreeComponents | `/src/components/topics/egi/EgiComponentCard.tsx` | ✅ | Grid EPP/GOODS/INVENT | ✅ |
| ✅ EgiTraitsUtilities | `/src/components/topics/egi/EgiTraitsUtilities.tsx` | ✅ | DefinedTerm + tabs ARIA | ✅ |
| ✅ EgiCta | `/src/components/topics/egi/EgiCta.tsx` | ✅ | Action Schema | ✅ |

**Barrel Export:** `/src/components/topics/egi/index.ts` ✅

### 4.2 EPP

| Componente | File | JSON | SEO | Stato |
|------------|------|------|-----|-------|
| ✅ EppHero | `/src/components/topics/epp/EppHero.tsx` | ✅ | SeoHead + OrganizationSchema | ✅ |
| ✅ EppProgramCard | `/src/components/topics/epp/EppProgramCard.tsx` | ✅ | OrganizationSchema per programma | ✅ |
| ✅ EppImpact | `/src/components/topics/epp/EppImpact.tsx` | ✅ | ItemListSchema + animated counters | ✅ |
| ✅ EppPrograms | `/src/components/topics/epp/EppPrograms.tsx` | ✅ | ItemListSchema aggregato | ✅ |
| ✅ EppContribute | `/src/components/topics/epp/EppContribute.tsx` | ✅ | HowToSchema | ✅ |

**Barrel Export:** `/src/components/topics/epp/index.ts` ✅

### 4.3 FlorenceEGI Platform

| Componente | File | JSON | SEO | Stato |
|------------|------|------|-----|-------|
| ✅ FlorenceHero | `/src/components/topics/florence/FlorenceHero.tsx` | ✅ | SeoHead + SoftwareApplicationSchema | ✅ |
| ✅ FlorenceIntro | `/src/components/topics/florence/FlorenceIntro.tsx` | ✅ | OrganizationSchema + DefinedTermSchema | ✅ |
| ✅ FlorenceProblems | `/src/components/topics/florence/FlorenceProblems.tsx` | ✅ | FAQPageSchema + flip cards | ✅ |
| ✅ FlorenceExamples | `/src/components/topics/florence/FlorenceExamples.tsx` | ✅ | ItemListSchema + tabs 7 settori | ✅ |
| ✅ FlorenceAmmk | `/src/components/topics/florence/FlorenceAmmk.tsx` | ✅ | ItemListSchema 5 engines | ✅ |
| ✅ FlorenceTech | `/src/components/topics/florence/FlorenceTech.tsx` | ✅ | SoftwareApplicationSchema + tabs | ✅ |
| ✅ FlorencePricing | `/src/components/topics/florence/FlorencePricing.tsx` | ✅ | OfferSchema + table | ✅ |
| ✅ FlorenceNatan | `/src/components/topics/florence/FlorenceNatan.tsx` | ✅ | SoftwareApplicationSchema (AI) | ✅ |
| ✅ FlorenceFaq | `/src/components/topics/florence/FlorenceFaq.tsx` | ✅ | FAQPageSchema + accordion | ✅ |

**Barrel Export:** `/src/components/topics/florence/index.ts` ✅

### 4.4 Co-Create

| Componente | File | JSON | SEO | Stato |
|------------|------|------|-----|-------|
| ✅ CoCreateHero | `/src/components/topics/cocreate/CoCreateHero.tsx` | ✅ | SeoHead + OrganizationSchema | ✅ |
| ✅ CoCreateConcept | `/src/components/topics/cocreate/CoCreateConcept.tsx` | ✅ | DefinedTermSchema + HowToSchema | ✅ |
| ✅ CoCreatorRole | `/src/components/topics/cocreate/CoCreatorRole.tsx` | ✅ | ItemListSchema + PersonSchema | ✅ |
| ✅ TraderPro | `/src/components/topics/cocreate/TraderPro.tsx` | ✅ | ProductSchema (EGI PT) | ✅ |
| ✅ CoCreateCta | `/src/components/topics/cocreate/CoCreateCta.tsx` | ✅ | ActionSchema | ✅ |

**Barrel Export:** `/src/components/topics/cocreate/index.ts` ✅

### 4.5 Altri

| Componente | File | JSON | SEO | Stato |
|------------|------|------|-----|-------|
| ✅ Disclaimer | `/src/components/common/Disclaimer.tsx` | ✅ | WebPageSchema (legal) | ✅ |
| ✅ WhyCannotBuy | `/src/components/common/WhyCannotBuy.tsx` | ✅ | FAQPageSchema | ✅ |
| ✅ SourceTruth | `/src/components/common/SourceTruth.tsx` | ✅ | TechArticleSchema | ✅ |

**Barrel Export:** `/src/components/common/index.ts` ✅

---

## FASE 4 ✅ COMPLETATA

Tutti i componenti "mattoncini LEGO" creati:
- **EGI:** 9 componenti ✅
- **EPP:** 5 componenti ✅  
- **Florence:** 9 componenti ✅
- **CoCreate:** 5 componenti ✅
- **Common:** 6 componenti ✅
- **SEO Utils:** 4 moduli ✅

**TOTALE: 38 componenti SEO-ready**

---

## FASE 5: SISTEMA GLOSSARIO

| Task | Stato |
|------|-------|
| ⬜ GlossaryTerm component pulito |
| ⬜ GlossaryModal component |
| ⬜ GlossaryContext refactor |
| ⬜ glossary.json IT completo |
| ⬜ glossary.json EN completo |
| ⬜ Test click → modal |
| ⬜ Test keyboard navigation |
| ⬜ Test "torna al testo" |

---

## FASE 6: SISTEMA TEMI

| Task | Stato |
|------|-------|
| ⬜ variables.css (colori, spacing, fonts) |
| ⬜ reset.css |
| ⬜ typography.css |
| ⬜ spacing.css (golden ratio) |
| ⬜ layout.css |
| ⬜ Tema `renaissance.css` |
| ⬜ Classi componenti (`topic-section.css`, ecc.) |
| ⬜ ThemeContext per switch |
| ⬜ Test switch tema |

---

## FASE 7: VISTE (Aggregatori)

### 7.1 Per Argomento

| Vista | Componenti Inclusi | Stato |
|-------|-------------------|-------|
| ⬜ EgiInfoView | | |
| ⬜ EppInfoView | | |
| ⬜ FlorenceInfoView | | |
| ⬜ CoCreateInfoView | | |
| ⬜ DisclaimerView | | |
| ⬜ SourceTruthView | | |

### 7.2 Per Tipologia Utente

| Vista | Componenti Inclusi | Stato |
|-------|-------------------|-------|
| ⬜ ArtistView | | |
| ⬜ EntrepreneurView | | |
| ⬜ CollectorView | | |
| ⬜ PublicAdminView | | |

---

## FASE 8: NAVIGAZIONE

| Task | Stato |
|------|-------|
| ⬜ WheelMenu con voci corrette |
| ⬜ Sidebar menu info pages |
| ⬜ Router configurato |
| ⬜ Breadcrumb (opzionale) |

---

## FASE 9: TEST FINALI

| Test | Stato |
|------|-------|
| ⬜ Tutti i componenti renderizzano standalone |
| ⬜ Switch IT ↔ EN funziona |
| ⬜ Switch tema funziona |
| ⬜ Glossario funziona da ogni componente |
| ⬜ Layout responsive (mobile/desktop) |
| ⬜ Accessibilità (screen reader, keyboard) |
| ⬜ Build production senza errori |

---

## NOTE E PROBLEMI

| Data | Problema | Soluzione | Stato |
|------|----------|-----------|-------|
| | | | |

---

*Aggiornare questo file ad ogni progresso*
