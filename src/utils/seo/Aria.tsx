/**
 * ARIA Accessibility Utilities
 * 
 * Componenti e hook per garantire accessibilità WCAG 2.1 AA/AAA:
 * - Landmark roles
 * - Live regions
 * - Focus management
 * - Screen reader announcements
 * - Keyboard navigation
 * 
 * @see https://www.w3.org/WAI/ARIA/apg/
 * @see https://www.w3.org/TR/WCAG21/
 */

import React, { 
  useRef, 
  useEffect, 
  useCallback,
  createContext,
  useContext,
  useState,
  ReactNode 
} from 'react';

// ============================================
// TYPES
// ============================================

export type AriaLive = 'off' | 'polite' | 'assertive';
export type AriaRole = 
  | 'main' | 'navigation' | 'banner' | 'contentinfo' | 'complementary'
  | 'region' | 'article' | 'section' | 'form' | 'search'
  | 'alert' | 'alertdialog' | 'dialog' | 'status' | 'log'
  | 'marquee' | 'timer' | 'progressbar' | 'tooltip';

export interface AriaLandmarkProps {
  role: AriaRole;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

// ============================================
// CONTEXT: Screen Reader Announcements
// ============================================

interface AnnouncerContextType {
  announce: (message: string, priority?: AriaLive) => void;
}

const AnnouncerContext = createContext<AnnouncerContextType | null>(null);

/**
 * Provider that enables screen reader announcements throughout the app
 * 
 * Usage:
 * ```tsx
 * <AnnouncerProvider>
 *   <App />
 * </AnnouncerProvider>
 * ```
 */
export function AnnouncerProvider({ children }: { children: ReactNode }) {
  const [politeMessage, setPoliteMessage] = useState('');
  const [assertiveMessage, setAssertiveMessage] = useState('');
  
  const announce = useCallback((message: string, priority: AriaLive = 'polite') => {
    if (priority === 'assertive') {
      setAssertiveMessage('');
      // Small delay to ensure screen reader picks up the change
      setTimeout(() => setAssertiveMessage(message), 50);
    } else {
      setPoliteMessage('');
      setTimeout(() => setPoliteMessage(message), 50);
    }
  }, []);
  
  return (
    <AnnouncerContext.Provider value={{ announce }}>
      {children}
      
      {/* Polite announcements (wait for current speech to finish) */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {politeMessage}
      </div>
      
      {/* Assertive announcements (interrupt current speech) */}
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {assertiveMessage}
      </div>
    </AnnouncerContext.Provider>
  );
}

/**
 * Hook to announce messages to screen readers
 * 
 * Usage:
 * ```tsx
 * const { announce } = useAnnouncer();
 * announce('Form submitted successfully', 'polite');
 * ```
 */
export function useAnnouncer() {
  const context = useContext(AnnouncerContext);
  if (!context) {
    throw new Error('useAnnouncer must be used within an AnnouncerProvider');
  }
  return context;
}

// ============================================
// COMPONENTS: Semantic Landmarks
// ============================================

/**
 * Semantic landmark wrapper with proper ARIA
 * 
 * Usage:
 * ```tsx
 * <Landmark role="main" aria-label="Contenuto principale">
 *   <ArticleContent />
 * </Landmark>
 * ```
 */
export function Landmark({
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  children,
  className,
  as: Component = 'div',
  id,
}: AriaLandmarkProps) {
  return React.createElement(
    Component,
    {
      role,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      className,
      id,
    },
    children
  );
}

/**
 * Skip to main content link for keyboard users
 */
export function SkipToMain({ 
  targetId = 'main-content',
  label = 'Salta al contenuto principale' 
}: { 
  targetId?: string;
  label?: string;
}) {
  return (
    <a
      href={`#${targetId}`}
      className="skip-to-main"
      style={{
        position: 'absolute',
        top: '-40px',
        left: 0,
        background: 'var(--color-primary, #8B4513)',
        color: 'white',
        padding: '8px 16px',
        zIndex: 9999,
        textDecoration: 'none',
        fontWeight: 600,
        transition: 'top 0.2s ease',
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = '0';
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-40px';
      }}
    >
      {label}
    </a>
  );
}

// ============================================
// COMPONENTS: Visually Hidden
// ============================================

/**
 * Visually hidden but accessible to screen readers
 * 
 * Usage:
 * ```tsx
 * <VisuallyHidden>Descrizione per screen reader</VisuallyHidden>
 * ```
 */
export function VisuallyHidden({ 
  children,
  as: Component = 'span',
}: { 
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) {
  return React.createElement(
    Component,
    {
      style: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      },
    },
    children
  );
}

// ============================================
// HOOKS: Focus Management
// ============================================

/**
 * Manages focus trap within a container (for modals, dialogs)
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isActive || !containerRef.current) return;
    
    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Focus first element
    firstElement?.focus();
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);
  
  return containerRef;
}

/**
 * Returns focus to trigger element when component unmounts
 */
export function useReturnFocus() {
  const triggerRef = useRef<HTMLElement | null>(null);
  
  const saveTrigger = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement;
  }, []);
  
  const returnFocus = useCallback(() => {
    triggerRef.current?.focus();
  }, []);
  
  return { saveTrigger, returnFocus };
}

// ============================================
// HOOKS: Keyboard Navigation
// ============================================

/**
 * Arrow key navigation for lists/menus
 */
export function useArrowNavigation<T extends HTMLElement>(
  items: T[],
  options: {
    orientation?: 'horizontal' | 'vertical' | 'both';
    loop?: boolean;
  } = {}
) {
  const { orientation = 'vertical', loop = true } = options;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const { key } = e;
    const isVertical = orientation === 'vertical' || orientation === 'both';
    const isHorizontal = orientation === 'horizontal' || orientation === 'both';
    
    let newIndex = activeIndex;
    
    if ((key === 'ArrowDown' && isVertical) || (key === 'ArrowRight' && isHorizontal)) {
      e.preventDefault();
      newIndex = activeIndex + 1;
      if (newIndex >= items.length) {
        newIndex = loop ? 0 : items.length - 1;
      }
    } else if ((key === 'ArrowUp' && isVertical) || (key === 'ArrowLeft' && isHorizontal)) {
      e.preventDefault();
      newIndex = activeIndex - 1;
      if (newIndex < 0) {
        newIndex = loop ? items.length - 1 : 0;
      }
    } else if (key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (key === 'End') {
      e.preventDefault();
      newIndex = items.length - 1;
    }
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      items[newIndex]?.focus();
    }
  }, [activeIndex, items, orientation, loop]);
  
  return {
    activeIndex,
    setActiveIndex,
    handleKeyDown,
  };
}

// ============================================
// UTILITIES
// ============================================

/**
 * Generate unique IDs for ARIA relationships
 */
let idCounter = 0;
export function generateAriaId(prefix = 'aria'): string {
  return `${prefix}-${++idCounter}`;
}

/**
 * Create aria-describedby from multiple optional IDs
 */
export function combineAriaDescribedBy(...ids: (string | undefined)[]): string | undefined {
  const filtered = ids.filter(Boolean);
  return filtered.length > 0 ? filtered.join(' ') : undefined;
}

export default {
  AnnouncerProvider,
  useAnnouncer,
  Landmark,
  SkipToMain,
  VisuallyHidden,
  useFocusTrap,
  useReturnFocus,
  useArrowNavigation,
  generateAriaId,
  combineAriaDescribedBy,
};
