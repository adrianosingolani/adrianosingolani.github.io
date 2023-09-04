import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Session from './Session'
import Skill from './Skill'
import Title from './Title'

const StyledSkills = styled.div`
  &&& {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const skills = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Redux',
  'Material-UI',
  'Bootstrap',
  'styled-components',
  'i18next',
  'Node.js',
  'Express',
  'NestJS',
  'Mongoose',
  'TypeORM',
  'Sequelize',
  'Prisma',
  'Socket.io',
  'REST APIs',
  'MongoDB',
  'MySQL',
  'Git',
  'Docker',
  'GCP',
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <Session>
      <Title>{t('skills')}</Title>
      <StyledSkills>
        {skills.map((skill, i) => (
          <Skill key={`skill-${i}`}>{skill}</Skill>
        ))}
      </StyledSkills>
    </Session>
  )
}
