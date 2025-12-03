import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

/**
 * ThemeContext - Sistema per la gestione dei temi
 * 
 * Funzionalità:
 * - Permette switch tra temi (renaissance, modern, etc.)
 * - Persiste la preferenza in localStorage
 * - Supporta system preference (dark/light)
 */

type ThemeName = 'renaissance' | 'modern' | 'dark';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'egi-info-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'renaissance' 
}) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
      if (stored && ['renaissance', 'modern', 'dark'].includes(stored)) {
        return stored;
      }
    }
    return defaultTheme;
  });

  const isDarkMode = theme === 'dark';

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-renaissance', 'theme-modern', 'theme-dark');
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
    
    // Set data-theme attribute for CSS
    root.setAttribute('data-theme', theme);
    
    // Persist to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setThemeState(prev => prev === 'dark' ? 'renaissance' : 'dark');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleDarkMode,
        isDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook per utilizzare il contesto del tema
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

export default ThemeProvider;
