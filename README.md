# EGI-INFO - FlorenceEGI Informative Platform

> **Single Page Application React** per le pagine informative del progetto FlorenceEGI

---

## 🎯 OVERVIEW

**EGI-INFO** è il sito informativo/educational di FlorenceEGI, il primo Asset Market Maker sostenibile su blockchain Algorand.

### Stack Tecnologico

| Tecnologia | Versione | Note |
|------------|----------|------|
| **React** | 19.2.0 | Cutting edge |
| **TypeScript** | 5.9.3 | Type safety |
| **Vite** | 7.2.4 | Fast build |
| **TailwindCSS** | 4.1.17 | Modern styling |
| **react-router-dom** | 7.9.6 | Routing |
| **i18next** | 25.7.0 | Internazionalizzazione |

---

## 📊 STATISTICHE PROGETTO

| Metrica | Valore |
|---------|--------|
| **Lines of Code** | 26,574+ |
| **File Totali** | 173+ |
| **Componenti React** | 80+ |
| **Pagine** | 59+ |
| **Routes** | 60+ |
| **Mattoncini FlorenceEGI** | 43 |
| **Termini Glossario** | 503 |
| **Lingue** | 2 (IT, EN) |

---

## 🏗️ ARCHITETTURA

```
src/
├── components/
│   ├── common/              # GlossaryTerm, SEO, Button, etc.
│   ├── mattoncini/          # 🧱 43 Mattoncini Florence
│   │   └── florence/
│   ├── navigation/          # WheelMenu, Sidebar
│   ├── sections/            # Sezioni riutilizzabili
│   └── topics/              # EGI, EPP, Florence, CoCreate
│
├── pages/
│   ├── info/                # Pagine informative
│   │   └── florence/        # 43 pagine test mattoncini
│   └── archetypes/          # Artist, Collector, Entrepreneur, PA
│
├── layouts/
│   ├── LandingLayout.tsx    # Layout con WheelMenu
│   └── InfoPageLayout.tsx   # Layout info pages
│
├── i18n/
│   └── locales/
│       ├── it/              # 10 namespace JSON
│       └── en/              # 10 namespace JSON
│
├── styles/
│   ├── globals.css          # Golden Ratio Design System
│   └── components/          # Component styles
│
├── utils/
│   └── seo/                 # SEO React 19 compatible
│
├── context/                 # GlossaryContext, ThemeContext
└── router/                  # Route definitions
```

---

## 🧱 SISTEMA MATTONCINI

Il progetto implementa un **sistema modulare** di 43 "mattoncini" - componenti React autonomi che possono essere composti per creare pagine.

### Categorie Mattoncini

| Categoria | Mattoncini | ID |
|-----------|------------|-----|
| **Hero & Intro** | Motto, WhatWeDo, Impact, Intro | #1-4 |
| **12 Problemi** | Problem1-12 (before/after) | #5-16 |
| **7 Esempi Settore** | Art, Music, Books, Eco, Sport, Fashion, Heritage | #17-23 |
| **Come Funziona** | HowItWorks 1-3 | #24-26 |
| **AMMk Platform** | Users, Engines, Custom | #27-29 |
| **Technology** | User, System, Performance | #30-32 |
| **Core Info** | Payments, Compliance, Ecosystem, NATAN, Governance | #33-37 |
| **Pricing** | Primary, Secondary | #38-39 |
| **Closing** | Cases, Roadmap, FAQ, CTAFinal | #40-43 |

### Dashboard Mattoncini
Visita `/info/florence` per la dashboard completa con navigazione e status.

---

## 🎨 DESIGN SYSTEM

### Golden Ratio Scale (φ = 1.618)

```css
--space-xs: 0.618rem;    /* 9.89px */
--space-sm: 1rem;        /* 16px */
--space-md: 1.618rem;    /* 25.89px */
--space-lg: 2.618rem;    /* 41.89px */
--space-xl: 4.236rem;    /* 67.78px */
```

### Colori Brand

```css
--color-gold: #D4AF37;
--color-dark: #0A0A0F;
--color-verde-rinascimento: #2E8B57;
--color-blu-medici: #1E3A5F;
```

### Tipografia

```css
--font-serif: 'Playfair Display', serif;  /* Titoli */
--font-sans: 'Inter', sans-serif;         /* Corpo */
```

---

## 🌍 INTERNAZIONALIZZAZIONE

### Namespace i18n

| Namespace | Descrizione |
|-----------|-------------|
| `common` | UI elements, navigation |
| `florence` | Contenuti FlorenceEGI |
| `egi` | Informazioni EGI token |
| `epp` | Environment Protection Programs |
| `glossary` | 503 termini tecnici |
| `audiences` | Archetipi utente |

### GlossaryTerm Component

```tsx
import GlossaryTerm from '@/components/common/GlossaryTerm';

// Uso nel testo
<p>
  Ogni <GlossaryTerm termId="egi">EGI</GlossaryTerm> include 
  royalty perpetue via <GlossaryTerm termId="smart-contract">smart contract</GlossaryTerm>.
</p>
```

---

## ♿ ACCESSIBILITÀ (WCAG 2.1)

- ✅ 328+ attributi ARIA
- ✅ Focus styles per navigazione tastiera
- ✅ Skip link per screen reader
- ✅ Contrasto colori verificato
- ✅ TabIndex per elementi interattivi

---

## 🔍 SEO

Sistema SEO compatibile con React 19 (senza react-helmet):

- ✅ `document.title` dinamico
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Meta description/keywords

---

## 🚀 SETUP

```bash
# Installazione
npm install

# Sviluppo
npm run dev

# Build produzione
npm run build

# Preview build
npm run preview
```

---

## 📁 ROUTES PRINCIPALI

| Route | Descrizione |
|-------|-------------|
| `/` | Home con WheelMenu |
| `/info` | Hub approfondimenti |
| `/info/egi` | Cos'è un EGI |
| `/info/epp` | Environment Protection Programs |
| `/info/platform` | FlorenceEGI Platform |
| `/info/florence` | Dashboard 43 Mattoncini |
| `/archetypes/artist` | Per Artisti |
| `/archetypes/entrepreneur` | Per Imprenditori |
| `/archetypes/collector` | Per Collezionisti |
| `/archetypes/public-admin` | Per PA |

---

## 📋 DOCUMENTAZIONE

| Documento | Path |
|-----------|------|
| Architettura | `docs/ARCHITECTURE.md` |
| Standard Mattoncini | `docs/MATTONCINI-STANDARD.md` |
| Checklist Mattoncini | `docs/MATTONCINI-CHECKLIST.md` |
| Guida SEO | `docs/SEO-IMPLEMENTATION-GUIDE.md` |
| TODO | `docs/TODO.md` |

---

## 🌐 DEPLOYMENT

**Target**: `egi-info.13.48.57.194.sslip.io`

**Platform**: Laravel Forge

```bash
cd /home/forge/egi-info.13.48.57.194.sslip.io
git pull origin main
npm install
npm run build
```

---

## 📊 STATO PROGETTO

| Area | Status | Completamento |
|------|--------|---------------|
| Setup Base | ✅ | 100% |
| WheelMenu | ✅ | 100% |
| 43 Mattoncini | ✅ | 100% |
| i18n IT/EN | ✅ | 100% |
| Glossario | ✅ | 100% |
| SEO | ✅ | 100% |
| Accessibilità | ✅ | 90% |
| Testing | ⏳ | 0% |
| Pagine Aggregazione | ⏳ | In progress |

---

## 📝 LICENZA

Proprietario: FlorenceEGI / Autobook NFT

---

**Ultimo aggiornamento**: 3 Dicembre 2025
