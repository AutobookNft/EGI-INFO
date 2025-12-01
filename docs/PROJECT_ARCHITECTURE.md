# EGI-INFO: Architettura Unificata Pagine Informative

> **Documento di Progetto v2.0**  
> Data: Dicembre 2025  
> Stack: React + TypeScript + Vite + i18n (react-i18next)

---

## 📋 Sommario

1. [Overview del Progetto](#overview-del-progetto)
2. [Architettura Navigazione](#architettura-navigazione)
3. [Pagine da Convertire](#pagine-da-convertire)
4. [Componenti Atomici (Content Blocks)](#componenti-atomici)
5. [Glossario Unificato](#glossario-unificato)
6. [Sistema i18n (IT/EN)](#sistema-i18n)
7. [Design System](#design-system)
8. [Struttura Cartelle](#struttura-cartelle)
9. [Roadmap Implementazione](#roadmap-implementazione)

---

## 1. Overview del Progetto

### Obiettivo
Creare un sistema SPA (Single Page Application) per le pagine informative di FlorenceEGI, convertendo da Laravel Blade a React TypeScript con:
- **Supporto bilingue** (IT/EN)
- **Glossario unificato** centralizzato (usato in TUTTE le pagine)
- **Componenti atomici** riassemblabili per audience diverse
- **Design system coerente** (dark theme, oro fiorentino)
- **SEO ottimizzato** (Schema.org, OG, meta)

### Filosofia: Componenti LEGO

I contenuti sono suddivisi in **blocchi atomici riutilizzabili** che possono essere assemblati diversamente per:
1. Le pagine complete (Approfondimenti)
2. Le pagine dedicate per tipo di pubblico (Artista, Imprenditore, PA, Collezionista)

---

## 2. Architettura Navigazione

```
🏠 HOME (Landing con WheelMenu - stile HANDOFF)
│
├── 📚 "Approfondimenti" 
│   └── SUB-HOME con menu classico
│       ├── EGI Info
│       ├── EPP Info  
│       ├── Co-Create Ecosystem
│       ├── White Paper Finanziario
│       ├── FlorenceEGI Source Truth
│       ├── Privacy
│       └── ... (tutte le 13+ pagine complete)
│
├── 🎨 "Sei un Artista?"
│   └── Pagina assemblata con blocchi rilevanti per artisti
│       (linguaggio creativo, focus su royalties e protezione opera)
│
├── 💼 "Sei un Imprenditore?"
│   └── Pagina assemblata con blocchi rilevanti per business
│       (linguaggio formale, focus su compliance e fiscalità)
│
├── 🏛️ "Pubblica Amministrazione"
│   └── Pagina assemblata con blocchi per PA
│       (linguaggio istituzionale, focus su N.A.T.A.N. e trasparenza)
│
└── 🖼️ "Sei un Collezionista?"
    └── Pagina assemblata con blocchi per collezionisti
        (linguaggio friendly, focus su valore e garanzie)
```

### Routes

```tsx
<GlossaryProvider>
  <Router>
    <Routes>
      {/* Home - Landing HANDOFF con WheelMenu */}
      <Route path="/" element={<Landing />} />
      
      {/* Approfondimenti - Sub-home + pagine complete */}
      <Route path="/info" element={<InfoHome />} />
      <Route path="/info/egi" element={<EgiInfoPage />} />
      <Route path="/info/epp" element={<EppInfoPage />} />
      <Route path="/info/co-create" element={<CoCreatePage />} />
      <Route path="/info/white-paper" element={<WhitePaperPage />} />
      <Route path="/info/source-truth" element={<SourceTruthPage />} />
      <Route path="/info/privacy" element={<PrivacyPage />} />
      
      {/* Pagine per Audience */}
      <Route path="/per-artisti" element={<ArtistPage />} />
      <Route path="/per-imprenditori" element={<BusinessPage />} />
      <Route path="/per-pa" element={<PaPage />} />
      <Route path="/per-collezionisti" element={<CollectorPage />} />
    </Routes>
  </Router>
  
  {/* Componenti globali glossario */}
  <GlossaryPanel />
  <BackToTextButton />
</GlossaryProvider>
```

---

## 3. Pagine da Convertire

### Sorgenti Laravel Blade

**Da `/home/fabio/EGI/resources/views/info/` (13 file):**

| File Blade | Dimensione | Priorità | Note |
|------------|------------|----------|------|
| `florenceegi_source_truth.blade.php` | 123KB | 🔴 Alta | Documentazione principale con glossario |
| `white-paper-finanziario.blade.php` | 115KB | 🔴 Alta | Tokenomics, modello economico, glossario finanziario |
| `co-create-ecosystem.blade.php` | 53KB | 🔴 Alta | Ecosistema co-creazione (già con i18n Laravel) |
| `epp-info.blade.php` | 39KB | 🟡 Media | Environmental Protection Program |
| `egi-info.blade.php` | 23KB | 🟡 Media | Definizione EGI |
| `privacy.blade.php` | 13KB | 🟡 Media | Privacy policy |
| `blockchain-history.blade.php` | 11KB | 🟢 Bassa | Storia blockchain |
| `secondary-marketplace.blade.php` | 3KB | 🟢 Bassa | Mercato secondario |
| Altri 5 file | < 5KB | 🟢 Bassa | Pagine minori |

**Da `/home/fabio/EGI/resources/views/archetypes/` (3 file):**

| File Blade | Dimensione | Note |
|------------|------------|------|
| `pa-entity.blade.php` | 78KB | N.A.T.A.N. - AI per PA |
| `patron-standalone.blade.php` | 29KB | Profilo Mecenate |
| `collector.blade.php` | 29KB | Profilo Collezionista |

### Traduzioni Esistenti

Percorso: `/home/fabio/EGI/resources/lang/{it,en,de,es,fr,pt}/`

Pattern chiavi Laravel: `__('info_co_create.section.key')`

File rilevanti:
- `info_co_create.php`
- `info_egi.php`
- `info_epp.php`
- `info_florence_egi.php`

---

## 4. Componenti Atomici (Content Blocks)

### Filosofia

Ogni argomento è un **blocco riutilizzabile** che può essere:
1. Usato nella pagina completa (Approfondimenti)
2. Assemblato nelle pagine per audience con varianti di tono/complessità

### Struttura Content Blocks

```
src/components/content-blocks/
│
├── egi/
│   ├── WhatIsEgi.tsx           # "Cos'è un EGI" - base
│   ├── EgiValue.tsx            # Proposta di valore
│   ├── EgiTechnical.tsx        # Dettagli tecnici ASA/Algorand
│   └── EgiGuarantees.tsx       # Garanzie e certificazioni
│
├── epp/
│   ├── WhatIsEpp.tsx           # Cos'è EPP
│   ├── EppBenefits.tsx         # Benefici generali
│   ├── EppForArtists.tsx       # Come guadagni come artista
│   ├── EppForBusinesses.tsx    # Benefici fiscali imprese
│   └── EppImpact.tsx           # Impatto ambientale
│
├── cocreate/
│   ├── CoCreateOverview.tsx    # Panoramica ecosistema
│   ├── CoCreatorRole.tsx       # Ruolo co-creatore
│   ├── CoCreatorBenefits.tsx   # Benefici per artisti
│   ├── TraderProTools.tsx      # Strumenti per trader
│   └── RoyaltiesExplained.tsx  # Sistema royalties
│
├── blockchain/
│   ├── WhyAlgorand.tsx         # Perché Algorand
│   ├── SecurityGuarantees.tsx  # Sicurezza blockchain
│   ├── TransparencyFeatures.tsx # Trasparenza
│   ├── CarbonNegative.tsx      # Sostenibilità
│   └── ForNonTechUsers.tsx     # Versione semplificata
│
├── compliance/
│   ├── MicaSafe.tsx            # Conformità MiCA
│   ├── GdprCompliance.tsx      # GDPR
│   ├── PaCompliance.tsx        # Per PA
│   ├── FiscalTransparency.tsx  # Per imprenditori
│   └── AuditTrail.tsx          # Tracciabilità
│
├── roles/
│   ├── CreatorRole.tsx         # Ruolo Creator
│   ├── CollectorRole.tsx       # Ruolo Collezionista
│   ├── PatronRole.tsx          # Ruolo Mecenate
│   ├── CuratorRole.tsx         # Ruolo Curatore
│   └── MerchantRole.tsx        # Ruolo Merchant
│
└── natan/
    ├── NatanOverview.tsx       # Panoramica N.A.T.A.N.
    ├── NatanForPa.tsx          # Specifico per PA
    └── NatanTechnical.tsx      # Dettagli tecnici
```

### Props per Varianti

Ogni blocco supporta varianti per adattarsi all'audience:

```tsx
interface ContentBlockProps {
  variant?: 'simple' | 'detailed' | 'technical';
  tone?: 'friendly' | 'formal' | 'institutional';
  showCta?: boolean;
  className?: string;
}

// Esempi di uso:
<WhatIsEgi variant="simple" tone="friendly" />      // Per Collezionista
<WhatIsEgi variant="technical" tone="formal" />     // Per PA
<WhatIsEgi variant="detailed" tone="formal" />      // Per Imprenditore
<WhatIsEgi variant="simple" tone="friendly" />      // Per Artista (creativo)
```

### Esempio Pagina Audience

```tsx
// src/pages/audiences/ArtistPage.tsx
import { WhatIsEgi } from '@/components/content-blocks/egi/WhatIsEgi';
import { EgiValue } from '@/components/content-blocks/egi/EgiValue';
import { CoCreatorBenefits } from '@/components/content-blocks/cocreate/CoCreatorBenefits';
import { RoyaltiesExplained } from '@/components/content-blocks/cocreate/RoyaltiesExplained';
import { EppForArtists } from '@/components/content-blocks/epp/EppForArtists';

const ArtistPage = () => {
  return (
    <AudienceLayout 
      title="FlorenceEGI per Artisti"
      subtitle="Proteggi, valorizza e guadagna dalla tua arte"
      audience="artist"
    >
      <WhatIsEgi variant="simple" tone="friendly" />
      <EgiValue />
      <CoCreatorBenefits />
      <RoyaltiesExplained variant="detailed" />
      <EppForArtists />
      <CallToAction type="artist-signup" />
    </AudienceLayout>
  );
};
```

---

## 5. Glossario Unificato

### Requisito Fondamentale

> **Ogni termine tecnico in ogni componente deve essere linkato al glossario.**
> 
> Il glossario è **unico e condiviso** su TUTTE le pagine:
> - Landing HANDOFF (WheelMenu + sezioni)
> - Tutte le pagine Approfondimenti
> - Tutte le pagine Audience (Artista, Imprenditore, PA, Collezionista)

### Problema Attuale

Nei Blade esistenti ci sono glossari **duplicati e inconsistenti**:
- `white-paper-finanziario.blade.php` → 65+ termini
- `florenceegi_source_truth.blade.php` → 40+ termini (molti duplicati)

### Soluzione: GlossaryProvider Globale

```tsx
// App.tsx
<GlossaryProvider>
  <Router>
    <Routes>
      {/* Tutte le routes */}
    </Routes>
  </Router>
  
  {/* Componenti globali - sempre disponibili */}
  <GlossaryPanel />
  <BackToTextButton />
</GlossaryProvider>
```

### Termini Identificati (65+)

#### Categoria: Blockchain & Tech
`blockchain`, `hash`, `asa`, `minting`, `wallet`, `on-chain`, `off-chain`, `opt-in`, `transfer`, `anchor-hash`, `smart-contract`, `proof-of-stake`, `algorand`, `token`, `chiave-privata`, `immutabilita`

#### Categoria: FlorenceEGI Core
`egi`, `epp`, `creator`, `collector`, `co-creatore`, `mecenate`, `curatore`, `merchant`, `trader`, `royalty-piattaforma`, `diritto-seguito`, `diritti-morali`, `diritti-patrimoniali`, `drops`, `natan`, `ammk`, `florenceegi-core`, `tenant-specializzato`

#### Categoria: Compliance & Legal
`mica`, `mica-safe`, `gdpr`, `casp`, `emi`, `psd2`, `custodial`, `non-custodial`, `compliance`, `audit-trail`, `partner-autorizzato`

#### Categoria: Finanza & Fiscale
`fiat`, `psp`, `fee`, `payout`, `settlement`, `plusvalenza`, `fatturazione-elettronica`, `iva`, `sdi`, `partita-iva`, `oss`, `moss`, `reverse-charge`, `sostituto-imposta`

### Struttura Dati Glossario

```typescript
// src/components/glossary/glossary-data.ts

export interface GlossaryTerm {
  id: string;
  term: {
    it: string;
    en: string;
  };
  definition: {
    it: string;
    en: string;
  };
  category: 'blockchain' | 'florenceegi' | 'compliance' | 'finance' | 'general';
  relatedTerms?: string[];
  externalLinks?: { label: string; url: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'egi',
    term: { it: 'EGI', en: 'EGI' },
    definition: {
      it: 'Acronimo di Entità Garante Immutabile. Token unico sulla blockchain Algorand che certifica la proprietà di un bene digitale o fisico.',
      en: 'Acronym for Immutable Guaranteeing Entity. Unique token on Algorand blockchain certifying ownership of a digital or physical asset.'
    },
    category: 'florenceegi',
    relatedTerms: ['asa', 'blockchain', 'minting', 'algorand']
  },
  {
    id: 'epp',
    term: { it: 'EPP', en: 'EPP' },
    definition: {
      it: 'Environmental Protection Program. Quota di ogni transazione destinata a progetti di tutela ambientale certificati.',
      en: 'Environmental Protection Program. Portion of each transaction allocated to certified environmental protection projects.'
    },
    category: 'florenceegi',
    relatedTerms: ['egi', 'carbon-negative']
  },
  // ... altri 63+ termini
];
```

### Componente GlossaryTerm (Link Inline)

```tsx
// src/components/glossary/GlossaryTerm.tsx

interface GlossaryTermProps {
  id: string;
  children?: React.ReactNode;
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({ id, children }) => {
  const { openGlossary } = useGlossary();
  const { i18n } = useTranslation();
  const term = getTermById(id);
  
  return (
    <button 
      className="glossary-link"
      onClick={() => openGlossary(id)}
      aria-label={`Definizione: ${term?.term[i18n.language]}`}
    >
      {children || term?.term[i18n.language]}
    </button>
  );
};
```

### Uso nei Content Blocks

```tsx
// Esempio in un componente
const WhatIsEgi = () => {
  return (
    <ContentBlock>
      <p>
        L'<GlossaryTerm id="egi" /> è un token di tipo{' '}
        <GlossaryTerm id="asa">ASA</GlossaryTerm> sulla{' '}
        <GlossaryTerm id="blockchain" /> di{' '}
        <GlossaryTerm id="algorand" />. 
      </p>
      <p>
        Il processo di <GlossaryTerm id="minting" /> crea un certificato 
        immutabile che garantisce la conformità{' '}
        <GlossaryTerm id="mica-safe" /> e{' '}
        <GlossaryTerm id="gdpr" />.
      </p>
    </ContentBlock>
  );
};
```

### Stile Link Glossario

```css
.glossary-link {
  color: #1B365D;                    /* Blu Algoritmo */
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #D4A574;    /* Oro Fiorentino */
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glossary-link:hover {
  color: #D4A574;
  text-decoration-color: #1B365D;
  text-shadow: 0 0 8px rgba(212, 165, 116, 0.3);
}
```

### Comportamento "Torna al Testo"

```
1. Utente legge un componente (es. WhatIsEgi)
   ↓
2. Click su termine (es. "blockchain")
   ↓
3. Sistema salva posizione: { scrollY: 1234, elementId: 'what-is-egi' }
   ↓
4. Si apre GlossaryPanel con definizione
   ↓
5. Utente può navigare termini correlati
   ↓
6. Click "Torna al testo" (pulsante fisso in basso)
   ↓
7. Chiude pannello + scroll automatico alla posizione salvata
   → Torna ESATTAMENTE dove stava leggendo
```

### GlossaryContext

```tsx
// src/context/GlossaryContext.tsx

interface GlossaryState {
  isOpen: boolean;
  currentTermId: string | null;
  returnPosition: {
    scrollY: number;
    elementId?: string;
  } | null;
  history: string[];  // Per navigazione tra termini
}

const GlossaryContext = createContext<{
  state: GlossaryState;
  openGlossary: (termId: string) => void;
  closeAndReturn: () => void;
  navigateToTerm: (termId: string) => void;
}>(null);

export const GlossaryProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<GlossaryState>({
    isOpen: false,
    currentTermId: null,
    returnPosition: null,
    history: []
  });

  const openGlossary = (termId: string) => {
    // Salva posizione PRIMA di aprire
    setState(prev => ({
      ...prev,
      isOpen: true,
      currentTermId: termId,
      returnPosition: prev.returnPosition || {
        scrollY: window.scrollY
      },
      history: [...prev.history, termId]
    }));
  };

  const closeAndReturn = () => {
    const { returnPosition } = state;
    
    setState({
      isOpen: false,
      currentTermId: null,
      returnPosition: null,
      history: []
    });
    
    // Torna alla posizione salvata
    if (returnPosition) {
      setTimeout(() => {
        window.scrollTo({ 
          top: returnPosition.scrollY, 
          behavior: 'smooth' 
        });
      }, 100);
    }
  };

  return (
    <GlossaryContext.Provider value={{ state, openGlossary, closeAndReturn }}>
      {children}
    </GlossaryContext.Provider>
  );
};
```

### Pulsante "Torna al Testo"

```tsx
// src/components/glossary/BackToTextButton.tsx

export const BackToTextButton: React.FC = () => {
  const { state, closeAndReturn } = useGlossary();
  
  if (!state.isOpen) return null;
  
  return (
    <button 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50
                 bg-gradient-to-r from-[#1B365D]/90 to-[#2D5016]/90
                 text-white px-6 py-3 rounded-full
                 border-2 border-[#D4A574]
                 shadow-lg backdrop-blur-sm
                 flex items-center gap-2
                 hover:scale-105 transition-all"
      onClick={closeAndReturn}
    >
      <ArrowLeftIcon className="w-5 h-5" />
      Torna al testo
    </button>
  );
};
```

---

## 6. Sistema i18n (IT/EN)

### Libreria
`react-i18next` + `i18next`

### Struttura File Traduzioni

```
src/i18n/
├── config.ts                    # Configurazione i18next
└── locales/
    ├── it/
    │   ├── common.json          # Header, footer, nav, UI
    │   ├── glossary.json        # 65+ termini glossario
    │   ├── landing.json         # Home HANDOFF
    │   ├── info/
    │   │   ├── home.json        # Sub-home approfondimenti
    │   │   ├── egi.json
    │   │   ├── epp.json
    │   │   ├── co-create.json
    │   │   ├── white-paper.json
    │   │   └── source-truth.json
    │   └── audiences/
    │       ├── artist.json
    │       ├── business.json
    │       ├── pa.json
    │       └── collector.json
    │
    └── en/
        └── [stessa struttura]
```

### Componente LanguageSwitcher

```tsx
// src/components/navigation/LanguageSwitcher.tsx

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it');
  };
  
  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1 rounded-full
                 border border-gold/50 hover:border-gold transition"
    >
      {i18n.language === 'it' ? '🇬🇧 EN' : '🇮🇹 IT'}
    </button>
  );
};
```

---

## 7. Design System

### Palette Colori

```typescript
// src/styles/theme.ts
export const theme = {
  colors: {
    // Brand FlorenceEGI
    primary: {
      gold: '#D4AF37',         // Oro Fiorentino (accenti principali)
      goldLight: '#D4A574',    // Oro chiaro
      blue: '#1B365D',         // Blu Algoritmo
      green: '#2D5016',        // Verde Mecenate
    },
    
    // Background (Dark Theme)
    background: {
      dark: '#0F0F0F',         // Sfondo principale
      card: '#1A1A1A',         // Card background
      elevated: '#242424',     // Elementi elevati
    },
    
    // Text
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      accent: '#D4AF37',
    },
    
    // Pagine specifiche
    pages: {
      epp: '#16A34A',          // Verde EPP
      whitePaper: '#047857',   // Emerald
      pa: '#1E3A8A',           // Institutional Blue
      artist: '#7C3AED',       // Purple creative
    }
  },
  
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Source Sans Pro", sans-serif',
  }
}
```

### Typography Scale

```css
/* Headings */
.heading-hero: 4rem / 64px (mobile: 2.5rem)
.heading-1: 3rem / 48px
.heading-2: 2rem / 32px
.heading-3: 1.5rem / 24px

/* Body */
.body-large: 1.25rem / 20px
.body-regular: 1rem / 16px
.body-small: 0.875rem / 14px
```

---

## 8. Struttura Cartelle Completa

```
/home/fabio/EGI-INFO/
│
├── docs/
│   ├── HANDOFF/                     # Riferimento landing (esistente)
│   ├── Oracode_Systems/             # Documentazione OS3/OS4
│   └── PROJECT_ARCHITECTURE.md      # Questo documento
│
├── public/
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── fonts/
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   │
│   ├── components/
│   │   ├── common/                  # Button, Card, Accordion, Badge
│   │   │
│   │   ├── navigation/
│   │   │   ├── Header.tsx           # Header responsive
│   │   │   ├── WheelMenu.tsx        # Menu ruota HANDOFF
│   │   │   ├── SectionNav.tsx       # Nav sezioni pagina
│   │   │   ├── BackToTop.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   │
│   │   ├── glossary/                # 🔑 SISTEMA UNIFICATO
│   │   │   ├── GlossaryProvider.tsx
│   │   │   ├── GlossaryTerm.tsx     # Link inline
│   │   │   ├── GlossaryPanel.tsx    # Pannello definizioni
│   │   │   ├── BackToTextButton.tsx
│   │   │   └── glossary-data.ts
│   │   │
│   │   ├── content-blocks/          # 🧩 BLOCCHI ATOMICI
│   │   │   ├── egi/
│   │   │   ├── epp/
│   │   │   ├── cocreate/
│   │   │   ├── blockchain/
│   │   │   ├── compliance/
│   │   │   ├── roles/
│   │   │   └── natan/
│   │   │
│   │   ├── sections/                # Sezioni generiche
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ContentSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── FeatureGrid.tsx
│   │   │
│   │   └── seo/
│   │       ├── PageMeta.tsx
│   │       └── SchemaOrg.tsx
│   │
│   ├── context/
│   │   ├── GlossaryContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── AnimationContext.tsx
│   │
│   ├── hooks/
│   │   ├── useGlossary.ts
│   │   ├── useScrollSpy.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── i18n/
│   │   ├── config.ts
│   │   └── locales/
│   │       ├── it/
│   │       │   ├── common.json
│   │       │   ├── glossary.json
│   │       │   ├── landing.json
│   │       │   ├── info/
│   │       │   └── audiences/
│   │       └── en/
│   │
│   ├── layouts/
│   │   ├── LandingLayout.tsx        # Per home HANDOFF
│   │   ├── InfoPageLayout.tsx       # Per pagine approfondimento
│   │   └── AudienceLayout.tsx       # Per pagine audience
│   │
│   ├── pages/
│   │   ├── Landing/                 # Home con WheelMenu
│   │   │   └── index.tsx
│   │   │
│   │   ├── info/                    # Approfondimenti
│   │   │   ├── InfoHome.tsx         # Sub-home con menu classico
│   │   │   ├── EgiInfo/
│   │   │   ├── EppInfo/
│   │   │   ├── CoCreate/
│   │   │   ├── WhitePaper/
│   │   │   ├── SourceTruth/
│   │   │   └── Privacy/
│   │   │
│   │   └── audiences/               # Pagine per pubblico
│   │       ├── ArtistPage.tsx
│   │       ├── BusinessPage.tsx
│   │       ├── PaPage.tsx
│   │       └── CollectorPage.tsx
│   │
│   ├── router/
│   │   └── index.tsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── theme.ts
│   │   └── glossary.css
│   │
│   └── utils/
│       ├── seo.ts
│       └── analytics.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 9. Roadmap Implementazione

### Fase 1: Setup Base (3-4 giorni)
- [ ] Setup Vite + React + TypeScript
- [ ] Configurazione Tailwind CSS
- [ ] Setup react-i18next
- [ ] Struttura cartelle
- [ ] Design system base (theme.ts, globals.css)
- [ ] Router base

### Fase 2: Sistema Glossario (3-4 giorni)
- [ ] GlossaryContext + GlossaryProvider
- [ ] GlossaryTerm component
- [ ] GlossaryPanel component
- [ ] BackToTextButton con logica ritorno
- [ ] Migrazione tutti i 65+ termini da Blade
- [ ] Traduzioni IT/EN glossario

### Fase 3: Componenti Base (4-5 giorni)
- [ ] Componenti common (Button, Card, Accordion)
- [ ] Header + LanguageSwitcher
- [ ] WheelMenu (da HANDOFF)
- [ ] SectionNav + BackToTop
- [ ] Layouts (Landing, InfoPage, Audience)

### Fase 4: Content Blocks (1-2 settimane)
- [ ] Blocchi EGI (WhatIsEgi, EgiValue, EgiTechnical)
- [ ] Blocchi EPP (WhatIsEpp, EppBenefits, EppImpact)
- [ ] Blocchi CoCreate (Overview, CoCreatorBenefits, Royalties)
- [ ] Blocchi Blockchain (WhyAlgorand, Security, Transparency)
- [ ] Blocchi Compliance (MicaSafe, Gdpr, Fiscal)
- [ ] Blocchi Roles (Creator, Collector, Patron, Curator)
- [ ] Blocchi NATAN

### Fase 5: Pagine Approfondimenti (1-2 settimane)
- [ ] InfoHome (sub-home con menu classico)
- [ ] EGI Info page
- [ ] EPP Info page
- [ ] Co-Create page
- [ ] White Paper page
- [ ] Source Truth page
- [ ] Privacy page

### Fase 6: Pagine Audience (1 settimana)
- [ ] ArtistPage (assemblaggio blocchi)
- [ ] BusinessPage (assemblaggio blocchi)
- [ ] PaPage (assemblaggio blocchi + NATAN)
- [ ] CollectorPage (assemblaggio blocchi)

### Fase 7: Landing HANDOFF (1 settimana)
- [ ] Integrazione WheelMenu
- [ ] Sezioni hero
- [ ] Navigazione a audience pages
- [ ] Navigazione a approfondimenti

### Fase 8: SEO & Ottimizzazione (3-4 giorni)
- [ ] Schema.org per ogni pagina
- [ ] Meta tags dinamici
- [ ] Sitemap
- [ ] Performance optimization
- [ ] Testing cross-browser

### Fase 9: Deploy (1-2 giorni)
- [ ] Build produzione
- [ ] Deploy su Laravel Forge
- [ ] Configurazione dominio `egi-info.13.48.57.194.sslip.io`
- [ ] Test finale

---

## Note Finali

### Principi Guida

1. **Glossario Ovunque** - Ogni termine tecnico linkato, in ogni pagina
2. **Componenti Atomici** - Blocchi riutilizzabili per assemblaggio flessibile
3. **i18n Nativo** - Tutto traducibile IT/EN
4. **UX Coerente** - "Torna al testo" funziona ovunque allo stesso modo
5. **Design Unificato** - Un theme, non CSS inline per pagina

### Da Evitare
- ❌ CSS inline massiccio (come nei Blade attuali)
- ❌ Glossari duplicati per pagina
- ❌ Testi hardcoded senza i18n
- ❌ Navigazione inconsistente tra pagine
- ❌ Componenti monolitici non riutilizzabili

### Da Implementare
- ✅ Tailwind + theme centralizzato
- ✅ GlossaryProvider globale condiviso
- ✅ Traduzioni JSON strutturate
- ✅ Content blocks con varianti per audience
- ✅ Layout specifici per tipo pagina

---

## Deployment

| Parametro | Valore |
|-----------|--------|
| Target URL | `egi-info.13.48.57.194.sslip.io` |
| Provider | Laravel Forge |
| Stack | Vite + React + TypeScript |
| Build | `npm run build` → `dist/` |

---

*Documento generato da GitHub Copilot (Claude Opus 4.5) per il progetto EGI-INFO*  
*Ultimo aggiornamento: Dicembre 2025*
