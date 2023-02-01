import styled from "styled-components";

import Session from "./Session"
import Title from "./Title"

import githubIcon from "../github.svg";
import linkedinIcon from "../linkedin.svg";

const Icon = styled.embed`
  width: 24px;
  margin-right: 4px;

  @media print {
    width: 16px;
  }
`;

const StyledContact = styled.div`
  @media print {
    font-size: 13px;
  }
`;

export default function Contact() {
  return (
    <StyledContact>
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
    </StyledContact>
  )
}
