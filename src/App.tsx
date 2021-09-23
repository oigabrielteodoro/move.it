import React from 'react'

import { GlobalStyle, Header, User } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <S.Content>
        <User />
      </S.Content>
    </>
  )
}
