import styled from 'styled-components'

export const Content = styled.main`
  max-width: 96rem;
  margin: 0 auto 13.3rem;
  display: grid;
  grid-gap: 10.3rem;
  grid-template-columns: repeat(2, 1fr);

  > section:first-child {
    max-width: 38.9rem;
  }
`
