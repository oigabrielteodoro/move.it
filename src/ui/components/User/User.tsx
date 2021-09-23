import React from 'react'
import { GoArrowUp } from 'react-icons/go'
import { theme } from 'ui/styles'

import * as S from './User.styled'

export function User() {
  return (
    <S.Container>
      <img
        src='https://github.com/oigabrielteodoro.png'
        alt='Gabriel Teodoro'
      />

      <S.Data>
        <h2>Gabriel Teodoro</h2>
        <span>
          <GoArrowUp color={theme.colors.green[500]} size={24} />
          Level 1
        </span>
      </S.Data>
    </S.Container>
  )
}
