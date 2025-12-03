import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

/**
 * GlossaryContext - Sistema unificato per la gestione del glossario
 * 
 * Funzionalità:
 * - Traccia la posizione di origine quando l'utente clicca su un termine
 * - Fornisce il pulsante "Torna al testo" dopo la consultazione
 * - Supporta navigazione fluida con scroll animato
 */

interface GlossaryContextType {
  // Posizione da cui l'utente ha cliccato sul termine
  sourcePosition: {
    id: string | null;
    scrollY: number;
  };
  // Termine attualmente visualizzato nel glossario
  activeTerm: string | null;
  // Indica se mostrare il pulsante "Torna al testo"
  showBackButton: boolean;
  
  // Azioni
  navigateToTerm: (termId: string, sourceElementId?: string) => void;
  returnToSource: () => void;
  clearNavigation: () => void;
}

const GlossaryContext = createContext<GlossaryContextType | undefined>(undefined);

interface GlossaryProviderProps {
  children: React.ReactNode;
}

export const GlossaryProvider: React.FC<GlossaryProviderProps> = ({ children }) => {
  const [sourcePosition, setSourcePosition] = useState<{ id: string | null; scrollY: number }>({
    id: null,
    scrollY: 0,
  });
  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const [showBackButton, setShowBackButton] = useState(false);
  
  // Ref per gestire il timeout del pulsante
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Naviga a un termine del glossario salvando la posizione di origine
   */
  const navigateToTerm = useCallback((termId: string, sourceElementId?: string) => {
    // Salva la posizione corrente
    setSourcePosition({
      id: sourceElementId || null,
      scrollY: window.scrollY,
    });
    
    setActiveTerm(termId);
    
    // Trova l'elemento del termine nel glossario
    const termElement = document.getElementById(`glossary-${termId}`);
    
    if (termElement) {
      // Scroll fluido al termine
      termElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      
      // Evidenzia brevemente il termine
      termElement.classList.add('glossary-highlight');
      setTimeout(() => {
        termElement.classList.remove('glossary-highlight');
      }, 2000);
      
      // Mostra il pulsante "Torna al testo" dopo un breve delay
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setShowBackButton(true);
      }, 500);
    }
  }, []);

  /**
   * Ritorna alla posizione di origine dopo aver consultato il glossario
   */
  const returnToSource = useCallback(() => {
    const { id, scrollY } = sourcePosition;
    
    if (id) {
      // Se abbiamo un ID elemento, scroll a quell'elemento
      const sourceElement = document.getElementById(id);
      if (sourceElement) {
        sourceElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        
        // Evidenzia brevemente l'elemento di origine
        sourceElement.classList.add('source-highlight');
        setTimeout(() => {
          sourceElement.classList.remove('source-highlight');
        }, 1500);
      }
    } else {
      // Altrimenti scroll alla posizione Y salvata
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth',
      });
    }
    
    // Reset stato
    setShowBackButton(false);
    setActiveTerm(null);
  }, [sourcePosition]);

  /**
   * Pulisce lo stato di navigazione
   */
  const clearNavigation = useCallback(() => {
    setSourcePosition({ id: null, scrollY: 0 });
    setActiveTerm(null);
    setShowBackButton(false);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <GlossaryContext.Provider
      value={{
        sourcePosition,
        activeTerm,
        showBackButton,
        navigateToTerm,
        returnToSource,
        clearNavigation,
      }}
    >
      {children}
    </GlossaryContext.Provider>
  );
};

/**
 * Hook per utilizzare il contesto del glossario
 */
export const useGlossary = (): GlossaryContextType => {
  const context = useContext(GlossaryContext);
  
  if (context === undefined) {
    throw new Error('useGlossary must be used within a GlossaryProvider');
  }
  
  return context;
};

export default GlossaryProvider;
