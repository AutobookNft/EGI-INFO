/**
 * FlorenceEGIPage — La Piattaforma / Come Funziona il Protocollo EGI
 *
 * Puro ASSEMBLER di mattoncini LEGO.
 * Non contiene logica di presentazione: solo composizione.
 *
 * Mattoncini usati (in ordine):
 *   1. HowHero         — Badge + Titolo + Sottotitolo
 *   2. HowProtocol     — "EGI è un protocollo, non un prodotto" + chips
 *   3. HowManipulators — Titolo sezione + 3× ManipulatorCard (ART/NATAN/PT)
 *   4. HowThread       — "Il Filo Rosso"
 *   5. HowFuture       — "I Prossimi Manipolatori"
 *   6. HowCTA          — Call to Action finale
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SeoHead } from '../../utils/seo/SeoHead';
import {
  HowHero,
  HowProtocol,
  HowManipulators,
  HowThread,
  HowFuture,
  HowCTA,
} from '../../components/mattoncini/florence';

const FlorenceEGIPage: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <article style={{ color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      {/* SEO — rimane nel page assembler */}
      <SeoHead
        meta={{
          title: t('how.page_title'),
          description: t('how.hero.subtitle'),
          url: '/info/platform',
          type: 'article',
        }}
      />

      <HowHero />
      <HowProtocol />
      <HowManipulators />
      <HowThread />
      <HowFuture />
      <HowCTA />
    </article>
  );
};

export default FlorenceEGIPage;
