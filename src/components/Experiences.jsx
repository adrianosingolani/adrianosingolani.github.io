import styled from "styled-components";

import Title from "./Title";
import Skill from "./Skill";

const Experience = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 0 0 16px;
  padding-bottom: 8px;

  &:last-child {
    border-bottom: none;
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

const experiences = [
  {
    title: "Full Stack Engineer, Freelancer",
    period: "Jan 2022 - Jan 2023",
    description: `
      <p>Full stack development of several web applications as a freelancer.</p>
    `,
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
    title: "Full Stack Engineer, Companio",
    period: "Jun 2020 - Dec 2021",
    description: `
    <p>Companio is a company incorporation and business management platform that enables people to set-up their business in Estonia and work from anywhere in the world.</p>
    <p>I worked as a Full Stack Engineer fixing and creating new features for their web app.</p>
    `,
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
    title: "Full Stack Engineer, Schedduler",
    period: "Jun 2020 - Dec 2021",
    description: `
      <p>Development of a SaaS for scheduling posts on Reddit.</p>
      <p>The front end was made using React and Material-UI. The back end with Node.js, Express and MongoDB. It also used the Reddit REST API for posting to it.</p>
      `,
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
    title: "Full Stack Engineer, CamFeatures",
    period: "Jan 2018 - Jun 2020",
    description: `
      <p>CamFeatures was a service used for creating interactive overlays for live streaming.</p>
      <p>The app consisted in 3 parts: the web interface where the users could configure the overlays, a Chrome extension that read the chat room where the interactions were done and a page that was used to integrate with the video streaming software receiving data from the extension and displaying the overlays.</p>
      <p>The front end was made using Angular 5 and Materialize CSS. The back end with Node.js, Express and MongoDB. The connection between the Chrome extension and the overlays page was done with the library Socket.io. It also used the Patreon REST API for the subscription payment.</p>
      <p>I started working on CamFeatures for creating their MVP and later on the actual product that was launched in the middle of 2019.</p>
      `,
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

export default function Experiences() {
  return (
    <div>
      <Title>Experience</Title>
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
