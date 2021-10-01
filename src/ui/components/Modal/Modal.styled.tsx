import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  position: relative;
  width: 40rem;
  padding: 2rem 2rem 4rem;
  background: ${theme.colors.white};
  box-shadow: 0 0 6rem rgba(0, 0, 0, 0.05);
  border-radius: ${theme.radius.card};

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4.8rem;

    h1 {
      color: ${theme.colors.neutral[900]};
      line-height: 4rem;
      font-weight: 600;
      font-size: 3rem;
    }

    h3 {
      color: ${theme.colors.neutral[500]};
      font-weight: ${theme.font.weights.normal};
      line-height: 3rem;
      font-size: 2rem;
    }
  }
`

export const CloseButton = styled.button`
  border: 0;
  position: absolute;
  background: transparent;
  color: ${theme.colors.neutral[500]};
  top: 2rem;
  right: 2rem;
`

export const NewLevel = styled.div`
  position: relative;

  img {
    left: 50%;
    bottom: 3rem;
    position: absolute;
    transform: translateX(-50%);
  }

  strong {
    z-index: 1;
    position: relative;
    font-size: 14rem;
    color: ${theme.colors.blue[500]};
    text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);
  }
`
