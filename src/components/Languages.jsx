import styled from "styled-components";

import Session from "./Session";
import Title from "./Title";

const StyledLanguages = styled.div`
  p {
    margin: 0 0 2px;
  }

  .item {
    margin-bottom: 8px;
  }

  .item:last-child {
    margin-bottom: 0;
  }

  .language {
    font-weight: bold;
  }

  .level {
    font-size: 12px;
    font-style: italic;
  }
`;

const languages = [
  { language: 'Portuguese', level: 'Fluent' },
  { language: 'English', level: 'Advanced' },
  { language: 'Spanish', level: 'Basic' }
]

export default function Languages() {
  return (
    <StyledLanguages>
      <Session>
        <Title>Languages</Title>
        {languages.map((item, i) => (
          <div className="item" key={`language-${i}`}>
            <p className="language">{item.language}</p>
            <p className="level">{item.level}</p>
          </div>
        ))}
      </Session>
    </StyledLanguages>
  )
}