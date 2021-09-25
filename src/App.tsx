import { TimerProvider } from 'context'
import React from 'react'

import { Challenge, Timer, GlobalStyle, Header, User } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <TimerProvider>
      <GlobalStyle />

      <Header />

      <S.Content>
        <section>
          <User />
          <Timer />
        </section>
        <Challenge />
      </S.Content>
    </TimerProvider>
  )
}
