import React from 'react'
import { Button } from '../Button'

import * as S from './Countdown.styled'

export function Countdown() {
  return (
    <S.Container>
      <section>
        <span>Desafios completos</span>
        <span>00</span>
      </section>
      <hr />

      <S.TimerArea>
        <div>
          <h1>2</h1>
          <h1>5</h1>
        </div>
        <h1>:</h1>
        <div>
          <h1>0</h1>
          <h1>0</h1>
        </div>
      </S.TimerArea>

      <Button>Iniciar um ciclo</Button>
    </S.Container>
  )
}
