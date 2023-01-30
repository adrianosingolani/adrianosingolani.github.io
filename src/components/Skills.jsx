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
  "React",
  "Next.js",
  "Redux Toolkit",
  "Material-UI",
  "Bootstrap",
  "styled-components",
  "Node.js",
  "Express",
  "Socket.io",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Git",
  "Flutter",
  "Smart Contracts",
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