import styled from "styled-components";

const StyledSession = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
`;

export default function Session({ children }) {
  return (
    <StyledSession>{children}</StyledSession>
  )
}