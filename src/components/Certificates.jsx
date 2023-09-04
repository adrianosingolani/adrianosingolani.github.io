import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Session from './Session'
import Title from './Title'

const StyledEducation = styled.div`
  p {
    margin: 0 0 2px;
  }

  .item {
    margin-bottom: 8px;
  }

  .item:last-child {
    margin-bottom: 0;
  }

  .school {
    font-weight: bold;
  }

  .course {
    @media print {
      font-size: 13px;
    }
  }

  .hours {
    font-size: 12px;
  }

  .date {
    font-size: 12px;
    font-style: italic;
  }
`

const certificates = [
  {
    school: 'DIO',
    course: 'Cloud DevOps Experience',
    link: 'https://www.dio.me/certificate/8330EA62/share',
    hours: 101,
    date: 'Jan/2023',
  },
  {
    school: 'EF SET ',
    course: `English Certificate (C1 Proficient)`,
    link: 'https://www.efset.org/cert/Zopqyx',
    date: 'Jul/2022',
  },
]

export default function Certificates() {
  const { t } = useTranslation()

  return (
    <StyledEducation>
      <Session>
        <Title>{t('certificates')}</Title>
        {certificates.map((item, i) => (
          <div className="item" key={`certificate-${i}`}>
            <p className="school">{item.school}</p>
            <p className="course">
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.course}
              </a>
            </p>
            {item.hours ? (
              <p className="hours">
                {item.hours} {t('hours')}
              </p>
            ) : null}
            <p className="date">{item.date}</p>
          </div>
        ))}
      </Session>
    </StyledEducation>
  )
}
