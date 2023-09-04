import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
