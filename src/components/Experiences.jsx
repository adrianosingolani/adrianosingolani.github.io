import styled from "styled-components";
import { useTranslation } from "react-i18next";


import Title from "./Title";
import Skill from "./Skill";

const Experience = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 0 0 16px;
  padding-bottom: 8px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #fafafa;
    border-color: #bbb;
  }

  p {
    margin: 0 0 4px;
  }

  .title {
    font-weight: bold;
  }

  .period {
    font-size: 12px;
    font-style: italic;
    margin-bottom: 8px;
  }

  .description p {
    margin: 0 0 8px;

    @media print {
      font-size: 13px;
    }
  }
`;

const Skills = styled.div`
  &&& {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default function Experiences() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("experience_4-title"),
      period: t("experience_4-period"),
      description: t("experience_4-description"),
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "NestJS",
        "Rest API",
        "MongoDB",
        "MySQL",
        "Docker",
        "Git",
        "GCP"
      ],
    },
    {
      title: t("experience_3-title"),
      period: t("experience_3-period"),
      description: t("experience_3-description"),
      skills: [
        "JavaScript",
        "Node.js",
        "Express",
        "Rest API",
        "MongoDB",
        "Git"
      ],
    },
    {
      title: t("experience_2-title"),
      period: t("experience_2-period"),
      description: t("experience_2-description"),
      skills: [
        "JavaScript",
        "React",
        "Material-UI",
        "Node.js",
        "Express",
        "MongoDB",
        "Reddit API",
        "Rest API",
        "Docker",
        "Git",
        "GCP",
      ],
    },
    {
      title: t("experience_1-title"),
      period: t("experience_1-period"),
      description: t("experience_1-description"),
      skills: [
        "TypeScript",
        "Angular",
        "Materialize",
        "Node.js",
        "Express",
        "MongoDB",
        "Patreon API",
        "Rest API",
        "Socket.io",
        "Chrome Extension",
      ],
    },
  ];

  return (
    <div>
      <Title>{t("experience")}</Title>
      {experiences.map((experience, i) => (
        <Experience key={`experience-${i}`}>
          <p className="title">{experience.title}</p>
          <p className="period">{experience.period}</p>
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
          <Skills>
            {experience.skills.map((skill, i) => (
              <Skill key={`experience-skill-${i}`}>{skill}</Skill>
            ))}
          </Skills>
        </Experience>
      ))}
    </div>
  )
}
