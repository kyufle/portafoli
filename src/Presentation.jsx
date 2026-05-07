import { useTranslation } from 'react-i18next';
import './Presentation.scss'; 
import { useTheme } from './theme/ThemeContext'; 

export default function Presentation(){
    const { t } = useTranslation();
    const { isDark } = useTheme();

    return(
        <section className={`presentation-container ${isDark ? 'dark' : 'light'}`}>
            <div className="text-content">
                <h1 className="title-main">
                    {t('homePage.welcome')}
                </h1>
                <h1 className="title-name">
                    <span className="typing-effect">Ruth</span>
                </h1>

                <p className="description">
                    {t('homePage.text')}
                </p>
            </div>
        </section>
    );
}