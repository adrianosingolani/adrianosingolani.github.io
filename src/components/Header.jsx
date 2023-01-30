import styled from "styled-components";

const StyledHeader = styled.header`
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

export default function Header() {
  return (
    <StyledHeader>
      <h1>Adriano Singolani</h1>
      <h3>
        Bachelor's degree in Computer Science with more than 10 years of work
        experience. Currently focused on full stack development using
        React/Next.js, Node.js with Express, MongoDB and MySQL.
        <br />I also have some knowledge of mobile development with Flutter
        and writing blockchain smart contracts with Rust and Solidity.
      </h3>
    </StyledHeader>
  )
}