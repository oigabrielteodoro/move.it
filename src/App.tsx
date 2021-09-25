import { TimerProvider } from 'context'
import React from 'react'

import { Challenge, Countdown, GlobalStyle, Header, User } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <TimerProvider>
      <GlobalStyle />

      <Header />

      <S.Content>
        <section>
          <User />
          <Countdown />
        </section>
        <Challenge />
      </S.Content>
    </TimerProvider>
  )
}
