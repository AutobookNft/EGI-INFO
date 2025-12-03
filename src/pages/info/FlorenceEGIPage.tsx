import React from 'react';
import { 
  FlorenceHero, 
  FlorenceIntro, 
  FlorenceProblems,
  FlorenceExamples,
  FlorenceAmmk,
  FlorenceTech,
  FlorencePricing,
  FlorenceNatan,
  FlorenceFaq
} from '../../components/topics/florence';

/**
 * FlorenceEGIPage - La Piattaforma
 * 
 * Compone i "mattoncini LEGO" della sezione Florence
 * TUTTI I TESTI DA i18n - ZERO HARDCODED
 */

const FlorenceEGIPage: React.FC = () => {
  return (
    <article className="info-page florence-page">
      {/* Hero con SeoHead */}
      <FlorenceHero />
      
      {/* Introduzione concept */}
      <FlorenceIntro />
      
      {/* 12 Problemi Before/After */}
      <FlorenceProblems />
      
      {/* Esempi per settore (7 tabs) */}
      <FlorenceExamples />
      
      {/* 5 Motori AMMk */}
      <FlorenceAmmk />
      
      {/* Specifiche Tecniche */}
      <FlorenceTech />
      
      {/* Prezzi e Pagamenti */}
      <FlorencePricing />
      
      {/* NATAN AI Assistant */}
      <FlorenceNatan />
      
      {/* FAQ */}
      <FlorenceFaq />
    </article>
  );
};

export default FlorenceEGIPage;
