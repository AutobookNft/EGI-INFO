/**
 * EppProgramCard - Card per singolo programma EPP
 * 
 * Componente atomico per visualizzare un programma ambientale:
 * ARF (Foreste), APR (Plastica), BPE (Api)
 * 
 * SEO Features:
 * - Schema.org Organization per ogni programma
 * - Semantic HTML article
 * - ARIA per interattività
 * 
 * @module components/topics/epp/EppProgramCard
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { OrganizationSchema } from '@/utils/seo/SchemaOrg';

export type ProgramId = 'arf' | 'apr' | 'bpe';

interface EppProgramCardProps {
  /** ID del programma: arf, apr, bpe */
  programId: ProgramId;
  /** Variante visiva */
  variant?: 'default' | 'featured' | 'compact';
  /** Handler click */
  onClick?: () => void;
  /** Classe CSS aggiuntiva */
  className?: string;
}

/**
 * Mapping colori per programma
 */
const programColors: Record<ProgramId, {
  gradient: string;
  border: string;
  icon: string;
  accent: string;
}> = {
  arf: {
    gradient: 'from-green-500/20 to-emerald-600/10',
    border: 'border-green-500/30 hover:border-green-500/50',
    icon: 'text-green-400',
    accent: 'bg-green-500'
  },
  apr: {
    gradient: 'from-blue-500/20 to-cyan-600/10',
    border: 'border-blue-500/30 hover:border-blue-500/50',
    icon: 'text-blue-400',
    accent: 'bg-blue-500'
  },
  bpe: {
    gradient: 'from-amber-500/20 to-yellow-600/10',
    border: 'border-amber-500/30 hover:border-amber-500/50',
    icon: 'text-amber-400',
    accent: 'bg-amber-500'
  }
};

/**
 * Emoji per ogni programma
 */
const programEmojis: Record<ProgramId, string> = {
  arf: '🌲',
  apr: '🌊',
  bpe: '🐝'
};

const EppProgramCard: React.FC<EppProgramCardProps> = ({
  programId,
  variant = 'default',
  onClick,
  className = ''
}) => {
  const { t } = useTranslation('epp');
  
  const colors = programColors[programId];
  const emoji = programEmojis[programId];
  
  // Translation keys
  const name = t(`programs.${programId}.name`);
  const fullName = t(`programs.${programId}.fullName`);
  const description = t(`programs.${programId}.description`);
  const impact = t(`programs.${programId}.impact`);
  const stats = t(`programs.${programId}.stats`, { returnObjects: true }) as Record<string, string>;
  
  const isInteractive = !!onClick;
  const Component = isInteractive ? 'button' : 'article';
  
  return (
    <>
      {/* Schema.org per il programma */}
      <OrganizationSchema
        name={fullName}
        description={description}
        url={`https://florenceegi.com/epp/${programId}`}
      />
      
      <Component
        onClick={onClick}
        className={`
          epp-program-card
          group
          relative
          ${variant === 'compact' ? 'p-4' : 'p-6 lg:p-8'}
          bg-gradient-to-br ${colors.gradient}
          backdrop-blur-sm
          border ${colors.border}
          rounded-2xl
          transition-all duration-500
          hover:shadow-xl hover:shadow-black/20
          hover:-translate-y-1
          ${isInteractive ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark' : ''}
          ${variant === 'featured' ? 'md:col-span-2 lg:col-span-1' : ''}
          ${className}
        `}
        aria-labelledby={`program-${programId}-title`}
        {...(isInteractive && { type: 'button' })}
      >
        {/* Badge corner */}
        <div className={`
          absolute top-4 right-4
          px-3 py-1
          ${colors.accent}
          rounded-full
          text-white text-xs font-bold
          uppercase tracking-wider
        `}>
          {name}
        </div>
        
        {/* Icon */}
        <div className={`
          w-16 h-16
          ${variant === 'compact' ? 'w-12 h-12' : ''}
          flex items-center justify-center
          text-4xl
          ${variant === 'compact' ? 'text-3xl' : ''}
          mb-4
          group-hover:scale-110
          transition-transform duration-300
        `} aria-hidden="true">
          {emoji}
        </div>
        
        {/* Title */}
        <h3 
          id={`program-${programId}-title`}
          className={`
            font-display font-bold
            text-white
            mb-2
            ${variant === 'compact' ? 'text-lg' : 'text-xl lg:text-2xl'}
          `}
        >
          {fullName}
        </h3>
        
        {/* Description */}
        <p className={`
          text-white/70
          leading-relaxed
          mb-4
          ${variant === 'compact' ? 'text-sm line-clamp-2' : ''}
        `}>
          {description}
        </p>
        
        {/* Stats grid */}
        {variant !== 'compact' && stats && (
          <div className="
            grid grid-cols-2 gap-3
            mb-4
          ">
            {Object.entries(stats).map(([key, value]) => (
              <div 
                key={key}
                className="
                  p-3
                  bg-black/20
                  rounded-lg
                  text-center
                "
              >
                <div className={`text-lg font-bold ${colors.icon}`}>
                  {value}
                </div>
                <div className="text-xs text-white/50 capitalize">
                  {t(`programs.statsLabels.${key}`)}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Impact statement */}
        <div className={`
          flex items-center gap-2
          ${colors.icon}
          text-sm font-medium
        `}>
          <span className={`w-2 h-2 ${colors.accent} rounded-full`} aria-hidden="true" />
          {impact}
        </div>
        
        {/* Hover arrow for interactive */}
        {isInteractive && (
          <span className="
            absolute bottom-4 right-4
            opacity-0 group-hover:opacity-100
            transform translate-x-2 group-hover:translate-x-0
            transition-all duration-300
            text-white/60
          " aria-hidden="true">
            →
          </span>
        )}
      </Component>
    </>
  );
};

export default EppProgramCard;
