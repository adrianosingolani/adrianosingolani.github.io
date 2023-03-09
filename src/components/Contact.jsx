import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Session from "./Session"
import Title from "./Title"

import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";

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
  const { t } = useTranslation();

  return (
    <StyledContact>
      <Session>
        <Title>{t('contact')}</Title>
        <h4>São Paulo, {t('country')}</h4>
        <h4>+55 (11) 987332553</h4>
        <h4>adrianosingolani@gmail.com</h4>
        <h4>
          <a
            href="https://www.linkedin.com/in/adrianosingolani/"
            target="_blank"
          >
            <Icon src={linkedinIcon} />
            linkedin.com/in/adrianosingolani
          </a>
        </h4>
        <h4>
          <a href="https://github.com/adrianosingolani" target="_blank">
            <Icon src={githubIcon} />
            github.com/adrianosingolani
          </a>
        </h4>
      </Session>
    </StyledContact>
  )
}
