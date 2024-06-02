import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './language.scss';
import { Button } from '@mui/material';

export const Language = ({showLangList, setShowLangList, languages}) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language.toUpperCase());



  useEffect(() => {
    setCurrentLang(i18n.language.toUpperCase());
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setCurrentLang(lang);
    setShowLangList(false);
  };

  return (
    <div className="language">
      <p
        onClick={() => setShowLangList(!showLangList)}
        className="language__current_lang"
      >
        {currentLang}
      </p>
      <ul className={`language--list ${showLangList ? 'show' : ''}`}>
        {languages?.filter(lang => lang !== currentLang)
          .map(lang => (
            <li key={lang} onClick={() => changeLanguage(lang)}>
              {lang}
            </li>
          ))}
      </ul>
    </div>
  );
};
