import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './Button.styled'

type Props = {
  children: ReactNode
  variant?: 'cancel' | 'default' | 'finished'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'default', children, ...rest }: Props) {
  return (
    <S.Container variant={variant} {...rest}>
      {children}
    </S.Container>
  )
}
