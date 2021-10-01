import React from 'react'
import { GoArrowUp } from 'react-icons/go'

import { theme } from 'ui'
import { useChallenge } from 'context'

import * as S from './User.styled'

export function User() {
  const { level } = useChallenge()

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
          Level {level}
        </span>
      </S.Data>
    </S.Container>
  )
}
