import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './Button.styled'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: Props) {
  return <S.Container {...rest}>{children}</S.Container>
}
