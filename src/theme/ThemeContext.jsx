import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const syncWithBrowser = () => {
    const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prev => !prev);
    console.log("Sincronizado con navegador. ¿Es oscuro?: ", browserPrefersDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, syncWithBrowser }}>
      <div style={{ 
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff', 
        color: isDark ? '#ffffff' : '#000000',
        minHeight: '100vh',
        transition: '0.3s'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme debe estar dentro de ThemeProvider');
  return context;
}