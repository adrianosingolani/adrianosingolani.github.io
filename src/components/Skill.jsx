import styled from 'styled-components'

const StyledSkill = styled.div`
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 4px 8px;
  margin: 0 4px 4px 0;
  cursor: default;

  &:hover {
    border-color: #bbb;
  }

  @media print {
    font-size: 11px;
    padding: 3px 6px;
  }
`

export default function Skill({ children }) {
  return <StyledSkill>{children}</StyledSkill>
}
