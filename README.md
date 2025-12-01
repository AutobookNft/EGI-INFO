# EGI-INFO - FlorenceEGI Informative Pages (React SPA)

> **Per Copilot**: Questo documento contiene TUTTO il contesto necessario per sviluppare questo progetto.
> Leggi attentamente prima di iniziare qualsiasi task.

---

## 🎯 MISSION

Convertire tutte le pagine informative Laravel Blade di FlorenceEGI in una **Single Page Application React** moderna, performante e manutenibile.

### Perché questo progetto?

Il progetto EGI principale (Laravel) contiene 16 pagine informative scritte in Blade PHP con:
- ❌ Duplicazione massiva di codice (ogni pagina ha 500-1500 righe)
- ❌ CSS inline e Tailwind CDN mescolati
- ❌ Nessuna componentizzazione
- ❌ Traduzioni sparse con `__()` Laravel
- ❌ SEO/meta tags duplicati ovunque
- ❌ Difficile manutenzione

### Obiettivo

✅ React + TypeScript SPA con:
- Componenti riutilizzabili
- Sistema di routing (React Router)
- Gestione stato centralizzata (Context API)
- CSS modulare (CSS Modules o styled-components)
- i18n per multilingua
- SEO con React Helmet
- Build ottimizzato (Vite)

---

## 📁 PAGINE DA CONVERTIRE

### Cartella `resources/views/info/` (13 pagine)

| File Blade | Descrizione | Priorità |
|------------|-------------|----------|
| `florenceegi-v4-wheel.blade.php` | Landing principale con WheelMenu | 🔴 ALTA |
| `florenceegi-v4.blade.php` | Landing V4 alternativa | 🔴 ALTA |
| `florenceegi-light.blade.php` | Versione light | 🟡 MEDIA |
| `florenceegi.blade.php` | Legacy | 🟢 BASSA |
| `florence-egi.blade.php` | Redirect/alias | 🟢 BASSA |
| `co-create-ecosystem.blade.php` | Co-Creatori, Trader Pro | 🔴 ALTA |
| `epp-info.blade.php` | Environment Protection Programs | 🔴 ALTA |
| `egi-info.blade.php` | Info generale EGI | 🟡 MEDIA |
| `white-paper-finanziario.blade.php` | White Paper interattivo con Chart.js | 🔴 ALTA |
| `why-cant-buy-egis.blade.php` | FAQ acquisto | 🟡 MEDIA |
| `disclaimer.blade.php` | Disclaimer staging | 🟢 BASSA |
| `under-construction.blade.php` | Pagina costruzione | 🟢 BASSA |
| `florenceegi_source_truth.blade.php` | Documentazione interna | 🟢 BASSA |

### Cartella `resources/views/archetypes/` (3 pagine)

| File Blade | Descrizione | Priorità |
|------------|-------------|----------|
| `collector.blade.php` | Archetipo Collezionista | 🔴 ALTA |
| `pa-entity.blade.php` | PA con N.A.T.A.N. AI | 🔴 ALTA |
| `patron-standalone.blade.php` | Archetipo Patron | 🔴 ALTA |

---

## 🏗️ ARCHITETTURA PROGETTO

```
EGI-INFO/
├── src/
│   ├── components/
│   │   ├── common/           # Button, Card, Badge, Modal, etc.
│   │   ├── navigation/       # Navbar, WheelMenu, Sidebar, Footer
│   │   └── sections/         # Sezioni riutilizzabili tra pagine
│   │
│   ├── pages/
│   │   ├── florenceegi/      # Landing pages principali
│   │   │   ├── FlorenceEGIWheel.tsx    # Con WheelMenu
│   │   │   ├── FlorenceEGIV4.tsx
│   │   │   └── FlorenceEGILight.tsx
│   │   │
│   │   ├── info/             # Pagine informative
│   │   │   ├── CoCreateEcosystem.tsx
│   │   │   ├── EPPInfo.tsx
│   │   │   ├── WhitePaper.tsx
│   │   │   ├── WhyCantBuy.tsx
│   │   │   └── Disclaimer.tsx
│   │   │
│   │   └── archetypes/       # Archetipi utente
│   │       ├── Collector.tsx
│   │       ├── PAEntity.tsx
│   │       └── Patron.tsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.tsx    # Layout con navbar standard
│   │   ├── LandingLayout.tsx # Layout full-screen per landing
│   │   └── ArchetypeLayout.tsx
│   │
│   ├── context/
│   │   ├── AudioContext.tsx
│   │   ├── AnimationContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   │
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useMediaQuery.ts
│   │   └── useIntersection.ts
│   │
│   ├── styles/
│   │   ├── base.css          # Reset, variabili CSS
│   │   ├── themes/           # Dark/Light themes
│   │   └── animations.css    # Animazioni globali
│   │
│   ├── utils/
│   │   ├── seo.ts            # Helper per meta tags
│   │   └── analytics.ts
│   │
│   ├── i18n/                 # Traduzioni
│   │   ├── it.json
│   │   ├── en.json
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── Router.tsx
│   └── main.tsx
│
├── public/
│   ├── audio/                # Brani musicali
│   └── images/
│
├── docs/                     # Documentazione
│   └── HANDOFF/              # File di riferimento da EGI
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 DESIGN SYSTEM

### Colori Brand (da rispettare)

```css
:root {
  /* Colori Primari FlorenceEGI */
  --gold: #d4af37;
  --gold-light: #f4d03f;
  --oro-fiorentino: #D4A574;
  
  /* Sfondo */
  --bg-dark: #0a0a0f;
  --bg-section: #0d0d12;
  --bg-card: rgba(20, 20, 30, 0.8);
  
  /* Testo */
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.7);
  --text-muted: rgba(255, 255, 255, 0.5);
  
  /* Accenti per Archetipi */
  --verde-rinascita: #2D5016;
  --blu-algoritmo: #1B365D;
  --rosso-urgenza: #C13120;
  --arancio-energia: #E67E22;
  --viola-innovazione: #8E44AD;
  
  /* EPP Colors */
  --forest-green: #1B5E20;
  --ocean-blue: #0277BD;
  --bee-amber: #FF8F00;
}
```

### Tipografia

```css
/* Font Families */
--font-heading: 'Playfair Display', serif;    /* Titoli eleganti */
--font-body: 'Source Sans Pro', sans-serif;   /* Corpo testo */
--font-institutional: 'Inter', sans-serif;    /* PA/Istituzionale */
```

### Breakpoints

```css
/* Mobile First */
--bp-sm: 640px;
--bp-md: 768px;   /* Breakpoint principale mobile/desktop */
--bp-lg: 1024px;
--bp-xl: 1280px;
```

---

## 🧩 COMPONENTI GIÀ SVILUPPATI (da docs/HANDOFF/)

### WheelMenu
Menu circolare con navigazione a ruota. Già completo in `docs/EGI-INFO-HANDOFF/02-WheelMenu.tsx`.

**Features:**
- Animazione spin su hover
- Fallback lista su mobile (< 768px)
- localStorage per sezioni visitate
- Keyboard navigation (Tab, Enter, Arrow keys)
- ARIA accessibility
- Proprietà `emphasized` per evidenziare item

### 10 Sezioni V4
Tutte le sezioni della landing FlorenceEGI V4 sono in `docs/EGI-INFO-HANDOFF/06-13`.

| Sezione | ID | Descrizione |
|---------|------|-------------|
| HeroV4 | hero | Hero con titolo e CTA |
| OriginStoryV4 | originstory | "5 anni, 5 riscritture, 5%" |
| EgizzareV4 | egizzare | Concetto di Egizzare |
| WhatIsEGIV4 | whatisegi | Cos'è un EGI |
| TransparencyV4 | transparency | Trasparenza blockchain |
| BlockchainSimpleV4 | blockchain | Spiegazione semplice |
| ProblemsV4 | problems | Problemi che risolve |
| InvoicesV4 | invoices | Sistema fatture |
| WhoCanUseV4 | whocause | Target utenti |
| CTAFinalV4 | cta | Call to action finale |

### Audio System
Sistema audio completo con brani royalty-free da Internet Archive.
Vedi `docs/EGI-INFO-HANDOFF/14-15`.

---

## 📋 WORKFLOW DI CONVERSIONE

### Per ogni pagina Blade:

1. **Analisi**
   - Identificare sezioni logiche
   - Estrarre testi (per i18n)
   - Catalogare stili CSS
   - Identificare componenti riutilizzabili

2. **Creazione Componenti**
   - Creare componenti React per ogni sezione
   - CSS Module o file CSS dedicato
   - Props tipizzate con TypeScript
   - Export dal barrel file `index.ts`

3. **Assemblaggio Pagina**
   - Creare page component
   - Importare layout appropriato
   - Comporre con sezioni
   - Aggiungere SEO (React Helmet)

4. **Test & Polish**
   - Test responsive
   - Test accessibilità
   - Ottimizzare performance
   - Verificare traduzioni

---

## 🚀 SETUP PROGETTO

```bash
# Installazione
cd /home/fabio/EGI-INFO
npm create vite@latest . -- --template react-ts
npm install react-router-dom react-helmet-async i18next react-i18next

# Sviluppo
npm run dev

# Build
npm run build
```

### Dependencies Necessarie

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x",
    "react-helmet-async": "^2.x",
    "i18next": "^23.x",
    "react-i18next": "^14.x"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.x",
    "vite": "^5.x"
  }
}
```

---

## 🌐 DEPLOYMENT

**Target**: `egi-info.13.48.57.194.sslip.io`

**Platform**: Laravel Forge

**Deploy Script**:
```bash
cd /home/forge/egi-info.13.48.57.194.sslip.io
git pull origin main
npm install
npm run build
```

**Nginx**: Puntare a `dist/` con fallback a `index.html` per SPA routing.

---

## ⚡ PRIORITÀ IMMEDIATE

1. **Setup base progetto** (Vite + React + TypeScript + Router)
2. **Importare componenti da HANDOFF** (WheelMenu, sezioni V4)
3. **Creare FlorenceEGIWheel.tsx** come prima pagina funzionante
4. **Implementare routing base**
5. **Convertire pagine alta priorità** (Co-Create, EPP, White Paper, Archetypes)

---

## 📚 RIFERIMENTI

- **Handoff completo**: `docs/EGI-INFO-HANDOFF/` (copiare da EGI principale)
- **Pagine Blade originali**: `/home/fabio/EGI/resources/views/info/` e `archetypes/`
- **Traduzioni Laravel**: `/home/fabio/EGI/lang/` (it, en, es, pt, fr, de)

---

## 🔧 NOTE PER COPILOT

### Quando converti una pagina Blade:

1. **NON copiare** CSS inline o Tailwind classes direttamente
2. **Estrai** i pattern CSS in variabili/classi riutilizzabili
3. **Identifica** componenti comuni (Card, Button, Section, etc.)
4. **Separa** contenuti da presentazione
5. **Usa** TypeScript strict mode
6. **Documenta** ogni componente con JSDoc

### Pattern da seguire:

```tsx
// ✅ CORRETTO
interface SectionProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlight';
}

export function Section({ title, children, variant = 'default' }: SectionProps) {
  return (
    <section className={`section section--${variant}`}>
      <h2 className="section__title">{title}</h2>
      <div className="section__content">{children}</div>
    </section>
  );
}

// ❌ EVITARE
export function Section(props: any) {
  return <section style={{...inline styles...}}>{props.children}</section>
}
```

### Struttura file CSS:

```css
/* ComponentName.css */

/* Block */
.component-name { }

/* Element */
.component-name__title { }
.component-name__content { }

/* Modifier */
.component-name--highlight { }
.component-name--dark { }

/* State */
.component-name.is-active { }
.component-name.is-loading { }
```

---

## 📊 STATO PROGETTO

| Task | Status |
|------|--------|
| Setup cartella | ✅ Completato |
| README | ✅ Completato |
| Vite + React | ⏳ Da fare |
| Import HANDOFF | ⏳ Da fare |
| FlorenceEGI Wheel | ⏳ Da fare |
| Routing | ⏳ Da fare |
| Co-Create | ⏳ Da fare |
| EPP | ⏳ Da fare |
| White Paper | ⏳ Da fare |
| Archetypes | ⏳ Da fare |
| i18n | ⏳ Da fare |
| Deploy | ⏳ Da fare |

---

**Ultimo aggiornamento**: 1 Dicembre 2025
