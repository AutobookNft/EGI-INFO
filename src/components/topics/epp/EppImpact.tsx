/**
 * EppImpact - Sezione Impatto Ambientale
 * 
 * Visualizza l'impatto aggregato di tutti i programmi EPP
 * con animazioni numeriche e grafici
 * 
 * SEO Features:
 * - Schema.org ItemList per metriche
 * - ARIA live regions per numeri animati
 * - Semantic HTML con figure/figcaption
 * 
 * @module components/topics/epp/EppImpact
 */

import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ItemListSchema } from '@/utils/seo/SchemaOrg';
import { AriaLandmark } from '@/utils/seo/Aria';

interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  icon: string;
}

/**
 * Hook per animare un numero
 */
const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
};

interface ImpactCounterProps {
  metric: ImpactMetric;
  isVisible: boolean;
}

/**
 * Singolo contatore animato
 */
const ImpactCounter: React.FC<ImpactCounterProps> = ({ metric, isVisible }) => {
  const { t } = useTranslation('epp');
  const count = useCountUp(metric.value, 2500, isVisible);
  
  return (
    <figure className="
      relative
      p-6 lg:p-8
      bg-gradient-to-br from-emerald-500/10 to-green-600/5
      border border-emerald-500/20
      rounded-2xl
      text-center
      group
      hover:border-emerald-500/40
      transition-all duration-300
    ">
      {/* Icon */}
      <div className="
        text-4xl lg:text-5xl
        mb-4
        group-hover:scale-110
        transition-transform duration-300
      " aria-hidden="true">
        {metric.icon}
      </div>
      
      {/* Animated number */}
      <div 
        className="
          text-3xl lg:text-4xl xl:text-5xl
          font-display font-bold
          text-transparent bg-clip-text
          bg-gradient-to-r from-emerald-300 to-green-400
        "
        aria-live="polite"
        aria-atomic="true"
      >
        {count.toLocaleString()}{metric.suffix}
      </div>
      
      {/* Label */}
      <figcaption className="
        mt-2
        text-white/60
        text-sm lg:text-base
      ">
        {t(`impact.metrics.${metric.id}.label`)}
      </figcaption>
      
      {/* Description on hover */}
      <p className="
        mt-3
        text-white/40
        text-xs
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      ">
        {t(`impact.metrics.${metric.id}.description`)}
      </p>
    </figure>
  );
};

const EppImpact: React.FC = () => {
  const { t } = useTranslation('epp');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intersection Observer per trigger animazioni
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Metriche di impatto
  const metrics: ImpactMetric[] = [
    { id: 'trees', value: 50000, suffix: '+', icon: '🌲' },
    { id: 'plastic', value: 25000, suffix: 'kg', icon: '♻️' },
    { id: 'bees', value: 100000, suffix: '+', icon: '🐝' },
    { id: 'co2', value: 1200, suffix: 't', icon: '💨' },
    { id: 'projects', value: 47, suffix: '', icon: '📍' },
    { id: 'partners', value: 23, suffix: '', icon: '🤝' }
  ];
  
  // Schema.org items
  const schemaItems = metrics.map((m, i) => ({
    name: t(`impact.metrics.${m.id}.label`),
    description: t(`impact.metrics.${m.id}.description`),
    position: i + 1
  }));
  
  return (
    <AriaLandmark
      as="section"
      role="region"
      label={t('impact.ariaLabel')}
      className="epp-impact py-16 lg:py-24 bg-gradient-to-b from-dark via-dark-lighter/30 to-dark"
      ref={sectionRef}
    >
      {/* Schema.org ItemList */}
      <ItemListSchema
        name={t('impact.schemaName')}
        description={t('impact.schemaDescription')}
        items={schemaItems}
      />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <header className="text-center mb-12 lg:mb-16">
          <span className="
            inline-flex items-center gap-2
            px-4 py-1.5
            bg-emerald-500/10 border border-emerald-500/30
            rounded-full
            text-emerald-400 text-sm
            mb-4
          ">
            <span className="animate-pulse">🌍</span>
            {t('impact.badge')}
          </span>
          
          <h2 className="
            text-3xl lg:text-4xl xl:text-5xl
            font-display font-bold
            text-white
            mb-4
          ">
            {t('impact.title')}
          </h2>
          
          <p className="
            text-lg lg:text-xl
            text-white/70
            max-w-3xl mx-auto
          ">
            {t('impact.subtitle')}
          </p>
        </header>
        
        {/* Metrics grid */}
        <div className="
          grid grid-cols-2 lg:grid-cols-3
          gap-4 lg:gap-6
          max-w-5xl mx-auto
        ">
          {metrics.map(metric => (
            <ImpactCounter
              key={metric.id}
              metric={metric}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        {/* Verification note */}
        <aside className="
          mt-12 lg:mt-16
          max-w-3xl mx-auto
          p-6
          bg-emerald-500/5
          border border-emerald-500/20
          rounded-xl
          text-center
        ">
          <p className="text-white/60 text-sm">
            <span className="text-emerald-400 font-semibold">
              {t('impact.verification.label')}:
            </span>{' '}
            {t('impact.verification.text')}
          </p>
          
          <a
            href="#verification"
            className="
              inline-flex items-center gap-2
              mt-4
              text-emerald-400
              hover:text-emerald-300
              text-sm font-medium
              transition-colors
            "
          >
            {t('impact.verification.link')}
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </AriaLandmark>
  );
};

export default EppImpact;
