import { useTheme } from './ThemeContext';
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
      {isDark ? <DarkModeIcon/> : <SunnyIcon/>}
    </button>
  );
}