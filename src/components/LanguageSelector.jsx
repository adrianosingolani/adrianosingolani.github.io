import { useState, useEffect } from "react";
import styled from "styled-components";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";

const StyledLanguageSelector = styled.div`
  position: absolute;
  top: 8px;

  label {
    margin-right: 8px;
  }

  select {
    padding: 2px;
  }

  @media print {
    display: none;
  }
`;

export default function LanguageSelector() {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage])

  const languages = [
    {
      code: 'en',
      name: t('english')
    },
    {
      code: 'pt',
      name: t('portuguese')
    },
  ];

  return (
    <StyledLanguageSelector id="language-selector">
      <label htmlFor="languages">{t('language')}:</label>
      <select
        name="languages"
        value={currentLanguage}
        onChange={(e) => setCurrentLanguage(e.target.value)}
      >
        {
          languages.map((item, i) => (
            <option
              value={item.code}
              key={`language-${i}`}
            >
              {item.name}
            </option>
          ))
        }
      </select>
    </StyledLanguageSelector >
  )
}
