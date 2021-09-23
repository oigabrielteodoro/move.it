import React from 'react'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <span>0 xp</span>
      <S.Progress progress={30} />
      <span>600 xp</span>
    </S.Container>
  )
}
