import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import './index.css'
import { ThemeProvider } from './theme/ThemeContext';
import ThemeButton from './theme/ThemeButton';
export default function Header(){
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const newLang = event.target.value;
        i18n.changeLanguage(newLang);
    };
    return(
        <>
            <FormControl sx={{ m: 1, maxWidth: 140 }}>
            <InputLabel id="demo-simple-select-helper-label">{t('header.select.language')}</InputLabel>
            <Select
            labelId="select-label"
            id="select-helper"
            value={i18n.language || 'ca'}
            label={t('header.select.language')}
            onChange={handleChange}
            >
            <MenuItem value={'ca'}>{t('header.select.catalan')}</MenuItem>
            <MenuItem value={'es'}>{t('header.select.spanish')}</MenuItem>
            <MenuItem value={'en'}>{t('header.select.english')}</MenuItem>
            </Select>
        </FormControl>
        <ThemeButton />
        </>   
    )
}