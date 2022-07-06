import styled from "styled-components";

import githubIcon from "./github.svg";
import linkedinIcon from "./linkedin.svg";

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;

  h1 {
    font-family: "Roboto Mono", monospace;
    font-size: 2.5em;
    font-weight: 700;
  }

  h3 {
    font-weight: normal;
    color: #555;
    text-align: justify;
  }

  @media print {
    h1 {
      font-size: 1.8em;
      margin-top: 0;
    }

    h3 {
      font-size: 1em;
    }
  }
`;

const Content = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  div.first-col {
    flex-basis: 70%;
    margin-right: 64px;
  }

  div.second-col {
    flex-basis: 30%;
  }

  h4 {
    margin: 0 0 8px;
    font-weight: normal;
    display: flex;
    align-items: center;
  }

  a {
    color: #111;
    text-decoration: none;
  }

  a:hover {
    color: #555;
  }
`;

const Session = styled.div`
  margin-bottom: 32px;
  width: 100%;
  display: flex;
`;

const Title = styled.span`
  font-family: "Roboto Mono", monospace;
  margin: 0 0 8px;
  padding: 2px 8px;
  background-color: #ddd;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  align-self: flex-start;
  -webkit-print-color-adjust: exact;
`;

const Icon = styled.embed`
  width: 24px;
  margin-right: 4px;
`;

const Skill = styled.div`
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 4px 8px;
  margin: 0 4px 4px 0;
`;

const Skills = styled.div`
  &&& {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Education = styled.div`
  p {
    margin: 0 0 2px;
  }

  .school {
    font-weight: bold;
  }

  .degree {
  }

  .period {
    font-size: 12px;
    font-style: italic;
  }
`;

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

function App() {
  return (
    <Container>
      <Header>
        <h1>Adriano Singolani</h1>
        <h3>
          Bachelor's degree in Computer Science with more than 10 years of work
          experience. Currently focused on full stack development using
          React/Next.js, Node.js with Express, MongoDB and MySQL.
          <br />I also have some knowledge of mobile development with Flutter
          and writing blockchain smart contracts with Rust and Solidity.
        </h3>
      </Header>
      <Content>
        <div class="first-col">
          <Title>Work Experience</Title>
          {experiences.map((experience) => (
            <Experience>
              <p class="title">{experience.title}</p>
              <p class="period">{experience.period}</p>
              <p
                class="description"
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />
              <Skills>
                {experience.skills.map((skill) => (
                  <Skill>{skill}</Skill>
                ))}
              </Skills>
            </Experience>
          ))}
        </div>
        <div class="second-col">
          <Session>
            <Title>Contact</Title>
            <h4>São Paulo, Brazil</h4>
            <h4>+55 (11) 987332553</h4>
            <h4>adrianosingolani@gmail.com</h4>
            <h4>
              <Icon src={linkedinIcon} />
              <a
                href="https://www.linkedin.com/in/adrianosingolani/"
                target="_blank"
              >
                linkedin.com/in/adrianosingolani
              </a>
            </h4>
            <h4>
              <Icon src={githubIcon} />
              <a href="https://github.com/adrianosingolani" target="_blank">
                github.com/adrianosingolani
              </a>
            </h4>
          </Session>

          <Session>
            <Title>Skills</Title>
            <Skills>
              {skills.map((skill) => (
                <Skill>{skill}</Skill>
              ))}
            </Skills>
          </Session>

          <Session>
            <Title>Education</Title>
            <Education>
              <p class="school">Universidade Paulista</p>
              <p class="degree">Bachelor of Computer Science</p>
              <p class="period">2001-2005</p>
            </Education>
          </Session>
        </div>
      </Content>
    </Container>
  );
}

export default App;
