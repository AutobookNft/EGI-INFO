import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { useGlossary } from '../../context/GlossaryContext';

/**
 * BackToTextButton - Pulsante "Torna al testo" fisso in basso
 * 
 * Appare dopo che l'utente ha navigato a un termine del glossario
 * e permette di tornare esattamente al punto dove era prima.
 */

interface BackToTextButtonProps {
  /** Posizione del pulsante */
  position?: 'bottom-center' | 'bottom-right' | 'bottom-left';
  /** Classe CSS aggiuntiva */
  className?: string;
}

export const BackToTextButton: React.FC<BackToTextButtonProps> = ({
  position = 'bottom-center',
  className = '',
}) => {
  const { t } = useTranslation('common');
  const { showBackButton, returnToSource } = useGlossary();

  if (!showBackButton) {
    return null;
  }

  const positionClasses = {
    'bottom-center': 'left-1/2 -translate-x-1/2',
    'bottom-right': 'right-6',
    'bottom-left': 'left-6',
  };

  return (
    <button
      onClick={returnToSource}
      className={`
        fixed bottom-8 z-50
        ${positionClasses[position]}
        flex items-center gap-2
        px-6 py-3
        bg-gradient-to-r from-gold to-gold-dark
        text-dark font-semibold
        rounded-full
        shadow-lg shadow-gold/30
        hover:shadow-xl hover:shadow-gold/40
        hover:scale-105
        active:scale-95
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark
        animate-slide-up
        ${className}
      `}
      aria-label={t('buttons.backToText')}
    >
      <ArrowLeft className="w-5 h-5" />
      <span>{t('buttons.backToText')}</span>
    </button>
  );
};

export default BackToTextButton;
