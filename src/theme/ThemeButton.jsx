import { useTheme } from './ThemeContext';

export default function ThemeButton() {
  const { isDark, syncWithBrowser } = useTheme();

  return (
    <button 
      onClick={() => {
        syncWithBrowser();
      }}
      style={{
        padding: '10px',
        cursor: 'pointer',
        pointerEvents: 'auto'
      }}
    >
      {isDark ? '🌙 Modo Oscuro' : '☀️ Modo Claro'} (Browser)
    </button>
  );
}