import styled, { keyframes } from 'styled-components'
import { theme } from 'ui/styles'

const animation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-1rem);
  }
`

export const Container = styled.section`
  width: 46.8rem;
  border-radius: 0.5rem;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  text-align: center;
  font-size: ${theme.font.sizes.title};
  font-weight: ${theme.font.weights.normal};
  color: ${theme.colors.neutral[900]};
  line-height: 3.4rem;
`

export const StartedContainer = styled(Container)`
  main {
    display: flex;
    align-items: center;
    margin-top: 4.4rem;

    img {
      width: 3.3rem;
      margin-right: 1.6rem;
    }

    p {
      color: ${theme.colors.neutral[500]};
      font-size: ${theme.font.sizes.paragraph};
      font-weight: ${theme.font.weights.normal};
      line-height: 2.6rem;
      text-align: left;
    }
  }
`

export const ActiveContainer = styled(Container)`
  header {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    color: ${theme.colors.blue[500]};
  }

  hr {
    margin-top: 2.5rem;
    width: calc(100% - (6.4rem * 2));
    border: 0.1rem solid ${theme.colors.neutral[200]};
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    strong {
      color: ${theme.colors.neutral[900]};
      font-size: 3rem;
      font-weight: 600;
      margin: 2.4rem 0 0.8rem;
    }

    p {
      color: ${theme.colors.neutral[500]};
      line-height: 2.6rem;
      text-align: center;
      max-width: 34.6rem;
    }
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 4rem;

    button {
      border: 0;
      width: 17.4rem;
      padding: 1.6rem;
      font-weight: 600;
      border-radius: ${theme.radius.input};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.paragraph};
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      & + button {
        margin-left: 0.8rem;
      }
    }

    button.failed {
      background: ${theme.colors.red[500]};
    }

    button.completed {
      background: ${theme.colors.green[500]};
    }
  }
`

export const InitialContainer = styled(Container)`
  img {
    margin: 6.4rem 0 1.8rem;
    animation: ${animation} 1s infinite alternate ease-in-out;
  }

  p {
    color: ${theme.colors.neutral[500]};
    font-size: ${theme.font.sizes.paragraph};
    font-weight: ${theme.font.weights.normal};
    line-height: 2.6rem;
    text-align: center;
  }
`
