import { useTranslation } from 'react-i18next';
import './index.css';
import { useTheme } from './theme/ThemeContext'; 

export default function Presentation(){
    const { t } = useTranslation();
    const { isDark } = useTheme();

    return(
        <div className='flex flex-col' style={{ padding: '20px' }}>
            <h1 
                className='text-8xl' 
                style={{ color: isDark ? '#FFFFFF' : '#1a1a1a' }}
            >
                {t('homePage.welcome')}
            </h1>

            <h1 
                className='text-8xl' 
                style={{ color: isDark ? '#bbf7d0' : '#166534' }}
            >
                Ruth
            </h1>

            <p 
                className='w-[620px]'
                style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
                {t('homePage.text')}
            </p>
        </div>
    );
}