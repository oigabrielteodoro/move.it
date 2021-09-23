import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Container = styled.div`
  margin-top: 6rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.neutral[500]};
    font-size: ${theme.font.sizes.subtitle};

    span:last-child {
      font-weight: ${theme.font.weights.medium};
      font-size: ${theme.font.sizes.title};
    }
  }

  hr {
    margin: 1.8rem 0 5.6rem;
    border: 0.1rem solid ${theme.colors.neutral[300]};
    background: ${theme.colors.neutral[300]};
  }
`

export const TimerArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background: ${theme.colors.white};
    position: relative;
    padding: 1.8rem 0;
    flex: 1;

    &::before {
      content: '';
      position: absolute;
      background: ${theme.colors.neutral[100]};
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      transform: translateX(-50%);
    }
  }

  h1 {
    font-size: 10rem;
    color: ${theme.colors.neutral[900]};
    line-height: 10rem;
    font-family: 'Rajdhani';
    margin: 0 auto;
  }

  > h1 {
    padding: 0;
    margin: 0 0.8rem;
  }
`
