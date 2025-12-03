# EGI-INFO - Architettura Tecnica

**Versione:** 1.0.0  
**Data:** 2025-12-02  
**Autore:** Copilot + Fabio

---

## 1. PRINCIPI FONDAMENTALI

### 1.1 Separazione delle Responsabilità

```
┌─────────────────────────────────────────────────────────────┐
│                        VISTE                                │
│         (Aggregatori - Composizione Componenti)             │
├─────────────────────────────────────────────────────────────┤
│                     COMPONENTI                              │
│            (Mattoncini LEGO - Atomici)                      │
├──────────────────┬──────────────────┬───────────────────────┤
│     CONTENUTO    │      STILE       │      GLOSSARIO        │
│      (i18n)      │     (Temi)       │     (Globale)         │
└──────────────────┴──────────────────┴───────────────────────┘
```

### 1.2 Regole Inviolabili

1. **ZERO testo hardcoded** - Tutto da `t('chiave')`
2. **ZERO stili inline nei componenti** - Solo classi CSS semantiche
3. **Componenti autonomi** - Ogni argomento vive di vita propria
4. **Glossario trasversale** - Si interfaccia con qualsiasi componente
5. **Temi intercambiabili** - Cambio look senza toccare componenti
6. **i18n scalabile** - Da 2 a 100 lingue senza modifiche al codice

---

## 2. STRUTTURA FILE

```
/src
├── /components
│   ├── /atoms              ← Elementi base (Button, Badge, Card)
│   ├── /topics             ← COMPONENTI ARGOMENTO (mattoncini)
│   │   ├── EgiDefinition.tsx
│   │   ├── EgiComponents.tsx
│   │   ├── EppPrograms.tsx
│   │   ├── CoCreateConcept.tsx
│   │   ├── TraderPro.tsx
│   │   └── ...
│   ├── /glossary           ← Sistema glossario
│   │   ├── GlossaryTerm.tsx
│   │   ├── GlossaryModal.tsx
│   │   └── GlossaryContext.tsx
│   └── /layout             ← Strutture layout (non stili)
│       ├── TopicSection.tsx
│       └── ViewContainer.tsx
│
├── /views                  ← AGGREGATORI (composizioni)
│   ├── /byTopic            ← Viste per argomento
│   │   ├── EgiInfoView.tsx
│   │   ├── EppInfoView.tsx
│   │   └── ...
│   └── /byAudience         ← Viste per tipologia utente
│       ├── ArtistView.tsx
│       ├── EntrepreneurView.tsx
│       └── ...
│
├── /styles
│   ├── /base
│   │   ├── reset.css
│   │   ├── typography.css
│   │   ├── spacing.css     ← Golden ratio
│   │   └── layout.css
│   ├── /themes
│   │   ├── renaissance.css ← Tema FlorenceEGI (oro/blu)
│   │   ├── minimal.css
│   │   └── dark.css
│   ├── /components         ← Stili per classi semantiche
│   │   ├── topic-card.css
│   │   ├── benefit-list.css
│   │   └── ...
│   └── variables.css       ← CSS Custom Properties
│
├── /i18n
│   ├── config.ts
│   └── /locales
│       ├── /it
│       │   ├── common.json
│       │   ├── glossary.json
│       │   ├── egi.json
│       │   ├── epp.json
│       │   ├── florence.json
│       │   ├── cocreate.json
│       │   └── ...
│       └── /en
│           └── ... (stessa struttura)
│
└── /context
    ├── ThemeContext.tsx    ← Switch tema
    ├── GlossaryContext.tsx ← Stato glossario
    └── LocaleContext.tsx   ← Lingua corrente
```

---

## 3. COMPONENTI ARGOMENTO (Mattoncini)

### 3.1 Struttura Tipo

```tsx
// /components/topics/EgiDefinition.tsx

import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../glossary/GlossaryTerm';

/**
 * EgiDefinition - Componente atomico
 * 
 * Argomento: Definizione base di cosa sono gli EGI
 * Fonte: info_egi.php → definition_*
 * Termini glossario: egi, blockchain, algorand, arc72
 */
const EgiDefinition: React.FC = () => {
  const { t } = useTranslation('egi');

  return (
    <article className="topic-section topic-section--definition">
      <header className="topic-section__header">
        <span className="topic-badge">{t('definition.badge')}</span>
        <h2 className="topic-section__title">{t('definition.title')}</h2>
        <p className="topic-section__subtitle">{t('definition.subtitle')}</p>
      </header>

      <div className="topic-section__content">
        <p className="topic-paragraph">
          {t('definition.intro.before_egi')}
          <GlossaryTerm termId="egi">{t('terms.egi')}</GlossaryTerm>
          {t('definition.intro.after_egi')}
          <GlossaryTerm termId="blockchain">{t('terms.blockchain')}</GlossaryTerm>
          {t('definition.intro.after_blockchain')}
        </p>

        <ul className="benefit-list">
          <li className="benefit-list__item">
            <span className="benefit-list__icon" aria-hidden="true">🎨</span>
            <div>
              <strong>{t('definition.cards.art.title')}</strong>
              <span>{t('definition.cards.art.desc')}</span>
            </div>
          </li>
          {/* ... altre voci ... */}
        </ul>
      </div>
    </article>
  );
};

export default EgiDefinition;
```

### 3.2 Regole Componenti

| ✅ FARE | ❌ NON FARE |
|---------|-------------|
| `className="topic-section"` | `style={{color: 'gold'}}` |
| `{t('chiave')}` | `"Testo hardcoded"` |
| `<GlossaryTerm termId="x">` | Termine senza link |
| Struttura semantica HTML | Div soup |
| Classi BEM | Classi utility (Tailwind) |

---

## 4. SISTEMA GLOSSARIO

### 4.1 Flusso

```
Utente clicca "blockchain"
       ↓
GlossaryTerm cattura click
       ↓
GlossaryContext.navigateToTerm('blockchain')
       ↓
GlossaryModal si apre con definizione da glossary.json
       ↓
Utente chiude → torna esattamente dove era
```

### 4.2 GlossaryTerm

```tsx
<GlossaryTerm termId="blockchain">blockchain</GlossaryTerm>

// Renderizza:
<span 
  class="glossary-term" 
  role="button" 
  tabindex="0"
  aria-describedby="glossary-blockchain"
>
  blockchain
</span>
```

### 4.3 Struttura glossary.json

```json
{
  "terms": {
    "blockchain": {
      "term": "Blockchain",
      "definition": "Registro digitale distribuito...",
      "category": "technology",
      "related": ["algorand", "smart-contract", "arc72"]
    },
    "egi": {
      "term": "EGI",
      "definition": "Ecological Goods Invent...",
      "category": "core",
      "related": ["epp", "goods", "invent"]
    }
  }
}
```

---

## 5. SISTEMA TEMI

### 5.1 CSS Variables

```css
/* /styles/variables.css */
:root {
  /* Colori - ridefiniti dai temi */
  --color-primary: #d4af37;
  --color-secondary: #1b365d;
  --color-background: #0a0a0f;
  --color-text: #ffffff;
  --color-text-muted: #a0a0b0;
  
  /* Spacing - Golden Ratio (φ = 1.618) */
  --space-unit: 8px;
  --space-xs: calc(var(--space-unit) * 0.618);     /* 4.9px */
  --space-sm: var(--space-unit);                    /* 8px */
  --space-md: calc(var(--space-unit) * 1.618);     /* 12.9px */
  --space-lg: calc(var(--space-unit) * 2.618);     /* 20.9px */
  --space-xl: calc(var(--space-unit) * 4.236);     /* 33.9px */
  --space-2xl: calc(var(--space-unit) * 6.854);    /* 54.8px */
  
  /* Typography */
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans SC', system-ui, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;
}
```

### 5.2 Tema Esempio

```css
/* /styles/themes/renaissance.css */
:root {
  --color-primary: #d4af37;      /* Oro Fiorentino */
  --color-secondary: #1b365d;    /* Blu Algoritmo */
  --color-accent: #2d5016;       /* Verde Rinascita */
  --color-background: #0a0a0f;
  --color-surface: #12121a;
}

.topic-section {
  background: var(--color-surface);
  border-left: 4px solid var(--color-primary);
}

.topic-section__title {
  color: var(--color-primary);
  font-family: var(--font-serif);
}

.glossary-term {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-color: rgba(212, 175, 55, 0.4);
}
```

---

## 6. INTERNAZIONALIZZAZIONE

### 6.1 Configurazione i18next

```typescript
// /i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import dinamico per scalabilità
const loadLocale = (lang: string, ns: string) => 
  import(`./locales/${lang}/${ns}.json`);

i18n.use(initReactI18next).init({
  lng: 'it',
  fallbackLng: 'it',
  ns: ['common', 'glossary', 'egi', 'epp', 'florence', 'cocreate'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  react: { useSuspense: true }
});

export default i18n;
```

### 6.2 Aggiungere Nuova Lingua

1. Creare `/i18n/locales/xx/` (es: `/ja/` per giapponese)
2. Copiare tutti i JSON da `/it/`
3. Tradurre i contenuti
4. Aggiungere a `supportedLngs` in config
5. **FATTO** - Nessuna modifica ai componenti

### 6.3 Supporto RTL

```tsx
// App.tsx
const { i18n } = useTranslation();
const isRTL = ['ar', 'he', 'fa'].includes(i18n.language);

return (
  <html lang={i18n.language} dir={isRTL ? 'rtl' : 'ltr'}>
    ...
  </html>
);
```

---

## 7. VISTE (Aggregatori)

### 7.1 Vista per Argomento

```tsx
// /views/byTopic/EgiInfoView.tsx
import EgiDefinition from '@/components/topics/EgiDefinition';
import EgiComponents from '@/components/topics/EgiComponents';
import EgiBenefits from '@/components/topics/EgiBenefits';
import EgiTechnical from '@/components/topics/EgiTechnical';

const EgiInfoView: React.FC = () => {
  return (
    <ViewContainer>
      <EgiDefinition />
      <EgiComponents />
      <EgiBenefits />
      <EgiTechnical />
    </ViewContainer>
  );
};
```

### 7.2 Vista per Tipologia Utente

```tsx
// /views/byAudience/ArtistView.tsx
import EgiDefinition from '@/components/topics/EgiDefinition';
import CoCreateArtist from '@/components/topics/CoCreateArtist';
import RoyaltySystem from '@/components/topics/RoyaltySystem';
import EppImpact from '@/components/topics/EppImpact';

const ArtistView: React.FC = () => {
  return (
    <ViewContainer audience="artist">
      <EgiDefinition />      {/* Riutilizzato */}
      <CoCreateArtist />     {/* Specifico artisti */}
      <RoyaltySystem />      {/* Riutilizzato */}
      <EppImpact />          {/* Riutilizzato */}
    </ViewContainer>
  );
};
```

---

## 8. FLUSSO SVILUPPO

```
1. INVENTARIO
   └── Scandaglio docs Laravel → Lista argomenti

2. PER OGNI ARGOMENTO
   ├── Creare JSON traduzioni (IT + EN)
   ├── Identificare termini glossario
   ├── Creare componente React
   └── Verificare autonomia componente

3. GLOSSARIO
   └── Compilare glossary.json completo

4. TEMI
   ├── Definire CSS variables
   └── Creare tema renaissance.css

5. VISTE
   ├── Comporre viste per argomento
   └── Comporre viste per audience

6. TEST
   ├── Ogni componente renderizza standalone
   ├── Switch lingua funziona
   ├── Switch tema funziona
   └── Glossario funziona ovunque
```

---

## 9. CRITERI DI COMPLETAMENTO

Un componente è **FATTO** quando:

- [ ] Contenuto 100% da i18n (IT + EN)
- [ ] Zero testo hardcoded
- [ ] Tutti i termini tecnici sono `<GlossaryTerm>`
- [ ] Solo classi CSS semantiche
- [ ] Renderizza correttamente da solo
- [ ] Accessibile (ARIA, keyboard nav)
- [ ] Responsive (no larghezze fisse su testo)

---

*Documento vivente - Aggiornare durante lo sviluppo*
