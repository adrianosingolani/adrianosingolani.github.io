import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Session from './Session'
import Title from './Title'

const StyledLanguages = styled.div`
  p {
    margin: 0 0 2px;
  }

  .item {
    margin-bottom: 8px;
  }

  .item:last-child {
    margin-bottom: 0;
  }

  .language {
    font-weight: bold;
  }

  .level {
    font-size: 12px;
    font-style: italic;
  }
`

export default function Languages() {
  const { t } = useTranslation()

  const languages = [
    { language: t('portuguese'), level: t('fluent') },
    { language: t('english'), level: t('advanced') },
    { language: t('spanish'), level: t('basic') },
  ]

  return (
    <StyledLanguages>
      <Session>
        <Title>{t('languages')}</Title>
        {languages.map((item, i) => (
          <div className="item" key={`language-${i}`}>
            <p className="language">{item.language}</p>
            <p className="level">{item.level}</p>
          </div>
        ))}
      </Session>
    </StyledLanguages>
  )
}
