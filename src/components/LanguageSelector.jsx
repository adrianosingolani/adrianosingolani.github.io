import { useState, useEffect } from 'react'
import styled from 'styled-components'
import i18n from 'i18next'

import globeIcon from '../icons/globe-solid.svg'

const StyledLanguageSelector = styled.div`
  display: flex;
  position: absolute;
  top: 8px;
  align-items: center;

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-right: 1px solid black;

    &.current {
      font-weight: bold;
    }

    &:last-child {
      border: none;
    }
  }

  @media print {
    display: none;
  }
`

const Icon = styled.embed`
  width: 16px;
  margin-right: 4px;
  margin-top: -2px;
`

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage])

  const languages = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'pt',
      name: 'Português',
    },
  ]

  return (
    <StyledLanguageSelector id="language-selector">
      <Icon src={globeIcon} />
      {languages.map(({ name, code }) => (
        <button
          onClick={() => setCurrentLanguage(code)}
          className={code === currentLanguage ? 'current' : null}
          key={code}
        >
          {name}
        </button>
      ))}
    </StyledLanguageSelector>
  )
}
