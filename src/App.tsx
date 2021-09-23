import React from 'react'

import { Countdown, GlobalStyle, Header, User } from 'ui'

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
        <section>
          <h1>Box</h1>
        </section>
      </S.Content>
    </>
  )
}
