# EGI-INFO (egi-info.florenceegi.com) — AI Agent Instructions (OS3.0)

> **SPA Informativa React per FlorenceEGI — Sito Educativo e Istituzionale**
> **"L'AI non pensa. Predice. Non deduce logicamente. Completa statisticamente."**

---

<!-- ══════════════════════════════════════════════════════════════
     CORE CONDIVISO — Questa sezione è IDENTICA in tutti i progetti
     dell'ecosistema FlorenceEGI (EGI, EGI-HUB-HOME-REACT, NATAN_LOC, EGI-INFO).
     Qualsiasi modifica va replicata in tutti e 4 i file.
     ══════════════════════════════════════════════════════════════ -->

## 🛑 REGOLE P0 - BLOCCANTI (Violazione = STOP immediato)

| #        | Regola                 | Cosa Fare                                                           |
| -------- | ---------------------- | ------------------------------------------------------------------- |
| **P0-0** | **NO ALPINE/LIVEWIRE** | **VIETATO SCRIVERE NUOVO CODICE ALPINE/LIVEWIRE. Solo Vanilla/TS.** |
| **P0-1** | REGOLA ZERO            | MAI dedurre. Se non sai → 🛑 CHIEDI                                 |
| **P0-2** | Translation Keys       | `__('key')` mai stringhe hardcoded                                  |
| **P0-3** | Statistics Rule        | No `->take(10)` nascosti, sempre param espliciti                    |
| **P0-4** | Anti-Method-Invention  | Verifica metodo esiste PRIMA di usarlo                              |
| **P0-5** | UEM-First              | Errori → `$errorManager->handle()`, mai solo ULM                    |
| **P0-6** | Anti-Service-Method    | `read_file` + `grep` prima di usare service                         |
| **P0-7** | Anti-Enum-Constant     | Verifica costanti enum esistono                                     |
| **P0-8** | Complete Flow Analysis | Map ENTIRE flow BEFORE any fix (15-35 min)                          |
| **P0-9** | i18n 6 Lingue          | Traduzioni in TUTTE: `it`, `en`, `de`, `es`, `fr`, `pt`             |

### 🔍 Prima di Ogni Risposta

```
1. Ho TUTTE le info? → NO = 🛑 CHIEDI
2. Metodi VERIFICATI? → NO = 🛑 semantic_search/grep/read_file
3. Pattern simile esiste? → Non so = 🛑 CHIEDI esempio
4. Sto ASSUMENDO? → SÌ = 🛑 DICHIARA e CHIEDI
5. Limiti impliciti? → SÌ = 🛑 RENDI ESPLICITO
```

### 🔄 Prima di Ogni FIX/DEBUG (P0-8)

```
1. Flow MAPPATO? (user action → response) → NO = 🛑 MAP FIRST
2. Types TRACCIATI? (ogni variabile/step) → NO = 🛑 TRACE FIRST
3. ALL occurrences TROVATE? (grep/search) → NO = 🛑 FIND ALL
4. Context VERIFICATO? (dependencies/patterns) → NO = 🛑 VERIFY

TEMPO: 15-35 min | RISPARMIO: 2+ ore debugging
```

---

## ♿ ACCESSIBILITY (A11Y) - Incrementale

**FILOSOFIA**: Non stop totale, ma **miglioramento incrementale**. Ogni fix/refactor su una pagina = occasione per sistemare A11Y.

### 📋 Checklist per OGNI pagina modificata

```
✅ 1. SEMANTIC HTML (P2)
   <main>, <nav>, <header>/<footer>, <section>/<article>, <aside>

✅ 2. ARIA LABELS (P2)
   aria-label per icon-only buttons, aria-label per nav multiple
   alt SEMPRE su <img>, aria-hidden="true" su icone decorative

✅ 3. KEYBOARD NAVIGATION (P2)
   focus:ring-2 focus:ring-oro-fiorentino, tabindex="0" per custom elements

✅ 4. SCREEN READER TEXT (P2)
   <span class="sr-only">, aria-live="polite"/"assertive", role="status"

✅ 5. FORM ACCESSIBILITY (P1)
   <label for="id"> SEMPRE, aria-describedby per help text, aria-invalid per errori
```

**Target**: WCAG 2.1 Level AA — A11Y è **P2 (SHOULD)**, non P0.

---

## 🧬 Oracode System

**3 Livelli**: OSZ (kernel) → OS3 (AI discipline) → OS4 (human education)

**6+1 Pilastri**: Intenzionalità, Semplicità, Coerenza, Circolarità, Evoluzione, Sicurezza + **REGOLA ZERO**

**Concetti OSZ**:

- **EGI**: `Wrapper<T> + Regole + Audit + Valore`
- **USE**: Ultra Semantic Engine — pipeline query semantiche
- **URS**: Unified Reliability Score — metrica affidabilità risposta AI
- **Nerve**: Sistema nervoso AI (governatori, validatori)

---

## ⚡ Priorità

| P      | Nome      | Conseguenza          |
| ------ | --------- | -------------------- |
| **P0** | BLOCKING  | 🛑 STOP totale       |
| **P1** | MUST      | Non production-ready |
| **P2** | SHOULD    | Debt tecnico         |
| **P3** | REFERENCE | Info only            |

---

## 📝 TAG System v2.0

Formato: `[TAG] Descrizione breve`

| Tag    | Peso | Tag   | Peso | Tag      | Peso | Tag    | Peso |
| ------ | ---- | ----- | ---- | -------- | ---- | ------ | ---- |
| FEAT   | 1.0  | FIX   | 1.5  | REFACTOR | 2.0  | TEST   | 1.2  |
| DEBUG  | 1.3  | DOC   | 0.8  | CONFIG   | 0.7  | CHORE  | 0.6  |
| I18N   | 0.7  | PERF  | 1.4  | SECURITY | 1.8  | WIP    | 0.3  |
| REVERT | 0.5  | MERGE | 0.4  | DEPLOY   | 0.8  | UPDATE | 0.6  |

Alias: `[FEAT]` = `feat:` = ✨

---

## 🔒 Git Hooks

| Regola | Trigger                   | Azione     |
| ------ | ------------------------- | ---------- |
| R1     | >100 righe rimosse/file   | 🛑 BLOCCA  |
| R2     | 50-100 righe rimosse      | ⚠️ WARNING |
| R3     | >50% contenuto rimosso    | 🛑 BLOCCA  |
| R4     | >500 righe totali rimosse | 🛑 BLOCCA  |

Bypass: `git commit --no-verify` (solo se intenzionale)

---

## 💎 FIRMA STANDARD

```php
/**
 * @package App\Http\Controllers\[Area]
 * @author Padmin D. Curtis (AI Partner OS3.0) for Fabio Cherici
 * @version 1.0.0 (FlorenceEGI - [Context])
 * @date 2025-10-28
 * @purpose [Clear, specific purpose]
 */
```

<!-- ══════════════════════════════════════════════════════════════
     FINE CORE CONDIVISO — Da qui in poi: specifico per EGI-INFO
     ══════════════════════════════════════════════════════════════ -->

---

## 🏗️ Architettura EGI-INFO

```
Browser → React 19 SPA (TypeScript + Vite)
              ↓
       react-router-dom v7 (Client-side routing)
              ↓
       react-i18next (i18n IT/EN)
              ↓
       GlossaryProvider (Contexto globale — 503 termini)
```

| Componente     | Tecnologia                          | Porta |
| -------------- | ----------------------------------- | ----- |
| Frontend       | React 19 + TypeScript 5.9 + Vite 7  | 5173  |
| Styling        | TailwindCSS v4 + CSS Custom Props   | —     |
| Routing        | react-router-dom v7                  | —     |
| i18n           | react-i18next v16 + i18next v25     | —     |
| Icons          | lucide-react                        | —     |
| Build          | Vite 7 (ESM, no CJS)               | —     |
| Deploy         | Laravel Forge (static build)        | —     |

**Target deploy**: `egi-info.13.48.57.194.sslip.io`

---

## 🌍 Lingue (EGI-INFO — ATTUALE: IT + EN)

> ⚠️ EGI-INFO attualmente supporta **solo IT e EN** (a differenza degli altri progetti che hanno 6 lingue).
> Prima di aggiungere nuove chiavi i18n, **verifica sempre** quali lingue sono già presenti.

| Codice | Lingua   | Path                          |
| ------ | -------- | ----------------------------- |
| `it`   | Italiano | `src/i18n/locales/it/`        |
| `en`   | English  | `src/i18n/locales/en/`        |

**Namespaces i18n disponibili:**

| Namespace   | Contenuto                        |
| ----------- | -------------------------------- |
| `common`    | UI, navigazione, elementi comuni |
| `florence`  | Contenuti FlorenceEGI (43 mattoncini) |
| `egi`       | Informazioni token EGI           |
| `epp`       | Environmental Protection Programs |
| `glossary`  | 503 termini tecnici              |
| `audiences` | Archetipi utente (artista, imprenditore, PA, collezionista) |

❌ **VIETATO** aggiungere testo hardcoded in italiano o inglese → 🛑 USA `t('chiave')`

---

## 🧱 Sistema Mattoncini (CRITICO)

EGI-INFO è costruito su **43 "mattoncini"** — componenti React atomici e autonomi.

### Struttura

```
src/components/mattoncini/florence/    # 43 mattoncini FlorenceEGI
src/components/topics/                 # Componenti per argomento
src/components/common/                 # Componenti riutilizzabili
```

### Regole Mattoncino (P1 — MUST)

```tsx
/**
 * Mattoncino: [Nome Descrittivo]
 * Chiave JSON i18n: [namespace].[sezione]
 * Rotta test: /info/florence/[slug]
 */

// ✅ FARE
const { t } = useTranslation('[namespace]');
const items = t('[sezione].items', { returnObjects: true }) as ItemType[];
<section role="region" aria-labelledby="[id]-title">
  <h1 id="[id]-title">{t('[sezione].title')}</h1>
</section>

// ❌ NON FARE
<section>
  <h1>Titolo hardcoded</h1>    // Vietato!
  <p style={{ color: 'red' }}> // Mai stili inline (usa COLORS const)
</section>
```

### Design Token (COLORS const — da usare SEMPRE)

```tsx
const COLORS = {
  gold: '#d4af37',      // Brand principale — Oro Fiorentino
  blue: '#60a5fa',      // Info/Step
  green: '#4ade80',     // Successo/Positivo
  purple: '#a78bfa',    // Accent
  red: '#f87171',       // Errore/Negativo
  yellow: '#fbbf24',    // Warning/Attention
} as const;

// Spaziature standard
// padding: '80px 20px'      → Section padding
// maxWidth: '1000px'        → Container max-width
// borderRadius: '16px'      → Card
// borderRadius: '50px'      → Badge/pill
```

### Checklist Mattoncino Completo

```
□ JSDoc header (nome, descrizione, chiave i18n, rotta test)
□ useTranslation() per TUTTI i testi — zero hardcoded
□ TypeScript interfaces per tutti gli oggetti da i18n
□ COLORS const per colori
□ <section> con role="region" + aria-labelledby
□ <header> con badge + h1 + subtitle
□ Liste con <ul>/<ol> + aria-label
□ Icone con aria-hidden="true"
□ Grid responsive: gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
□ Font responsive: fontSize: 'clamp(2rem, 5vw, 3.5rem)'
□ Nessun errore TypeScript — nessun any
□ Nessun warning ESLint
```

---

## 📖 Sistema Glossario (CRITICO)

Il glossario conta **503 termini** ed è globale su tutte le pagine tramite `GlossaryProvider`.

### Import e Uso

```tsx
import { GlossaryTerm } from '@/components/common/GlossaryTerm';
import { ArtTerm } from '@/components/common/GlossaryTerm';  // Solo per CoA

// Uso base
<p>
  Ogni <GlossaryTerm termId="egi">EGI</GlossaryTerm> è certificato su{' '}
  <GlossaryTerm termId="algorand">Algorand</GlossaryTerm>.
</p>
```

### Props GlossaryTerm

| Prop          | Tipo                       | Default      | Descrizione                     |
| ------------- | -------------------------- | ------------ | ------------------------------- |
| `termId`      | `string`                   | **required** | Chiave in `glossary.json`       |
| `namespace`   | `'glossary' \| 'glossary-art'` | `'glossary'` | Namespace i18n               |
| `showTooltip` | `boolean`                  | `true`       | Mostra tooltip al hover         |
| `disabled`    | `boolean`                  | `false`      | Disabilita interazione          |
| `children`    | `ReactNode`                | **required** | Testo visibile                  |

### Categorie Termini Disponibili

| Categoria    | Esempi termId                                                     |
| ------------ | ----------------------------------------------------------------- |
| `core`       | `egi`, `epp`, `ammk`, `florenceegi`, `coa`, `egizzare`, `motto`   |
| `blockchain` | `algorand`, `nft`, `asa`, `minting`, `smart-contract`, `wallet`   |
| `legal`      | `diritti-morali`, `copyright`, `mica`, `gdpr`                     |
| `roles`      | `creator`, `co-creatore`, `collector`, `mecenate`, `curatore`     |
| `finance`    | `egili`, `equilibrium`, `fee-dinamiche`, `royalty-piattaforma`    |
| `ai`         | `natan`, `natan-market-engine`, `art-advisor`, `ai-credits`, `rag`|
| `governance` | `governance-duale`, `florenceegi-core`, `tenant-specializzato`    |
| `technical`  | `rbac`, `ulm`, `auditlogservice`, `api`, `webhook`, `metadati`    |

### Quando Usare GlossaryTerm

✅ Prima occorrenza di un termine tecnico in una sezione
✅ Acronimi (NFT, EGI, EPP, CoA, GDPR, etc.)
✅ Concetti specifici FlorenceEGI (Egizzare, Drops, etc.)

❌ NON usare in heading/titoli
❌ NON ripetere lo stesso termine nella stessa sezione
❌ NON su termini comuni (arte, certificato, digitale)

---

## 🔍 SEO (React 19 — SENZA react-helmet)

Il progetto usa un SEO system **custom React 19 compatible** (no react-helmet):

```tsx
import { SeoHead } from '@/utils/seo/SeoHead';
import { SchemaOrg } from '@/utils/seo/SchemaOrg';

// Ogni pagina deve avere:
<SeoHead
  title="Titolo Pagina | FlorenceEGI"
  description="Meta description..."
  canonical="/percorso"
/>
<SchemaOrg type="SoftwareApplication" data={...} />
```

### Schema.org Disponibili

| Schema                    | Uso                                |
| ------------------------- | ---------------------------------- |
| `OrganizationSchema`      | Pagine istituzionali               |
| `SoftwareApplicationSchema` | Pagine piattaforma/tech          |
| `DefinedTermSchema`       | Definizioni EGI, EPP, etc.         |
| `FAQPageSchema`           | Sezioni FAQ, accordion             |
| `HowToSchema`             | Step-by-step (Es. Come funziona)   |
| `ItemListSchema`          | Liste di funzionalità/componenti   |
| `OfferSchema`             | Tabelle pricing                    |

---

## 🏛️ Architettura Componenti EGI-INFO

```
src/
├── components/
│   ├── common/              # GlossaryTerm, SEO, Button, etc.
│   ├── mattoncini/          # 🧱 43 mattoncini FlorenceEGI
│   │   └── florence/        # Intro, Impact, Problem1-12, ...
│   ├── topics/              # EGI, EPP, Florence, CoCreate
│   │   ├── egi/             # EgiHero, EgiDefinition, EgiComponents, ...
│   │   ├── epp/             # EppHero, EppPrograms, EppImpact, ...
│   │   ├── florence/        # FlorenceHero, FlorenceProblems, ...
│   │   └── cocreate/        # CoCreateHero, CoCreatorRole, TraderPro, ...
│   ├── navigation/          # WheelMenu, Sidebar, LanguageSwitcher
│   └── sections/            # HeroSection, ContentSection, StatsSection
│
├── pages/
│   ├── info/                # Pagine approfondimento
│   │   └── florence/        # 43 pagine test mattoncini (/info/florence)
│   └── archetypes/          # Artist, Collector, Entrepreneur, PA
│
├── layouts/
│   ├── LandingLayout.tsx    # Layout con WheelMenu (home)
│   ├── InfoPageLayout.tsx   # Layout pagine info
│   └── AudienceLayout.tsx   # Layout audience pages
│
├── i18n/
│   ├── config.ts            # i18next configurazione
│   └── locales/
│       ├── it/              # 10+ namespace JSON
│       └── en/              # 10+ namespace JSON (stessa struttura)
│
├── context/
│   ├── GlossaryContext.tsx  # Gestione globale glossario
│   ├── ThemeContext.tsx     # Switch tema
│   └── AnimationContext.tsx
│
├── utils/
│   └── seo/                 # SeoHead, SchemaOrg, Aria — React 19 compat
│
└── router/                  # Route definitions (react-router-dom v7)
```

---

## 📁 File Chiave EGI-INFO

| Scopo                    | Path                                                    |
| ------------------------ | ------------------------------------------------------- |
| Router principale        | `src/router/index.tsx`                                  |
| App root                 | `src/App.tsx`                                           |
| i18n config              | `src/i18n/config.ts`                                    |
| Glossario IT             | `src/i18n/locales/it/glossary.json`                     |
| Glossario EN             | `src/i18n/locales/en/glossary.json`                     |
| Design system CSS        | `src/styles/globals.css`                                |
| GlossaryContext          | `src/context/GlossaryContext.tsx`                       |
| GlossaryTerm component   | `src/components/common/GlossaryTerm.tsx`                |
| SEO utils                | `src/utils/seo/SeoHead.tsx`, `src/utils/seo/SchemaOrg.tsx` |
| WheelMenu                | `src/components/navigation/WheelMenu.tsx` (o simile)    |
| Architettura             | `docs/ARCHITECTURE.md`                                  |
| Standard mattoncini      | `docs/MATTONCINI-STANDARD.md`                           |
| Checklist mattoncini     | `docs/MATTONCINI-CHECKLIST.md`                          |
| TODO sviluppo            | `docs/TODO.md`                                          |
| SEO guide                | `docs/SEO-IMPLEMENTATION-GUIDE.md`                      |

---

## 🔧 Processo Verifica Componenti (EGI-INFO)

```bash
# Verifica esportazioni componenti argomento
grep "export" src/components/topics/egi/index.ts
grep "export" src/components/topics/epp/index.ts
grep "export" src/components/topics/florence/index.ts
grep "export" src/components/topics/cocreate/index.ts

# Verifica chiavi i18n esistenti prima di creare nuove
grep -r '"[chiave]"' src/i18n/locales/it/

# Verifica GlossaryTerm termId validi
grep '"[termId]"' src/i18n/locales/it/glossary.json

# SE non trovo → 🛑 STOP e CHIEDI
```

---

## 📡 Routes EGI-INFO

| Route                      | Descrizione                         |
| -------------------------- | ----------------------------------- |
| `/`                        | Home — Landing con WheelMenu        |
| `/info`                    | Hub approfondimenti                 |
| `/info/egi`                | Cos'è un EGI                        |
| `/info/epp`                | Environmental Protection Programs   |
| `/info/platform`           | FlorenceEGI Platform                |
| `/info/co-create`          | Co-Create Ecosystem                 |
| `/info/florence`           | Dashboard 43 Mattoncini (test)      |
| `/archetypes/artist`       | Per Artisti                         |
| `/archetypes/entrepreneur` | Per Imprenditori                    |
| `/archetypes/collector`    | Per Collezionisti                   |
| `/archetypes/public-admin` | Per Pubblica Amministrazione        |

---

## 🎨 Design System EGI-INFO

### Colori Brand

```css
--color-gold: #D4AF37;               /* Oro Fiorentino (brand principale) */
--color-dark: #0A0A0F;               /* Background */
--color-verde-rinascimento: #2E8B57; /* Verde */
--color-blu-medici: #1E3A5F;         /* Blu */
```

### Golden Ratio Scale (φ = 1.618)

```css
--space-xs: 0.618rem;   /* 9.89px */
--space-sm: 1rem;       /* 16px */
--space-md: 1.618rem;   /* 25.89px */
--space-lg: 2.618rem;   /* 41.89px */
--space-xl: 4.236rem;   /* 67.78px */
```

### Tipografia

```css
--font-serif: 'Playfair Display', serif;  /* Titoli */
--font-sans: 'Inter', sans-serif;         /* Corpo */
```

---

## 🛠️ Comandi EGI-INFO

```bash
npm run dev          # Vite dev server (porta 5173)
npm run build        # Build produzione
npm run build:strict # TypeScript check + build
npm run preview      # Preview build locale
npm run lint         # ESLint
npm run typecheck    # TypeScript check senza build

# Deploy (Laravel Forge)
cd /home/forge/egi-info.13.48.57.194.sslip.io
git pull origin main
npm install
npm run build
```

---

**OS3.0 — "Less talk, more code. Ship it."**
