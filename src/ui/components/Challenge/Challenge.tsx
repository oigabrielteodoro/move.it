import { UP_ICON } from 'assets'
import React from 'react'

import * as S from './Challenge.styled'

export function Challenge() {
  return (
    <S.Container>
      <h1>
        Inicie um ciclo <br /> para receber desafios
      </h1>
      <img src={UP_ICON} alt='Seta para cima' />
      <p>
        Avançe de level completando
        <br /> os desafios.
      </p>
    </S.Container>
  )
}
