import styled from "styled-components";

import Title from "./Title";
import Skill from "./Skill";

const Experience = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 0 0 16px;
  padding-bottom: 8px;

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
    font-size: 14px;
    margin: 0 0 8px;
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
    title: "Full Stack Engineer, Schedduler",
    period: "Jun 2020 - Dec 2021",
    description: `
      <p>Development of a SaaS for scheduling posts on Reddit.</p>
      <p>The front end was made using React and Material-UI. The back end with Node.js, Express and MongoDB. It also used the Reddit API for posting to it.</p>
    `,
    skills: [
      "JavaScript",
      "React",
      "Material-UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Reddit API",
    ],
  },
  {
    title: "Full Stack Engineer, CamFeatures",
    period: "Jan 2018 - Jun 2020",
    description: `
      <p>CamFeatures was a service used for creating interactive overlays for live streaming.</p>
      <p>I was the main developer working since the beginning creating the MVP and then later making it into production.</p>
      <p>The app consisted in 3 parts: the web interface where the users could configure the overlays, a Chrome extension that read the chat room where the interactions were done and a page that was used to integrate with the video streaming software receiving data from the extension and displaying the overlays.</p>
      <p>The front end was made using Angular 5 and Materialize CSS, the back end with Node.js, Express and MongoDB. The connection between the Chrome extension and the overlays page was done with the library Socket.io. It also used the Patreon API for the subscription payment.</p>
    `,
    skills: [
      "JavaScript",
      "Angular",
      "Materialize CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Patreon API",
      "Socket.io",
      "Chrome Extension",
    ],
  },
  {
    title: "Web Developer",
    period: "Jun 2003 - Dec 2013",
    description: `
      <p>This was the first phase of my software engineer career.</p>
      <p>For 10 years I worked as a freelenace and also for many diferent companies as a web developer.</p>
      <p>At this time, some technologies that I used most were HTML, CSS, PHP, MySQL, JavaScript, JQuery, Flash/ActionScript and WordPress.</p>
    `,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "PHP",
      "MySQL",
      "WordPress",
      "Flash",
      "ActionScript",
    ],
  },
];

export default function Experiences() {
  return (
    <div>
      <Title>Work Experience</Title>
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
