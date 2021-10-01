import styled, { css } from 'styled-components'
import { theme } from 'ui'

type ContainerProps = {
  variant: 'default' | 'cancel' | 'finished'
}

const modifiers = {
  default: css`
    background: ${theme.colors.blue[500]};
    color: ${theme.colors.white};
    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.8);
    }
  `,
  cancel: css`
    background: ${theme.colors.white};
    color: ${theme.colors.neutral[500]};
    transition: color, background 0.2s;

    &:hover {
      background: ${theme.colors.red[500]};
      color: ${theme.colors.white};
    }
  `,
  finished: css`
    background: ${theme.colors.white};
    color: ${theme.colors.neutral[500]};
    border-bottom: 0.4rem solid ${theme.colors.green[500]};
  `,
}

export const Container = styled.button<ContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: ${theme.radius.input};
  padding: 2.8rem 0;
  width: 100%;
  font-size: 2rem;
  font-weight: ${theme.font.weights.medium};

  svg {
    margin-left: 1rem;
  }

  ${({ variant }) => modifiers[variant]}
`
