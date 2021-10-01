import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 8.8rem;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const Data = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2.4rem;

  h2 {
    color: ${theme.colors.neutral[900]};
    font-size: ${theme.font.sizes.title};
    font-weight: ${theme.font.weights.medium};
  }

  span {
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.neutral[500]};
    margin-top: 0.5rem;
    margin-left: -0.5rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`
