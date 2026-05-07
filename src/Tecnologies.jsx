import { useTranslation } from 'react-i18next';
import TecnologiesListItem from './TecnologiesListItem';

import {
    ReactIcon,
    Layers01Icon,
    Route01Icon,
    TranslationIcon,
    JavaIcon,
    HtmlFiveIcon,
    CssFile01Icon,
    PhpIcon,
    LaptopProgrammingIcon,
    SqlIcon,

} from 'hugeicons-react';

export default function Tecnologies() {
    const {t} = useTranslation();
    return (
        <>
        <h1 className='h1-center'>{t('homePage.tecnologies')}</h1>
        <div className="tecnologies-container">
            <div className='conjunt frontend-conjunt'>
                <h1>Frontend</h1>
                <div className="tech-list">
                    <TecnologiesListItem title="React" icon={ReactIcon} />
                    <TecnologiesListItem title="Mui" icon={Layers01Icon} />
                    <TecnologiesListItem title="React Router" icon={Route01Icon} />
                    <TecnologiesListItem title="i18next" icon={TranslationIcon} />
                    <TecnologiesListItem title="JavaScript" icon={JavaIcon} />
                    <TecnologiesListItem title="HTML" icon={HtmlFiveIcon} />
                    <TecnologiesListItem title="CSS / Tailwind / Sass" icon={CssFile01Icon} />
                </div>
            </div>
            <div className='conjunt'>
                <h1>Backend</h1>
                <div className="tech-list">
                    <TecnologiesListItem title="PHP" icon={PhpIcon} />
                    <TecnologiesListItem title="Django" icon={LaptopProgrammingIcon} />
                    <TecnologiesListItem title="Laravel" icon={LaptopProgrammingIcon} />
                </div>
            </div>
            <div className='conjunt'>
                <h1>{t('homePage.database')}</h1>
                <div className="tech-list">
                    <TecnologiesListItem title="MongoDB" icon={SqlIcon} />
                    <TecnologiesListItem title="MySQL" icon={SqlIcon} />
                </div>
            </div>
        </div>
        </>
        
    );
}