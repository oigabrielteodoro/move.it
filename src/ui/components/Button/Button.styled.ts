import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Container = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.blue[500]};
  border: 0;
  border-radius: ${theme.radius.input};
  padding: 2.8rem 0;
  width: 100%;
  color: ${theme.colors.white};
  font-size: 2rem;
  font-weight: ${theme.font.weights.medium};
  transition: filter 0.5s;

  &:hover {
    filter: brightness(0.8);
  }
`
