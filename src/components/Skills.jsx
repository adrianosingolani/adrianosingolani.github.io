import styled from "styled-components";

import Session from "./Session";
import Skill from "./Skill";
import Title from "./Title";

const StyledSkills = styled.div`
  &&& {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Redux",
  "Material-UI",
  "Bootstrap",
  "styled-components",
  "Node.js",
  "Express",
  "NestJS",
  "Mongoose",
  "TypeORM",
  "Sequelize",
  "Prisma",
  "Socket.io",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Git",
  "Docker",
  "GCP",
];

export default function Skills() {
  return (
    <Session>
      <Title>Skills</Title>
      <StyledSkills>
        {skills.map((skill, i) => (
          <Skill key={`skill-${i}`}>{skill}</Skill>
        ))}
      </StyledSkills>
    </Session>
  )
}