import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  div.first-col {
    flex-basis: 70%;
    margin-right: 64px;

    @media print {
      margin-right: 32px;
    }
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

export default function Content({ children }) {
  return (
    <StyledContent>{children}</StyledContent>
  )
}