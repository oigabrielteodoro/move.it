import styled, { css } from 'styled-components'
import { theme } from 'ui'

type ProgressProps = {
  progress?: number
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  max-width: 96rem;
  margin: 4rem auto 13rem;
  flex: 1;

  span {
    white-space: nowrap;
    color: ${theme.colors.neutral[500]};
  }
`

export const Progress = styled.div<ProgressProps>`
  position: relative;
  background: ${theme.colors.neutral[200]};
  box-shadow: 0 0 6rem rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  margin: 0 2.4rem;
  height: 0.4rem;
  width: 100%;

  ${({ progress }) =>
    css`
      &::before {
        content: '';
        background: ${theme.colors.green[500]};
        position: absolute;
        left: 0;
        width: ${progress || 0}%;
        height: 100%;
        transition: width 0.5s ease-out;
      }
    `}
`
