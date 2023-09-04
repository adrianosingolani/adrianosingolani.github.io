import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Session from './Session'
import Title from './Title'

const StyledEducation = styled.div`
  p {
    margin: 0 0 2px;
  }

  .school {
    font-weight: bold;
  }

  .degree {
    @media print {
      font-size: 13px;
    }
  }

  .period {
    font-size: 12px;
    font-style: italic;
  }
`

export default function Education() {
  const { t } = useTranslation()

  return (
    <StyledEducation>
      <Session>
        <Title>{t('education')}</Title>
        <p className="school">Universidade Paulista</p>
        <p className="degree">{t('cs-degree')}</p>
        <p className="period">2001-2005</p>
      </Session>
    </StyledEducation>
  )
}
