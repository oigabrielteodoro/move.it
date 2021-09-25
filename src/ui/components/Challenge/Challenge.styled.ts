import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Container = styled.section`
  width: 46.8rem;
  border-radius: 0.5rem;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: ${theme.font.sizes.title};
    font-weight: ${theme.font.weights.normal};
    color: ${theme.colors.neutral[900]};
    line-height: 3.4rem;
  }

  img {
    margin: 6.4rem 0 1.8rem;
    animation: up 1s infinite alternate ease-in-out;

    @keyframes up {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(-1rem);
      }
    }
  }

  p {
    color: ${theme.colors.neutral[500]};
    font-size: ${theme.font.sizes.paragraph};
    font-weight: ${theme.font.weights.normal};
    line-height: 2.6rem;
    text-align: center;
  }
`
