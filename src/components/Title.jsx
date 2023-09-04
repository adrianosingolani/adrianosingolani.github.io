import styled from 'styled-components'

const StyledTitle = styled.span`
  font-family: 'Roboto Mono', monospace;
  margin: 0 0 8px;
  padding: 2px 8px;
  background-color: #ddd;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  align-self: flex-start;
  -webkit-print-color-adjust: exact;
`

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>
}
