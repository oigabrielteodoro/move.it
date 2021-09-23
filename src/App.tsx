import React from 'react'

import { GlobalStyle, Header } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <S.Content>
        <h1>Move.it</h1>
      </S.Content>
    </>
  )
}
