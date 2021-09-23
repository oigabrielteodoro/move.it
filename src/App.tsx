import React from 'react'

import { Challenge, Countdown, GlobalStyle, Header, User } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <S.Content>
        <section>
          <User />
          <Countdown />
        </section>
        <Challenge />
      </S.Content>
    </>
  )
}
