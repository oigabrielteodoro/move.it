import React, { ReactNode } from 'react'

import * as S from './Button.styled'

type Props = {
  children: ReactNode
}

export function Button({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
