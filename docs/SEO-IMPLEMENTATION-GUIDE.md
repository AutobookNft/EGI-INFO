# Guida Implementazione SEO - FlorenceEGI

> **IMPORTANTE**: Questo documento serve come promemoria per implementare il SEO quando si creano le pagine di aggregazione dei mattoncini.

## 1. Componente SEO Disponibile

Il componente SEO è già creato in:
```
/src/components/common/SEO.tsx
```

### Cosa fa automaticamente:
- ✅ **Schema.org JSON-LD** (Organization, WebPage, Product, Article, FAQPage)
- ✅ **Open Graph** meta tags (og:title, og:description, og:image, og:url, og:type)
- ✅ **Twitter Cards** (summary_large_image)
- ✅ **Canonical URLs** e **hreflang** alternates (it/en)
- ✅ **Meta robots** (index/noindex, follow/nofollow)
- ✅ **Keywords** meta tag

---

## 2. Come Usare il Componente SEO

### Importazione
```tsx
import { SEO } from '@/components/common/SEO';
// oppure i preset:
import { FlorenceHomeSEO, FlorenceInfoSEO } from '@/components/common/SEO';
```

### Uso Base
```tsx
const MiaPagina = () => {
  return (
    <>
      <SEO 
        title="Titolo Pagina - FlorenceEGI"
        description="Descrizione della pagina (max 160 caratteri)"
        canonical="/percorso/pagina"
        keywords={['keyword1', 'keyword2', 'keyword3']}
        schemaType="WebPage"
      />
      
      {/* Contenuto della pagina */}
      <Mattoncino1 />
      <Mattoncino2 />
    </>
  );
};
```

### Uso con Preset (Pagine Florence)
```tsx
// Per la home di Florence
<FlorenceHomeSEO />

// Per le pagine info con sezione specifica
<FlorenceInfoSEO section="intro" />
<FlorenceInfoSEO section="how-it-works" />
<FlorenceInfoSEO section="impact" />
<FlorenceInfoSEO section="problems" />
<FlorenceInfoSEO section="motto" />
```

---

## 3. Props Disponibili

| Prop | Tipo | Default | Descrizione |
|------|------|---------|-------------|
| `title` | string | "FlorenceEGI - Il Primo Asset Market Maker Sostenibile" | Titolo pagina |
| `description` | string | (default lungo) | Meta description |
| `keywords` | string[] | ['EGI', 'blockchain', ...] | Keywords SEO |
| `canonical` | string | "/" | URL canonico (relativo) |
| `ogType` | 'website' \| 'article' \| 'product' | 'website' | Tipo Open Graph |
| `ogImage` | string | "/og-image.jpg" | Immagine OG (relativa) |
| `ogImageAlt` | string | (dal title) | Alt text immagine |
| `twitterCard` | 'summary' \| 'summary_large_image' | 'summary_large_image' | Tipo Twitter Card |
| `schemaType` | 'WebPage' \| 'Organization' \| 'Product' \| 'Article' \| 'FAQPage' | 'WebPage' | Tipo Schema.org |
| `schemaData` | object | - | Dati aggiuntivi per schema |
| `noIndex` | boolean | false | Se true, pagina non indicizzata |
| `noFollow` | boolean | false | Se true, link non seguiti |

---

## 4. Checklist per Nuove Pagine

Quando crei una nuova pagina di aggregazione mattoncini:

### ✅ Prima di tutto
- [ ] Importa il componente SEO
- [ ] Inserisci `<SEO />` come primo elemento nel JSX (dentro un Fragment `<>`)

### ✅ Configura i meta essenziali
- [ ] `title`: Max 60 caratteri, includi "FlorenceEGI"
- [ ] `description`: Max 160 caratteri, includi CTA
- [ ] `canonical`: URL relativo della pagina
- [ ] `keywords`: 5-10 keywords rilevanti

### ✅ Open Graph (per social sharing)
- [ ] `ogImage`: Crea immagine 1200x630px per la pagina
- [ ] `ogType`: 'website' per landing, 'article' per contenuti

### ✅ Schema.org
- [ ] `schemaType`: Scegli il tipo appropriato
- [ ] Per FAQ: passa `schemaData={{ faqItems: [...] }}`

---

## 5. Esempi per Tipo di Pagina

### Landing Page Florence
```tsx
<SEO 
  title="FlorenceEGI - Trasforma i Tuoi Asset in EGI"
  description="Il primo Asset Market Maker sostenibile. 20% a progetti ambientali, royalty perpetue, zero gas fee."
  canonical="/florence"
  ogType="website"
  schemaType="Organization"
/>
```

### Pagina How It Works
```tsx
<SEO 
  title="Come Funziona FlorenceEGI - 3 Step Semplici"
  description="Crea Collection, Egizza, Vendi. Tutto in meno di 5 secondi. Scopri il flusso completo."
  canonical="/info/florence/how-it-works"
  schemaType="WebPage"
  keywords={['come funziona', 'egizzare', 'collection', 'minting', 'tutorial']}
/>
```

### Pagina FAQ
```tsx
<SEO 
  title="FAQ FlorenceEGI - Domande Frequenti"
  description="Risposte alle domande più comuni su FlorenceEGI, EGI, blockchain e sostenibilità."
  canonical="/info/florence/faq"
  schemaType="FAQPage"
  schemaData={{
    faqItems: [
      {
        "@type": "Question",
        "name": "Devo capire la blockchain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, l'esperienza è identica a un e-commerce."
        }
      },
      // ... altre FAQ
    ]
  }}
/>
```

### Pagina Singolo Problema
```tsx
<SEO 
  title="Commissioni Esorbitanti - Problema #1 | FlorenceEGI"
  description="Fee 15-30% sui marketplace tradizionali. FlorenceEGI offre fee 10% dinamica fino al 5%."
  canonical="/info/florence/problems/1"
  schemaType="Article"
/>
```

---

## 6. File Immagini Necessari

Crea questi file nella cartella `/public/`:

| File | Dimensioni | Uso |
|------|-----------|-----|
| `og-image.jpg` | 1200x630px | Default Open Graph |
| `og-florence-home.jpg` | 1200x630px | Home Florence |
| `og-florence-how.jpg` | 1200x630px | How It Works |
| `og-florence-impact.jpg` | 1200x630px | Impact/EPP |
| `logo.png` | 512x512px | Schema.org Organization |
| `favicon.ico` | 32x32px | Browser tab |

---

## 7. Testing SEO

### Strumenti di Validazione
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Schema.org Validator**: https://validator.schema.org/

### Controllo Manuale
1. Apri DevTools → Elements → `<head>`
2. Verifica presenza di:
   - `<title>`
   - `<meta name="description">`
   - `<meta property="og:*">`
   - `<meta name="twitter:*">`
   - `<script type="application/ld+json">`
   - `<link rel="canonical">`

---

## 8. Reminder Importante

> ⚠️ **OGNI PAGINA DI AGGREGAZIONE DEVE AVERE IL SUO `<SEO />`**
>
> I mattoncini singoli NON hanno SEO interno - è la pagina che li aggrega che deve gestire il SEO.

---

## 9. Base URL

Il componente usa come base URL:
```
https://florenceegi.com
```

Se cambia il dominio, modificare la costante `BASE_URL` in `/src/components/common/SEO.tsx`.

---

*Ultimo aggiornamento: Dicembre 2024*
